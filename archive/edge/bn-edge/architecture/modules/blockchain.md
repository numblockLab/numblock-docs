---
id: blockchain
title: ব্লকচেইন
description: Polygon Edge-এর ব্লকচেইন এবং স্টেট মডিউলের ব্যাখ্যা।
keywords:
  - docs
  - polygon
  - edge
  - architecture
  - module
  - blockchain
  - state
---

## সংক্ষিপ্ত বিবরণ {#overview}

Polygon Edge-এর অন্যতম প্রধান মডিউল হচ্ছে **ব্লকচেইন** এবং **স্টেট**। <br />

**ব্লকচেইন** খুবই শক্তিশালী একটি বস্তু যা ব্লক পুনর্বিন্যাসের কাজটি সম্পন্ন করে থাকে। এর মানে হচ্ছে যে ব্লকচেইনে কোনো নতুন ব্লক অন্তর্ভুক্ত করার সময় এটি সকল লজিক সংক্রান্ত কাজগুলো সম্পন্ন করে থাকে।

**স্টেট** *স্টেট ট্রানজিশন* অবজেক্টের প্রতিনিধিত্ব করে। এটি নতুন ব্লক অন্তুর্ভুক্ত করা হলে স্টেট পরিবর্তনের বিষয়টিকে পরিচালনা করে থাকে। <br />অন্যান্য কাজের মধ্যে, **স্টেট** নিম্নলিখিতগুলোও সম্পাদন করে থাকে:
* লেনদেন এক্সিকিউট করা
* EVM এক্সিকিউট করা
* Merkle ট্রি পরিবর্তন করা
* আরও অনেক কিছু সম্পাদন করে থেকে, যা সংশ্লিষ্ট **স্টেট** বিভাগে বর্ণনা করা হয়েছে 🙂

মূল বিষয় হচ্ছে এই 2টি অংশ একসাথে সংযুক্ত এবং ক্লায়েন্টে কর্মক্ষমতা নিশ্চিত করতে এইগুলো একসাথে খুবই ঘনিষ্টভাবে কাজ করে। <br /> উদাহরণস্বরূপ, যখন **ব্লকচেইন** লেয়ার একটি নতুন ব্লক পায় (এবং কোনও পুনর্বিন্যাস না করতে হয়), এটি একটি স্টেট ট্রানজিশন সম্পাদন করার জন্য **স্টেট** কল করে।

**ব্লকচেইন** কনসেনসাস সংক্রান্ত কিছু বিষয়ও পরিচালনা করে থাকে (যেমন, *এই ethHash কি সঠিক?*, *এই PoW কি সঠিক?*)। <br /> সংক্ষেপে, **এটি লজিকের প্রধান কোর যাতে সমস্ত ব্লক অন্তর্ভুক্ত থাকে**।

## *WriteBlocks*

ব্লকচেইন লেয়ার সম্পর্কিত সবচেয়ে গুরুত্বপূর্ণ অংশ হচ্ছে **WriteBlocks**** পদ্ধতি:

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
*WriteBlocks* পদ্ধতি হচ্ছে ব্লকচেইনে ব্লক লিখার এন্ট্রি পয়েন্ট। একটি প্যারামিটার হিসাবে, এটি ব্লকের পরিসীমা নিয়ে থাকে। <br />
প্রথমত, ব্লক যাচাই করা হয়। তারপর, তাদের চেইনে লিখা হয়।

প্রকৃত *স্টেট ট্রানজিশন* *WriteBlocks*-এর মধ্যে *processBlock* পদ্ধতি কল করে সম্পাদন করা হয়।

এছাড়াও, যেহেতু এটি ব্লকচেইনে ব্লক লেখার এন্ট্রি পয়েন্ট, তাই অন্যান্য মডিউলগুলোও (যেমন **Sealer**) এই পদ্ধতির সুবিধা গ্রহণ করে থাকে।

## ব্লকচেইন সাবস্ক্রিপশন {#blockchain-subscriptions}

ব্লকচেইন-সংক্রান্ত পরিবর্তন মনিটর করার একটি মেকানিজম থাকা খুবই গুরুত্বপূর্ণ। <br />
**সাবস্ক্রিপশন** ঠিক সেই কাজটিই সম্পাদন করে থাকে।

সাবস্ক্রিপশন হচ্ছে ব্লকচেইন ইভেন্ট স্ট্রিমে ঘুরে আসার এবং অবিলম্বে কার্যকরী ডেটা পাওয়ার একটি উপায়।

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

**ব্লকচেইন ইভেন্টে** প্রকৃত চেইন করা সকল পরিবর্তন সংক্রান্ত তথ্য রয়েছে। এতে পুনর্বিন্যাসের পাশাপাশি নতুন ব্লকও অন্তর্ভুক্ত রয়েছে:

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

:::tip রিফ্রেশার

আপনার কি মনে আছে কখন আমরা [CLI কমান্ডে](/docs/edge/get-started/cli-commands) ***মনিটর*** কমান্ড উল্লেখ করেছি?

ব্লকচেইন ইভেন্টগুলো হচ্ছে Polygon Edge-এ ঘটা মূল ইভেন্ট এবং সহজে ট্রান্সফারের জন্য সেগুলোকে পরে প্রোটোকল বাফার মেসেজ ফরম্যাটে ম্যাপ করা হয়।

:::