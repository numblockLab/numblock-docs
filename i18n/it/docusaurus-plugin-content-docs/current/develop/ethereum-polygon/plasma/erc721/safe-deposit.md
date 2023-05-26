---
id: safe-deposit
title: safeDeposit
keywords:
- 'plasma client, erc721, deplasmait, polygon, sdk'
description: 'Muovere i primi passi con maticjs'
---

# safeDeposit {#safedeposit}

`safeDeposit` può essere utilizzato per depositare un token da Ethereum alla catena di Polygon.

```
const erc721RootToken = plasmaClient.erc721(<root token address>, true);

const result = await erc721RootToken.safeDeposit(<token id>, <user address>);

const txHash = await result.getTransactionHash();

const txReceipt = await result.getReceipt();

```
