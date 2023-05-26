---
id: widget
title: Виджет кошелька
sidebar_label: Wallet Widget
description: "Инструменты пользовательского интерфейса для выполнения транзакций моста."
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Виджет кошелька — это инструмент пользовательского интерфейса, который можно встроить в любое веб-приложение для выполнения транзакций моста — депозита и вывода.

Каждый виджет идентифицируется по уникальному имени, которое можно получить из [дашборда виджета](https://wallet.polygon.technology/widget-dashboard) .

### Дашборд виджета {#widget-dashboard}

Виджет можно создать на странице дашборда виджета в приложении кошелька. Он позволяет пользователю создать новый виджет с пользовательскими опциями.

После создания виджета вы можете скопировать фрагмент кода и добавить его в приложение или использовать имя виджета и настроить его самостоятельно.

Вот ссылка на дашборд виджета -

* mainnet - https://wallet.polygon.technology/widget-dashboard
* тестовая сеть - https://wallet-dev.polygon.technology/widget-dashboard

## Установка {#install}

Виджет экспортируется как библиотека javascript и доступен как пакет npm.

```bash
npm i @maticnetwork/wallet-widget
```

## Примеры {#examples}

Мы создали примеры из разных инфраструктур и инструментов, чтобы оказать вам помощь в разработке. Все примеры можно найти здесь: [https://github.com/maticnetwork/wallet-widget-example](https://github.com/maticnetwork/wallet-widget-example)

## Как использовать {#how-to-use}
### С целью {#with-target}

Допустим, у вас в приложении есть кнопка, и вы хотите показать виджет при нажатии на эту кнопку -

```html
<button id="btnMaticWidget"></btn>
```

```javascript
import { Widget } from "@maticnetwork/wallet-widget";

var widget = new Widget({
    appName: "<widget name>", //widget name from dashboard
    target: '#btnMaticWidget', // element selector for showing widget on click
    network: 'mainnet' // network to be used - testnet or mainnet
});
```

Создайте виджет, когда будете готовы. Лучше всего вызвать функцию создания после загрузки документа.

```javascript
await widget.create();
```
Виджет создан, и теперь следует нажать на кнопку, после чего появится виджет.

### Без цели {#without-target}

```javascript
import { Widget } from "@maticnetwork/wallet-widget";

var widget = new Widget({
    appName: "<widget name>", //widget name from dashboard
    network: 'mainnet' // network to be used - testnet or mainnet
});

await widget.create();
```

виджет уже создан, но для отображения виджета вам потребуется вызвать `show` API.

```
widget.show();
```

Точно так же вы можете скрыть виджет, вызвав `hide` API.

```
widget.hide();
```

### Важное замечание 👉 {#important-note}

1. В зависимости от типа сети (тестовая сеть или mainnet) вам потребуется создать приложение в соответствующем дашборде. Мы рекомендуем создать приложение с одинаковым именем в тестовой сети и mainnet, так что у вас не будет проблем при смене сети.

2. Виджет кошелька — это библиотека пользовательского интерфейса, и на разных сайтах он будет выглядеть по-разному и может иметь разные проблемы, в том числе с цветами, быстродействием и т. д. Поэтому желательно выделить время на тестирование и персонализацию. Если требуется какая-либо помощь, обратитесь в [команду поддержки](https://support.polygon.technology/).

3. Виджет кошелька отображается на полный экран на мобильных устройствах, но это можно настроить посредством конфигурации `style`.

## Конфигурация {#configuration}

Конфигурация может передаваться в конструкторе виджета.

## Доступные конфигурации {#available-configuration-are}

- **target** : строка-селектор CSS для отображения виджета при нажатии на элемент. Например, "#btnMaticWidget" будет целью в коде ниже.

```javascript
<button id="btnMaticWidget">Matic widget</button>
```

- **network** : строка - используемая сеть. Доступны два варианта - тестовая сеть и mainnet.
- **width** : число - ширина виджета
- **height** : число - высота виджета
- **autoShowTime** : число - автоматическое отображение виджета после указанного периода времени в миллисекундах
- **appName** : строка - имя вашего приложения, которое можно получить на дашборде виджета.
- **position** : строка - устанавливает позицию виджета. Доступные опции -
    - center
    - bottom-right
    - bottom-left
- **amount** : строка - введите количество в текстовое поле
- **page** : строка - выберите страницу. Доступные опции - `withdraw`, `deposit`.
- **overlay** : логический оператор - показывать оверлей при открытии виджета. По умолчанию имеет значение false.
- **style** : object - применяет некоторые стили css к виджету.

```
var widget = new MaticWidget({
    appName: "<your app id>", //appName from dashboard
    target: '#btnMaticWidget', // element selector for showing widget on click
    network: 'testnet' // network to be used - testnet or mainnet,
    style:{
      color:'red'
    }
});
```

## События {#events}

Widget выдает некоторые события, которые можно использовать, чтобы узнать, что происходит внутри приложения.

### Подписаться на события {#subscribe-to-events}

```javascript
widget.on('load',()=>{
  console.log('widget is loaded');
})
```

### Отменить подписку на события {#unsubscribe-to-events}

```javascript
widget.off('load',<callback>)
```

> Обратный вызов должен быть аналогичным тому, который был использован при подписке на событие. Поэтому обратный вызов лучше хранить внутри переменной. `

## Список событий: {#list-of-events}

- **load** - виджет загружен
- **close** - виджет закрыт
- **approveInit** - транзакция одобрения инициализирована
- **approveComplete** - транзакция одобрения выполнена
- **approveError** - произошла ошибка транзакции одобрения в связи с определенной ошибкой, или пользователь отклонил транзакцию в Metamask
- **depositInit** - инициализирована транзакция депозита
- **depositComplete** - транзакция депозита выполнена
- **depositError** - не удалось выполнить транзакцию депозита в связи с какой-то ошибкой, или пользователь отклонил транзакцию завершения депозита в Metamask
- **burnInit** - инициализируется транзакция сжигания при выводе
- **burnComplete** - транзакция сжигания при выводе завершена
- **confirmWithdrawInit** - для вывода создается checkpoint и инициализируется транзакция подтверждения
- **confirmWithdrawComplete** - транзакция подтверждения вывода выполнена
- **confirmWithdrawError** - не удалось выполнить транзакцию подтверждения из-за ошибки или пользователь отклонил транзакцию подтверждения вывода в Metamask
- **exitInit** - транзакция выхода из вывода инициализирована
- **exitComplete** - транзакция выхода из вывода выполнена
- **exitError** - Не удалось выполнить транзакцию выхода из-за ошибки или пользователь отклонил транзакцию выхода из вывода в Metamask

## APIS {#apis}

- **show** -
показать виджет

```javascript
widget.show()
```

- **hide** -
скрыть виджет

```javascript
widget.hide()
```

- **on** -
подписаться на события

```javascript
widget.on('<event name>', callback)
```

- **off** -
отменить подписку на события

```javascript
widget.off('<event name>', callback)
```
