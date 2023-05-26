---
id: supernets-txrelayer
title: Transaction Relayer
sidebar_label: Transaction Relayer
description: "The transaction relayer of Supernets."
keywords:
  - docs
  - polygon
  - edge
  - architecture
  - modular
  - layer
  - libp2p
  - extensible
---

This documents provides an overview on how a txrelayer is used in Supernets.

## What is a TxRelayer used for?

A TxRelayer is a component that facilitates the creation and sending of transactions. It provides a simple interface for executing a message call without creating a dedicated transaction and sending signed transactions to a blockchain.

## TxRelayer in Supernets

In Polygon Supernets, the TxRelayer module contains a client communicating with an Ethereum node and a wallet for signing transactions.

<details>
<summary> Details on using the TxRelayer</summary>

The first step for those looking to use the TxRelayer is to create a new instance by calling the `NewTxRelayer()` function. This function takes several optional arguments that can be used to configure the TxRelayer, such as `clientConfig` and `receiptTimeout`. By default, the client is set to connect to an Ethereum node running on `localhost:8545`, and the `receiptTimeout` is set to 50 milliseconds.

Once the TxRelayer is created, you can call the `Call()`, `SendTransaction()`, or `SendTransactionLocal()` methods to execute message calls or send signed transactions to the blockchain.

The `Call()` method allows you to execute a message call without creating a transaction on the blockchain. It takes in the from and to addresses and the input data for the call. The result of the call is returned as a byte array.

The `SendTransaction()` method signs the provided transaction with the provided key and sends it to the blockchain. It first fetches the nonce for the sender's address, sets the gas price and limit (if they are not already set), signs the transaction with the `EIP155Signer`, and then sends the raw transaction data to the Ethereum node.

The `SendTransactionLocal()` method sends a non-signed transaction to the blockchain only for testing purposes. It sets the gas price and limit and uses the first account returned by the Ethereum node's `Accounts()` method as the sender.

</details>
