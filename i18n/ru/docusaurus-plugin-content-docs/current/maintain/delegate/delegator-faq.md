---
id: delegator-faq
title: Часто задаваемые вопросы о делегате
sidebar_label: Delegator FAQ
description: Вопросы о делегировании в сети Polygon
keywords:
  - docs
  - polygon
  - how to delegate
  - validator
  - stake
  - faq
  - delegator
image: https://wiki.polygon.technology/img/polygon-wiki.png
---
import useBaseUrl from '@docusaurus/useBaseUrl';

### Какой URL-адрес у дашборда стейкинга? {#what-is-the-staking-dashboard-url}

URL-адрес панели мониторинга стейкинга является https://staking.polygon.technology/.

### Каково минимальное количество токенов для стейкинга? {#what-is-the-minimum-stake-amount}

Минимального количества токенов для стейкинга нет. Однако вы всегда можете начать с 1 MATIC токена.

### Каков размер награды за делегирование? {#how-many-rewards-will-i-get-if-i-delegate}

Чтобы определить ваши оценки, пожалуйста, используйте [калькулятор](https://staking.polygon.technology/rewards-calculator) вознаграждений стейкинга.

### Почему транзакция выполняется так долго? {#why-does-my-transaction-take-so-long}

В целях безопасности все транзакции стейкинга Polygon совершаются в Ethereum.

Скорость завершения транзакций зависит от разрешенной вами комиссии за газ, а также от загруженности сети Ethereum mainnet в данный момент времени. Чтобы увеличить комиссию за газ, вы всегда можете использовать опцию «Speed Up», чтобы завершить транзакцию в ближайшее время.

### Какие кошельки поддерживаются в настоящее время? {#which-wallets-are-currently-supported}

Сейчас поддерживается только расширение MetaMask в браузере настольного компьютера и кошелек Coinbase Wallet. Кроме того, вы можете использовать WalletConnect и Walletlink из поддерживаемых мобильных кошельков для взаимодействия с приборной панелью интерфейса Staking на настольном / ноутбуке. Мы будем постепенно добавлять поддержку других кошельков.

### Поддерживаются ли аппаратные кошельки? {#are-hardware-wallets-supported}

Да, аппаратные кошельки поддерживаются. Вы можете использовать опцию Connect Hardware Wallet (Подключить аппаратный кошелек) на MetaMask, а затем продолжить процесс делегирования.

### Почему невозможно размещать токены в стейкинге напрямую с Binance? {#why-can-t-i-stake-directly-from-binance}

Стейкинг с помощью Binance пока не поддерживается. Мы объявим, когда Binance начнет поддерживать такую возможность.

### Где можно посмотреть подробную информацию после завершения делегирования? {#i-have-completed-my-delegation-where-can-i-check-details}

После завершения вашей делегации, дождитесь 12 подтверждений блока в Ethereum (ок. 3-5 минут), затем на панели мониторинга можно нажать на **Мой аккаунт**.

<div>
  <img src={useBaseUrl("/img/delegator-faq/my-account.png")} />
</div>

### Где можно проверить награды? {#where-can-i-check-my-rewards}

На панели мониторинга можно щелкнуть в параметре **Мой аккаунт** в левой стороне.

<div>
  <img src={useBaseUrl("/img/delegator-faq/my-account.png")} />
</div>

### Требуется ли ETH для оплаты комиссии за газ? {#do-i-need-eth-to-pay-for-gas-fees}

Да. В целях безопасности у вас должно быть 0,05–0,1 ETH.

### Нужно ли внести токены MATIC в сеть Polygon mainnet для стейкинга? {#do-i-need-to-deposit-matic-tokens-to-the-polygon-mainnet-network-for-staking}

Нет. Все ваши средства должны находиться в главной сети Ethereum.

### Почему кнопка Confirm (подтвердить) отключена при попытке совершить транзакцию? {#when-i-try-to-do-the-transaction-my-confirm-button-is-disabled-why-so}

Проверьте, достаточно ли у вас ETH для оплаты комиссии за газ.

### Когда распределяются награды? {#when-does-reward-get-distributed}

Награды распределяются при каждом утверждении контрольной точки.

В настоящее время токены MATIC распределяются пропорционально каждому успешному представлению checkpoint каждому delegator на основе их доли относительно общего резерва всех валидаторов и делегатов. Кроме того, процент от наград, распределяемый между всеми делегатами, будет меняться в зависимости от размера стейка делегата, валидатора и общего размера стейка.

(Обращаем внимание, что существует бонус в размере 10% для автора предложения. Он начисляется валидатору, который предоставляет контрольную точку. Однако со временем бонус перестает начисляться при многократном предоставлении контрольных точек разными валидаторами.)

Чекпоинт отправляет один из валидаторов примерно каждые 34 минуты. Это время указано приблизительно. Оно может меняться в зависимости от консенсуса валидаторов на уровне Heimdall Polygon. Оно также зависит от сети Ethereum. Чем больше загружена сеть, тем выше вероятность задержки в предоставлении контрольных точек.

Вы можете отслеживать checkpoint в контракте стейкинга [здесь](https://etherscan.io/address/0x86e4dc95c7fbdbf52e33d563bbdb00823894c287)

### Почему размер награды продолжает уменьшаться с каждым чекпоинтом? {#why-does-reward-keep-getting-decreased-every-checkpoint}

Реальный размер награды будет зависеть от фактического общего объема заблокированных средств в каждом чекпоинте. Ожидается, что размер награды будет сильно меняться по мере блокировки все большего количества токенов MATIC в контрактах на стейкинг.

Вначале размер награды будет больше, а затем он будет уменьшаться по мере увеличения процента заблокированных средств. Такое изменение заблокированных средств фиксируется в каждом чекпоинте, и на основании этого рассчитывается размер награды.

### Как получить награды? {#how-can-i-claim-my-rewards}

Вы можете мгновенно претендовать на свои награды, нажав на кнопку **Withdraw Reward**. Это позволит вам вывести накопленные награды на ваш делегированный аккаунт на MetaMask.

<div>
  <img src={useBaseUrl("/img/delegator-faq/withdraw-reward.png")} />
</div>

### Что такое период отвязки? {#what-is-the-unbonding-period}

Сейчас период отвязки на Polygon длится примерно 9 дней. Ранее он составлял 19 дней. Этот период применяется к первоначально делегированной сумме и re-delegated суммам, он не применяется к каким-либо вознаграждениям, которые не были повторно делегированы.

### Будут ли начисляться награды после отвязки? {#will-i-keep-receiving-rewards-after-i-unbond}

Нет. После вывода из облигации вы перестанете получать награды.

### Сколько транзакций требует делегирование? {#how-many-transactions-does-the-delegation-require}

Делегирование требует 2 транзакции, один за другим. Один для **утверждения** запроса, а другой - для **депозита**.

<div>
  <img src={useBaseUrl("/img/delegator-faq/delegate.png")} />
</div>

### Что означает повторное делегирование наград? {#what-does-redelegate-rewards-mean}

Redelegating ваших наград просто означает, что вы хотите увеличить свой пакет за счет восстановления накопленных вознаграждений.

### Можно ли размещать средства в стейкинге, предоставляя их любому валидатору? {#can-i-stake-to-any-validator}

Да. В настоящее время все валидаторы являются нодами Polygon Foundation.

Мы осуществляем поэтапное развертывание Polygon mainnet. В дальнейшем будут постепенно подключаться внешние валидаторы. Подробности можно узнать по ссылке https://blog.matic.network/mainnet-is-going-live-announcing-the-launch-sequence/.

### Какие браузеры совместимы с дашбордом стейкинга? {#which-browser-is-compatible-with-staking-dashboard}

Chrome, Firefox и Brave.

### Что делать, если MetaMask завис на этапе подтверждения после входа в систему или ничего не происходит при попытке войти в систему? {#my-metamask-is-stuck-at-confirming-after-login-what-do-i-do-or-nothing-happens-when-i-try-to-login}

Проверьте следующее:

- Если вы используете Brave, пожалуйста, выключите параметр для **использования кошельков Crypto** в панели настроек.
- Проверьте, вошли ли вы в MetaMask.
- Проверьте, вошли ли вы в MetaMask с помощью Trezor/Ledger. Вам нужно дополнительно включить разрешение на вызов контрактов на своем устройстве Ledger.
- Проверьте системную метку времени. Если системное время неправильное, исправьте его.

### Как отправлять средства с Binance или других бирж на кошелек Polygon? {#how-do-i-send-funds-from-binance-or-other-exchanges-to-polygon-wallet}

По сути, интерфейс кошелька / стейкинга Polygon — это просто web-приложение. В настоящее время он поддерживает следующие кошельки: Metamask, WalletConnect и WalletLink.

Во-первых, вы должны вывести свои средства из Binance или любой другой обмен на ваш адрес Ethereum в Metamask. Если вы не знаете, как пользоваться MetaMask, поищите ответ в Интернете. Есть множество видео и блогов о том, как начать работу с ним.

### Когда я могу стать валидатором и сколько токенов мне для этого? {#when-can-i-become-a-validator-and-how-many-tokens-do-i-for-that}

Пользователь может получить место валидатора только при выполнении следующих условий:
1. Когда валидатор решает удалить стейк из сети, или
2. После активации механизма аукциона и замене неактивного валидатора.

Минимальный размер стейка зависит от процесса аукциона, в рамках которого одни пользователи предлагают больше средств, чем другие.

### Что произойдет после получения наград во время делегирования и добавления дополнительных средств в тот же узел проверки? {#if-i-have-earned-rewards-while-delegating-and-if-i-add-additional-funds-to-the-same-validator-node-what-happens}

Если вы повторно не делегировали награды перед делегированием дополнительных средств в тот же узел проверки, ваши награды будут выведены автоматически.

Если вы не хотите этого, повторно делегируйте награды перед делегированием дополнительных средств.

### Токены были делегированы с помощью MetaMask на дашборд стейкинга. Нужно ли оставлять систему или устройство включенным? {#i-have-delegated-my-tokens-via-metamask-on-the-staking-dashboard-do-i-need-to-keep-my-system-or-device-on}

Нет. После подтверждения транзакций вашей Делегации вы можете увидеть ваши токены, отраженные в разделах **Total Stake** и **New Reward**, тогда вы будете готовы. Оставлять систему или устройство включенным не нужно.

### Я не скрепил, сколько времени займет Unbond? {#i-have-unbonded-how-long-will-it-take-to-unbond}

В настоящее время период отвязки равен 82 чекпоинтам. Это примерно 9 дней. Каждый чекпоинт длится примерно 34 минуты. Однако некоторые чекпоинты могут быть отложены приблизительно на 1 час из-за перегруженности Ethereum.

### Я не скрепился, и теперь я вижу кнопку стейка требования, но она отключена, почему это? {#i-have-unbonded-and-i-now-see-the-claim-stake-button-but-it-is-disabled-why-is-that}

Кнопка Claim Stake (получить стейк) будет работать только после окончания периода отвязки. В настоящее время период отвязки равен 82 чекпоинтам.

### Как узнать, когда заработает кнопка Claim Stake (получить стейк)? {#do-i-know-when-will-the-claim-stake-button-be-enabled}

Информацию о том, сколько осталось чекпоинтов до того, как заработает кнопка Claim Stake (получить стейк), находится под этой кнопкой. Каждый чекпоинт длится примерно 30 минут. Однако некоторые чекпоинты могут быть отложены приблизительно на 1 час из-за перегруженности Ethereum.

<div>
  <img src={useBaseUrl("/img/delegator-faq/unbond.png")} />
</div>

### Как перенести делегирование из нодов Polygon Foundation во внешние ноды? {#how-do-i-switch-my-delegation-from-foundation-nodes-to-external-nodes}

Перенести делегирование можно с помощью функции **Move Stake** (перенести стейк) в пользовательском интерфейсе стейкинга. Она позволит перенести делегирование из нода Polygon Foundation в любой внешний нод по вашему выбору.

<div align="center">
  <img src={useBaseUrl("/img/delegator-faq/move-stake.png")} width="500" />
</div>

Список других валидаторов увидит:

<div>
  <img src={useBaseUrl("/img/delegator-faq/validators.png")} />
</div>

### Предусмотрен ли период отвязки после переноса делегирования из нодов Polygon Foundation во внешние ноды? {#will-there-be-any-ubonding-period-when-i-switch-delegation-from-foundation-nodes-to-external-nodes}

При переносе делегирования из нодов Polygon Foundation во внешние ноды период отвязки не предусмотрен. Перенос будет прямым без каких-либо задержек. Однако при отвязке от нода Polygon Foundation или внешнего нода период отвязки предусмотрен.

### Есть ли какие-либо особенности выбора внешнего нода при переносе делегирования? {#are-they-any-specifics-to-choose-an-external-node-during-switch-delegation}

Нет. Вы можете выбрать любой нод на ваш выбор.

### Что произойдет с накопленными наградами при переносе делегирования из нода Polygon Foundation во внешний нод? {#what-happens-to-my-rewards-that-are-accumalated-if-i-switch-delegation-from-foundation-to-external-node}

После переноса делегирования из нода Polygon Foundation во внешний нод накопленные до этого момента награды будут обратно перенесены на ваш аккаунт.

### Устроено ли делегирование во внешних нодах так же, как в нодах Polygon Foundation? {#will-delegation-on-the-external-nodes-work-the-same-as-foundation-nodes}

Да, он будет работать так же, как и узлы Фонда.

### Будут ли начисляться награды после переноса делегирования во внешний нод? {#will-i-still-get-rewards-after-delegating-to-an-external-node}

Да, награды будут распределяться так же, как при делегировании в ноды Polygon Foundation. Награды начисляются после каждой отправки чекпоинта. Расчет и распределение наград в каждом чекпоинте осуществляются на основе соотношения стейка, как это реализовано в настоящее время.

### Предусмотрен ли период отвязки при отвязке от внешнего нода? {#will-there-be-any-unbonding-period-if-i-unbond-from-an-external-node}

Да, период отвязки будет таким же, как и в настоящее время. Он длится 82 чекпоинта.

### Предусмотрен ли период блокировки после переноса делегирования из нода Polygon Foundation во внешний нод? {#will-there-be-any-locking-period-after-i-switch-my-delegation-from-foundation-to-external-node}

Нет. После переноса делегирования период блокировки не предусмотрен.

### Можно ли частично перенести делегирование из нодов Polygon Foundation во внешние ноды? {#can-i-partially-switch-my-delegation-from-foundation-to-external-nodes}

Да, возможность частично перенести стейк из нода Polygon Foundation во внешний нод существует. Оставшаяся часть стейка будет храниться в ноде Polygon Foundation. Затем ее можно перенести в другой нод на ваш выбор или в тот же самый нод.

### Можно ли перенести делегирование из внешнего нода в другой внешний нод? {#can-i-switch-delegation-from-an-external-node-to-another-external-node}

Нет, функция **Move Stake** (перенести стейк) доступна только в нодах Polygon Foundation. Если нужно перенести делегирование из внешнего нода в другой внешний нод, вам необходимо сначала осуществить отвязку, а потом делегировать средства в другой внешний нод.

### Когда отключат ноды Polygon Foundation? {#when-will-the-foundations-node-be-turned-off}

Узлы фонда будут отключены к концу января 2021 года.

### Будут ли ноды Polygon Foundation доступны в будущем? {#will-there-be-any-foundation-nodes-in-the-future}

Нет, в будущем ноды Polygon Foundation будут недоступны.

### Сколько транзакций с оплатой комиссии за газ совершается при переносе стейка? {#how-many-transactions-do-i-need-to-pay-for-gas-when-i-do-a-move-stake}

Перенос стейка осуществляется в рамках одой транзакции. Все транзакции будут осуществляться в блокчейне Ethereum. Так, перенос стейка потребует некоторое количество ETH.