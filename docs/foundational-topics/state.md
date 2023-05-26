---
id: state
title: State in NumBlock
---

In NumBlock, "state" refers to the current values of all accounts and smart contracts on the blockchain. It represents the current state of the blockchain at any given time, including the balance of each account, the storage values of each smart contract, and other information such as the nonce, which is used to prevent replay attacks.

The state is maintained and updated by the nodes on the NumBlock network through Proof of Stake (PoS) consensus algorithm. Whenever a new block is added to the chain, the state is updated to reflect the changes made by the transactions included in that block.

The state is stored in a Merkle Patricia tree, which allows for efficient verification and retrieval of data. This structure also enables the Ethereum Virtual Machine (EVM) to execute smart contracts by accessing their storage values from the state trie.

Overall, the state is a crucial component of the NumBlock blockchain as it provides a record of all past and current transactions and smart contract interactions, allowing for transparency, security, and immutability of the network.

NumBlock has 4 types of tries:

1. The world state trie contains the mapping between addresses and account states. The hash of the root node of the
   world state trie is included in a block (in the stateRoot field) to represent the current state when that block was
   created. We only have one world state trie
2. The account storage trie contains the data associated with a smart contract. The hash of the root node of the Account
   storage trie is included in the account state (in the storageRoot field). We have one Account storage trie for each
   account
3. The transaction trie contains all the transactions included in a block. The hash of the root node of the Transaction
   trie is included in the block header (in the transactionsRoot field). We have one transaction trie per block
4. The transaction receipt trie contains all the transaction receipts for the transactions included in a block. The hash
   of the root node of the transaction receipts trie is included in also included in the block header (in the
   receiptsRoot field); We have one transaction receipts trie per block

Objects covered:

1. **World state**: the hard drive of the distributed computer that is NumBlock. It is a mapping between addresses and
   account states
2. **Account state**: stores the state of each one of NumBlock's accounts. It also contains the storageRoot of the
   account state trie, which contains the storage data for the account
3. **Transaction**: represents a state transition in the system. It can be a funds transfer, a message call, or a
   contract deployment
4. **Block**: contains the link to the previous block (parentHash) and contains a group of transactions that, when
   executed, will yield the new state of the system. It also contains the stateRoot, the transactionRoot and the
   receiptsRoot, the hash of the root nodes of the world state trie, the transaction trie, and the transaction receipts
   trie, respectively

![Main Diagram](/img/state/mainDiagram.png)
