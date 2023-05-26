---
id: network-agnostics
title: নেটওয়ার্ক অ্যাগনস্টিক লেনদেন
sidebar_label: Network Agnostic Transactions
description: "আপনার dApp-এ নেটওয়ার্ক অ্যাগনস্টিক লেনদেন যুক্ত করুন।"
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png
---

## লক্ষ্য {#goal}

Metamask-এ সরবরাহকারী পরিবর্তন না করে Polygon চেইনে লেনদেন সম্পাদন করুন (এই টিউটোরিয়ালটি Metamask-এর নিজস্ব সরবরাহকারীদের সেবা দিয়ে থাকে, তবে অন্যান্য সরবরাহকারীদের লেনদেন সম্পাদনের ক্ষেত্রে ব্যবহারের জন্যেও মডিফাই করা যাবে)

পর্দার আড়ালে, ব্যবহারকারী কোনো লেনদেন সম্পাদনের জন্য একটি ইনটেন্টে সাইন করে, যা Polygon চেইনে ডিপ্লয় করা একটি চুক্তিতে সম্পাদনের ক্ষেত্রে একটি সিম্পল রিলেয়ার দ্বারা রিলে করা হয়।


## লেনদেন সম্পাদন সক্রিয় করা কী? {#what-is-enabling-transaction-execution}

