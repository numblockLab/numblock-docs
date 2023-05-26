---
id: blockchain
title: บล็อกเชน
description: คำอธิบายสำหรับบล็อกเชนและโมดูลสถานะของ Polygon Edge
keywords:
  - docs
  - polygon
  - edge
  - architecture
  - module
  - blockchain
  - state
---

## ภาพรวม {#overview}

หนึ่งในโมดูลหลักของ Polygon Edge คือ**บล็อกเชน**และ**สถานะ**<br />

**บล็อกเชน**เป็นขุมพลังที่จัดการกับการปรับโครงสร้างบล็อกซึ่งหมายความว่าบล็อกเชนจัดการกับลอจิกทั้งหมดที่เกิดขึ้นเมื่อรวมบล็อกใหม่ไว้ในบล็อกเชน

**สถานะ**แสดงอ็อบเจ็กต์*การเปลี่ยนผ่านสถานะ*สถานะจัดการกับการเปลี่ยนแปลงสถานะ เมื่อมีการรวมบล็อกใหม่ <br />ตัวอย่างเช่น **สถานะ**จะจัดการกับ:
* การดำเนินการธุรกรรม
* การดำเนินการ EVM
* การเปลี่ยนแปลง Merkle Tries
* อีกมากมาย ซึ่งได้รับการรวมไว้ในส่วน**สถานะ** 🙂

ประเด็นสำคัญคือ 2 ส่วนนี้เชื่อมโยงกันอย่างมากและทำงานร่วมกันอย่างใกล้ชิดเพื่อให้ไคลเอ็นต์ทำงานได้ <br />ตัวอย่างเช่น เมื่อเลเยอร์**บล็อกเชน**ได้รับบล็อกใหม่ (และไม่มีการจัดระเบียบใหม่เกิดขึ้น) เลเยอร์ก็จะเรียก**สถานะ**เพื่อดำเนินการเปลี่ยนผ่านสถานะ

**บล็อกเชน**ยังต้องจัดการกับบางส่วนที่เกี่ยวข้องกับฉันทามติ (เช่น *ethHash นี้ถูกต้องหรือไม่*, *PoW นี้ถูกต้องหรือไม่*) <br />หากจะสรุปเป็นหนึ่งประโยคก็คือ **บล็อกเชนคือแกนหลักของลอจิก ซึ่งรวมบล็อกทั้งหมดไว้**

## *WriteBlocks*

หนึ่งในส่วนที่สำคัญที่สุดที่เกี่ยวข้องกับเลเยอร์**บล็อกเชน** คือเมธอด *WriteBlocks*:

