---
id: is-check-pointed
title: isCheckPointed
keywords:
- 'plasma client, erc20, withdrawExit, polygon, sdk'
description: '트랜잭션에 체크포인트가 설정되었는지 확인합니다.'
---

`isCheckPointed` 메서드를 사용해 트랜잭션에 체크포인트가 설정되었는지 알 수 있습니다.

```
const isCheckPointed = await plasmaClient.isCheckPointed(<tx hash>);
```