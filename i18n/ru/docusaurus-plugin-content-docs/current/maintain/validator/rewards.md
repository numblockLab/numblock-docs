---
id: rewards
title: Награды
sidebar_label: Rewards
description: Узнайте о системе поощрения стейкинга в сети Polygon.
keywords:
  - docs
  - matic
  - polygon
  - rewards
  - staking
  - incentives
image: https://wiki.polygon.technology/img/polygon-wiki.png
---

Введение в алгоритм Polygon и Proof of Stake см. в разделе [Что такое доказательство стейка](/docs/home/polygon-basics/what-is-proof-of-stake)

В Polygon валидаторы размещают свои токены MATIC в стейкинге в качестве залогового обеспечения для защиты сети, за что получают награды.

Для участия в экономике Polygon вам нужно стать валидатором или делегатом.

Чтобы стать [валидатором](/docs/maintain/glossary.md#validator), вам нужно **запустить полный узел проверки** и добавить токены MATIC в стейкинг. См. статью [Валидация](/docs/maintain/validate/validator-index).

Также проверьте страницу [Ответственности](/docs/maintain/validate/validator-responsibilities) валидатора.

Чтобы стать [делегатом](/docs/maintain/glossary.md#delegator), вам нужно лишь **делегировать MATIC валидатору**. См. статью [Делегирование](/docs/maintain/delegate/delegate).

## Как устроена система поощрений? {#what-is-the-incentive}

Polygon выделяет 12% от общего объема предложения токенов (10 миллиардов) на финансирование наград за стейкинг. Это нужно для того, чтобы сеть оставалась заполненной в достаточной степени до тех пор, пока сумма комиссий за транзакции не увеличится. Эти награды прежде всего предназначены для быстрого запуска сети, в то время как в долгосрочной перспективе предполагается, что устойчивость протокола будет поддерживаться за счет комиссий за транзакции.

**Награды валидатора = награды за стейкинг + комиссии за транзакции**

Награды распределяются таким образом, чтобы награды за стейкинг постепенно переставали быть доминирующим компонентом вознаграждения валидатора.

| Год | Целевой стейк (30% токенов от общего количества в обороте) | Размер награды за 30%-ю привязку | Пул наград |
|---|---|---|---|
| Первый | 1 977 909 431 | 20% | 312 917 369 |
| Второй | 2 556 580 023 | 12% | 275 625 675 |
| Третий | 2 890 642 855 | 9% | 246 933 140 |
| Четвертый | 2 951 934 048 | 7% | 204 303 976 |
| Пятый | 2 996 518 749 | 5% | 148 615 670 + **11 604 170** |

Ниже приведен пример моментального снимка ожидаемых годовых наград за первые 5 лет при доле стейка от 5% до 40% с интервалом 5%.

| % токенов, размещенных в стейкинге в общего количества в обороте | 5% | 10% | 15% | 20% | 25% | 30% | 35% | 40% |
|---|---|---|---|---|---|---|---|---|
| Награда за год |
| Первый | 120% | 60% | 40% | 30% | 24% | 20% | 17,14% | 15% |
| Второй | 72% | 36% | 24% | 18% | 14,4% | 12% | 10,29% | 9% |
| Третий | 54% | 27% | 18% | 13,5% | 10,8% | 9% | 7,71% | 6,75% |
| Четвертый | 42% | 21% | 14% | 10,5% | 8,4% | 7% | 6% | 5,25% |
| Пятый | 30% | 15% | 10% | 7,5% | 6% | 5% | 4,29% | 3,75% |

## Кто получает поощрения? {#who-gets-the-incentives}

Поощрения получают стейкеры, управляющие узлами проверки, и стейкеры, делегирующие свои токены валидатору согласно своим предпочтениям.

Валидаторы могут взимать комиссию с наград делегатов.

Средства, принадлежащие всем стейкерам, блокируются в контракте, развернутом в Ethereum mainnet.

Токены делегатов не переходят во владение к валидаторам.

## Награды за стейкинг {#staking-rewards}

Ежегодное поощрение носит абсолютный характер. Все подписанты периодически получают поощрение в качестве награды вне зависимости от общего размера стейка или целевого коэффициента привязки в сети.

В Polygon есть дополнительный элемент фиксации периодических [checkpoint](/docs/maintain/glossary.md#checkpoint-transaction) в Ethereum mainnet. Это важная часть обязанностей валидаторов, за выполнение которых их поощряют. Такие обязанности предполагают определенные затраты для валидатора, что является спецификой решений уровня 2, таких как Polygon. Мы стремимся учитывать эти затраты в рамках механизма предоставления валидаторам наград за стейкинг в виде бонуса, выплачиваемого [автору предложения](/docs/maintain/glossary.md#proposer), который несет ответственность за фиксацию checkpoint. Награды за вычетом бонуса пропорционально распределяются между всеми стейкерами (автором предложения и [подписантами](/docs/maintain/glossary.md#signer-address)).

## Побуждение автора предложения к включению всех подписей {#encouraging-the-proposer-to-include-all-signatures}

Чтобы получить бонус полностью, [автор предложения](/docs/maintain/glossary.md#proposer) должен включить все подписи в [checkpoint](/docs/maintain/glossary.md#checkpoint-transaction). Поскольку протокол требует согласия участников, на которых приходится ⅔ +1 доля от общего стейка, checkpoint принимается даже при получении 80% голосов. Однако в этом случае автор предложения получает только 80% от рассчитанного бонуса.

## Комиссия за транзакции {#transaction-fees}

Каждый блок-продюсер на [Bor](/docs/maintain/glossary.md#bor) получает определенный процент от комиссии за транзакции, собранной в каждом блоке. Выбор продюсеров для каждого конкретного диапазона блоков также зависит от доли валидатора в общем стейке. Оставшаяся комиссия за транзакции проходит через ту же воронку, что и награды, которые распределяются между всеми валидаторами, работающими на уровне [Heimdall](/docs/maintain/glossary.md#heimdall).