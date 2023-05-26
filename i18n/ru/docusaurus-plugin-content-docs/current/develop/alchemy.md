---
id: alchemy
title: Развернуть смарт-контракт с помощью Alchemy
sidebar_label: Using Alchemy
description: Руководство по развертыванию смарт-контрактов с использованием Alchemy
keywords:
  - docs
  - matic
  - polygon
  - alchemy
  - create smart contract
  - deploy on polygon
image: https://wiki.polygon.technology/img/polygon-wiki.png
---

## Обзор {#overview}

Данное руководство предназначено для разработчиков, которые либо недавно занимаются разработкой на блокчейне Ethereum, либо хотят понять основы развертывания смарт-контрактов и взаимодействия с ними. Он будет ходить через создание и развертывание смарт-контракта в тестовой сети Polygon Mumbai с использованием криптовалютного кошелька ([Metamask](https://metamask.io)), [Solidity](https://docs.soliditylang.org/en/v0.8.0/), [Hardhat](https://hardhat.org) и [Alchemy](https://alchemy.com/?a=polygon-docs).

:::tip

Если у вас есть вопросы или проблемы, пожалуйста, свяжитесь с командой Alchemy через их [<ins>официальный</ins>](https://discord.gg/gWuC7zB) сервер Discord.

:::

## Что вы узнаете {#what-you-will-learn}

Чтобы создать смарт-контракт в этом руководстве, вы узнаете, как с помощью платформы Alchemy решить следующие задачи:
- Создать приложение смарт-контракта
- Проверить баланс кошелька
- Проверка вызовов контракта в blockchain

## Что вы сделаете {#what-you-will-do}

Следуя данному руководству, вы сможете:
1. Приступить к созданию приложения на Alchemy
2. Создать адрес кошелька с Metamask
3. Добавить баланс в кошелек (с помощью тестовых токенов)
4. Использовать Hardhat и Ethers.js для компиляции и развертывания проекта
5. Проверить статус контракта на платформе Alchemy

## Создайте и запустите смарт-контракт {#create-and-deploy-your-smart-contract}

### Подключение к сети Polygon {#connect-to-the-polygon-network}

Существует несколько способов отправки заявок в цепочку Polygon PoS. Вместо запуска собственного нода вы будете использовать бесплатный аккаунт на платформе разработчиков Alchemy и взаимодействовать с Alchemy Polygon PoS API для связи с цепочкой Polygon PoS. Платформа состоит из полного набора инструментов разработчика: это включает возможность контролировать запросы, аналитику данных, которая демонстрирует происходящее в капюшоне при развертывании смарт-контракта, расширенные API (Transact, NFTs и т.д.) и SDK ethers.js.

Если у вас еще нет аккаунта Alchemy, начните с входа на бесплатный аккаунт [здесь](https://www.alchemy.com/polygon/?a=polygon-docs). После создания аккаунта у вас есть возможность сразу же создать свое первое приложение до перехода в дашборд.

![img](/img/alchemy/alchemy-dashboard.png)

### Создайте приложение (и ключ API) {#create-your-app-and-api-key}

После успешного создания аккаунта Alchemy вам необходимо будет сгенерировать ключ API, создавая приложение. Это подтверждает запросы, поступающие в тестовую сеть Polygon Mumbai. Если вы не знакомы с тестовыми сетями, ознакомьтесь с [этим руководством по тестовым сетям](https://docs.alchemyapi.io/guides/choosing-a-network).

Чтобы создать новый ключ API, перейдите на вкладку **Apps** в панели навигации панели мониторинга Alchemy, и выберите key, **Создать** приложения.

![img](/img/alchemy/create-app.png)

Назовите новое приложение **Hello World**, предложите короткое описание, выберите **Polygon** для цепочки, и выберите **Polygon Mumbai** для вашей сети.

Наконец, нажмите кнопку **Создать** приложение. Ваше новое приложение должно появиться в таблице ниже.

### Создать адрес кошелька {#create-a-wallet-address}

Polygon PoS — это решение для масштабирования слоя 2. Поэтому нам нужен кошелек Ethereum и добавить пользовательский URL-адрес Polygon, чтобы отправить и получать транзакции в testnet. Polygon Mumbai. Для этого урока мы будем использовать MetaMask, совместимый с браузером криптовалютный кошелек, используемый для управления адресом кошелька. Если вы хотите лучше разобраться в том, как работают транзакции на Ethereum, ознакомьтесь с [данным руководством по транзакциям](https://ethereum.org/en/developers/docs/transactions/), подготовленным Ethereum Foundation.

Чтобы получить свой пользовательский URL Polygon RPC из Alchemy, перейдите в приложение **Hello World** в вашей панели мониторинга Alchemy и нажмите **кнопку Просмотр Ключа** в правом верхнем углу. Затем скопируйте свой ключ Alchemy HTTP API.

![img](/img/alchemy/view-key.png)

Вы можете бесплатно загрузить и создать аккаунт Metamask [здесь](https://metamask.io/download.html). После того, как вы создали аккаунт, выполните следующие действия, чтобы настроить сеть Polygon PoS на вашем кошельке.

1. **Выберите параметры** из раскрывающегося меню в правом верхнем углу вашего кошелька MetaMask.
2. Выберите **Сети** в меню слева.
3. Подключите ваш кошелек к Mumbai Testnet с помощью следующих параметров:

**Название сети:** Polygon Mumbai Testnet

**Новый URL-адрес RPC:** https://polygon-mumbai.g.alchemy.com/v2/your-api-key

**ChainID:** 80001

**Символ:** MATIC

**Блок Explorer URL:** https://mumbai.polygonscan.com/


### Add Polygon Mumbai Test MATIC {#add-polygon-mumbai-test-matic}

Вам понадобится несколько токенов testnet, чтобы развернуть свой смарт-контракт в тестовой сети Mumbai. Чтобы получить токены testnet, перейдите в [кран Polygon](https://faucet.polygon.technology/) Mumbai, выберите **Mumbai**, выберите **MATIC Token** и введите адрес кошелька Polygon, затем нажмите **Отправить**. Благодаря сетевому трафику может занять некоторое время для получения токенов testnet.

Вы также можете использовать [бесплатный кран](https://mumbaifaucet.com/?a=polygon-docs) Alchemy.

![img](/img/alchemy/faucet.png)

Вскоре после этого вы увидите токены тестовой сети в своем аккаунте MetaMask.

### Проверьте баланс {#check-your-wallet-balance}

Чтобы убедиться в наличии остатка, давайте отправим заявку [eth\_getBalance](https://docs.alchemy.com/reference/eth-getbalance-polygon), воспользовавшись [компоновщиком Alchemy](https://composer.alchemyapi.io/). Выберите **Polygon** в качестве цепочки, **Polygon Mumbai** в качестве сети, `eth_getBalance`как метод и введите ваш адрес. В результате будет возвращено количество токенов MATIC в нашем кошельке. Посмотрите [это видео](https://youtu.be/r6sjRxBZJuU), в котором приводятся инструкции по использованию компоновщика.

![img](/img/alchemy/get-balance.png)

После того, как вы введите адрес аккаунта MetaMask и нажмите **Отправить запрос**, необходимо увидеть ответ, который выглядит следующим образом:

```json
{ "jsonrpc": "2.0", "id": 0, "result": "0xde0b6b3a7640000" }
```

:::info

Этот результат представлен в Wei, а не в ETH. Wei — это наименьшее наименование Ether. Конвертация из Wei в Ether: 1 Ether = 10^18 Wei. Таким образом, при преобразовании «0xde0b6b3a7640000» в десятичное число мы получаем 1\*10^18, что равно 1 ETH. Это можно сопоставить с 1 MATIC, если исходить из номинала.

:::

### Инициализация вашего проекта {#initialize-your-project}

Во-первых, необходимо будет создать папку для нашего проекта. Перейдите в [командную строку](https://www.computerhope.com/jargon/c/commandi.htm) и введите:

```bash
mkdir hello-world
cd hello-world
```

Теперь, находясь в папке проекта, используем `npm init`, чтобы инициализировать проект. Если у вас еще не установлен npm, следуйте [этим инструкциям](https://docs.alchemyapi.io/alchemy/guides/alchemy-for-macs#1-install-nodejs-and-npm) (нам также понадобится Node.js, так что загрузите его тоже).

```bash
npm init # (or npm init --yes)
```

Неважно, как вы ответите на вопросы в ходе установки; ниже для справки приводятся наши ответы:

```
package name: (hello-world)
version: (1.0.0)
description: hello world smart contract
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)

About to write to /Users/.../.../.../hello-world/package.json:

{   
   "name": "hello-world",
   "version": "1.0.0",
   "description": "hello world smart contract",
   "main": "index.js",
   "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
   },
   "author": "",
   "license": "ISC"
}
```

Утвердите package.json. Теперь можно начинать!

### Скачать [Hardhat](https://hardhat.org/getting-started/#overview)

Hardhat — это среда разработки для компилирования, развертывания, тестирования и отладки программного обеспечения Ethereum. Она помогает разрабатывать смарт-контракты и децентрализованные приложения локально перед их развертыванием в активной цепочке.

Внутри нашего `hello-world`проекта выполните:

```bash
npm install --save-dev hardhat
```

Ознакомьтесь с этой страницей, где представлены более подробные [инструкции по установке](https://hardhat.org/getting-started/#overview).

### Создать проект {#create-hardhat-project}

Внутри нашей папки проекта `hello-world` выполните команду:

```bash
npx hardhat
```

Чтобы выбрать то, что вы хотите сделать, необходимо увидеть сообщение и параметр. Выберите **создать пустой hardhat.config.js**:

```bash
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

👷 Welcome to Hardhat v2.0.11 👷‍

What do you want to do? …
Create a sample project
❯ Create an empty hardhat.config.js
Quit
```

Это будет генерировать `hardhat.config.js`файл для нас, где мы будем указать весь набор для нашего проекта.

### Добавить папки {#add-project-folders}

Чтобы наш проект был организован, мы создадим две новые папки. Перейдите в корневой каталог вашего проекта `hello-world` в командной строке и введите:

```bash
mkdir contracts
mkdir scripts
```

* `contracts/` — в этой папке мы будем хранить файл с кодом смарт-контракта hello world
* `scripts/` — в этой папке мы будем хранить скрипты для развертывания нашего контракта и взаимодействия с ним

### Написать контракт {#write-the-contract}

Откройте проект **hello-world** в вашем любимом редакторе, например [VSCode](https://code.visualstudio.com). Умные контракты написаны на языке Solidity, который мы будем использовать для записи нашего `HelloWorld.sol`смарт-контракта. ‌

1. Перейдите в `contracts`папку и создайте новый файл, называемый`HelloWorld.sol`
2. Ниже представлен образец смарт-контракта Hello World от [Ethereum Foundation](https://ethereum.org/en/), который мы будем использовать в этом руководстве. Скопируйте и вставьте приведенные ниже строки кода в ваш файл `HelloWorld.sol` и обязательно прочитайте комментарии, чтобы понять задачи, решаемые этим контрактом:

```solidity
// SPDX-License-Identifier: None

// Specifies the version of Solidity, using semantic versioning.
// Learn more: https://solidity.readthedocs.io/en/v0.5.10/layout-of-source-files.html#pragma
pragma solidity >=0.8.9;

// Defines a contract named `HelloWorld`.
// A contract is a collection of functions and data (its state). Once deployed, a contract resides at a specific address on the Ethereum blockchain. Learn more: https://solidity.readthedocs.io/en/v0.5.10/structure-of-a-contract.html
contract HelloWorld {

   //Emitted when update function is called
   //Smart contract events are a way for your contract to communicate that something happened on the blockchain to your app front-end, which can be 'listening' for certain events and take action when they happen.
   event UpdatedMessages(string oldStr, string newStr);

   // Declares a state variable `message` of type `string`.
   // State variables are variables whose values are permanently stored in contract storage. The keyword `public` makes variables accessible from outside a contract and creates a function that other contracts or clients can call to access the value.
   string public message;

   // Similar to many class-based object-oriented languages, a constructor is a special function that is only executed upon contract creation.
   // Constructors are used to initialize the contract's data. Learn more:https://solidity.readthedocs.io/en/v0.5.10/contracts.html#constructors
   constructor(string memory initMessage) {

      // Accepts a string argument `initMessage` and sets the value into the contract's `message` storage variable).
      message = initMessage;
   }

   // A public function that accepts a string argument and updates the `message` storage variable.
   function update(string memory newMessage) public {
      string memory oldMsg = message;
      message = newMessage;
      emit UpdatedMessages(oldMsg, newMessage);
   }
}
```

Это сверхпростой смарт-контракт, который сохраняет сообщение после создания и может быть обновлен путем вызова функции `update`.

### Подключение к MetaMask и Alchemy {#connect-with-metamask-alchemy}

Мы создали кошелек Metamask, аккаунт Alchemy и написали смарт-контракт. Теперь пришло время подключить три этих компонента.

Каждая транзакция, отправляемая из вашего виртуального кошелька, требует наличия подписи с использованием уникального приватного ключа. Чтобы предоставить нашей программе данное разрешение, мы можем безопасно сохранить приватный ключ (и ключ Alchemy API) в файле среды.

Во-первых, установите пакет dotenv в каталог проекта:

```bash
npm install dotenv --save
```

Затем создайте файл `.env` в корневом каталоге проекта и добавьте в него свой приватный ключ Metamask и HTTP Alchemy API URL.

:::warning Предупреждение

Ваш файл среды должен быть назван `.env`или он не будет признан как файл окружения. Не следует давать ему имя `process.env` или `.env-custom`, или какое-либо иное имя.

Кроме того, если вы используете систему управления версиями, такую как git, для управления проектом, пожалуйста, **НЕ** отслеживайте `.env`файл. Добавьте `.env`в ваш `.gitignore`файл, чтобы избежать публикации секретных данных.

:::

* Следуйте [этим инструкциям](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key), чтобы экспортировать свой приватный ключ
* Чтобы получить ключ Alchemy HTTP API (URL-адрес RPC), перейдите в приложение **Hello World** на панели мониторинга вашего аккаунта и нажмите **кнопку Просмотр Ключа** в правом верхнем углу.

Ваш файл `.env` должен выглядеть следующим образом:

```
API_URL = "https://polygon-mumbai.g.alchemy.com/v2/your-api-key"
PRIVATE_KEY = "your-metamask-private-key"
```

Чтобы фактически подключить их к нашему коду, мы будем ссылаться на эти переменные в нашем `hardhat.config.js`файле позже в этом учебнике.

### Установите Ethers.js {#install-ethers-js}

Ethers.js — это библиотека, которая упрощает взаимодействие и отправку заявок в Ethereum за счет упаковки [стандартных методов JSON-RPC](https://docs.alchemyapi.io/alchemy/documentation/alchemy-api-reference/json-rpc) с более удобными методами.

Hardhat облегчает интеграцию [плагинов](https://hardhat.org/plugins/) с целью обеспечения дополнительных инструментальных средств и расширения функциональных возможностей. Мы воспользуемся [плагином Ethers](https://hardhat.org/plugins/nomiclabs-hardhat-ethers.html) для развертывания контракта. [Ethers.js](https://github.com/ethers-io/ethers.js/) предусматривает полезные методы развертывания контракта.

В директории проекта введите следующее:

```bash
npm install --save-dev @nomiclabs/hardhat-ethers "ethers@^5.0.0"
```

Нам также потребуются эфиры в `hardhat.config.js` на следующем шаге.

### Обновление hardhat.config.js {#update-hardhat-config-js}

Мы добавили несколько зависимостей и плагинов. Теперь нам необходимо обновить, `hardhat.config.js`чтобы наш проект распознал эти зависимости.

Обновите скрипт `hardhat.config.js`, чтобы он приобрел следующий вид:

```javascript
/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.9",
   defaultNetwork: "polygon_mumbai",
   networks: {
      hardhat: {},
      polygon_mumbai: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
}
```

### Compile our Smart Contract {#compile-our-smart-contract}

Чтобы убедиться в работоспособности кода, давайте скомпилируем наш контракт. Задача `compile` является одной из встроенных задач hardhat.

Из командной строки запустите команду:

```bash
npx hardhat compile
```

Возможно, вам будет предложено `SPDX license identifier not provided in source file`предупредить, но приложение все равно будет работать нормально. В противном случае вы всегда можете отправить сообщение в [Discord Alchemy](https://discord.gg/u72VCg3).

### Напишите наш скрипт {#write-our-deploy-script}

Теперь, когда контракт написан, а файл конфигурации готов, пришло время написать скрипт развертывания контракта.

Перейдите в папку `scripts/` и создайте новый файл с именем `deploy.js`, добавив в него следующие строки:

```javascript
async function main() {
   const HelloWorld = await ethers.getContractFactory("HelloWorld");

   // Start deployment, returning a promise that resolves to a contract object
   const hello_world = await HelloWorld.deploy("Hello World!");   
   console.log("Contract deployed to address:", hello_world.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
```

Мы заимствовали пояснения команды разработчиков Hardhat в отношении того, что делает каждая строка этого кода, из их [руководства по контрактам](https://hardhat.org/tutorial/testing-contracts.html#writing-tests).

```javascript
const HelloWorld = await ethers.getContractFactory("HelloWorld");
```

`ContractFactory` в ethers.js — это абстракция, используемая для развертывания новых смарт-контрактов, поэтому `HelloWorld` здесь является [фабрикой классов](https://en.wikipedia.org/wiki/Factory\_\(object-oriented\_programming\)) для экземпляров нашего контракта hello world. При использовании `ContractFactory` и `Contract` в плагине `hardhat-ethers` экземпляры подключаются по умолчанию к первому подписавшему лицу (владельцу).

```javascript
const hello_world = await HelloWorld.deploy();
```

При вызове функции `deploy()` на `ContractFactory` начинается развертывание, при этом возвращается `Promise`, которое разрешается в объект `Contract`. Это объект, в котором имеется метод для каждой из функций нашего смарт-контракта.

### Развернуть наш смарт-контракт {#deploy-our-smart-contract}

Перейдите в командную строку и запустите команду:

```bash
npx hardhat run scripts/deploy.js --network polygon_mumbai
```

Вы должны увидеть что-то подобное:

```bash
Contract deployed to address: 0x3d94af870ED272Cd5370e4135F9B2Bd0e311d65D
```

Если мы пойдем в [Polygon Mumbai explorer](https://mumbai.polygonscan.com/) и найдем наш адрес контракта, мы должны иметь возможность убедиться, что он был успешно развернут.

`From`Адрес должен соответствовать вашему аккаунту MetaMask, а `To`адрес будет сказать **Contract Creation.** Но если мы нажмете в транзакцию, мы увидим наш адрес контракта в `To`поле.

![img](/img/alchemy/polygon-scan.png)

### Проверьте контракт {#verify-the-contract}

Alchemy предоставляет [исследователь,](https://dashboard.alchemyapi.io/explorer) где вы можете найти информацию о методах, развернутых вместе со смарт-контрактом, таких как время ответа, статус HTTP, коды ошибок. Это хорошая среда для проверки контракта и успешного прохождения транзакций.

![img](/img/alchemy/calls.png)

**Поздравляем! Вы только что разместили смарт-контракт в сети Polygon Mumbai.**

## Дополнительные ресурсы {#additional-resources}

- [Как разработать смарт-контракт NFT](https://docs.alchemy.com/docs/how-to-develop-an-nft-smart-contract-erc721-with-alchemy) — Alchemy имеет письменный учебник с видео Youtube на эту тему. Это неделя 1 из его бесплатного 10 неделя **Road to Web3** dev series
- [Polygon API Quickstart](https://docs.alchemy.com/reference/polygon-api-quickstart) — разработчик Alchemy предоставляет руководство по созданию и работе с Polygon
