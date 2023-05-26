---
id: network-agnostics
title: नेटवर्क एग्नॉस्टिक ट्रांज़ैक्शन
sidebar_label: Network Agnostic Transactions
description: "अपने dApp में नेटवर्क एग्नॉस्टिक ट्रांज़ैक्शन को इंटिग्रेट करें."
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png
---

## लक्ष्य {#goal}

मेटामास्क पर प्रोवाइडर बदले बिना पॉलीगॉन चेन पर ट्रांज़ैक्शन पूरा करें (यह ट्यूटोरियल मेटामास्क के इन-पेज प्रोवाइडर के लिए है और इसे अन्य प्रोवाइडर से ट्रांज़ैक्शन पूरा करने के लिए मॉडिफ़ाय जा सकता है)

आंतरिक रूप से, यूज़र ट्रांज़ैक्शन करने के इंटेंट पर साइन करता है. यह पॉलीगॉन चेन पर डिप्लॉय किए गए कॉन्ट्रैक्ट पर पूरा करने के लिए एक साधारण रिलेयर द्वारा रिले किया जाता है.


## ट्रांज़ैक्शन एग्ज़ीक्यूशन सक्षम करना क्या होता है? {#what-is-enabling-transaction-execution}

जिस क्लाइंट के साथ यूज़र इंटरैक्ट करता है (वेब ​​ब्राउज़र, मोबाइल ऐप आदि), वो कभी भी ब्लॉकचेन के साथ इंटरैक्ट नहीं करता है, इसके बजाय यह एक साधारण रिलेयर सर्वर (या रिलेयर्स का नेटवर्क) के साथ इंटरैक्ट करता है, जिस तरह से GSN (गैस स्टेशन नेटवर्क) या कोई मेटा-ट्रांजैक्शन सॉल्यूशन का काम करता है ( देखें: [मेटा ट्रांज़ैक्शन: परिचय](https://www.notion.so/Meta-Transactions-An-Introduction-8f54cf75321e4ec3b6d755e18e406590)).

किसी भी एक्शन के लिए जिसमें ब्लॉकचेन इंटरैक्शन की आवश्यकता हो,

- क्लाइंट यूज़र से EIP712 फ़ॉर्मेटेड सिग्नेचर का अनुरोध करता है
- सिग्नेचर साधारण रिलेयर सर्वर को भेजे जाते हैं (अगर प्रोडक्शन के लिए इसका इस्तेमाल किया जाता है, तो एक साधारण ऑथ/स्पैम सुरक्षा होनी चाहिए या इसके लिए बायकोनॉमी के मेक्सा SDK का इस्तेमाल किया जा सकता है: [https://github.com/bcnmy/mexa-sdk](https://github.com/bcnmy/mexa-sdk))
- रिलेयर कॉन्ट्रैक्ट पर यूज़र के सिग्नेचर सबमिट करने के लिए ब्लॉकचैन के साथ इंटरैक्ट करता है. कॉन्ट्रैक्ट पर एक फ़ंक्शन सिग्नेचर की `executeMetaTransaction` प्रक्रिया को कॉल करता है और अनुरोधित ट्रांज़ैक्शन (आंतरिक कॉल के ज़रिए) को रन करता है.
- रिलेयर गैस का भुगतान करता है जिससे ट्रांज़ैक्शन पूर्ण रूप से फ़्री हो जाता है 🤑

## अपने dApp में नेटवर्क एग्नॉस्टिक ट्रांज़ैक्शन को इंटिग्रेट करें {#integrate-network-agnostic-transactions-in-your-dapp}

- एक कस्टम साधारण रिलेयर नोड/बायकोनॉमी के बीच एक चुनें.

  - बायकोनॉमी के लिए, डैशबोर्ड से एक dapp सेटअप करें और api-id और api-की को सेव करें, देखें: [ट्यूटोरियल: बायकोनॉमी](https://www.notion.so/Tutorial-Biconomy-7f578bfb4e7d4904b8c79522085ba568) या [https://docs.biconomy.io/](https://docs.biconomy.io/)

  **स्टेप:**

    1. बायकोनॉमी डैशबोर्ड में अपने कॉन्ट्रैक्ट को रजिस्टर करें
       1. [बायकोनॉमी के ऑफ़िशियल दस्तावेज़ों](https://docs.biconomy.io/biconomy-dashboard) पर जाएँ.
       2. dapp रजिस्टर करते समय `Polygon Mumbai` का चयन करें
    2. फ़्रंटएंड में इस्तेमाल करने के लिए `API key` कॉपी करें
    3. और मैनेज-Api में फ़ंक्शन `executeMetaTransaction` जोड़ें और मेटा-tx को सक्षम करना न भूलें. ('नेटिव-metatx' विकल्प की जाँच करें)

  - अगर आप अपने ही कस्टम API का इस्तेमाल करना चाहते हैं जो ब्लॉकचेन पर transactions को भेजता है, तो आप सर्वर कोड को यहां संदर्भित कर सकते हैं: [https://github.com/एंजेलागॉटोर/eth-Workshope/stromast/मास्टर/2-networks-networksnototic-taration](https://github.com/angelagilhotra/ETHOnline-Workshop/tree/master/2-network-agnostic-transfer)

- ध्यान रहे कि आप जिस कॉन्ट्रैक्ट के साथ इंटरैक्ट करना चाहते हैं, वह `NativeMetaTransactions` से इनहेरिट करता है - कॉन्ट्रैक्ट में `executeMetaTransaction` फ़ंक्शन में 👀 झाँकें.
- लिंक: [https://github.com/maticnetwork/pos-portal/blob/34be03cfd227c25b49c5791ffba6a4ffc9b76036/flat/ChildERC20.sol#L1338](https://github.com/maticnetwork/pos-portal/blob/34be03cfd227c25b49c5791ffba6a4ffc9b76036/flat/ChildERC20.sol#L1338)



```jsx

let data = await web3.eth.abi.encodeFunctionCall({
    name: 'getNonce',
    type: 'function',
    inputs: [{
        name: "user",
        type: "address"
      }]
  }, [accounts[0]]);

  let _nonce = await web3.eth.call ({
    to: token["80001"],
    data
  });

  const dataToSign = getTypedData({
    name: token["name"],
    version: '1',
    salt: '0x0000000000000000000000000000000000000000000000000000000000013881',
    verifyingContract: token["80001"],
    nonce: parseInt(_nonce),
    from: accounts[0],
    functionSignature: functionSig
  });

  const msgParams = [accounts[0], JSON.stringify(dataToSign)];

  let sig = await eth.request ({
    method: 'eth_signTypedData_v3',
    params: msgParams
  });

  ```


- एक बार आपके पास एक रिलेयर और कॉन्ट्रैक्ट सेटअप हो जाने के बाद, क्लाइंट के लिए EIP712 फ़ॉर्मेटेड सिग्नेचर प्राप्त करने में सक्षम होने के लिए क्या आवश्यक है और केवल आवश्यक पैरामीटर के साथ API को कॉल करें

[रिफ: https://github.com/angelagilhotra/ETHOnline-Workshop/blob/6b615b8a4ef00553c17729c721572529303c8e1b/2-network-agnostic-transfer/sign.js#L47 blob/6b615b8a4e0053c17729c7215725293c8e1b/2-network-agnostic-tarrate  singh  l47](https://github.com/angelagilhotra/ETHOnline-Workshop/blob/6b615b8a4ef00553c17729c721572529303c8e1b/2-network-agnostic-transfer/sign.js#L47)

    ```jsx

    let data = await web3.eth.abi.encodeFunctionCall({
        name: 'getNonce',
        type: 'function',
        inputs: [{
            name: "user",
            type: "address"
          }]
      }, [accounts[0]]);

      let _nonce = await web3.eth.call ({
        to: token["80001"],
        data
      });

      const dataToSign = getTypedData({
        name: token["name"],
        version: '1',
        salt: '0x0000000000000000000000000000000000000000000000000000000000013881',
        verifyingContract: token["80001"],
        nonce: parseInt(_nonce),
        from: accounts[0],
        functionSignature: functionSig
      });
      const msgParams = [accounts[0], JSON.stringify(dataToSign)];

      let sig = await eth.request ({
        method: 'eth_signTypedData_v3',
        params: msgParams
      });
    ```

API को फोन करते हुए, रिफ: [https://github.com/angelagilhotra/ETHOnline-Workshop/blob/6b615b8a4ef00553c17729c721572529303c8e1b/2-network-agnostic-transfer/sign.js#L110 blob/6b615b8a4e0053c1729c725293c8e1b/2-networks-agnostic-tarns/signs.js#L10](https://github.com/angelagilhotra/ETHOnline-Workshop/blob/6b615b8a4ef00553c17729c721572529303c8e1b/2-network-agnostic-transfer/sign.js#L110)

    ```jsx
    const response = await request.post(
        'http://localhost:3000/exec', {
          json: txObj,
        },
        (error, res, body) => {
          if (error) {
            console.error(error)
            return
          }
          document.getElementById(el).innerHTML =
          `response:`+ JSON.stringify(body)
        }
      )
    ```

   यदि बायकोनॉमी का इस्तेमाल करते हैं, तो  इनको कॉल किया जाना चाहिए:

    ```jsx
    const response = await request.post(
        'https://api.biconomy.io/api/v2/meta-tx/native', {
          json: txObj,
        },
        (error, res, body) => {
          if (error) {
            console.error(error)
            return
          }
          document.getElementById(el).innerHTML =
          `response:`+ JSON.stringify(body)
        }
      )
    ```

    जहाँ `txObj` कुछ इस तरह दिखना चाहिए:

    ```json
    {
        "to": "0x2395d740789d8C27C139C62d1aF786c77c9a1Ef1",
        "apiId": <API ID COPIED FROM THE API PAGE>,
        "params": [
            "0x2173fdd5427c99357ba0dd5e34c964b08079a695",
            "0x2e1a7d4d000000000000000000000000000000000000000000000000000000000000000a",
            "0x42da8b5ac3f1c5c35c3eb38d639a780ec973744f11ff75b81bbf916300411602",
            "0x32bf1451a3e999b57822bc1a9b8bfdfeb0da59aa330c247e4befafa997a11de9",
            "27"
        ],
        "from": "0x2173fdd5427c99357ba0dd5e34c964b08079a695"
    }
    ```

- अगर आप कस्टम API का इस्तेमाल करते हैं तो यह कॉन्ट्रैक्ट पर `executeMetaTransaction` फ़ंक्शन रन करता है:

[(रिफ):/github.com/एंजेलागगिलहॉट/ethline-वर्कशॉप/blob/6b615b8a400053c17729c7215725293c8e1b/2-network-network-agnostic-tar/server/index.js#L40.com](https://github.com/angelagilhotra/ETHOnline-Workshop/blob/6b615b8a4ef00553c17729c721572529303c8e1b/2-network-agnostic-transfer/server/index.js#L40)

    ```jsx
    try {
        let tx = await contract.methods.executeMetaTransaction(
          txDetails.from, txDetails.fnSig, r, s, v
        ).send ({
          from: user,
          gas: 800000
        })
        req.txHash = tx.transactionHash
      } catch (err) {
        console.log (err)
        next(err)
      }
    ```

    बायकोनॉमी का इस्तेमाल कर रहा है, तो क्लाइंट साइड कॉल इस तरह दिखता है:

    ```jsx
    // client/src/App.js
    import React from "react";
    import Biconomy from "@biconomy/mexa";

    const getWeb3 = new Web3(biconomy);
    biconomy
        .onEvent(biconomy.READY, () => {
          // Initialize your dapp here like getting user accounts etc
          console.log("Mexa is Ready");
        })
        .onEvent(biconomy.ERROR, (error, message) => {
          // Handle error while initializing mexa
    			console.error(error);
        });

    /**
    * use the getWeb3 object to define a contract and calling the function directly
    */

    ```
