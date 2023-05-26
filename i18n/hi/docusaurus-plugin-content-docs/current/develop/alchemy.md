---
id: alchemy
title: Alchemy का इस्तेमाल करके स्मार्ट कॉन्ट्रैक्ट को तैनात करें
sidebar_label: Using Alchemy
description: Alchemy का इस्तेमाल करके स्मार्ट कॉन्ट्रैक्ट को तैनात करने का गाइड
keywords:
  - docs
  - matic
  - polygon
  - alchemy
  - create smart contract
  - deploy on polygon
image: https://wiki.polygon.technology/img/polygon-wiki.png
---

## ओवरव्यू {#overview}

यह ट्यूटोरियल उन डेवलपरों के लिए है जो एथेरेयम ब्लॉकचेन डेवलपमेंट के लिए नए हैं या स्मार्ट कॉन्ट्रैक्ट के साथ डिप्लॉय और इंटरैक्ट करने के मूल सिद्धांतों को समझना चाहते हैं. यह आपको पॉलीगॉन मुंबई टेस्ट नेटवर्क पर एक स्मार्ट कॉन्ट्रैक्ट बनाने और डिप्लॉय के जरिए will चलेंगे, जो cryptocurrency वॉलेट (मेटामास्क), [(Metamask)](https://docs.soliditylang.org/en/v0.8.0/)[](https://metamask.io), [हार्डहैट](https://hardhat.org) और [अल्केमी](https://alchemy.com/?a=polygon-docs) का इस्तेमाल करके है.

:::tip

अगर आपके पास सवाल या चिंता है, तो कृपया अपने [<ins>आधिकारिक Discord</ins>](https://discord.gg/gWuC7zB) सर्वर के माध्यम से एल्केमी टीम में बाहर जाएँ.

:::

## आप क्या जानेंगे {#what-you-will-learn}

इस ट्यूटोरियल में एक स्मार्ट कॉन्ट्रैक्ट बनाने के लिए, आप नीचे दी गई चीज़ों के लिए एल्केमी के प्लेटफ़ॉर्म का इस्तेमाल करना सीखेंगे:
- स्मार्ट कॉन्ट्रैक्ट एप्लिकेशन बनाएँ
- एक वॉलेट का संतुलन जाँचें
- ब्लॉकचेन एक्सप्लोरर में कॉन्ट्रैक्ट कॉल को सत्यापित करें

## आप क्या करेंगे {#what-you-will-do}

ट्यूटोरियल के बाद, आप करेंगे:
1. एल्केमी पर ऐप बनाना शुरू करें
2. मेटामास्क के साथ एक वॉलेट पता बनाएँ
3. वॉलेट में संतुलन जोड़ें (टेस्ट टोकन का इस्तेमाल करके)
4. प्रोजेक्ट को कम्पाइल और डिप्लॉय करने के लिए हार्डहैट और Ethers.js का इस्तेमाल करें
5. अल्केमी के प्लेटफॉर्म पर कॉन्ट्रैक्ट की स्थिति की जांच करें

## अपने स्मार्ट कॉन्ट्रैक्ट को बनाएँ और डिप्लॉय करें {#create-and-deploy-your-smart-contract}

### पॉलीगॉन नेटवर्क से कनेक्ट करें {#connect-to-the-polygon-network}

पॉलीगॉन पॉस चेन के लिए अनुरोध करने के कई तरीके हैं. अपने खुद के नोड को चलाने के बजाय, आप एल्केमी के डेवलपर प्लेटफ़ॉर्म पर एक फ़्री अकाउंट का इस्तेमाल करेंगे और पॉलीगॉन पॉस चेन के साथ संचार करने के लिए एल्केमी पॉलीगॉन पॉस API के साथ इंटरैक्ट करेंगे. प्लेटफॉर्म में डेवलपर tooling का पूरा सुइट शामिल है- इसमें अनुरोध की निगरानी करने की क्षमता शामिल है, डेटा एनालिटिक्स जो स्मार्ट कॉन्ट्रैक्ट डिप्लॉयमेंट, उन्नत API (Transact, NFTs, आदि) और एक ethers.js SDK के दौरान जो होड के तहत होता है, वह प्रदर्शित करता है.

अगर आपके पास पहले से ही अल्केमी अकाउंट नहीं है, तो [यहां](https://www.alchemy.com/polygon/?a=polygon-docs) फ्री अकाउंट के लिए साइन अप करके शुरू करें. अपना अकाउंट बनाने के बाद, आपके पास डैशबोर्ड पर पहुँचने से पहले तुरंत अपना पहला ऐप बनाने का विकल्प होता है.

![img](/img/alchemy/alchemy-dashboard.png)

### अपना ऐप (और API की) बनाएँ {#create-your-app-and-api-key}

अल्केमी अकाउंट बनाने के बाद, आपको एप, एप, बनाने के द्वारा एक API की उत्पन्न करने की need the होगी. यह पॉलीगॉन मुंबई टेस्ट नेट में किए गए अनुरोध को प्रमाणित करता है. अगर आप टेस्टनेट के बारे में नहीं जानते हैं, तो [ये टेस्टनेट गाइड](https://docs.alchemyapi.io/guides/choosing-a-network) देखें.

एक नई API की उत्पन्न करने के लिए, Alchemy डैशबोर्ड नेविगेशन बार पर **Apps** टैब में नेविगेट करें और **Create App** को sub-tab का चयन करें.

![img](/img/alchemy/create-app.png)

अपने नए ऐप **का** नाम है, चेन के लिए एक छोटा विवरण प्रदान **करें,** और अपने नेटवर्क के लिए **पॉलीगॉन मुंबई** को चुनें.

अंत में, **क्रिएट ऐप** पर क्लिक करें. आपका नया एप्लिकेशन नीचे दी गई तालिका में दिखाई देना चाहिए.

### वॉलेट पता बनाएँ {#create-a-wallet-address}

पॉलीगॉन PoS Ethereum. के लिए एक लेयर 2 स्केलिंग समाधान है. इसलिए, हमें पॉलीगॉन मुंबई टेस्ट पर transactions the भेजने और प्राप्त करने के लिए एक Ethereum वॉलेट की जरूरत है और एक कस्टम पॉलीगॉन URL को जोड़ दें इस ट्यूटोरियल के लिए, हम MetaMask, का इस्तेमाल करेंगे, जो आपके वॉलेट पता को मैनेज करने के लिए इस्तेमाल किया जाता था. अगर आप इस बारे में और ज़्यादा जानना चाहते हैं कि एथेरेयम पर ट्रांज़ैक्शन कैसे होता है, तो एथेरेयम फ़ाउंडेशन की [यह ट्रांज़ैक्शन गाइड](https://ethereum.org/en/developers/docs/transactions/) देखें.

Alchemy, से अपने कस्टम पॉलीगॉन RPC URL को पाने के लिए, अपने अल्केमी डैशबोर्ड में अपने **हेलो वर्ल्ड** ऐप में जाकर शीर्ष दाएं कोने में **व्यू की** क्लिक करें फिर आगे बढ़ें और अपनी एल्केमी HTTP API की को कॉपी करें.

![img](/img/alchemy/view-key.png)

आप [यहाँ](https://metamask.io/download.html) मुफ़्त में एक मेटामास्क अकाउंट बना और डाउनलोड कर सकते हैं. एक बार जब आपने एक अकाउंट बनाया है, तो पॉलीगॉन PoS नेटवर्क को अपने वॉलेट पर सेट करने के लिए इन स्टेप्स का पालन करें

1. अपने मेटामास्क वॉलेट के शीर्ष कोने में ड्रॉप-डाउन मेन्यू से **सेटिंग्स** चुनें.
2. मेनू से बाईं ओर के **नेटवर्क** को चुनें.
3. अपने वॉलेट को निम्नलिखित पैरामीटर्स का इस्तेमाल करके मुंबई टेस्टनेट से कनेक्ट करें:

**नेटवर्क नाम:** पॉलीगॉन मुंबई टेस्टनेट

**RPC URL:** https://polygon mumbai . galchemy.com/v2/your api-की

**ChainID:** 80001

**चिह्न:**

**ब्लॉक एक्सप्लोरर URL:** https://mumbai .polygonscan.com/


### पॉलीगॉन मुंबई टेस्ट मैट्रिक्स {#add-polygon-mumbai-test-matic}

आपको मुंबई टेस्ट नेट में अपने स्मार्ट कॉन्ट्रैक्ट को तैनात करने के लिए कुछ टेस्टनेट टोकन की जरूरत होगी. टेस्टनेट टोकन प्राप्त करने के [लिए, पॉलीगॉन मुंबई फोकट](https://faucet.polygon.technology/) में जाएं, **मुंबई** का चयन करें, **MATIC टोकन** का चयन करें और अपने पॉलीगॉन वॉलेट का पता दर्ज करें, फिर **सबमिट** को क्लिक करें. नेटवर्क ट्रैफिक के कारण, यह अपने टेस्टनेट टोकन को प्राप्त करने में कुछ समय लग सकता है.

आप अल्केमी की [फ्री मुंबई के faucet](https://mumbaifaucet.com/?a=polygon-docs). का भी इस्तेमाल कर सकते हैं.

![img](/img/alchemy/faucet.png)

जल्द ही आपको अपने मेटामास्क अकाउंट में टेस्टनेट टोकन दिखाई देंगे.

### अपने वॉलेट बैलेंस की जांच करें {#check-your-wallet-balance}

हमारे बैलेंस को दोबारा जाँचने के लिए, आइए [एल्केमी के कंपोज़र टूल](https://composer.alchemyapi.io/) का इस्तेमाल करके [eth\_getBalance](https://docs.alchemy.com/reference/eth-getbalance-polygon) का अनुरोध करें. **पॉलीगॉन** को बतौर चेन चुनें, **पॉलीगॉन मुंबई** को नेटवर्क के रूप में चुनें, जो इस तरीके के रूप `eth_getBalance`में और अपने पता को इनपुट करें. इससे हमारे वॉलेट में मैटिक की रकम वापस आ जाएगी. कंपोज़र टूल का इस्तेमाल कैसे करें इसके निर्देशों के बारे में जानने के लिए [यह वीडियो](https://youtu.be/r6sjRxBZJuU) देखें.

![img](/img/alchemy/get-balance.png)

आपके मेटामास्क अकाउंट का पता इनपुट करने के बाद, और **भेजने का अनुरोध** क्लिक करें तो आपको एक रिस्पांस देखना चाहिए जो इस तरह से दिखता है:

```json
{ "jsonrpc": "2.0", "id": 0, "result": "0xde0b6b3a7640000" }
```

:::info

यह परिणाम ETH में नहीं, Wei में है. वेई ईथर का सबसे छोटा नामांकन है. Wei से Ether में कनवर्ज़न है: 1 Ether = 10^18 Wei. इसलिए, अगर हम "0xde0b6b3a7640000" को दशमलव में बदलते हैं, तो हमें 1\*10^18 मिलता है, जो 1 ETH के बराबर है. इसे मूल्यवर्ग के आधार पर 1 मैटिक में मैप किया जा सकता है.

:::

### अपनी परियोजना को इनिशियलाइज करें {#initialize-your-project}

सबसे पहले, हमें हमारे प्रोजेक्ट के लिए एक फ़ोल्डर बनाना होगा. अपने [कमांड लाइन](https://www.computerhope.com/jargon/c/commandi.htm) पर नेविगेट करें और टाइप करें:

```bash
mkdir hello-world
cd hello-world
```

अब जब हम अपने प्रोजेक्ट फ़ोल्डर के अंदर हैं, तो हम प्रोजेक्ट को शुरू करने के लिए `npm init`का इस्तेमाल करेंगे. अगर आपके पास पहले से npm इंस्टॉल नहीं है, तो [इन निर्देशों](https://docs.alchemyapi.io/alchemy/guides/alchemy-for-macs#1-install-nodejs-and-npm) का पालन करें (हमें Node.js की भी ज़रूरत होगी इसलिए उसे भी डाउनलोड करें!).

```bash
npm init # (or npm init --yes)
```

इससे सच में कोई फ़र्क नहीं पड़ता कि आप इंस्टॉलेशन के सवालों का जवाब कैसे देते हैं, यहाँ उदाहरण के रूप में बताया गया है कि हमने इसे कैसे किया था:

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

Package.json को मंज़ूरी दें और हम शुरू करने के लिए तैयार हैं!

### [हार्डहैट](https://hardhat.org/getting-started/#overview)

हार्डहैट आपके एथेरेयम सॉफ़्टवेयर को कम्पाइल करने, डिप्लॉय करने, टेस्ट करने और डिबग करने के लिए एक डेवलपमेंट एनवायरनमेंट है. लाइव चेन पर डिप्लॉय करने से पहले यह स्थानीय स्तर पर स्मार्ट कॉन्ट्रैक्ट और dApps को बनाने में डेवलपरों की मदद करता है.

हमारी परियोजना के `hello-world`भीतर, रन :

```bash
npm install --save-dev hardhat
```

[इंस्टॉल करने के निर्देश](https://hardhat.org/getting-started/#overview) के बारे में अधिक विवरण के लिए इस पेज को देखें.

### हरदम प्रोजेक्ट बनाएं {#create-hardhat-project}

हमारे `hello-world` प्रोजेक्ट फ़ोल्डर के अंदर, रन करें:

```bash
npx hardhat
```

आपको एक स्वागत संदेश और विकल्प देखना चाहिए कि आप जो करना चाहते हैं उसे चुनें **एक खाली hardhat.config.js: बनाने** के लिए Select

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

इससे हमारे लिए एक `hardhat.config.js`फ़ाइल उत्पन्न होगी, जो कि हम अपनी परियोजना के लिए निर्दिष्ट कर देंगे

### प्रोजेक्ट फ़ोल्डर {#add-project-folders}

परियोजना को आयोजित करने के लिए, हम दो नए फ़ोल्डर तैयार करेंगे. अपनी कमांड लाइन में अपने `hello-world` प्रोजेक्ट की रूट डायरेक्टरी पर नेविगेट करें और टाइप करें:

```bash
mkdir contracts
mkdir scripts
```

* `contracts/` वह जगह है जहाँ हम अपनी हैलो वर्ल्ड स्मार्ट कॉन्ट्रैक्ट की कोड फ़ाइल रखेंगे
* `scripts/` वह जगह है जहाँ हम अपने कॉन्ट्रैक्ट के साथ इंटरैक्ट करने और डिप्लॉय करने के लिए स्क्रिप्ट को रखेंगे

### कॉन्ट्रैक्ट लिखें {#write-the-contract}

[VSCode](https://code.visualstudio.com). जैसे अपने पसंदीदा एडिटर में **हैलो-वर्ल्ड** प्रोजेक्ट को खोलो. स्मार्ट कॉन्ट्रैक्ट को सॉलिडिटी नामक भाषा में लिखा जाता है, जो कि हम अपने `HelloWorld.sol`स्मार्ट कॉन्ट्रैक्ट को लिखने के लिए इस्तेमाल करेंगे.

1. `contracts`फ़ोल्डर में नेविगेट करें और नाम की एक नई फ़ाइल बनाएँ`HelloWorld.sol`
2. नीचे [एथेरेयम फ़ाउंडेशन](https://ethereum.org/en/) का हैलो वर्ल्ड स्मार्ट कॉन्ट्रैक्ट का एक सैंपल है जिसका इस्तेमाल हम इस ट्यूटोरियल के लिए करेंगे. नीचे दिए गए कंटेंट को अपनी `HelloWorld.sol`फ़ाइल में कॉपी और पेस्ट करें, और यह समझने के लिए टिप्पणियों को ज़रूर पढ़ें कि यह कॉन्ट्रैक्ट क्या करता है:

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

यह एक बेहद आसान स्मार्ट कॉन्ट्रैक्ट है जो निर्माण पर एक मैसेज को स्टोर करता है और `update` फ़ंक्शन को कॉल करके इसे अपडेट किया जा सकता है.

### मेटामास्क & Alchemy से कनेक्ट करें {#connect-with-metamask-alchemy}

हमने एक मेटामास्क वॉलेट, एल्केमी अकाउंट बनाया है, और अपना स्मार्ट कॉन्ट्रैक्ट लिखा है, अब इन तीनों को कनेक्ट करने का समय है.

आपके वर्चुअल वॉलेट से भेजे गए हर ट्रांज़ैक्शन के लिए आपकी विशिष्ट निजी की का इस्तेमाल कर रहे सिग्नेचर की ज़रूरत होती है. हमारे प्रोग्राम को यह अनुमति देने के लिए, हम अपनी निजी की (और एल्केमी API की) को एनवायरनमेंट फ़ाइल में सुरक्षित रूप से स्टोर कर सकते हैं.

सबसे पहले, अपनी प्रोजेक्ट डायरेक्टरी में dotenv पैकेज इंस्टॉल करें:

```bash
npm install dotenv --save
```

फिर, हमारे प्रोजेक्ट की रूट डायरेक्टरी में एक `.env` फ़ाइल बनाएँ, और इसमें अपनी मेटामास्क निजी की और HTTP एल्केमी API URL जोड़ें.

:::warning चेतावनी

आपके पर्यावरण फ़ाइल का नाम होना चाहिए `.env`या इसे एक पर्यावरण फ़ाइल के रूप में पहचाना नहीं जाएगा. इसका नाम `process.env` या `.env-custom` या कुछ और न रखें.

इसके अलावा, अगर आप अपनी परियोजना को मैनेज करने के लिए git जैसे वर्जन कंट्रोल सिस्टम का इस्तेमाल कर रहे हैं, तो कृपया फ़ाइल को ट्रैक **न** `.env`करें. गुप्त डेटा को प्रकाशित करने से बचने के लिए अपनी `.gitignore`फाइल `.env`में जोड़ें.

:::

* अपनी निजी की को एक्स्पोर्ट करने के लिए [इन निर्देशों](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key) को फ़ॉलो करें
* अपनी अल्केमी HTTP API की (RPC URL) पाने के लिए, अपने अकाउंट के डैशबोर्ड पर अपने **हेलो वर्ल्ड** ऐप में नेविगेट करें और शीर्ष दाएं कोने में **व्यू की** को क्लिक करें.

आपका `.env` ऐसी दिखनी चाहिए:

```
API_URL = "https://polygon-mumbai.g.alchemy.com/v2/your-api-key"
PRIVATE_KEY = "your-metamask-private-key"
```

वास्तव में इन को हमारे कोड से जोड़ने के लिए, हम बाद में इस ट्यूटोरियल में अपनी `hardhat.config.js`फाइल में इन वेरिएबल का संदर्भ देंगे.

### ethers.js संस्थापित करें {#install-ethers-js}

Ethers.js एक लाइब्रेरी है जो [मानक JSON-RPC तरीकों](https://docs.alchemyapi.io/alchemy/documentation/alchemy-api-reference/json-rpc) को ज़्यादा यूज़र फ़्रेडली तरीकों के साथ रैप करके एथेरेयम से इंटरैक्ट करना और अनुरोध करना आसान बनाती है.

हार्डहैट अतिरिक्त टूलिंग और बढ़ी फ़ंक्शनैलिटी के लिए [प्लगइन](https://hardhat.org/plugins/) को एकीकृत करना आसान बनाता है. हम कॉन्ट्रैक्ट डिप्लॉयमेंट के लिए [Ethers प्लगइन](https://hardhat.org/plugins/nomiclabs-hardhat-ethers.html) का लाभ उठाएँगे. [Ethers.js](https://github.com/ethers-io/ethers.js/) के पास उपयोगी कॉन्ट्रैक्ट डिप्लॉयमेंट के तरीके हैं.

अपने प्रोजेक्ट डायरेक्टरी में, क़िस्म:

```bash
npm install --save-dev @nomiclabs/hardhat-ethers "ethers@^5.0.0"
```

हमें अगले स्टेप में हमारे `hardhat.config.js` में ethers की भी ज़रूरत होगी.

### hardhat.config.js अद्यतन करें {#update-hardhat-config-js}

हमने अब तक कई डिपेंडेंसी और प्लगइन्स को जोड़ा है. अब हमें `hardhat.config.js`अपडेट करना होगा ताकि हमारी परियोजना उन निर्भरता को पहचान सके.

ऐसा दिखने के लिए अपने `hardhat.config.js` को अपडेट करें:

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

### हमारे स्मार्ट कॉन्ट्रैक्ट को Compile {#compile-our-smart-contract}

ये पक्का करने के लिए कि अब तक सब कुछ सही काम कर रहा है, आइए हमारा कॉन्ट्रैक्ट कंपाइल करें. `compile` टास्क बिल्ट-इन हार्डहैट टास्क में से एक है.

कमांड लाइन रन की तरफ़ से:

```bash
npx hardhat compile
```

आपको बारे में एक चेतावनी मिल सकती `SPDX license identifier not provided in source file`है, लेकिन एप्लिकेशन अभी भी ठीक काम कर रही हो सकती है. अगर नहीं, तो आप कभी भी [एल्केमी discord](https://discord.gg/u72VCg3) में मैसेज भेज सकते हैं.

### अपनी deploy र स्क्रिप्ट लिखें {#write-our-deploy-script}

अब जब हमारा कॉन्ट्रैक्ट लिखा जा चुका है और हमारी कॉन्फ़िगरेशन फ़ाइल जाने के लिए तैयार है, तो यह हमारा कॉन्ट्रैक्ट डिप्लॉय स्क्रिप्ट लिखने का समय है.

`scripts/`फ़ोल्डर को नेविगेट करें और `deploy.js`नाम की एक नई फ़ाइल बनाएँ, नीचे दिए गए कंटेंट को इसमें जोड़ें:

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

हमने हार्डहैट टीम की व्याख्या को अपनाया है कि कोड की इन लाइन में से प्रत्येक उनके [कॉन्ट्रैक्ट ट्यूटोरियल](https://hardhat.org/tutorial/testing-contracts.html#writing-tests) से क्या करती हैं.

```javascript
const HelloWorld = await ethers.getContractFactory("HelloWorld");
```

`ContractFactory`ethers.js में एक नए स्मार्ट कॉन्ट्रैक्ट को डिप्लॉय करने के लिए इस्तेमाल किया जाने वाला एब्स्ट्रैक्शन है, इसलिए ह`HelloWorld`मारे लिए हैलो वर्ल्ड कॉन्ट्रैक्ट का एक का[रखाना ह](https://en.wikipedia.org/wiki/Factory\_\(object-oriented\_programming\))ै. `hardhat-ethers` प्लगइन `ContractFactory`और ,`Contract` का इस्तेमाल करते समय, अनुरोध डिफ़ॉल्ट रूप से पहले साइन करने वाले (स्वामी) से जुड़े होते हैं.

```javascript
const hello_world = await HelloWorld.deploy();
```

`ContractFactory` पर `deploy()`को कॉल करने से डिप्लॉयमेंट शुरू हो जाएगा और क`Promise`ो वापस कर देगा जो ऑब`Contract`्जेक्ट को हल करता है. ये वो ऑब्जेक्ट है जिसमें हमारे हर स्मार्ट कॉन्ट्रैक्ट फ़ंक्शन के लिए एक तरीका है.

### हमारे स्मार्ट कॉन्ट्रैक्ट को तैनात करें {#deploy-our-smart-contract}

कमांड लाइन पर नेविगेट करें और रन करें:

```bash
npx hardhat run scripts/deploy.js --network polygon_mumbai
```

आपको इस तरह कुछ देखना चाहिए.

```bash
Contract deployed to address: 0x3d94af870ED272Cd5370e4135F9B2Bd0e311d65D
```

अगर हम [पॉलीगॉन मुंबई एक्सप्लोरर](https://mumbai.polygonscan.com/) में जाएं और अपने कॉन्ट्रैक्ट एड्रेस की खोज करें, तो हमें यह देख पाना चाहिए कि इसे सफलतापूर्वक तैनात किया गया है.

`From`पता को अपने मेटामास्क अकाउंट के पता से मेल करना चाहिए और `To`पता **कॉन्ट्रैक्ट क्रिएशन** का कहना होगा. लेकिन अगर हम the में क्लिक करें, तो हम क्षेत्र में अपना कॉन्ट्रैक्ट पता `To`देखेंगे.

![img](/img/alchemy/polygon-scan.png)

### कॉन्ट्रैक्ट को वेरिफ़ाय करें {#verify-the-contract}

Alchemy एक [एक्सप्लोरर](https://dashboard.alchemyapi.io/explorer) प्रदान करता है जहां आप स्मार्ट कॉन्ट्रैक्ट के साथ तैनात तरीकों के बारे में जानकारी ढूंढ सकते हैं, जैसे कि रिस्पांस टाइम, HTTP की स्थिति, त्रुटि कोड को अन्य लोगों के बीच यह आपके कॉन्ट्रैक्ट को सत्यापित करने और यह जाँचने के लिए एक अच्छी जगह है कि ट्रांज़ैक्शन हुआ या नहीं.

![img](/img/alchemy/calls.png)

**बधाई हो! आपने सिर्फ पॉलीगॉन मुंबई नेटवर्क में एक स्मार्ट कॉन्ट्रैक्ट तैनात किया**

## अतिरिक्त संसाधन {#additional-resources}

- [NFT स्मार्ट कॉन्ट्रैक्ट को कैसे विकसित किया जाए](https://docs.alchemy.com/docs/how-to-develop-an-nft-smart-contract-erc721-with-alchemy) - Alchemy में इस विषय पर YouTube वीडियो के साथ एक लिखित ट्यूटोरियल है. यह अपने फ्री 10 सप्ताह **रोड से वेब3** देव सीरीज के सप्ताह 1
- पॉलीगॉन [API क्विकस्टार्ट](https://docs.alchemy.com/reference/polygon-api-quickstart) - अल्केमी के डेवलपर के लिए पॉलीगॉन के साथ उठने और रन करने के लिए गाइड
