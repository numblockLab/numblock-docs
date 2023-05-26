---
id: networking
title: ระบบเครือข่าย
description: คำอธิบายเกี่ยวกับโมดูลระบบเครือข่ายของ Polygon Edge
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

## ภาพรวม {#overview}

โหนดต้องสื่อสารกับโหนดอื่นๆ ในเครือข่ายเพื่อให้สามารถแลกเปลี่ยนข้อมูลที่มีประโยชน์ <br />เพื่อให้งานนี้สำเร็จ Polygon Edge ใช้เฟรมเวิร์ก **libp2p** ซึ่งได้ทดสอบแล้วในการใช้งานจริง

การตัดสินใจในการใช้ **libp2** เน้นประเด็นหลักดังต่อไปนี้:
* **ความเร็ว** - libp2p ได้รับการปรับปรุงเป็นอย่างมากในส่วนการใช้งาน เมื่อเปรียบเทียบกับ devp2p (ซึ่งใช้ใน GETH และไคลเอ็นต์อื่นๆ)
* **ความสามารถในการขยาย** - มีบทบาทในการเป็นพื้นฐานที่ดีสำหรับคุณสมบัติอื่นๆ ของระบบ
* **Modularity** - libp2p มีลักษณะเป็นโมดูลาร์ในตนเองแล้ว เหมือนกับ Polygon Edgeซึ่งจะให้ความยืดหยุ่นมากขึ้น โดยเฉพาะเมื่อส่วนใดส่วนหนึ่งของ Polygon Edge ต้องมีสามารถแลกเปลี่ยนได้

## GRPC {#grpc}

นอกจาก **libp2p** แล้ว Polygon Edge ต้องใช้โปรโตคอล **GRPC** <br />ในมุมมองด้านเทคนิค Polygon Edge ใช้โปรโตคอล GRPC หลายอย่าง โดยเราจะกล่าวถึงในภายหลัง

เลเยอร์ GRPC ช่วยสรุปโปรโตคอลคำขอ/การตอบกลับทั้งหมด และยังช่วยทำให้โปรโตคอลสตรีมมิ่งง่ายขึ้น ซึ่งต้องใช้สำหรับการดำเนินงานของ Polygon Edge

GRPC ใช้ **Protocol Buffers** ในการนิยาม *services* และ *message structures* <br />โดยมีการนิยาม services และ structures ไว้ในไฟล์ *.proto* ซึ่งเป็นไฟล์คอมไพล์และใช้หลัก Language-Agnostic

ก่อนหน้านี้ เราได้กล่าวว่า Polygon Edge ใช้โปรโตคอล GRPC หลายอย่าง <br />ซึ่งมีวัตถุประสงค์เพื่อการยกระดับ UX โดยรวมสำหรับตัวดำเนินการโหนด ซึ่งมักจะช้ากว่าไคลเอ็นต์ต่างๆ เช่น GETH และ Parity

ตัวดำเนินการโหนดมีข้อมูลภาพรวมของสิ่งที่เกิดขึ้นกับระบบที่ดียิ่งกว่า ด้วยการเรียกใช้บริการ GRPC แทนการค้นหาข้อมูลที่ต้องการผ่านการตรวจสอบบันทึก

### GRPC สำหรับตัวดำเนินการโหนด {#grpc-for-node-operators}

ส่วนดังต่อไปนี้อาจประกอบด้วยข้อมูลที่คุณทราบแล้ว เนื่องจากเราได้กล่าวถึงข้อมูลนั้นแล้วในส่วน[คำสั่ง CLI](/docs/edge/get-started/cli-commands)

มีการนิยามบริการ GRPC ที่มีวัตถุประสงค์ให้**ตัวดำเนินการโหนด**ใช้งานไว้ดังนี้
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

คำสั่ง CLI สามารถเรียกการนำเมธอด service เหล่านี้ไปใช้งานได้จริง

เมธอดเหล่านี้ได้รับการนำไปใช้ใน ***minimal/system_service.go***
:::

### GRPC สำหรับโหนดอื่นๆ {#grpc-for-other-nodes}

Polygon Edge ยังนำเมธอด service บางรายการไปใช้กับโหนดอื่นๆ ในเครือข่าย <br />เกี่ยวกับบริการที่เราได้กล่าวถึง มีการอธิบายในส่วน**[โปรโตคอล](docs/edge/architecture/modules/consensus)**

## 📜 ทรัพยากร {#resources}
* **[Protocol Buffers](https://developers.google.com/protocol-buffers)**
* **[libp2p](https://libp2p.io/)**
* **[gRPC](https://grpc.io/)**
