---
id: is-exited-many
title: isExitedMany
keywords:
- 'plasma client, erc721, isExitedMany, polygon, sdk'
description: 'Maticjs를 시작합니다'
---

# isExitedMany {#isexitedmany}

`isExitedMany` 메서드는 출금이 종료했는지 확인합니다. 불리언 값을 반환합니다.

```
const erc721Token = plasmaClient.erc721(<token address>);

const result = await erc721Token.isExitedMany(<exit tx hash>);

```