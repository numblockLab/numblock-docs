---
id: networking
title: নেটওয়ার্কিং
description: Polygon Edge-এর নেটওয়ার্কিং মডিউলের ব্যাখ্যা।
keywords:
  - docs
  - polygon
  - edge
  - architecture
  - module
  - networking
  - libp2p
  - GRPC
---

## সংক্ষিপ্ত বিবরণ {#overview}

দরকারী তথ্য বিনিময় করতে একটি নোডকে তার নেটওয়ার্কের মধ্যে অন্যান্য নোডের সাথে যোগাযোগ করতে হবে।<br />
এই কাজটি সম্পন্ন করতে, Polygon Edge বহুল-পরীক্ষিত **libp2p** ফ্রেমওয়ার্ক ব্যবহার করে।

**libp2p** ব্যবহারের প্রধান কারণগুলি হচ্ছে:
* **গতি** - devp2p (GETH এবং অন্যান্য ক্লায়েন্ট এটি ব্যবহার করে) এর তুলনায় libp2p-তে অনেক বেশি পারফর্ম্যান্স পাওয়া যায়
* **এক্সটেনসিবিলিটি** - এটি সিস্টেমের অন্যান্য ফিচারগুলোর জন্য একটি দুর্দান্ত বেস হিসাবে কাজ করে
* **মডুলারিটি** - libp2p Polygon Edge-এর মতোই প্রকৃতিগতভাবেই মডুলার। এটি অনেক ফ্লেক্সিবিলিটি প্রদান করে, বিশেষ করে যখন Polygon Edge-এর কিছু অংশ সোয়াপযোগ্য হতে হয়

## GRPC {#grpc}

Polygon Edge **libp2p**-এর পাশাপাশি **GRPC** প্রোটোকলও ব্যবহার করে। <br />
কার্যতভাবে, Polygon Edge বেশ কয়েকটি GRPC প্রোটোকল ব্যবহার করে, যা পরবর্তীতে বর্ণনা করা হবে।

GRPC লেয়ারটি সকল রিকুয়েস্ট/রিপ্লাই প্রোটোকল অ্যাবস্ট্র্যাক্ট করতে এবং Polygon Edge এর জন্য প্রয়োজনীয় স্ট্রিমিং প্রোটোকল সহজ করতে সহায়তা করে।

GRPC *সার্ভিস* এবং *মেসেজ স্ট্রাকচার* সংজ্ঞায়িত করতে **প্রোটোকল বাফারের** উপর নির্ভরশীল।<br /> সার্ভিস এবং স্ট্রাকচারগুলো *.proto* ফাইলগুলিতে সংজ্ঞায়িত করা হয়েছে, যেগুলো কম্পাইল করা আছে এবং এগুলো ভাষা-অজ্ঞেয়বাদী।

পূর্বে আমরা উল্লেখ করেছি যে Polygon Edge বেশ কয়েকটি GRPC প্রোটোকল ব্যবহার করে।<br />
নোড অপারেটরের জন্য সামগ্রিক UX বুস্ট করতে এটি করা হয়েছিল, যা GETH এবং Parity এর মতো ক্লায়েন্টগুলোতে প্রায়ই ল্যাগ করে।

নোড অপারেটর লগ থেকে প্রয়োজনীয় তথ্য খুঁজে বের করার পরিবর্তে GRPC সার্ভিস কল করে সিস্টেমে কী ঘটছে সে সম্পর্কে আরো ভালো ওভারভিউ পাবেন।

### নোড অপারেটরের জন্য GRPC {#grpc-for-node-operators}

নিম্নলিখিত বিভাগটি পরিচিত মনে হতে পারে কারণ এটি [CLI কমান্ড](/docs/edge/get-started/cli-commands) বিভাগে সংক্ষিপ্তভবে উল্লেখ করা হয়েছে।

**নোড অপারেটরদের** ব্যবহারেরে জন্য তৈরি GRPC সার্ভিস এমনভাবে সংজ্ঞায়িত করা হয়েছে কারণ:
````go title="minimal/proto/system.proto"
service System {
    // GetInfo returns info about the client
    rpc GetStatus(google.protobuf.Empty) returns (ServerStatus);

    // PeersAdd adds a new peer
    rpc PeersAdd(PeersAddRequest) returns (google.protobuf.Empty);

    // PeersList returns the list of peers
    rpc PeersList(google.protobuf.Empty) returns (PeersListResponse);

    // PeersInfo returns the info of a peer
    rpc PeersStatus(PeersStatusRequest) returns (Peer);

    // Subscribe subscribes to blockchain events
    rpc Subscribe(google.protobuf.Empty) returns (stream BlockchainEvent);
}
````
:::tip

CLI কমান্ডগুলো এসব সার্ভিস পদ্ধতিগুলোর ইমপ্লিমেন্টেশনকে কল করে।

এই পদ্ধতিগুলি ***minimal/system_service.go***-তে ইমপ্লিমেন্ট করা হয়েছে।

:::

### অন্যান্য নোডের জন্য GRPC {#grpc-for-other-nodes}

Polygon Edge অন্যান্য নোডের ব্যবহারের জন্য বেশ কয়েকটি সার্ভিস পদ্ধতি ইমপ্লিমেন্ট করে। <br />
উল্লিখিত সার্ভিসটি **[প্রোটোকল](docs/edge/architecture/modules/consensus)** বিভাগে বর্ণনা করা হয়েছে।

## 📜 রিসোর্স {#resources}
* **[প্রোটোকল বাফার](https://developers.google.com/protocol-buffers)**
* **[libp2p](https://libp2p.io/)**
* **[GRPC](https://grpc.io/)**
