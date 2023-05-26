---
id: alchemy
title: অ্যালকেমি ব্যবহার করে একটি স্মার্ট চুক্তি স্থাপন করুন
sidebar_label: Using Alchemy
description: অ্যালকেমি ব্যবহার করে স্মার্ট চুক্তি deploy  করার গাইড
keywords:
  - docs
  - matic
  - polygon
  - alchemy
  - create smart contract
  - deploy on polygon
image: https://wiki.polygon.technology/img/polygon-wiki.png
---

## সংক্ষিপ্ত বিবরণ {#overview}

এই টিউটোরিয়ালটি হলো সেসকল ডেভেলপারদের জন্য যারা হয় Ethereum ব্লকচেইন ডেভেলপমেন্টের ক্ষেত্রে নতুন অথবা স্মার্ট চুক্তি ডিপ্লয় করা এবং এর সাথে ইন্টারেক্ট করার বিষয়টি বুঝতে চান। এটি একটি ক্রিপ্টোকারেন্সি ওয়ালেট ([Metamask](https://metamask.io)), [সলিডিটি](https://docs.soliditylang.org/en/v0.8.0/), [Hardhat](https://hardhat.org), এবং [Alchemy](https://alchemy.com/?a=polygon-docs) ব্যবহার করে Polygon Mumbai পরীক্ষার নেটওয়ার্কে একটি স্মার্ট চুক্তি তৈরি এবং deploying মাধ্যমে আপনাকে walk ে যাবে।

:::tip

আপনার যদি প্রশ্ন বা উদ্বেগ থাকে, তাহলে দয়া করে তাদের [<ins>অফিসিয়াল Discord</ins>](https://discord.gg/gWuC7zB) সার্ভারের মাধ্যমে Alchemy টি-এ পৌঁছা. ।

:::

## আপনি কী শিখবেন {#what-you-will-learn}

এই টিউটোরিয়ালে একটি স্মার্ট চুক্তি তৈরি করার জন্য, কীভাবে আপনাকে Alchemy-র প্ল্যাটফর্ম ব্যবহার করতে হয় তা আপনি শিখবেন:
- একটি স্মার্ট কন্ট্রাক্ট অ্যাপ্লিকেশন তৈরি করুন
- একটি ওয়ালেটের ব্যালেন্স চেক করুন
- একটি blockchain এক্সপ্লোরার মধ্যে চুক্তি কল যাচাই করুন

## আপনি কী করবেন {#what-you-will-do}

টিউটোরিয়ালের পরে, আপনি পারবেন:
1. Alchemy-তে একটি অ্যাপ তৈরি করা শুরু করতে
2. Metamask-এর মাধ্যমে ওয়ালেট তৈরি করতে
3. ওয়ালেটে ব্যালেন্স যোগ করুন (পরীক্ষার টোকেন ব্যবহার করে)
4. প্রজেক্ট কম্পাইল এবং ডিপ্লয় করার জন্য Hardhat এবং Ethers.js ব্যবহার করতে
5. Alchemy প্লাটফর্মে চুক্তি স্ট্যাটাস চেক করুন

## আপনার স্মার্ট কন্ট্রাক তৈরি করুন এবং Deploy  করুন {#create-and-deploy-your-smart-contract}

### Polygon নেটওয়ার্কের সাথে সংযোগ করুন {#connect-to-the-polygon-network}

Polygon PoS চেইনে অনুরোধ করার জন্য বিভিন্ন উপায় রয়েছে। আপনার নিজের নোড চালানোর পরিবর্তে আপনি Alchemy-র ডেভেলপার প্ল্যাটফর্মে একটি ফ্রি অ্যাকাউন্ট ব্যবহার করবেন এবং Polygon PoS চেইনে যোগাযোগ করার জন্য Alchemy Polygon PoS API-এর সাথে ইন্টারেক্ট করবেন। প্ল্যাটফর্মটি ডেভেলপার tooling একটি সম্পূর্ণ স্যুট ধারণ করে - এতে রয়েছে অনুরোধ, ডেটা অ্যানালাইটিক্সের মনিটর করার ক্ষমতা, যা কিনা স্মার্ট চুক্তি deployment, চলাকালীন হুডের অধীনে কী ঘটবে, তা প্রদর্শন করে, উন্নত API (Transact, NFTs, ইত্যাদি), এবং একটি ethers.js SDK।

আপনার যদি ইতিমধ্যে একটি অ্যালকেমি অ্যাকাউন্ট না থাকলে, [তাহলে এখানে](https://www.alchemy.com/polygon/?a=polygon-docs) একটি ফ্রি অ্যাকাউন্টের জন্য সাইন আপ করে শুরু করুন। আপনার অ্যাকাউন্ট তৈরি করার পরে, ড্যাশবোর্ড যাওয়ার আগে আপনার প্রথম অ্যাপটি অবিলম্বে তৈরি করার সুযোগ রয়েছে।

![img](/img/alchemy/alchemy-dashboard.png)

### আপনার অ্যাপ তৈরি করুন (এবং API কী) {#create-your-app-and-api-key}

একটি অ্যালকেমি অ্যাকাউন্ট সফলভাবে তৈরি করার পরে, আপনাকে একটি অ্যাপ তৈরি করে একটি API কী তৈরি করতে হবে। এটি Polygon Mumbai testnet-এ তৈরি অনুরোধটি অনুমোদন করে। যদি আপনি টেস্টনেটের সাথে পরিচিত না হন, তাহলে [এই টেস্টনেট নির্দেশনাটি](https://docs.alchemyapi.io/guides/choosing-a-network) দেখুন।

একটি নতুন API কী তৈরি করতে, Alchemy ড্যাশবোর্ড ন্যাভিগেশন বারে **Apps** ট্যাবে navigate এবং **Create App** sub-tab. নির্বাচন করুন।

![img](/img/alchemy/create-app.png)

আপনার নতুন অ্যাপ্লিকেশন **হ্যালো World**, নাম করুন, একটি সংক্ষিপ্ত বিবরণ অফার করুন, চেইনের জন্য **Polygon** নির্বাচন করুন, এবং আপনার নেটওয়ার্কের জন্য **Polygon Mumbai** চয়ন করুন।

অবশেষে, **তৈরি করুন** অ্যাপটিতে ক্লিক করুন। আপনার নতুন অ্যাপ্লিকেশন নীচের টেবিলে প্রদর্শিত হবে।

### একটি Wallet ঠিকানা তৈরি করুন {#create-a-wallet-address}

Polygon PoS হল Ethereum-এর জন্য একটি লেয়ার 2 স্কেলিং সমাধান। তাই আমাদের একটি Ethereum ওয়ালেট প্রয়োজন এবং Polygon Mumbai testnet-এ লেনদেন পাঠাতে এবং পাবেন একটি কাস্টম Polygon URL যোগ করতে হবে। এই টিউটোরিয়াল, আমরা আপনার ওয়ালেট ঠিকানা পরিচালনা করতে ব্যবহৃত একটি browser-compatible cryptocurrency ওয়ালেট MetaMask ব্যবহার করব। Ethereum-এ লেনদেনগুলো কীভাবে কাজ করে সে বিষয়ে আপনি যদি আরো বুঝতে চান, তাহলে Ethereum ফাউন্ডেশনের তৈরি [এই লেনদেনের নির্দেশিকাটি](https://ethereum.org/en/developers/docs/transactions/) দেখুন।

Alchemy থেকে আপনার কাস্টম Polygon RPC URL পেতে আপনার Alchemy ড্যাশবোর্ডে আপনার **Hello World** অ্যাপ্লিকেশনে যান এবং উপরের ডানদিকের in **দেখুন কী** ক্লিক করুন। তারপর সামনে এগিয়ে যান এবং আপনার Alchemy HTTP API কী-টি কপি করুন।

![img](/img/alchemy/view-key.png)

আপনি [এখান থেকে](https://metamask.io/download.html) বিনামূল্যে একটি Metamask অ্যাকাউন্ট ডাউনলোড এবং তৈরি করতে পারবেন। একবার আপনি একটি অ্যাকাউন্ট তৈরি করলে, আপনার ওয়ালেটে Polygon PoS নেটওয়ার্ক সেট আপ করতে এই পদক্ষেপটি অনুসরণ করুন।

1. আপনার MetaMask ওয়ালেটের উপরের ডান কোণে ড্রপ-ডাউন মেনুতে **সেটিংস** নির্বাচন করুন।
2. বামে মেনুর নেটওয়ার্ক **নির্বাচন** করুন।
3. নিম্নলিখিত প্যারামিটারগুলো ব্যবহার করে আপনার ওয়ালেটটি মুম্বাই Testnet এ সংযুক্ত করুন:

**নেটওয়ার্ক নাম:** Polygon Mumbai Testnet

**নতুন RPC URL:** https://polygon-mumbai.g.alchemy.com/v2/your-api-key

**ChainID:** 80001

**সিম্বল:** MATIC

**ব্লক এক্সপ্লোরার URL:** https://mumbai.polygonscan.com/


### Polygon Mumbai Test {#add-polygon-mumbai-test-matic}

মুম্বাই testnet-এ আপনার স্মার্ট চুক্তি স্থাপন করতে আপনাকে কয়েকটি testnet টোকেন প্রয়োজন হবে। testnet টোকেন পাওয়ার জন্য, [Polygon Mumbai Faucet](https://faucet.polygon.technology/) এ যান, **Mumbai** নির্বাচন করুন, **MATIC Token** নির্বাচন করুন এবং আপনার Polygon ওয়ালেট ঠিকানা প্রবেশ করুন, তারপর **সাবমিট** ক্লিক করুন। নেটওয়ার্ক ট্র্যাফিক কারণে, আপনার testnet টোকেন পাওয়ার জন্য কিছু সময় লাগতে পারে।

আপনি Alchemy [এর ফ্রি মুম্বাই কল](https://mumbaifaucet.com/?a=polygon-docs) ব্যবহার করতে পারেন।

![img](/img/alchemy/faucet.png)

আপনি শীঘ্রই আপনার MetaMask অ্যাকাউন্টে টেস্টনেট টোকেন দেখতে পাবেন।

### আপনার Wallet ব্যালেন্স চেক করুন {#check-your-wallet-balance}

আমাদের ব্যালেন্স সেখানে আছে কি না তা দুবার পরীক্ষা করার পর, চলুন একটি [eth\_getBalance](https://docs.alchemy.com/reference/eth-getbalance-polygon) করা যাক, [Alchemy-এর কম্পোজার টুল](https://composer.alchemyapi.io/) ব্যবহার করে। চেইন, নেটওয়ার্ক হিসাবে **Polygon****** বেছে নিন, `eth_getBalance`পদ্ধতি, এবং আপনার ঠিকানা ইনপুট করুন। এটি আমাদের ওয়ালেটে MATIC-এর পরিমাণ ফেরত দেবে। কম্পোজার টুল কীভাবে ব্যবহার করতে হবে সে বিষয়ে নির্দেশাবলী পেতে [এই ভিডিওটি](https://youtu.be/r6sjRxBZJuU) দেখুন।

![img](/img/alchemy/get-balance.png)

আপনি আপনার MetaMask অ্যাকাউন্ট ঠিকানা ইনপুট করার পরে এবং **Send**  click ক্লিক করুন, আপনাকে একটি প্রতিক্রিয়া দেখতে হবে যা এই মত দেখায়:

```json
{ "jsonrpc": "2.0", "id": 0, "result": "0xde0b6b3a7640000" }
```

:::info

এই ফলাফলটি Wei-তে হয়, ETH-এ নয়। ওয়েই হল Ether-এর ক্ষুদ্রতম গণনা। Wei থেকে Ether-এ রূপান্তর: 1 Ether = 10^18 Wei। সুতরাং, আমরা যদি "0xde0b6b3a7640000"-কে দশমিকে রূপান্তর করি, তাহলে আমরা 1\*10^18 পাই, যা 1 ETH-এর সমান। ডিনোমিনেশনের উপর ভিত্তি করে এটি 1 MATIC-এ ম্যাপ করা যেতে পারে।

:::

### আপনার প্রকল্প চালু করুন {#initialize-your-project}

প্রথমত, আমাদের প্রকল্পের জন্য আমাদেরকে একটি ফোল্ডার তৈরি করতে হবে। আপনার [কমান্ড লাইনে](https://www.computerhope.com/jargon/c/commandi.htm) ন্যাভিগেট করুন এবং লিখুন:

```bash
mkdir hello-world
cd hello-world
```

এখন আমরা আমাদের প্রজেক্ট ফোল্ডারের ভেতরে আছি, তাই প্রজেক্টটি শুরু করার জন্য আমরা `npm init` ব্যবহার করব। যদি ইতোমধ্যে আপনার npm ইনস্টল করা না থাকে, তবে [এই নির্দেশাবলী](https://docs.alchemyapi.io/alchemy/guides/alchemy-for-macs#1-install-nodejs-and-npm) অনুসরণ করুন (আমাদের Node.js-এরও দরকার হবে, তাই এটিও ডাউনলোড করুন!)।

```bash
npm init # (or npm init --yes)
```

আপনি কীভাবে ইনস্টলেশন প্রশ্নের উত্তর দিচ্ছেন তা সত্যিই ব্যাপার না, আমরা এটি কীভাবে করেছি তা এখানে রেফারেন্স হিসেবে দেওয়া হলো:

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

package.json অনুমোদন করুন এবং আমরা এখন শুরু করতে পারি!

### [Hardhat](https://hardhat.org/getting-started/#overview) ডাউনলোড করুন

Hardhat হলো আপনার Ethereum সফটওয়্যার কম্পাইল, ডিপ্লয়, টেস্ট ও ডিবাগ করার জন্য ডেভেলপমেন্টের একটি পরিবেশ। লাইভ চেইনে ডিপ্লয় করার আগে এটি স্থানীয়ভাবে স্মার্ট চুক্তি এবং dApps তৈরি করার ক্ষেত্রে ডেভেলপারদের সাহায্য করে।

আমাদের `hello-world`প্রকল্পের ভিতর রান:

```bash
npm install --save-dev hardhat
```

[ইনস্টলেশনের নির্দেশাবলী](https://hardhat.org/getting-started/#overview) সম্পর্কে আরো বিস্তারিত জানার জন্য এই পেজটি দেখুন।

### Hardhat প্রকল্প তৈরি করুন {#create-hardhat-project}

আমাদের `hello-world` প্রজেক্ট ফোল্ডারের ভেতরে, রান করুন:

```bash
npx hardhat
```

আপনি কি করতে চান তা নির্বাচন করার জন্য আপনাকে একটি স্বাগত বার্তা এবং বিকল্প দেখতে হবে। একটি **খালি hardhat.config.js তৈরি করুন** তা নির্বাচন করুন:

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

এটি আমাদের জন্য একটি `hardhat.config.js`ফাইল তৈরি করবে, যা হচ্ছে যেখানে আমরা আমাদের প্রকল্পের জন্য সমস্ত সেট আপ নির্দিষ্ট করব।

### প্রজেক্ট ফোল্ডার যোগ করুন {#add-project-folders}

আমাদের প্রকল্প সংগঠিত রাখতে আমরা দুটি নতুন ফোল্ডার তৈরি করব। আপনার কমান্ড লাইনে আপনার `hello-world` প্রজেক্টের রুট ডিরেক্টরিতে ন্যাভিগেট করুন এবং লিখুন:

```bash
mkdir contracts
mkdir scripts
```

* `contracts/`-এ আমরা আমাদের হ্যালো ওয়ার্ল্ড স্মার্ট চুক্তির কোড ফাইলটি রাখব
* `scripts/`-এ আমরা আমাদের চুক্তি ডিপ্লয় করতে ও তার সাথে ইন্টারেক্ট করতে স্ক্রিপ্টগুলো রাখবো

### চুক্তি লিখুন {#write-the-contract}

আপনার প্রিয় এডিটরে **hello-world** প্রজেক্ট খুলুন যেমন [VSCode](https://code.visualstudio.com). স্মার্ট কন্ট্রাক Solidity নামে একটি ভাষায় লেখা হচ্ছে যা হচ্ছে আমরা আমাদের `HelloWorld.sol`স্মার্ট কন্ট্রাক লিখতে চাই।

1. `contracts`ফোল্ডারে যান এবং একটি নতুন ফাইল তৈরি করুন`HelloWorld.sol`
2. নিচে [Ethereum ফাউন্ডেশন](https://ethereum.org/en/) থেকে প্রাপ্ত একটি নমুনা Hello World স্মার্ট চুক্তি রয়েছে, যা আমরা এই টিউটোরিয়ালের জন্য ব্যবহার করব। আপনার `HelloWorld.sol` ফাইলে নিচের বিষয়বস্তু কপি ও পেস্ট করুন এবং এই চুক্তিটি কী করে তা বুঝতে মন্তব্যগুলো পড়তে ভুলবেন না:

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

এটি একটি অতি সহজ স্মার্ট চুক্তি, যা তৈরি করার পর একটি মেসেজ সংরক্ষণ করে এবং `update` ফাংশন কল করার মাধ্যমে আপডেট করা যেতে পারে।

### MetaMask এবং Alchemy {#connect-with-metamask-alchemy}

আমরা একটি Metamask ওয়ালেট, Alchemy অ্যাকাউন্ট তৈরি করেছি এবং আমাদের স্মার্ট চুক্তি লিখেছি, এখন এই তিনটিকে সংযুক্ত করতে হবে।

আপনার ভার্চুয়াল ওয়ালেট থেকে প্রেরিত প্রতিটি লেনদেনের জন্য আপনার অনন্য প্রাইভেট কী ব্যবহার করে তৈরি একটি স্বাক্ষরের প্রয়োজন। আমাদের প্রোগ্রামকে এই অনুমতি প্রদানের জন্য, আমরা একটি এনভায়রনমেন্ট ফাইলে আমাদের প্রাইভেট কী (এবং Alchemy API কী) নিরাপদে সংরক্ষণ করতে পারি।

প্রথমত, আপনার প্রজেক্ট ডিরেক্টরিতে dotenv প্যাকেজ ইনস্টল করুন:

```bash
npm install dotenv --save
```

তারপরে, আমাদের প্রজেক্টের রুট ডিরেক্টরিতে একটি `.env` ফাইল তৈরি করুন এবং এতে আপনার Metamask প্রাইভেট কী এবং HTTP Alchemy API URL যোগ করুন।

:::warning সতর্কতা

আপনার environment ার ফাইল নাম রাখা আবশ্যক `.env`বা এটি won't ফাইল হিসেবে স্বীকৃতি পাবেন না। এর নাম `process.env` বা `.env-custom` বা অন্য কিছু দেবেন না।

এছাড়াও, যদি আপনি আপনার প্রজেক্টের পরিচালনা করতে git মত একটি সংস্করণ কন্ট্রোল সিস্টেম ব্যবহার করছেন, তাহলে অনুগ্রহ করে ফাইল ট্র্যাক **করবেন** `.env`না। সিক্রেট ডেটা প্রকাশ করা এড়াতে আপনার `.gitignore`ফাইলে যোগ `.env`করুন।

:::

* আপনার প্রাইভেট কী এক্সপোর্ট করার জন্য [এই নির্দেশাবলী](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key) অনুসরণ করুন
* আপনার Alchemy HTTP API কী (RPC URL) পেতে আপনার অ্যাকাউন্টের ড্যাশবোর্ডে আপনার **Hello World** অ্যাপ্লিকেশনে navigate করুন এবং উপরের ডানদিকের in **দেখুন কী** ক্লিক করুন।

আপনার `.env` এমন দেখাবে:

```
API_URL = "https://polygon-mumbai.g.alchemy.com/v2/your-api-key"
PRIVATE_KEY = "your-metamask-private-key"
```

আসলে আমাদের কোডে এই সংযোগ করতে হবে, আমরা এই টিউটোরিয়ালে পরে আমাদের `hardhat.config.js`ফাইলে এই ভেরিয়েবল উল্লেখ করব।

### Ethers.js ইনস্টল করুন {#install-ethers-js}

Ethers.js একটি লাইব্রেরি, যা আরো বেশি ব্যবহারকারীর-বান্ধব পদ্ধতির মাধ্যমে [স্ট্যান্ডার্ড JSON-RPC পদ্ধতি](https://docs.alchemyapi.io/alchemy/documentation/alchemy-api-reference/json-rpc) র‍্যাপিং করার মাধ্যমে ইন্টারঅ্যাক্ট করা এবং Ethereum-এ অনুরোধ করাকে সহজতর করে।

Hardhat দিয়ে খুব সহজেই অতিরিক্ত টুলিং এবং আরো বেশি ফাংশনালিটির জন্য [প্লাগইন](https://hardhat.org/plugins/) ইন্টিগ্রেট করা যায়। চুক্তি ডিপ্লয় করার জন্য আমরা [Ethers প্লাগইন](https://hardhat.org/plugins/nomiclabs-hardhat-ethers.html)-এর সুবিধা উপভোগ করব। চুক্তি ডিপ্লয় করার জন্য [Ethers.js](https://github.com/ethers-io/ethers.js/)-এর দরকারি কিছু পদ্ধতি রয়েছে।

আপনার প্রজেক্টের ডিরেক্টরিতে টাইপ:

```bash
npm install --save-dev @nomiclabs/hardhat-ethers "ethers@^5.0.0"
```

পরবর্তী ধাপে আমাদের `hardhat.config.js`-এও আমাদের ethers-এর প্রয়োজন হবে।

### hardhat.config.js আপডেট করুন {#update-hardhat-config-js}

আমরা এখন পর্যন্ত বেশ কয়েকটি ডিপ্রেসেন্ট এবং প্লাগইন যোগ করেছি। এখন আমাদের আপডেট করতে হবে `hardhat.config.js`যাতে আমাদের প্রকল্প সেই নির্ভরতা স্বীকৃতি পায়।

এর মতো দেখানোর জন্য আপনার `hardhat.config.js` আপডেট করুন:

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

### আমাদের স্মার্ট কন্ট্রাক কম্পাইল করুন {#compile-our-smart-contract}

এখন পর্যন্ত সবকিছু কাজ করার বিষয়টি নিশ্চিত করার জন্য, আমাদের চুক্তি কম্পাইল করা যাক। `compile` টাস্কটি হলো hardhat-এর একটি অন্যতম বিল্ট-ইন টাস্ক।

কমান্ড লাইন রান থেকে:

```bash
npx hardhat compile
```

আপনি সম্পর্কে একটি সতর্কতা পেতে পারে, কিন্তু `SPDX license identifier not provided in source file`অ্যাপ্লিকেশনটি এখনও জরিমানা কাজ করতে পারে। যদি না হয়, তাহলে আপনি সর্বদাই [Alchemy discord](https://discord.gg/u72VCg3)-এ মেসেজ করতে পারেন।

### আমাদের deploy  স্ক্রিপ্ট লিখুন {#write-our-deploy-script}

এখন আমাদের চুক্তি লেখা হয়েছে এবং আমাদের কনফিগারেশন ফাইলটি প্রস্তুত আছে, এখন সময় হলো আমাদের চুক্তি ডিপ্লয়ের স্ক্রিপ্ট লেখা।

`scripts/` ফোল্ডারে যান এবং `deploy.js` নামে একটি নতুন ফাইল তৈরি করুন এবং এতে নিম্নলিখিত বিষয়বস্তু যোগ করুন:

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

কোডের এই লাইনগুলোর কাজ কী সে ব্যাপারে আমরা এখানে থাকা Hardhat টিমের [চুক্তির টিউটোরিয়াল](https://hardhat.org/tutorial/testing-contracts.html#writing-tests) থেকে তাদের ব্যাখ্যা পেয়েছি।

```javascript
const HelloWorld = await ethers.getContractFactory("HelloWorld");
```

ethers.js-এর `ContractFactory`·হলো একটি অ্যাবস্ট্রাকশন, যা নতুন স্মার্ট চুক্তি ডিপ্লয় করার জন্য ব্যবহৃত হয়, তাই আমাদের hello world চুক্তির ইনস্ট্যান্সের ক্ষেত্রে `HelloWorld` হলো একটি [ফ্যাক্টরি](https://en.wikipedia.org/wiki/Factory\_\(object-oriented\_programming\))। `hardhat-ethers` প্লাগিন ব্যবহারের সময় `ContractFactory` এবং `Contract` ইনস্ট্যান্সগুলো ডিফল্টভাবে প্রথম স্বাক্ষরকারীর (মালিক) সাথে সংযুক্ত থাকে।

```javascript
const hello_world = await HelloWorld.deploy();
```

`deploy()`-কে `ContractFactory`-এ কল করা হলে ডিপ্লয়মেন্ট শুরু হবে এবং একটি `Promise` রিটার্ন করবে, যা `Contract` অবজেক্ট সমাধান করে থাকে। আমাদের প্রতিটি স্মার্ট চুক্তির ফাংশনের জন্য এই অবজেক্টের একটি পদ্ধতি রয়েছে।

### আমাদের স্মার্ট কন্ট্রাক Deploy  করুন {#deploy-our-smart-contract}

কমান্ড লাইনে ন্যাভিগেট করুন এবং রান করুন:

```bash
npx hardhat run scripts/deploy.js --network polygon_mumbai
```

আপনি এই মত কিছু দেখতে হবে:

```bash
Contract deployed to address: 0x3d94af870ED272Cd5370e4135F9B2Bd0e311d65D
```

আমরা যদি [Polygon Mumbai এক্সপ্লোরার](https://mumbai.polygonscan.com/) এ যান এবং আমাদের চুক্তি ঠিকানাটির সন্ধান করুন, তাহলে আমাদের দেখতে হবে যে এটি সফলভাবে মোতায়েন করা হয়েছে।

`From`ঠিকানাটি আপনার MetaMask অ্যাকাউন্ট ঠিকানা মেলে উচিত এবং `To`ঠিকানাটি **কন্ট্রাক Creation.** বলবে। কিন্তু যদি আমরা লেনদেনে ক্লিক করি, তাহলে আমরা মাঠে আমাদের চুক্তি ঠিকানা দেখতে `To`পাব।

![img](/img/alchemy/polygon-scan.png)

### চুক্তিটি যাচাই করুন {#verify-the-contract}

Alchemy একটি [এক্সপ্লোরার](https://dashboard.alchemyapi.io/explorer) প্রদান করে যেখানে আপনি স্মার্ট কন্ট্রাক্ট, যেমন প্রতিক্রিয়া সময়, HTTP স্ট্যাটাস, ত্রুটির কোড সহ মোতাবেক পদ্ধতি সম্পর্কে তথ্য পাবেন। আপনার চুক্তি যাচাই করার এবং লেনদেনটি গিয়েছে কি না তা পরীক্ষা করার জন্য এটি একটি ভালো পরিবেশ।

![img](/img/alchemy/calls.png)

**অভিনন্দন! আপনি শুধু Polygon মুম্বাই নেটওয়ার্কে একটি স্মার্ট চুক্তি স্থাপন করেছেন।**

## অতিরিক্ত রিসোর্স {#additional-resources}

- [একটি NFT স্মার্ট চুক্তি কীভাবে বিকাশ করবেন](https://docs.alchemy.com/docs/how-to-develop-an-nft-smart-contract-erc721-with-alchemy) – Alchemy এই বিষয়ের উপর একটি Youtube ভিডিও নিয়ে একটি লিখিত টিউটোরিয়াল রয়েছে। এটি তার ফ্রি 10 সপ্তাহ **রোড টু Web3** dev সিরিজের 1
- [Polygon API Quickstart](https://docs.alchemy.com/reference/polygon-api-quickstart) - Alchemy এর ডেভেলপার ডক পলিগনের সাথে উঠা এবং চলমান করার গাইড
