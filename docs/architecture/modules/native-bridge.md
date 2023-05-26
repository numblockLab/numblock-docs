---
id: native-bridge
title: NumBlock Native Bridge
---

# NumBlock Native Bridge

NumBlock incorporate a built-in two-way bridging mechanism that facilitates arbitrary message passing between a NumBlock (also referred to as childchain) and another EVM-compatible PoS blockchain (referred to as rootchain). With this feature, messages can consist of any data type (arbitrary bytes), and the bridge operates as an extension of NumBlock consensus algorithm (NumBPFT) and can be enabled or disabled as needed.

# StateSync: Real-Time Synchronization

State synchronization (StateSync) is a mechanism used to update the state of a contract on the childchain based on events occurring on the rootchain. It is a critical component of blockchain technology as it enables secure and efficient communication between the two chains. State synchronization allows for a more efficient and secure way to update the chain state on the childchain without needing to process all transactions from the genesis block.

Message passing between a rootchain and a childchain is achieved through continuous state synchronization, known as StateSync. This process involves transferring state data between system calls.

## StateSender

The StateSender contract is responsible for generating sync state events based on receiver and data. The syncState function allows anyone to call this method to emit an event. The receiver on the NumBlock chain should add a check based on the sender. The data is sent along with the event and represents the state change that needs to be executed on the childchain.

## StateReceiver

The StateReceiver contract is responsible for executing and relaying the state data on the childchain. It receives the state change data from the rootchain contract bundled up in the form of a commitment, sent with the Merkle Tree root hash. This tree is created by bundling a number of StateSync events received by the StateSender. Commitments are submitted to the StateReceiver by a block proposer, and it is a system (state) transaction. They are used to verify the execution of state data from the rootchain to the childchain (e.g., transferring funds from L1 to L2 or from Childchain1 to Childchain2). Commitments are similar to checkpoints but are used in the process of transferring data from L1 to L2, while checkpoints are used in the process of transferring data from L2 to L1.

## Synchronization and Commitments

he StateSync process involves two main steps: synchronization and commitments.

In the synchronization step, the StateSender contract on the rootchain generates sync state events based on receiver and data. The syncState function allows anyone to call this method to emit an event. The data is sent along with the event and represents the state change that needs to be executed on the childchain.

In the commitments step, the StateReceiver contract on the childchain receives the state change data along with a Merkle proof from the StateSender contract and verifies the proof to ensure the data's integrity. If the proof is valid, the state change is executed on the childchain.

To ensure the validity of the state change, the StateSender contract generates a unique id for each sync state event. This id is used by the StateReceiver contract to prevent replay attacks, which could result in the execution of duplicate state changes.

The StateReceiver contract also implements a BLS signature scheme to verify the signatures submitted by the validators. The validators' signatures are aggregated, and the contract checks whether the required voting power threshold is met to accept the state change.

# Checkpoints: Ensuring Liveliness and Reference Points

When passing messages from a childchain to a rootchain, the validator set commits checkpoints, which are snapshots of the childchain state containing only the root of the Exit events, excluding all transactions. Checkpoints serve as reference points for clients, and validators periodically checkpoint all transactions occurring on the childchain to the rootchain. Checkpoints also ensure liveliness and are submitted to the associated rootchain asset contract.

## CheckpointManager

A CheckpointManager contract responsible for managing checkpoints in the network.

The checkpoints represent a snapshot of the childchain state, which is periodically checkpointed to the rootchain by the validators. The checkpoints are used as a reference point for the rootchain to verify the integrity and accuracy of the data on the childchain.

The contract has several functions to facilitate the management of checkpoints, such as submitting a new checkpoint with metadata, verifying signatures, and getting the event root by block number or epoch. The contract also has a mapping to store the checkpoints and the current validator set, and an array to keep track of the checkpoint block numbers.

The contract uses a Merkle tree to efficiently prove the membership of an event in the childchain state. The tree is constructed using the hashed exit events sent by the L2StateSender, which the Edge client saves to its local storage after their transactions are executed. The membership proofs can be verified using the Merkle proofs provided by the users.

The contract also implements a BLS signature scheme to verify the signatures submitted by the validators. The validators' signatures are aggregated, and the contract checks whether the required voting power threshold is met to accept the checkpoint.

To elaborate, the root of the Merkle tree is a hash value that represents a specific subset of the childchain state at a specific point in time. This state includes only the exit events sent by the L2StateSender contract. When a user wants to exit the L2 chain (transfer their tokens from L2 to L1), their exit transaction is included in this Merkle tree.

When a checkpoint is made, the root of the Merkle tree is included as part of the checkpoint, along with other metadata. This checkpoint is then sent to the rootchain where it is verified and stored by the validators.

Later, when a user wants to verify a particular exit event on the childchain, they can provide a Merkle proof, which is a cryptographic proof that demonstrates the inclusion of a particular exit event in the Merkle tree. The Merkle proof can be verified by the rootchain using the root of the Merkle tree, which was included in the checkpoint.

In short, the root of the Merkle tree is a compact representation of the exit events on the childchain at a specific point in time, which is included in checkpoints and used for verification purposes.

# Bridge States: Tracking Event Progress

The bridge can exist in one of three states:

 - **Pending**: Events are waiting to be bundled and sent over.
 - **Committed**: Event data has been relayed to the associated chain.
 - **Executed**: The event has been committed, and the state executed, resulting in a state change.
 - **Token Standards**: Supporting a Range of Assets
The bridge is compatible with various token standards, including ERC20, ERC721, and others, enabling a wide range of assets to be transferred between chains.

