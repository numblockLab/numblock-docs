---
id: meta-transactions
title: 메타 트랜잭션
sidebar_label: Overview
description: 메타 트랜잭션과 이를 사용하는 방법에 대해 알아보세요.
keywords:
  - docs
  - polygon
  - matic
  - transactions
  - meta transactions
  - gasless
image: https://matic.network/banners/matic-network-16x9.png
slug: meta-transactions
---

일일 스마트 계약 호출은 하루 약 250만~300만 건에 달하는 최고치를 기록하고 있습니다.
dApp은 그 유용성이 실현되기 시작했지만 가스 요금 때문에 dApp의 성공이나 다른 애플리케이션의 성공의 희생양이 되고 있습니다. 사용자 등록의 난관과 현재 UX의 문제를 해결하기가 쉽지 않은 것은 말할 것도 없죠.

## 스마트 계약 서비스 {#servicing-smart-contracts}

스마트 계약은 설계상 네트워크의 컴퓨팅 리소스를 사용해 계약의 논리를 제공하는  트랜잭션 수수료가 지불되면 실행되는 확정적 상태 머신입니다.
이는 이더리움(과 Polygon)의 가스 계량식 모델로 이루어집니다.

## 현재 트랜잭션 상태 {#the-current-state-of-transacting}

이더리움(과 기타 블록체인 모두)의 이 기존 트랜잭션 모델에는 한계가 있습니다.
한계는 보통 가스 비용을 낼 수단이 없는 사용자입니다. 기본적으로 트랜잭션을 보낸 사람은 이런 동작이 결합되어 지불자 역할을 하므로, 사용자가 트랜잭션을 생성해 전송하려고 하면  관련 가스 요금을 내야 합니다. 마찬가지로 사용자는 dApp을 빌드하고, 상호작용하고, 실행하면 가스 요금을 내야 합니다.

일반 사용자가 암호화폐를 구매하고 애플리케이션과 상호작용하기 위해 가스 요금을 내기를 기대하는 것은  비현실적입니다. 이 문제를 해결하기 위해 할 수 있는 일은 트랜잭션 발신자를 지불자와 분리해 트랜잭션 실행을 확장하고 원활한 트랜잭션 경험을 접할 기회를 제공하는 것입니다.

직접 트랜잭션 실행 대신 (제삼자를 거쳐서) 가스를 처리하는 미들웨어가 있을 것입니다.
여기서 메타 트랜잭션이 관여합니다.

## 메타 트랜잭션이란 무엇일까요? {#what-are-meta-transactions}

메타 트랜잭션은 누구나 블록체인과 상호작용할 수 있게 합니다. 사용자는 트랜잭션 수수료로 네트워크 서비스 비용을 내기 위한 토큰이 필요하지 않습니다. 이는 트랜잭션의 발신자와 가스 요금 지불자를 분리하는 것으로 이루어집니다.

새로운 사용자를 확보하고 현재 사용자를 도울 수 있는 솔루션입니다.

트랜잭션 실행자는 발신자 역할을 합니다. 이들은 가스를 소비하기보다는 비공개 키로 의도한 작업(트랜잭션 매개변수)에 서명함으로써 트랜잭션 요청을 생성합니다. 메타 트랜잭션은 메타 트랜잭션을 생성하는 추가 매개변수를 포함한 일반적인 이더리움 트랜잭션입니다.

서명된 트랜잭션 매개변수는 릴레이어 역할을 하는 보조 네트워크로 전달됩니다.
이에 대한 다양한 체계가 있지만, 보통 릴레이어는 트랜잭션을 검증해 제출할 가치가 있는 트랜잭션을 선택할 것입니다(예: dApp과 관련 있음). 검증 시, 릴레이어는 요청(서명된 메시지)을 실제 트랜잭션(가스 요금 지불을 의미)으로 래핑해 네트워크에 내보내게 되며, 계약은 원래 서명의 검증을 통해 트랜잭션의 래핑을 해제하고 사용자를 대신해 실행합니다.

