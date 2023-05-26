---
id: blockchain
title: ब्लॉकचेन
description: पॉलीगॉन एज की ब्लॉकचेन स्टेट और स्टेट मॉड्यूल के लिए स्पष्टीकरण.
keywords:
  - docs
  - polygon
  - edge
  - architecture
  - module
  - blockchain
  - state
---

## ओवरव्यू {#overview}

पॉलीगॉन एज के प्रमुख मॉड्यूल **ब्लॉकचेन** और **स्टेट** हैं. <br />

**ब्लॉकचेन** वह पावरहाउस है जो ब्लॉक के पुनर्निर्माण से संबंधित होता है. इसका मतलब है कि यह सभी उन लॉजिक से संबंधित होता है जो ब्लॉकचेन में ब्लॉक को जोड़ते समय होते हैं.

**स्टेट** *ऑब्जेक्ट* का प्रतिनिधित्व करता है. यह इसके बारे में है कि नए ब्लॉक को शामिल करने पर स्टेट कैसे बदल जाता है. <br /> अन्य बातों के साथ, **स्टेट** हैंडल्स:
* ट्रांजैक्शन को एक्जीक्यूट कर रहा है
* EVM को एक्जीक्यूट कर रहा है
* Merkle tries को बदल रहा
* अधिकतर, संबंधित **स्टेट** सेक्शन में कवर होता है 🙂

मुख्य टेकअवे यह है कि इन 2 भागों को ठीक से कनेक्ट कर दिया गया है और ये क्लाइंट के फ़ंक्शन के लिए एक साथ काम करते हैं. <br /> उदाहरण के लिए, जब **ब्लॉकचेन** लेयर को ब्लॉक (और कोई पुनर्गठन नहीं हुआ) प्राप्त होता है, तो यह **स्टेट** को स्टेट ट्रांजिशन करने के लिए कहता है.

**ब्लॉकचेन** को सहमति से संबंधित कुछ हिस्सों से भी निपटना पड़ता है (जैसे * क्या यह सही ethHash है?* *क्या यह सही PoW है?*). <br /> एक वाक्य में, **यह लॉजिक का मुख्य कोर है जिसके माध्यम से सभी ब्लॉक को जोड़ा जाता है**.

## *WriteBlocks*

**ब्लॉकचेन** लेयर से संबंधित सबसे महत्वपूर्ण भाग *WriteBlocks* तरीका है:

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
*WriteBlocks* तरीका ब्लॉकचेन में ब्लॉक को लिखने का एंट्री पॉइंट है. पैरामीटर के रूप में, यह कई रेंज के ब्लॉक लेता है.<br />
सबसे पहले, ब्लॉक को वैलिडेट किया जाता है. इसके बाद, इन्हें चेन को लिखा जाता है.

*WriteBlocks* के भीतर *processBlock* विधि को कॉल करके वास्तविक *स्टेट ट्रांजिशन* किया जाता है.

यह ध्यान देने लायक है क्योंकि, यह ब्लॉकचैन को ब्लॉक लिखने का एंट्री प्वाइंट है, अन्य मॉड्यूल (जैसे कि **सीलर**) इस तरीके का इस्तेमाल करते हैं.

## ब्लॉकचेन सबस्क्रिप्शन {#blockchain-subscriptions}

ब्लॉकचेन-रिलेटेड बदलावों को मॉनिटर करने का एक तरीका होना चाहिए. <br />
यहाँ पर **सबस्क्रिप्शन** आते हैं.

सबस्क्रिप्शन ब्लॉकचेन इवेंट स्ट्रीम में टैप करने का एक तरीका होते हैं जहाँ पर तुरंत डेटा प्राप्त होता है.

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

**ब्लॉकचेन इवेंट्स** में वास्तविक चेन में किए गए किसी भी बदलाव की जानकारी होती है. इसमें पुनर्निर्माण के साथ साथ नए ब्लॉक होते हैं:

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

:::tip रिफ्रेशर
क्या आपको याद है कि हमने [CLI कमांड्स](/docs/edge/get-started/cli-commands) में ***मॉनिटर*** कमांड का उल्लेख कब किया था?

ब्लॉकचैन इवेंट्स ऐसे मूल इवेंट्स हैं जो पॉलीगॉन एज में होते हैं, और उन्हें बाद में आसानी से ट्रांसफ़र करने के लिए एक प्रोटोकॉल बफ़र संदेश फ़ॉर्मेट में मैप किया जाता है.

:::