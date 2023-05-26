---
id: transfer
title: transfer
keywords:
- 'pos client, erc1155, transfer, polygon, sdk'
description: 'โอนโทเค็นจากผู้ใช้รายหนึ่งไปยังผู้ใช้อีกรายหนึ่ง'
---

ใช้เมธอด `transfer` เพื่อโอนโทเค็นจากผู้ใช้รายหนึ่งไปยังผู้ใช้อีกรายหนึ่ง

```
const erc1155Token = posClient.erc1155(<token address>);

const result = await erc1155Token.transfer({
    tokenId: <tokenId>,
    amount: <amount>,
    from : <from address>,
    to : <to address>,
    data : <data to sent>, // data is optional
});

const txHash = await result.getTransactionHash();

const txReceipt = await result.getReceipt();

```
