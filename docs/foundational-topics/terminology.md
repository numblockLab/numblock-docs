---
title: NumBlock Terminology
description: NumBlock Terminology.
lang: en
---

### Blockchain {#blockchain}

The sequence of all blocks that have been committed to the NumBlock network in the history of the network. So named because each block contains a reference to the previous block, which helps us maintain an ordering over all blocks (and thus over the precise history).

### NUMB {#numb}

**NUMB** is the native cryptocurrency of NumBlock. Users pay NUMB to other users to have their code execution requests fulfilled.

[More on NUMB](/docs/foundational-topics/intro-to-token)

### EVM {#evm}

The Ethereum Virtual Machine is the global virtual computer whose state every participant on the NumBlock network stores and agrees on. Any participant can request the execution of arbitrary code on the EVM; code execution changes the state of the EVM.

### Nodes {#nodes}

The real-life machines which are storing the EVM state. Nodes communicate with each other to propagate information about the EVM state and new state changes. Any user can also request the execution of code by broadcasting a code execution request from a node. The NumBlock network itself is the aggregate of all NumBlock nodes and their communications.

### Accounts {#accounts}

Where NUMB is stored. Users can initialize accounts, deposit NUMB into the accounts, and transfer NUMB from their accounts to other users. Accounts and account balances are stored in a big table in the EVM; they are a part of the overall EVM state.

[More on accounts](/docs/foundational-topics/account)

### Transactions {#transactions}

A "transaction request" is the formal term for a request for code execution on the EVM, and a "transaction" is a fulfilled transaction request and the associated change in the EVM state. Any user can broadcast a transaction request to the network from a node. For the transaction request to affect the agreed-upon EVM state, it must be validated, executed, and "committed to the network" by another node. Execution of any code causes a state change in the EVM; upon commitment, this state change is broadcast to all nodes in the network. Some examples of transactions:

- Send X NUMB from my account to Alice's account.
- Publish some smart contract code into EVM state.
- Execute the code of the smart contract at address X in the EVM, with arguments Y.

[More on transactions](/docs/foundational-topics/transactions)

### Blocks {#blocks}

The volume of transactions is very high, so transactions are "committed" in batches, or blocks. Blocks generally contain dozens to hundreds of transactions.

[More on blocks](/docs/foundational-topics/blocks)

### Smart contracts {#smart-contracts}

A reusable snippet of code (a program) which a developer publishes into EVM state. Anyone can request that the smart contract code be executed by making a transaction request. Because developers can write arbitrary executable applications into the EVM (games, marketplaces, financial instruments, etc.) by publishing smart contracts, these are often also called [dapps, or Decentralized Apps](/docs/category/building-dapps).

[More on smart contracts](/docs/developers/smart-contracts/)
