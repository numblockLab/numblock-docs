---
id: deposit-many
title: depositMany
keywords: 
- 'pos client, erc1155, deposit, polygon, sdk'
description: 'Multiple deposit of ERC1155 tokens using matic.js'
---

`depositMany` method can be used to deposit required amounts of multiple token from ethereum to polygon chain. 

```
const erc1155RootToken = posClient.erc1155(<root token address>, true);
 
const result = await erc1155RootToken.depositMany({
    amount: [1,2],
    tokenId: ['123','456'],
    userAddress: <from address>,
    data: '0x5465737445524331313535', // data is optional
});

const txHash = await result.getTransactionHash();

const txReceipt = await result.getReceipt();

```

Supplying **data** is optional.