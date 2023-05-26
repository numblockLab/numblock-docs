---
id: what-is-proof-of-stake
title: 스테이크 증명이란?
description: 스테이크 컨센서스 메커니즘의 증명에 대해 알아보십시오
keywords:
  - docs
  - matic
  - polygon
  - stake
  - delegate
  - validate
  - pos
image: https://wiki.polygon.technology/img/polygon-wiki.png
---

# 스테이크 증명이란? {#what-is-proof-of-stake}

스테이크 증명(PoS)은 공개 블록 체인에 대한 합의 알고리즘의 한 범주로서, 네트워크에서 유효성 검사자가 차지하는 경제적 지분인 [스테이크](/docs/maintain/glossary.md#staking)에 따라 달라집니다.

작업 증명(PoW) 기반의 공개 블록 체인은 트랜잭션의 유효성을 검사하기 위해 암호 퍼즐을 풀고 새로운 블록을 생성하는 참여자에게 보상을 제공하는 알고리즘입니다. PoW 블록체인 예: Bitcoin, 이더리움(합병 전에)을 참조하십시오.

PoS 기반 공개 블록 체인의 경우, 일련의 유효성 검사기들이 교대로 제안하고 다음 블록에 대해 투표합니다. 각 유효성 검사기 투표의 가중치는 보유한 예치금 즉, [스테이크](/docs/maintain/glossary.md#staking) 금액에 따라 달라집니다. PoS의 중요한 장점으로는 보안, 중앙화 위험 감소, 에너지 효율성 등을 꼽을 수 있습니다. PoS 블록체인 예: 이더리움 2.0, Polygon,

일반적으로 PoS 알고리즘은 다음과 같습니다. 블록체인은 일련의 유효성 검사자 집합을 추적하고 블록체인의 기본 암호 화폐(이더리움의 경우에서, Ethy)를 보유한 사람은 Eth를 예금에 잠그고 있는 특별 유형의 트랜잭션 유형을 보내 검증자가 될 수 있습니다. 그러면 기존의 모든 유효성 검사기들이 참여할 수 있는 합의 알고리즘을 통해 새로운 블록을 생성하고 합의하는 프로세스가 수행됩니다.

합의 알고리즘에는 많은 종류가 있고 합의 알고리즘에 참여하는 유효성 검사기들에게 보상을 할당하는 방법도 여러 가지이므로 스테이크 증명에는 다양한 '형태'가 있다고 표현할 수 있습니다. 알고리즘 관점에서 보면 체인기반 PoS 및 [BFT 스타일의](https://en.wikipedia.org/wiki/Byzantine_fault_tolerance) PoS와 같은 두 가지 주요 유형이 있습니다.

**체인 기반 스테이크 증명**의 경우, 알고리즘이 각 시간대에(예: 10초마다) 유사난수법으로 유효성 검사기를 선정하고, 선정된 이 유효성 검사자에게 단일 블록을 생성할 수 있는 권한을 할당하며, 이 블록은 어떤 이전 블록(보통 이전에 가장 길었던 체인의 마지막에 있는 블록)에 연결되어야 하므로 시간이 갈수록 결국 모든 블록이 모여 지속적으로 커지는 단일 체인을 이루게 됩니다.

**BFT 스타일의 스테이크의** 증거에서 유효자는 **무작위로** 블록을 **제안** 할 권리를 배정합니다. 모든 유효한 검사자가 각 라운드 동안 특정 블록에 대한 **투표를** 보내는 멀티 라운드 **프로세스를** 통해 블록이 이루어지는 합의, 그리고 프로세스의 끝에서 모든 (정직하고 온라인에 있음) 검증자가 주어진 블록이 체인의 일부인지 여부에 대해 영구적으로 동의합니다. 블록이 여전히 **함께** 묶여있을 수 있다는 메모. 핵심 차이점은 블록에 대한 합의가 하나의 블록 내에 올 수 있으며, 그 후 체인의 길이 또는 크기에 의존하지 않는다는 것입니다.

자세한 내용은 [https://github.com/eemy/wiki/Proof-of-Stake-FAQ를](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ) 참조하십시오.

## 기타 자료 {#see-also}

* [위임자](/docs/maintain/glossary.md#delegator)
* [유효성 검사기](/docs/maintain/glossary.md#validator)