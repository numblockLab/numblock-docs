---
id: networking
title: Сетевое взаимодействие
description: Объяснение к модулю сетевого взаимодействия Polygon Edge.
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

## Обзор {#overview}

Нод должен общаться с другими нодами в сети, чтобы обмениваться полезной информацией.<br /> Чтобы выполнить эту задачу, Polygon Edge использует проверенную инфраструктуру **libp2p**.

Выбор в пользу **libp2p** в первую очередь обусловлен:
* **Скоростью** — libp2p имеет значительное улучшение производительности по сравнению с devp2p (используется в GETH и у других клиентов)
* **Расширяемостью** — этот фрейм служит отличной основой для других возможностей системы
* **Модульностью** —  libp2p имеет модульную природу, так же как и Polygon Edge. Это обеспечивает большую гибкость, особенно когда части Polygon Edge должны быть сменными

## GRPC {#grpc}

Помимо **libp2p** Polygon Edge использует протокол **GRPC**. <br />Технически Polygon Edge использует несколько протоколов GRPC, о которых более подробно будет изложено далее.

Уровень GRPC помогает абстрагироваться от всех протоколов запроса/ответа и упрощает потоковые протоколы, которые необходимы для функционирования Polygon Edge.

GRPC полагается на **буферы протоколов** для определения *сервисов* и *структур сообщения*. <br />Сервисы и структуры определены в файлах *.proto*, которые скомпилированы и не зависят от языка.

Ранее мы упоминали, что Polygon Edge использует несколько протоколов GRPC.<br /> Это было сделано для увеличения общего UX для оператора нодов, который часто отстает от таких клиентов, как GETH и Parity.

Оператор нодов получает более полное представление о том, что происходит с системой, обращаясь сервису GRPC, вместо того чтобы пролистывать журналы в поисках нужной информации.

### GRPC для операторов нодов {#grpc-for-node-operators}

Данный раздел может показаться знакомым, поскольку он был кратко освещен в разделе [Команды CLI](/docs/edge/get-started/cli-commands).

Сервис GRPC, который предназначен для использования **операторами нодов**, определяется следующим образом:
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
Команды CLI фактически вызывают применение этих сервисных методов.

Эти методы реализованы в ***minimal/system_service.go***.
:::

### GRPC для других нодов {#grpc-for-other-nodes}

Polygon Edge также реализует несколько сервисных методов, которые используются другими нодами в сети. <br />Указанный сервис описан в разделе **[Протокол](docs/edge/architecture/modules/consensus)**.

## 📜 Ресурсы {#resources}
* **[Буферы протоколов](https://developers.google.com/protocol-buffers)**
* **[libp2p](https://libp2p.io/)**
* **[GRPC](https://grpc.io/)**