````go title="blockchain/blockchain.go"
// WriteBlocks writes a batch of blocks
func (b *Blockchain) WriteBlocks(blocks []*types.Block) error {
	if len(blocks) == 0 {
		return fmt.Errorf("no headers found to insert")
	}

	parent, ok := b.readHeader(blocks[0].ParentHash())
	if !ok {
		return fmt.Errorf("parent of %s (%d) not found: %s", blocks[0].Hash().String(), blocks[0].Number(), blocks[0].ParentHash())
	}

	// validate chain
	for i := 0; i < len(blocks); i++ {
		block := blocks[i]

		if block.Number()-1 != parent.Number {
			return fmt.Errorf("number sequence not correct at %d, %d and %d", i, block.Number(), parent.Number)
		}
		if block.ParentHash() != parent.Hash {
			return fmt.Errorf("parent hash not correct")
		}
		if err := b.consensus.VerifyHeader(parent, block.Header, false, true); err != nil {
			return fmt.Errorf("failed to verify the header: %v", err)
		}

		// verify body data
		if hash := buildroot.CalculateUncleRoot(block.Uncles); hash != block.Header.Sha3Uncles {
			return fmt.Errorf("uncle root hash mismatch: have %s, want %s", hash, block.Header.Sha3Uncles)
		}
		
		if hash := buildroot.CalculateTransactionsRoot(block.Transactions); hash != block.Header.TxRoot {
			return fmt.Errorf("transaction root hash mismatch: have %s, want %s", hash, block.Header.TxRoot)
		}
		parent = block.Header
	}

	// Write chain
	for indx, block := range blocks {
		header := block.Header

		body := block.Body()
		if err := b.db.WriteBody(header.Hash, block.Body()); err != nil {
			return err
		}
		b.bodiesCache.Add(header.Hash, body)

		// Verify uncles. It requires to have the bodies on memory
		if err := b.VerifyUncles(block); err != nil {
			return err
		}
		// Process and validate the block
		if err := b.processBlock(blocks[indx]); err != nil {
			return err
		}

		// Write the header to the chain
		evnt := &Event{}
		if err := b.writeHeaderImpl(evnt, header); err != nil {
			return err
		}
		b.dispatchEvent(evnt)

		// Update the average gas price
		b.UpdateGasPriceAvg(new(big.Int).SetUint64(header.GasUsed))
	}

	return nil
}
````
เมธอด *WriteBlocks* เป็นจุดเริ่มต้นในการเขียนบล็อกลงในบล็อกเชนซึ่งจะนำไปใช้ในหลายๆ บล็อกในฐานะพารามิเตอร์<br />ขั้นตอนแรก จะเริ่มจากการตรวจสอบความถูกต้องของบล็อกจากนั้น ก็เขียนข้อมูลของบล็อกดังกล่าวเข้าในเชน

*การเปลี่ยนผ่านสถานะ*จริงจะได้รับการดำเนินการโดยเรียกเมธอด *processBlock* ภายใน *WriteBlocks*

ควรกล่าวว่า เนื่องจากเป็นจุดเริ่มต้นสำหรับการเขียนบล็อกไปยังบล็อกเชน โมดูลอื่นๆ (เช่น **Sealer**) จึงใช้เมธอดนี้

## การสมัครติดตามบล็อกเชน {#blockchain-subscriptions}

จำเป็นต้องมีวิธีการติดตามการเปลี่ยนแปลงที่เกี่ยวข้องกับบล็อกเชน <br />**การสมัครติดตาม**มีประโยชน์ตรงนี้นั่นเอง

การสมัครติดตามเป็นวิธีหนึ่งในการเข้าสู่สตรีมของอีเวนต์บล็อกเชนและรับข้อมูลที่มีความหมายทันที

````go title="blockchain/subscription.go"
type Subscription interface {
    // Returns a Blockchain Event channel
	GetEventCh() chan *Event
	
	// Returns the latest event (blocking)
	GetEvent() *Event
	
	// Closes the subscription
	Close()
}
````

**อีเวนต์บล็อกเชน**มีข้อมูลเกี่ยวกับการเปลี่ยนแปลงใดๆ ที่เกิดขึ้นกับเชนจริงซึ่งรวมถึงการปรับโครงสร้างใหม่ รวมทั้งบล็อกใหม่ๆ:

````go title="blockchain/subscription.go"
type Event struct {
	// Old chain removed if there was a reorg
	OldChain []*types.Header

	// New part of the chain (or a fork)
	NewChain []*types.Header

	// Difficulty is the new difficulty created with this event
	Difficulty *big.Int

	// Type is the type of event
	Type EventType

	// Source is the source that generated the blocks for the event
	// right now it can be either the Sealer or the Syncer. TODO
	Source string
}
````

:::tip ทบทวนข้อมูล
คุณจำตอนที่เราพูดถึงคำสั่ง ***monitor*** ใน[คำสั่ง CLI](/docs/edge/get-started/cli-commands) ได้หรือไม่

อีเวนต์บล็อกเชนเป็นอีเวนต์ดั้งเดิมที่เกิดขึ้นใน Polygon Edge และจะมีการแมปกับรูปแบบข้อความของ Protocol Buffers ในภายหลังเพื่อให้ถ่ายโอนได้ง่าย
:::