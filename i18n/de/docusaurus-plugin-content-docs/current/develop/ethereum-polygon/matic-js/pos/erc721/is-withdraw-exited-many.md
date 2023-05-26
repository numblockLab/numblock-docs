---
id: is-withdraw-exited-many
title: isWithdrawExitedMany
keywords:
- 'pos client, erc721, isWithdrawExitedMany, polygon, sdk'
description: 'Überprüfen, ob die Auszahlung für mehrere Token beendet wurde. '
---

`isWithdrawExitedMany` Methode überprüft, ob die Auszahlung für mehrere Token beendet wurde. Sie liefert einen booleschen Wert.

```
const erc721Token = posClient.erc721(<token address>);

const result = await erc721Token.isWithdrawExitedMany(<exit tx hash>);

```