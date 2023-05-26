---
id: bls
title: BLS
description: "Explanation and instructions regarding BLS mode."
keywords:
  - docs
  - numblock
  - bls
---

## Overview

BLS also known as Boneh–Lynn–Shacham (BLS)—is a cryptographic signature scheme which allows a user to verify that a signer is authentic. It is a signature scheme that can aggregate multiple signatures. In NumBlock, BLS is used by default in order to provide better security in the IBFT consensus mode. BLS can aggregate signatures into a single byte array and reduce the block header size. Each chain can choose whether to use BLS or not. The ECDSA key is used regardless of whether the BLS mode is enabled or not.

## Istanbul Byzantine Fault Tolerant (IBFT) 2.0

Istanbul Byzantine Fault Tolerant (IBFT) 2.0 is a consensus algorithm for blockchain networks that was developed as part of the Ethereum platform's transition to Proof of Stake (PoS) consensus. It is an improvement on the original IBFT algorithm, which was developed for private blockchain networks.

IBFT 2.0 is designed to be highly secure and fault-tolerant, meaning that it can maintain consensus even in the presence of malicious actors or other types of network failures. This makes it well-suited for use in public blockchain networks, where security and reliability are of utmost importance.

The key features of IBFT 2.0 include:

1. Byzantine Fault Tolerance: The algorithm is designed to tolerate up to one-third of the network's nodes acting in a Byzantine or malicious manner, without compromising the security or consistency of the network.

2. Finality: Unlike some other consensus algorithms, IBFT 2.0 provides immediate finality, meaning that once a block is added to the chain, it cannot be reversed or changed.

3. Efficient block propagation: IBFT 2.0 uses a gossip protocol to efficiently propagate new blocks across the network, reducing latency and improving performance.

Overall, IBFT 2.0 is a robust and secure consensus algorithm that is well-suited for use in public blockchain networks that require high levels of security and fault tolerance.

## Consensus Engine

The NumBlock consensus (NumBlockBFT) mechanism uses the IBFT 2.0 consensus engine to agree on adding new blocks to the blockchain. The validator pool in IBFT 2.0 is responsible for validating candidate blocks proposed by a randomly selected block proposer who is part of the validator pool. The proposer is responsible for constructing a block at the block interval. The proposer mechanism is based on **Tendermint**, where a proposer is chosen based on a deterministic selection algorithm. The frequency of selection is proportional to the voting power of the validator.

Each block in IBFT 2.0 requires at least one round of voting by the validator to arrive at consensus, which is recorded as a collection of signatures on the block content. In general, a supermajority of validators must confirm that a block is valid for the block to be added to the blockchain. Only when there is no consensus on a given block, multiple rounds of voting are needed. The ideal path would be when the validator pool reaches consensus on a candidate block in the first round of voting, and the block is added to the blockchain without the need for additional rounds of voting. This is the most efficient and optimal outcome, as it allows the network to continue processing transactions and adding new blocks to the chain in a timely manner.

A validator's voting power is proportional to the amount of stake they have locked up on the network. This means that validators with more stake will have more voting power and, therefore, more influence over the decision-making process on the network. This also provides an economic incentive for validators to behave honestly and act in the network's best interest.

## Validator Set

NumBlock consensus algorithm limits network participation to around 100 validators, and a variable amount of stake is used as a fixed stake criterion to limit the system's security and can make the system economically vulnerable. The validator set in the NumBlock consensus does not update on each block but is fixed during n block periods known as an epoch.

The n block period to define one epoch is determined by governance, and until then, validators will remain the same. At the end of the epoch, a special state transaction to validatorSetManagementContract is emitted, notifying the system about the validators' uptime during the epoch. It is up to the smart contract to reward validators by their uptime and update the validator set for the next epoch. There is a function getValidatorSet which returns the current validator set at any time.
