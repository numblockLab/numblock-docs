---
id: what-is-proof-of-stake
title: Что такое Proof of Stake?
description: Алгоритм консенсуса, зависящий от валидаторов.
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

# Доказательство стейка (PoS) {#proof-of-stake-pos}

Proof of Stake (PoS, доказательство доли владения) — это категория алгоритмов консенсуса для публичных блокчейнов, которые зависят от экономического [стейка](/docs/maintain/glossary#staking) валидатора в сети.

В публичных блокчейнах на базе доказательства работы (Proof of Work или PoW) алгоритм вознаграждает участников, которые решают криптографические задачи для подтверждения транзакций и создания новых блоков. Примеры блокчейна PoW: Bitcoin, ранее Ethereum.

В публичных блокчейнах на базе PoS набор валидаторов поочередно вносит предложения и голосует в следующем блоке. Голос каждого валидатора учитывается в зависимости от размера его депозита — [стейка](/docs/maintain/glossary#staking). Значительные преимущества PoS — это безопасность, снижение риска централизации и энергоэффективность. Примеры блокчейнов на базе PoS: Eth2, Polygon.

В целом алгоритм PoS выглядит следующим образом. Блокчейн отслеживает набор валидаторов, и каждый держатель базовой криптовалюты блокчейна (в случае с Ethereum — эфир) может стать валидатором, отправив специальный тип транзакции, которая блокирует его эфир на депозите. Затем проводится процесс создания и согласования новых блоков с помощью консенсусного алгоритма, в котором могут участвовать все текущие валидаторы.

Существует много видов алгоритмов консенсуса и много способов назначить вознаграждения валидаторам, которые участвуют в алгоритме консенсуса, отсюда множество нюансов доказательства доли владения. В отношении алгоритмов существует два основных типа: PoS на базе длины и размера сети и PoS на базе алгоритма [BFT](https://en.wikipedia.org/wiki/Byzantine_fault_tolerance).

В **PoS на базе длины и размера сети** алгоритм в псевдослучайном порядке выбирает валидатора в течение каждого временного интервала (например, каждый период 10 секунд может быть временным интервалом) и назначает этому валидатору право создать один блок, и этот блок должен указывать на какой-то предшествующий блок (как правило, блок в конце самой длинной предшествующей цепочки), и таким образом со временем большинство блоков объединяются в единую постоянно растущую цепочку.

В **PoS на базе алгоритма BFT** валидаторам **в случайном порядке **назначают право *предлагать *блоки, но *согласие с тем, какой блок является каноническим*, достигается путем многоэтапного процесса, когда каждый валидатор отправляет «голос» за конкретный блок в течение каждого раунда и в конце процесса все (добросовестные и онлайн) валидаторы на постоянной основе согласуют, является ли данный блок частью цепочки. Обратите внимание: блоки могут все еще *объединяться друг с другом*; ключевое отличие заключается в том, что консенсус по блоку может быть в рамках одного блока и не зависит от длины или размера цепочки после него.

Для получения подробной информации см. [https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ).

См. также:

* [Делегат](/docs/maintain/glossary#delegator)
* [Валидатор](/docs/maintain/glossary#validator)