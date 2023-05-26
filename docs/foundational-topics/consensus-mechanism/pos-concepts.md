---
id: pos-concepts
title: Proof of Stake
---

## Overview

Numblock consensus algorithm is a sophisticated and robust consensus mechanism employed by NumBlock. The consensus mechanism comprises two key components, a consensus engine and consensus protocol. NumBlock consensus utilizes the IBFT consensus engine and a Proof-of-Stake architecture to seal blocks, provide specific network capabilities, and govern the network. The core smart contracts work in tandem with the consensus engine to define all the network's Proof-of-Stake rules

The consensus engine of NumBlock is based on the Istanbul Byzantine Fault Tolerance (IBFT 2.0) protocol, which is responsible for sealing blocks on the blockchain. The IBFT 2.0 protocol ensures that network integrity is maintained even in the presence of malicious or dishonest nodes.

### Staking

Staking is managed by staking contracts on the Polygon network. The staking module on Polygon validates staked tokens and is independent of Ethereum's security. In principle, the network is secured by the rootchain and Ethereum. Transaction checkpoints still occur on Ethereum, but Ethereum does not validate staking on Polygon.

At the end of each epoch, a reward calculation occurs to reward validators who actively participated in that epoch.

### Epochs

Epochs are a concept introduced with the addition of PoS to the NumBlock.

Epochs are considered to be a special time frame (in blocks) in which a certain set of validators can produce blocks.
Their lengths are modifiable, meaning node operators can configure the length of an epoch during genesis generation.

At the end of each epoch, an _epoch block_ is created, and after that event a new epoch starts. To learn more about
epoch blocks, see the [Epoch Blocks](/docs/foundational-topics/consensus-mechanism/pos-concepts#epoch-blocks) section.

Validator sets are updated at the end of each epoch. Nodes query the validator set from the Staking Smart Contract
during the creation of the epoch block, and save the obtained data to local storage. This query and save cycle is
repeated at the end of each epoch.

Essentially, it ensures that the Staking Smart Contract has full control over the addresses in the validator set, and
leaves nodes with only 1 responsibility - to query the contract once during an epoch for fetching the latest validator
set information. This alleviates the responsibility from individual nodes from taking care of validator sets.


## Epoch Blocks

**Epoch Blocks** are a concept introduced in the PoS implementation of IBFT in NumBlock. **Epoch size** is set to `50` blocks 
on NumBlock


