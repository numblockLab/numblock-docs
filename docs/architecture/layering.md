---
id: layering 
title: NumBlock Layering
sidebar_label: Layering
---

The components of the NumBlock blockchain are implemented as modules, and these modules interact with each other. With this organization, the components can be easily upgraded and replaced without affecting the entire network.

![NumBlock Architecture](/img/architecture.png)

## P2PNetwork

It all starts at the base networking layer, which utilizes **libp2p**. We decided to go with this technology because it
fits into the designing philosophies of NumBlock. Libp2p is:

- Modular
- Extensible
- Fast
  
Most importantly, it provides a great foundation for more advanced features, which we'll cover later on.


## Consensus Engine
The separation of the synchronization and consensus protocols allows for modularity and implementation of **custom** sync and consensus mechanisms - depending on how the client is being run.

NumBlock is designed to offer off-the-shelf pluggable consensus algorithms.

The current supported consensus algorithm:

* IBFT PoS

## Block Management
The Block management layer is the central layer that coordinates everything in the NumBlock system. It is covered in depth in the corresponding *Modules* section.

## State
The State inner layer contains state transition logic. It deals with how the state changes when a new block is included. It is covered in depth in the corresponding *Modules* section.

## REST API
The REST API layer is an JSON RPC layer that dApp developers use to interact with the blockchain. It is covered in depth in the corresponding *Modules* section.

## Transaction Handling
The Transaction Handling layer represents the transaction pool, and it is closely linked with other modules in the system, as transactions can be added from multiple entry points.

## Interconnect
The Interconnect layer is vital for operator interactions. Through it, node operators can easily interact with the client, providing an enjoyable UX.