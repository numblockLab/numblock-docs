---
id: index
title: PlasmaClient
keywords:
- 'plasma client, erc20, contract, polygon, sdk'
description: 'Fournit une méthode pour interagir avec un jeton ERC20.'
---

`plasmaClient` fournit `erc20`une méthode qui vous aide à interagir avec un jeton erc20.

## Jeton enfant {#child-token}

```
const childERC20Token = plasmaClient.erc20(<child token address>);
```

## Jeton root {#root-token}

Le jeton racine peut être initié en fournissant la valeur du second paramètre comme `true`.

```
const parentERC20Token = plasmaClient.erc20(<root token address>, true);
```