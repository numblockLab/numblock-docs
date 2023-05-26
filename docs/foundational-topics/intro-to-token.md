---
title: Intro to NUMB
description: A developer's introduction to the NUMB cryptocurrency.
lang: en
---

## Prerequisites {#prerequisites}

To help you better understand this page, we recommend you first read [Introduction to NumBlock](/docs/foundational-topics/intro-to-blockchain/).

## What is a cryptocurrency? {#what-is-a-cryptocurrency}

A cryptocurrency is a medium of exchange secured by a blockchain-based ledger.

A medium of exchange is anything widely accepted as payment for goods and services, and a ledger is a data store that keeps track of transactions. Blockchain technology allows users to make transactions on the ledger without reliance upon a trusted third party to maintain the ledger.

The first cryptocurrency was Bitcoin, created by Satoshi Nakamoto. Since Bitcoin's release in 2009, people have made thousands of cryptocurrencies across many different blockchains. 

## What is NUMB? {#what-is-numb}

NumBlock has a native token called NUMB, with a fixed supply. The NUMB token is used to pay for gas, and users can stake their NUMB tokens with validators in a Delegated Proof-of-Stake model within an epoch. The voting power of validators within this epoch is a function of the amount of NUMB in their staking pool, including both validator and user NUMB tokens. In any epoch, the set of validators is Byzantine fault tolerant. At the end of the epoch, fees collected through all transactions processed are distributed to validators according to their contribution to the operation of the network. Validators can in turn share some of the fees as rewards to users that stake their NUMB with them.

In addition, NUMB is also used to participate in various DeFi activities on the network such as lending, borrowing, liquidity pools, launchpad or for trading on ticketing and betting systems. NUMB is also used to manage voting rights, decision making on network development and governance.

## Denominations of NUMB {#denominations}

Since many transactions on NumBlock are small, NUMB has several denominations which may be referenced for smaller amounts. Of these denominations, Wei and gwei are particularly important.

Wei is the smallest possible amount of NUMB.

Gwei, short for giga-wei, is often used to describe gas costs on NumBlock.

| Denomination | Value in NUMB   | Common Usage              |
| ------------ | ---------------- | ------------------------- |
| Wei          | 10<sup>-18</sup> | Technical implementations |
| Gwei         | 10<sup>-9</sup>  | Human-readable gas fees   |

## Transferring NUMB {#transferring-NUMB}

Each transaction on NumBlock contains a `value` field, which specifies the amount of NUMB to be transferred, denominated in wei, to send from the sender's address to the recipient address.

When the recipient address is a [smart contract](/docs/developers/smart-contracts/), this transferred NUMB may be used to pay for gas when the smart contract executes its code.

[More on transactions](/docs/foundational-topics/transactions)

## Querying NUMB {#querying-NUMB}

Users can query the NUMB balance of any [account](/docs/foundational-topics/account) by inspecting the account's `balance` field, which shows NUMB holdings denominated in wei.

[NumBlock Explorer](https://testnet.numblock.org/) is a popular tool to inspect address balances via a web-based application. Account balances can also be queried using wallets or directly by making requests to nodes.
