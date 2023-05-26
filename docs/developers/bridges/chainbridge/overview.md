---
id: overview
title: Overview
---

## What is ChainBridge?

ChainBridge is a modular multi-directional blockchain bridge supporting EVM and Substrate compatible chains, built by ChainSafe. It allows users to transfer all kinds of assets or messages between two different chains.

To find out more about ChainBridge, please first visit the [official docs](https://chainbridge.chainsafe.io/) provided by its developers.

This guide is intended to help with the Chainbridge integration to NumBlock. It walks through the setup of a bridge between a running NumBlock Testnet and a local NumBlock network. 

## Requirements

In this guide, you will run NumBlock nodes, a ChainBridge relayer (more about it  [here](/docs/developers/bridges/chainbridge/definitions)), and the cb-sol-cli tool, which is a CLI tool to deploy contracts locally, registering resource, and changing settings for the bridge (you can check [this](https://chainbridge.chainsafe.io/cli-options/#cli-options) too). The following environments are required before starting the setup:

* Go: >= 1.17 
* Node.js >= 16.13.0
* Git


In addition, you will need to clone the following repositories with the versions to run some applications.
* [ChainBridge](https://github.com/ChainSafe/ChainBridge): v1.1.5
* [ChainBridge Deploy Tools](https://github.com/ChainSafe/chainbridge-deploy): `f2aa093` on `main` branch
