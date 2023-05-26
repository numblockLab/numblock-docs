---
id: other-modules 
title: Other modules
---

## Minimal

**Minimal** is the cornerstone for these inter-connected modules. <br />
It acts as a central hub for all the services that run on the NumBlock.

## Sealer

The **Sealer** is an entity that gathers the transactions, and creates a new block.<br />
Then, that block is sent to the **Consensus** module to seal it.

The final sealing logic is located within the **Consensus** module.

## Types

The **Types** module implements core object types, such as:

* **Address**
* **Hash**
* **Header**
* lots of helper functions

### RLP Encoding / Decoding

Unlike clients such as GETH, the NumBlock doesn't use reflection for the encoding.<br />
The preference was to not use reflection because it introduces new problems, such as performance
degradation, and harder scaling.

The **Types** module provides an easy-to-use interface for RLP marshaling and unmarshalling, using the FastRLP package.

Marshaling is done through the *MarshalRLPWith* and *MarshalRLPTo* methods. The analogous methods exist for
unmarshalling.

By manually defining these methods, the NumBlock doesn't need to use reflection. In *rlp_marshal.go*, you can find
methods for marshaling:

* **Bodies**
* **Blocks**
* **Headers**
* **Receipts**
* **Logs**
* **Transactions**

## Crypto

The **Crypto** module contains crypto utility functions.

## Chain

The **Chain** module contains chain parameters (active forks, consensus engine, etc.)

* **chains** - Predefined chain configurations (mainnet, goerli, ibft)

## Helper

The **Helper** module contains helper packages.

* **dao** - Dao utils
* **enode** - Enode encoding/decoding function
* **hex** - Hex encoding/decoding functions
* **ipc** - IPC connection functions
* **keccak** - Keccak functions
* **rlputil** - Rlp encoding/decoding helper function

## Command

The **Command** module contains interfaces for CLI commands.