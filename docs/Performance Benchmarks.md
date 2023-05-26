---
id: benchmarks 
title: Performance Benchmarks
sidebar_label: Performance Benchmarks
---

This page presents performance benchmarks and analysis of the NumBlock blockchain. Note that, this test is on a single chain.

# Test Environment

 - vCPU: 4
 - Memory: 16 GiB
 - Network Performance: Up to 5 Gigabit
 - EBS-Optimized: Up to 2,750 Mbps

# Transaction Types
The tests were performed using three different types of transactions to assess the network's capability to handle various use cases:

 - EOA to EOA: Representing simple value transfers between user accounts.
 - NRC-20: Token transfers, simulating the exchange of tokens on the network.
 - NRC-721: Non-fungible token (NFT) transfers representing the exchange of unique digital assets.

 # Result

 | Validators     | Block Time | Gas per tx| Gas per sec| Block gas limit| Transaction type | Transactions | TPS | Finality | 
| ----------- | ----------- | ------------|-------------|------------|------------|----------|------------|---------------|
| 4    | 2        | 21,000 | 53,025,000 | 300,000,000 | EOA | 500,000 | 3100 | 0.9|
| 4    | 2        | 28,317 | 20,501,508| 200,000,000 | NRC-20 | 50,000 | 1,600| 1.4|
| 4    | 2        | 48,000 | 36,000,000 | 200,000,000 | NRC-721 | 50,000 | 1100 | 2.7|