ব্যবহারকারী যে ক্লায়েন্টের সাথে ইন্টারঅ্যাক্ট করে (ওয়েব ব্রাউজার, মোবাইল অ্যাপ ইত্যাদি) সেটি কখনোই ব্লকচেইনের সাথে ইন্টারঅ্যাক্ট করে না। পরিবর্তে সেটি একটি সিম্পল রিলেয়ার সার্ভারের (অথবা রিলেয়ারের নেটওয়ার্ক) সাথে অনেকটা GSN বা অন্য কোনো মেটা-ট্রানজেকশন সলিউসনের মতই ইন্টারঅ্যাক্ট করে (দেখুন: [মেটা ট্রানজেকশন: পরিচিত](https://www.notion.so/Meta-Transactions-An-Introduction-8f54cf75321e4ec3b6d755e18e406590))।

ব্লকচেইন ইন্টারঅ্যাকশনের প্রয়োজন এমন যেকোনো অ্যাকশনের জন্য,

- ক্লায়েন্ট ব্যবহারকারীর কাছ থেকে একটি EIP712 ফরম্যাট করা স্বাক্ষরের অনুরোধ করে
- স্বাক্ষরটি একটি সিম্পল রিলেয়ার সার্ভারে পাঠানো হয় (প্রোডাকশনে ব্যবহৃত হলে একটি সিম্পল অথ/স্প্যাম প্রোটেকশন থাকা উচিত বা বাইকোনোমির Mexa SDK ব্যবহার করা যেতে পারে: [https://github.com/bcnmy/mexa-sdk](https://github.com/bcnmy/mexa-sdk))
- রিলেয়ারটি ব্যবহারকারীর স্বাক্ষরকে চুক্তিতে জমা করার জন্য ব্লকচেইনের সাথে ইন্টারঅ্যাক্ট করে। চুক্তিতে `executeMetaTransaction` নামের একটি ফাংশন স্বাক্ষরকে প্রসেস করে এবং অনুরোধকৃত লেনদেন সম্পাদন করে (একটি অভ্যন্তরীণ কলের মাধ্যমে)।
- রিলেয়ারটি গ্যাসের ফি প্রদান করায় লেনদেনটি কার্যত বিনামূল্যে হয়ে থাকে 🤑

## আপনার dApp-এ নেটওয়ার্ক অ্যাগনস্টিক লেনদেন যুক্ত করুন {#integrate-network-agnostic-transactions-in-your-dapp}

- একটি কাস্টম সিম্পল রিলেয়ার নোড/বাইকোনোমি থেকে বেছে নিন।

  - বাইকোনোমির জন্য, ড্যাশবোর্ড থেকে একটি dApp সেটআপ করুন এবং api-id ও api-key সংরক্ষণ করুন, দেখুন: [টিউটোরিয়াল: বাইকোনোমি](https://www.notion.so/Tutorial-Biconomy-7f578bfb4e7d4904b8c79522085ba568) বা [https://docs.biconomy.io/](https://docs.biconomy.io/)

  **ধাপসমূহ:**

    1. চলুন আমাদের চুক্তিগুলি বাইকোনোমি ড্যাশবোর্ডে নিবন্ধন করা যাক
       1. [বাইকোনোমির অফিসিয়াল ডকুমেন্টগুলিতে](https://docs.biconomy.io/biconomy-dashboard) যান।
       2. dapp নিবন্ধনের সময় `Polygon Mumbai` নির্বাচন করুন
    2. ফ্রন্টএন্ডে ব্যবহারের জন্য `API key` কপি করুন
    3. এবং Manage-Api-তে `executeMetaTransaction` ফাংশন যুক্ত করুন ও নিশ্চিত করুন Meta-tx সক্রিয় আছে। ('native-metatx' বিকল্প পরীক্ষা করুন)

  - আপনি যদি ব্লকচেইনে স্বাক্ষরিত লেনদেন পাঠাচ্ছেন আপনার নিজস্ব কাস্টম API ব্যবহার করতে চান, তাহলে আপনি এখানে সার্ভার কোড দেখতে পাবেন: [https://github.com/angelagilhotra/ETHOnline-Workshop/tree/master/2-network-agnostic-transfer](https://github.com/angelagilhotra/ETHOnline-Workshop/tree/master/2-network-agnostic-transfer)

- নিশ্চিত করুন যে আপনি যে চুক্তিটির সাথে ইন্টারঅ্যাক্ট করতে চান তা `NativeMetaTransactions` থেকে ইনহেরিট করে - 👀 চুক্তিতে `executeMetaTransaction` ফাংশনে পিপ করে।
- লিঙ্ক: [https://github.com/maticnetwork/pos-portal/blob/34be03cfd227c25b49c5791ffba6a4ffc9b76036/flat/ChildERC20.sol#L1338](https://github.com/maticnetwork/pos-portal/blob/34be03cfd227c25b49c5791ffba6a4ffc9b76036/flat/ChildERC20.sol#L1338)



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


- আপনার রিলেয়ার ও চুক্তিগুলি সেটআপ করা হলে ক্লায়েন্টের শুধু একটি EIP712 ফরম্যাট করা স্বাক্ষর ফেচ করতে সক্ষম হতে হবে এবং প্রয়োজনীয় প্যারামিটার সহ API কল করতে সক্ষম হবে

ref: http[s://github.com/angelagilhotra/ETHOnline-Workshop/blob/6b615b8a4ef00553c17729c721572529303c8e1b/2-network-agnostic-transfer/sign.js#L47](https://github.com/angelagilhotra/ETHOnline-Workshop/blob/6b615b8a4ef00553c17729c721572529303c8e1b/2-network-agnostic-transfer/sign.js#L47)

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

API-এ কলিং করুন, রিফ: [https://github.com/angelagilhotra/ETHOnline-Workshop/blob/6b615b8a4ef00553c17729c721572529303c8e1b/2-network-agnostic-transfer/sign.js#L110](https://github.com/angelagilhotra/ETHOnline-Workshop/blob/6b615b8a4ef00553c17729c721572529303c8e1b/2-network-agnostic-transfer/sign.js#L110)

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

    আপনি বাইকোনোমি ব্যবহার করলে নিম্নলিখিতগুলি কল করা উচিত:

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

    যেখানে `txObj` দেখতে নিচেরগুলোর মত হওয়া উচিত:

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

- আপনি কাস্টম API ব্যবহার করলে এটি চুক্তিতে `executeMetaTransaction` ফাংশন সম্পাদন করে:

(ref: http[s://github.com/angelagilhotra/ETHOnline-Workshop/blob/6b615b8a4ef00553c17729c721572529303c8e1b/2-network-agnostic-transfer/server/index.js#L40)](https://github.com/angelagilhotra/ETHOnline-Workshop/blob/6b615b8a4ef00553c17729c721572529303c8e1b/2-network-agnostic-transfer/server/index.js#L40)

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

বাইকোনোমি ব্যবহার করছে, ক্লায়েন্ট সাইড দেখতে অনেকটা এরকম:

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
