---
title: Blocks
description: An overview of blocks in the NumBlock blockchain – their data structure, why they're needed, and how they're made.
lang: en
---

Blocks are batches of transactions with a hash of the previous block in the chain. This links blocks together (in a chain) because hashes are cryptographically derived from the block data. This prevents fraud, because one change in any block in history would invalidate all the following blocks as all subsequent hashes would change and everyone running the blockchain would notice.

## Prerequisites {#prerequisites}

Blocks are a very beginner-friendly topic. But to help you better understand this page, we recommend you first read [Accounts](/docs/foundational-topics/account/), [Transactions](/docs/foundational-topics/transactions/), and our [introduction to NumBlock](/docs/foundational-topics/intro-to-blockchain/).

## Why blocks? {#why-blocks}

To ensure that all participants on the NumBlock network maintain a synchronized state and agree on the precise history of transactions, we batch transactions into blocks. This means dozens (or hundreds) of transactions are committed, agreed on, and synchronized all at once.

![A diagram showing transaction in a block causing state changes](</img/block1.png>)

By spacing out commits, we give all network participants enough time to come to consensus: even though transaction requests occur dozens of times per second, blocks are only created and committed on NumBlock once every two seconds.

## How blocks work {#how-blocks-work}

To preserve the transaction history, blocks are strictly ordered (every new block created contains a reference to its parent block), and transactions within blocks are strictly ordered as well. Except in rare cases, at any given time, all participants on the network are in agreement on the exact number and history of blocks, and are working to batch the current live transaction requests into the next block.

Once a block is put together by some validator on the network, it is propagated to the rest of the network; all nodes add this block to the end of their blockchain, and a new validator is selected to create the next block. The exact block-assembly process and commitment/consensus process is currently specified by NumBlock’s “proof-of-stake” protocol.

## Proof-of-stake protocol {#proof-of-work-protocol}

Proof-of-stake means the following:

- Validating nodes have to stake 1 NUMB into a deposit contract as collateral against bad behavior. This helps protect the network because provably dishonest activity leads to some or all of that stake being destroyed.
- In every slot (spaced twelve seconds apart) a validator is randomly selected to be the block proposer. They bundle transactions together, execute them and determine a new 'state'. They wrap this information into a block and pass it around to other validators.
- Other validators who hear about a new block re-execute the transactions to ensure they agree with the proposed change to the global state. Assuming the block is valid they add it to their own database.
- If a validator hears about two conflicting blocks for the same slot they use their fork-choice algorithm to pick the one supported by the most staked NUMB.

[More on proof-of-stake](/docs/foundational-topics/consensus-mechanism/pos-concepts/)

## Block time {#block-time}

Block time refers to the time separating blocks. In NumBlock, time is divided up into twelve second units called 'slots'. In each slot a single validator is selected to propose a block. Assuming all validators are online and fully functional there will be a block in every slot, meaning the block time is 2s. However, occasionally validators might be offline when called to propose a block, meaning slots can sometimes go empty. This is different to proof-of-work based systems where block times are probabilistic and tuned by the mining difficulty.

## Block size {#block-size}

A final important note is that blocks themselves are bounded in size. Each block has a target size of 15 million gas but the size of blocks will increase or decrease in accordance with network demands, up until the block limit of 30 million gas (2x target block size). The total amount of gas expended by all transactions in the block must be less than the block gas limit. This is important because it ensures that blocks can’t be arbitrarily large. If blocks could be arbitrarily large, then less performant full nodes would gradually stop being able to keep up with the network due to space and speed requirements. The larger the block, the greater the computing power required to process them in time for the next slot. This is a centralizing force, which is resisted by capping block sizes.
