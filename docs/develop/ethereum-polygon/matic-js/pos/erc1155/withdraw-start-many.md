---
id: withdraw-start-many
title: withdrawStartMany
keywords: 
- 'pos client, erc1155, withdrawStartMany, polygon, sdk'
description: 'Initiate the withdraw process.'
---

`withdrawStartMany` method can be used to initiate the withdraw process which will burn the specified amounts of multiple token respectively on polygon chain.

```
const erc1155Token = posClient.erc1155(<child token address>);

const result = await erc1155Token.withdrawStartMany([<token id1>, <token id2>],[<amount1>,<amount2>]);

const txHash = await result.getTransactionHash();

const txReceipt = await result.getReceipt();

```
