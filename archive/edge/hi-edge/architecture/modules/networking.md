---
id: networking
title: नेटवर्किंग
description: पॉलीगॉन एज के नेटवर्किंग मॉड्यूल के लिए स्पष्टीकरण.
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

## अवलोकन {#overview}

उपयोगी सूचनाओं के एक्सचेंज के लिए एक नोड को नेटवर्क पर अन्य नोड्स के साथ संवाद करना पड़ता है.<br /> इस कार्य को पूरा करने के लिए, पॉलीगॉन एज युद्ध-परीक्षण किए गए **libp2p**ढांचे का लाभ उठाता है.

 **libp2p** के साथ जाने का विकल्प मुख्य रूप से इस पर केंद्रित है:
* **स्पीड** - libp2p में devp2p (GET और अन्य क्लाइंट्स में प्रयुक्त) की तुलना में महत्वपूर्ण प्रदर्शन सुधार है
* **एक्स्टेंसिबिलिटी**- यह सिस्टम की अन्य विशेषताओं के लिए एक महान आधार के रूप में कार्य करता है
* **मॉड्यूलरिटी** - libp2p पॉलीगॉन एज की तरह ही स्वभाव से मॉड्यूलर है. यह अधिक लचीलापन देता है, खासकर जब पॉलीगॉन एज के कुछ हिस्सों को स्वैप करने की आवश्यकता होती है.

## GRPC {#grpc}

**libp2p** के ऊपर, पॉलीगॉन एज **GRPC** प्रोटोकॉल का उपयोग करता है.<br />
तकनीकी रूप से, पॉलीगॉन एज कई जीआरपीसी प्रोटोकॉल का उपयोग करता है, जिसे बाद में कवर किया जाएगा.

जीआरपीसी लेयर सभी अनुरोध/उत्तर प्रोटोकॉल को अमूर्त करने में मदद करती है और पॉलीगॉन एज के फ़ंक्शन करने के लिए आवश्यक स्ट्रीमिंग प्रोटोकॉल को सरल बनाती है.

जीआरपीसी *सेवाओं*और *मैसेज संरचनाओं*को परिभाषित करने के लिए **प्रोटोकॉल बफ़र्स**पर निर्भर करता है. <br />सेवाओं और संरचनाओं को *प्रोटो*फाइलों में परिभाषित किया गया है, जो संकलित हैं और भाषा-अज्ञेयवादी हैं.

इससे पहले, हमने उल्लेख किया था कि पॉलीगॉन एज कई जीआरपीसी प्रोटोकॉल का लाभ उठाता है.<br />
यह नोड ऑपरेटर के लिए समग्र UX को बढ़ावा देने के लिए किया गया था, कुछ ऐसा जो अक्सर GETH और Parity जैसे ग्राहकों के साथ होता है.

वे जिस जानकारी की तलाश कर रहे हैं, उसे खोजने के लिए लॉग के माध्यम से छानने के बजाय नोड ऑपरेटर के पास जीआरपीसी सेवा को कॉल करके सिस्टम के साथ क्या हो रहा है, इसका बेहतर अवलोकन है.

### नोड ऑपरेटरों के लिए जीआरपीसी {#grpc-for-node-operators}

निम्नलिखित सेक्शन परिचित लग सकता है क्योंकि यह संक्षेप में [सीएलआई कमांड्स](/docs/edge/get-started/cli-commands)अनुभाग में शामिल किया गया था.

**नोड ऑपरेटरों** द्वारा उपयोग की जाने वाली GRPC सेवा को इस प्रकार परिभाषित किया गया है:
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
सीएलआई आदेश वास्तव में इन सेवा विधियों के कार्यान्वयन को कहते हैं.

इन विधियों को  में लागू किया गया है ***न्यूनतम/system_service.go***.

:::

### अन्य नोड के लिए जीआरपीसी {#grpc-for-other-nodes}

पॉलीगॉन एज नेटवर्क पर अन्य नोड्स द्वारा उपयोग की जाने वाली कई सेवा विधियों को भी लागू करता है.<br />
उल्लिखित सेवा **[प्रोटोकॉल](docs/edge/architecture/modules/consensus)**अनुभाग में वर्णित है.

## 📜 संसाधन {#resources}
* **[प्रोटोकॉल बफ़र्स](https://developers.google.com/protocol-buffers)**
* **[libp2p](https://libp2p.io/)**
* **[gRPC](https://grpc.io/)**
