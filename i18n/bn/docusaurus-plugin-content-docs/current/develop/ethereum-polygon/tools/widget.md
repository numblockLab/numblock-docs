---
id: widget
title: ওয়ালেট উইজেট
sidebar_label: Wallet Widget
description: "ব্রিজ লেনদেন সম্পন্ন করার UI টুল।"
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

ওয়ালেট উইজেট হচ্ছে একটি UI টুল, যা ব্রিজ লেনদেন - ডিপোজিট ও উইথড্র করা জন্য যেকোনো ওয়েব অ্যাপ্লিকেশনে যোগ করা যাবে।

প্রতিটি উইজেট একটি ইউনিক নাম দ্বারা চিহ্নিত করা হয় যা আপনি [উইজেট ড্যাশবোর্ড](https://wallet.polygon.technology/widget-dashboard) থেকে পেতে পারেন।

### উইজেট ড্যাশবোর্ড {#widget-dashboard}

ওয়ালেট অ্যাপ্লিকেশনের উইজেট ড্যাশবোর্ড পৃষ্ঠা থেকে উইজেট তৈরি করা যায়। এর মাধ্যমে ব্যবহারকারীরা কাস্টমাইজ করার কিছু বিকল্প সহ একটি নতুন উইজেট তৈরি করতে পারবেন।

উইজেট তৈরি করা হলে, আপনি কোড স্নিপেট কপি করে তা আপনার অ্যাপ্লিকেশনে যোগ করতে পারেন বা উইজেট নাম ব্যবহার করে নিজে নিজে কনফিগার করতে পারেন।

উইজেট ড্যাশবোর্ডের লিঙ্ক -

* মেইননেট - https://wallet.polygon.technology/widget-dashboard
* টেস্টনেট - https://wallet-dev.polygon.technology/widget-dashboard

## ইনস্টল করুন {#install}

উইজেট জাভাস্ক্রিপ্ট লাইব্রেরি এক্সপোর্ট হয় এবং npm প্যাকেজ হিসাবে উপলভ্য থাকে।

```bash
npm i @maticnetwork/wallet-widget
```

## উদাহরণ {#examples}

ডেভেলাপমেন্ট আপনাকে সাহায্য করার জন্য আমরা বিভিন্ন ফ্রেমওয়ার্ক ও টুলের নমুনা তৈরি করেছি। সকল নমুনা এখানে পাবেন - [https://github.com/maticnetwork/wallet-widget-example](https://github.com/maticnetwork/wallet-widget-example)

## কিভাবে ব্যবহার করবেন {#how-to-use}
### টার্গেট সহ {#with-target}

মনে করুন আপনার অ্যাপে একটি বাটন আছে এবং আপনি চান যে সেই বাটনে ক্লিক করলে উইজেট দেখাতে -

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

আপনি প্রস্তুত হলে উইজেট তৈরি করুন। ডকুমেন্ট লোড হবার পরে তৈরি করুন ফাংশন কল করলে ভালো হয়।

```javascript
await widget.create();
```
উইজেট তৈরি হয়েছে। এখন আপনি আপনার বাটনে ক্লিক করলে উইজেট দেখাবে।

### টার্গেট ছাড়া {#without-target}

```javascript
import { Widget } from "@maticnetwork/wallet-widget";

var widget = new Widget({
    appName: "<widget name>", //widget name from dashboard
    network: 'mainnet' // network to be used - testnet or mainnet
});

await widget.create();
```

উইজেট এখন তৈরি হয়েছে। তবে উইজেট দেখাতে হলে - আপনাকে `show` API কল করতে হবে।

```
widget.show();
```

একইভাবে আপনি `hide` API কল করে উইজেট লুকাতে পারবেন।

```
widget.hide();
```

### গুরুত্বপূর্ণ বিজ্ঞপ্তি 👉 {#important-note}

1. নেটওয়ার্ক "টেস্টনেট" বা "মেইননেট" এর ভিত্তিতে সংশ্লিষ্ট ড্যাশবোর্ডে আপনার অ্যাপ তৈরি করতে হবে। আমরা টেস্টনেট এবং মেইননেট উভয়েই একই নাম দিয়ে অ্যাপ তৈরির পরামর্শ দিয়ে থাকি, যাতে নেটওয়ার্ক পরিবর্তনের সময় যেন কোনো সমস্যা না হয়।

2. ওয়ালেট উইজেট হচ্ছে UI লাইব্রেরি এবং ভিন্ন ভিন্ন ওয়েবসাইটে এটি ভিন্নভাবে দেখতে পাবেন ও কালার, রেসপনসিভনেস ইত্যাদির মত কিছু সমস্যাও থাকতে পারে। তাই, কিছু সময় নিয়ে পরীক্ষা ও কাস্টমাইজ করুন। যেকোনো সাহায্যের প্রয়োজনে - অনুগ্রহ করে [সাপোর্ট টিমের](https://support.polygon.technology/) সাথে যোগাযোগ করুন।

3. ওয়ালেট উইজেট মোবাইল ডিভাইসে সম্পূর্ণ স্ক্রিন আসে কিন্তু আপনি চাইলে `style` কনফিগারেশন দিয়ে তা কাস্টমাইজ করতে পারেন।

## কনফিগারেশন {#configuration}

উইজেট কনস্ট্রাক্টরে কনফিগারেশন প্রদান করা যেতে পারে।

## উপলভ্য কনফিগারেশন হচ্ছে {#available-configuration-are}

- **টার্গেট** : স্ট্রিং - এলিমেন্টের ক্লিকে উইজেট দেখানোর CSS সিলেক্টর। উদাহরণস্বরূপ, "#btnMaticWidget" নিচের কোডে টার্গেট হবে।

```javascript
<button id="btnMaticWidget">Matic widget</button>
```

- **নেটওয়ার্ক** : স্ট্রিং - যে নেটওয়ার্ক ব্যবহার করা হবে। দুইটি বিকল্প পাওয়া যাচ্ছে - 'টেস্টনেট' বা 'মেইননেট'।
- **প্রস্থ** : নাম্বার - উইজেটের প্রস্থ
- **উচ্চতা** : নাম্বার - উইজেটের উচ্চতা
- **autoShowTime** : নাম্বার - নির্দিষ্ট মিলিসেকেন্ড সময় পর স্বয়ংক্রিয়ভাবে উইজেট দেখায়
- **appName** : স্ট্রিং - আপনার অ্যাপের নাম। এটি উইজেট ড্যাশবোর্ডে থেকে পুনরুদ্ধার করা যাবে।
- **অবস্থান** : স্ট্রিং - উইজেটের অবস্থান সেট করে। উপলভ্য বিকল্পসমূহ হচ্ছে -
    - কেন্দ্র
    - নিচের-ডান দিক
    - নিচের-বাম দিক
- **পরিমাণ** : স্ট্রিং - টেক্সট বক্সে পরিমাণ আগে থেকেই পূরণ করুন
- **পৃষ্ঠা** : স্ট্রিং - পৃষ্ঠা নির্বাচন করুন। উপলভ্য বিকল্পসমূহ হচ্ছে - `withdraw`, `deposit`।
- **ওভারলে** : বুলিয়ান - উইজেট খোলা হলে ওভারলে দেখান। বাই ডিফল্ট এটি মিথ্যা।
- **স্টাইল** : অবজেক্ট - উইজেটে কিছু CSS স্টাইল প্রয়োগ করুন।

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

## ইভেন্ট {#events}

উইজেট কিছু ইভেন্ট ইমিট করে যা অ্যাপ্লিকেশনের ভিতরে কী ঘটছে তা জানতে ব্যবহার করা যেতে পারে।

### ইভেন্টে সাবস্ক্রাইব করুন {#subscribe-to-events}

```javascript
widget.on('load',()=>{
  console.log('widget is loaded');
})
```

### ইভেন্টে আনসাবস্ক্রাইব করুন {#unsubscribe-to-events}

```javascript
widget.off('load',<callback>)
```

> কলব্যাক অনেকটা আগের ইভেন্টে সাবস্ক্রাইব করুন-এর মত। তাই কলব্যাককে ভ্যারিয়েবল হিসেবে সংরক্ষণ করাই ভালো। `

## ইভেন্টের তালিকা: {#list-of-events}

- **লোড** - উইজেট লোড হয়েছে
- **বন্ধ** - উইজেট বন্ধ হয়েছে
- **approveInit** - অনুমোদনের লেনদেন শুরু হয়েছে
- **approveComplete** - অনুমোদন লেনদেন সম্পন্ন হয়েছে
- **approveError** - কিছু ত্রুটির কারণে বা Metamask-এ ব্যবহারকারীর প্রত্যখ্যানের কারণে অনুমোদনের লেনদেনটি ব্যর্থ হয়েছে
- **depositInit** - ডিপোজিট লেনদেন শুরু হয়েছে
- **depositComplete** - ডিপোজিট লেনদেন সম্পন্ন হয়েছে
- **depositError** - কিছু ত্রুটির কারণে বা ব্যবহারকারী Metamask-এ ডিপোজিট সম্পন্ন করতে অস্বীকার করায় ডিপোজিট লেনদেনটি ব্যর্থ হয়েছে
- **burnInit** - উইথড্রয়াল বার্ন লেনদেন শুরু হয়েছে
- **burnComplete** - উইথড্রয়াল বার্ন লেনদেন সম্পন্ন হয়েছে
- **confirmWithdrawInit** - উইথড্রয়াল চেকপয়েন্ট করা হয়েছে এবং কনফার্ম করা লেনদেন শুরু হয়েছে
- **confirmWithdrawComplete** - কনফার্ম করা উইথড্রয়াল লেনদেন সম্পন্ন হয়েছে
- **confirmWithdrawError** - কিছু ত্রুটি বা ব্যবহারকারী Metamask-এ প্রত্যাখ্যান করার কারণে কনফার্ম করা উইথড্রয়াল লেনদেন ব্যর্থ হয়েছে
- **exitInit**  - উইথড্রয়াল এক্সিট লেনদেন শুরু হয়েছে
- **exitComplete** - উইথড্রয়াল এক্সিট লেনদেন সম্পন্ন হয়েছে
- **exitError** - কিছু ত্রুটির কারণে বা ব্যবহারকারী Metamask-এ উইথড্রয়াল এক্সিট লেনদেন প্রত্যাখ্যান করায় লেনদেনটি ব্যর্থ হয়েছে

## API {#apis}

- **দেখান** -
উইজেট দেখান

```javascript
widget.show()
```

- **লুকান** -
উইজেট লুকান

```javascript
widget.hide()
```

- **চালু** -
ইভেন্টে সাবস্ক্রাইব করুন

```javascript
widget.on('<event name>', callback)
```

- **বন্ধ** -
ইভেন্টে আনসাবস্ক্রাইব করুন

```javascript
widget.off('<event name>', callback)
```
