---
id: glossary
title: Глоссарий
description: Ключевые термины Polygon
keywords:
  - docs
  - matic
  - polygon
  - glossary
  - jargons
slug: glossary
image: https://wiki.polygon.technology/img/polygon-wiki.png
---

## Блок-продюсер {#block-producer}

Блок-продюсер — это активный [валидатор](#validator), который был выбран на роль блок-продюсера для определенного [диапазона блоков](#span).

Блок-продюсер отвечает за создание блоков и передачу созданных блоков в сеть.

## Bor {#bor}

Нод Bor — это нод для производства блоков в сети Polygon.

Bor базируется на [Go Ethereum](https://geth.ethereum.org/).

## Транзакция создания чекпоинта {#checkpoint-transaction}

Транзакция создания чекпоинта содержит корень Меркла блоков уровня [Bor](#bor) между интервалами чекпоинтов.

Транзакция фиксируется в контрактах стейкинга Polygon в Ethereum mainnet при помощи нода [Heimdall](#heimdall).

См. также:

* [Архитектура Heimdall: чекпоинт](/docs/pos/heimdall/checkpoint)
* [Механизм чекпоинта](/docs/maintain/validator/core-components/checkpoint-mechanism)

## Комиссия {#commission}

Комиссия — это процент от наград, который получают [валидаторы](#validator) от [делегатов](#delegator), размещающих средства в стейкинге вместе с валидаторами.

См. также статью [Операции с комиссией валидатора](/docs/maintain/validate/validator-commission-operations).

## Делегат {#delegator}

Делегат размещает токены MATIC в стейкинге для обеспечения безопасности сети Polygon с помощью существующих [валидаторов](#validator), не запуская при этом сами ноды.

См. также статью [Делегаты](/docs/maintain/polygon-basics/who-is-delegator).

## Полный нод {#full-node}

Полный нод — это полностью синхронизированный [сентри-нод](#sentry), на котором запущены и [Heimdall](#heimdall), и [Bor](#bor).

См. также статью [Развертывание полного нода](/docs/develop/network-details/full-node-deployment).

## Heimdall {#heimdall}

Нод Heimdall работает параллельно с Ethereum mainnet, отслеживает набор контрактов, развернутых в Ethereum mainnet, а также фиксирует [чекпоинты](#checkpoint-transaction) сети Polygon в Ethereum mainnet.

Heimdall основан на [Tendermint](https://tendermint.com/).

## Адрес владельца {#owner-address}

Адрес владельца используется для стейкинга, добавления средств в стейкинг, изменения адреса подписанта, вывода наград и управления параметрами, связанными с делегированием, в Ethereum mainnet.

В то время как [ключ подписанта](#signer-address) хранится в ноде и считается **горячим** кошельком, ключ владельца, который должен быть защищен очень надежно и использоваться редко, рассматривается как **холодный** кошелек.

См. также статью [Управление ключами](validator/core-components/key-management.md).

## Автор предложения {#proposer}

Автор предложения — это [валидатор](#validator), который выбирается алгоритмом для предложения нового блока.

Автор предложения также отвечает за сбор всех подписей для конкретного [чекпоинта](#checkpoint-transaction) и фиксацию чекпоинта в Ethereum mainnet.

## Сентри-нод {#sentry}

Сентри-нод — это нод, на котором запущены ноды [Heimdall](#heimdall) и [Bor](#bor) для загрузки информации из других нодов в сеть и распространения данных [валидатора](#validator) в сети.

Сентри-нод открыт для любого другого сентри-нода в сети.

## Диапазон блоков {#span}

Логически определенный набор блоков, для которых выбирается набор валидаторов из всех доступных [валидаторов](#validator).

Решение о выборе каждого диапазона блоков принимается не менее чем 2/3 валидаторов с учетом мощности стейкинга.

См. также статью [Консенсус Bor: диапазон блоков](/docs/pos/bor/consensus.md#span).

## Стейкинг {#staking}

Стейкинг — это процесс блокировки токенов на депозите для получения права подтверждать и производить блоки в блокчейне. Обычно стейкинг выполняется в нативном токена для сети — для токена MATIC заблокирован validators в сети Polygon. Другие примеры включают ETH в Ethereum (после слияния), ATOM в Cosmos, и т.д.

См. также [Что такое доказательство доли владения (Proof of Stake)?](polygon-basics/what-is-proof-of-stake.md)

## Адрес подписанта {#signer-address}

Адрес подписанта — это адрес аккаунта Ethereum узла проверки [Heimdall](#heimdall). Адрес подписанта подписывает и отправляет [транзакции создания чекпоинта](#checkpoint-transaction).

В то время как ключ подписанта хранится в ноде и считается **горячим** кошельком, [ключ владельца](#owner-address), который должен быть защищен очень надежно и использоваться редко, рассматривается как **холодный** кошелек.

См. также статью [Управление ключами](validator/core-components/key-management.md).

## Валидатор {#validator}

Валидаторы [ставят свои токены MATIC](/docs/maintain/validate/validator-staking-operations) через Validators контракты, развернутые в Ethereum, и используют узел [Heimdall](#heimdall), и [Bor](#bor), чтобы зафиксировать контрольные пункты в сети в Ethereum, а также создать блоки в сети.

Узел проверки открыт только для своего [сентри-нода](#sentry) и закрыт для остальной сети.

Также см. статью [Валидаторы](polygon-basics/who-is-validator.md).