:::note 메타와 일괄이라는 단어는 비슷할 수 있습니다

명확히 하자면, 메타 트랜잭션은 일괄 트랜잭션과 다릅니다. 여기서 일괄 트랜잭션은 여러 트랜잭션을 한 번에 보낼 수 있고 단일 발신자(단일 임시값 지정)에서 차례대로 실행되는 트랜잭션입니다.

:::

요약하면, 메타 트랜잭션은 다음과 같은 설계 패턴입니다.

* 사용자(발신자)는 비공개 키로 요청에 서명해 이를 릴레이어에게 보냅니다
* 릴레이어는 요청을 트랜잭션으로 래핑해 계약에 보냅니다
* 계약은 트랜잭션 래핑을 해제하고 실행합니다

기본 트랜잭션은 '발신자'가 '지불자'이기도 하다는 의미입니다. '지불자'를 '발신자'에서 분리하면 '발신자'는 '의도자'에 더 가까워집니다. 발신자는 완전히 맞게 구성된 트랜잭션이 아니며, 자신의 메시지와 관련된 특정 매개변수가 포함된 메시지에 서명하여 블록체인에 실행하려는 트랜잭션의 의도를 보여줍니다.

## 사용 사례 {#use-cases}

dApp 확장 및 스마트 계약과의 상호작용을 위한 메타 트랜잭션의 기능을 상상해볼 수 있습니다.
사용자는 가스 없이 트랜잭션을 생성할 수 있을 뿐 아니라 여러 번 생성할 수 있으며, 자동화 도구를 사용하면 메타 트랜잭션이 실제 사용 사례의 차세대 애플리케이션에 영향을 줄 수 있습니다. 메타 트랜잭션은 종종 온체인에 필요한 상호작용과 가스 요금으로 인해 제한되는 스마트 계약 논리에서 실제 유틸리티를 지원합니다.

### 투표 사례 {#example-with-voting}

사용자는 온체인 거버넌스에 참여하고 싶어 하며, 투표 계약을 통해 특정 결과에 투표하려고 합니다. 사용자는 이 특정 계약에서 투표로 사용자의 결정을 나타내는 메시지에 서명합니다. 보통, 사용자는 계약과 상호작용하기 위해 가스 요금을 내야 하고 계약과 상호작용하는 방법을 알고 있지만, 그 대신 투표에 필요한 정보로 메타 트랜잭션(오프체인)에 서명하고 자신을 대신해 트랜잭션을 실행할 릴레이어에 전달할 수 있습니다.

서명된 메시지는 릴레이어(투표 정보에 관해 서명된 트랜잭션 매개변수)에 전송됩니다. 릴레이어는 이 트랜잭션이 우선 순위 투표인지 확인하고, 투표 요청을 실제 트랜잭션에 래핑한 다음, 가스 요금을 내고 투표 계약에 내보냅니다. 모든 것은 투표 계약 종료 시 확인하며, 투표는 사용자를 대신해 실행됩니다.

## 사용해 보세요 {#try-them-out}

dApp에 메타 트랜잭션을 통합하는 다양한 접근 방식에 익숙하다면, 메타 트랜잭션으로 마이그레이션할 것인지 이를 통해 새로운 dApp을 빌드할 것인지에 따라 달라집니다.

dApp을 Polygon의 메타 트랜잭션과 통합하려면 다음 릴레이어 중 하나를 사용하거나 사용자 정의 솔루션을 가동할 수 있습니다.

* [Biconomy](https://docs.biconomy.io/products/enable-gasless-transactions)
* [Gas Station Network(GSN)](https://docs.opengsn.org/#ethereum-gas-station-network-gsn)
* [Infura](https://infura.io/product/ethereum/transactions-itx)
* [Gelato](https://docs.gelato.network/developer-products/gelato-relay-sdk)