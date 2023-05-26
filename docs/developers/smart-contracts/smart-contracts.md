---
title: Introduction to Smart Contracts
description: An overview of smart contracts, focussing on their unique characteristics and limitations.
lang: en
---

## What is a smart contract? {#what-is-a-smart-contract}

An application that runs on the NumBlock blockchain is known as a "smart contract." It is a set of functions and state-related data that are stored at a particular address on the NumBlock blockchain.

Smart contracts are a type of [NumBlock account](/docs/foundational-topics/account/). They can now be the subject of transactions because they have a balance. However, they are not user operated; rather, they are deployed on the network and run according to a program. Then, user accounts can communicate with a smart contract by submitting transactions that carry out a smart contract function. Like a standard contract, smart contracts have the ability to establish rules and have the system automatically enforce those rules. Smart contract interactions are irreversible and cannot by default be removed.

## A digital vending machine {#a-digital-vending-machine}

Perhaps the best metaphor for a smart contract is a vending machine, as described by [Nick Szabo](https://unenumerated.blogspot.com/). With the right inputs, a certain output is guaranteed.

To get a snack from a vending machine:

```
money + snack selection = snack dispensed
```

The vending machine is programmed with this logic.

A smart contract, like a vending machine, has logic programmed into it. Here's a simple example of how this vending machine would look if it were a smart contract written in Solidity:

```solidity
pragma solidity 0.8.7;

contract VendingMachine {

    // Declare state variables of the contract
    address public owner;
    mapping (address => uint) public cupcakeBalances;

    // When 'VendingMachine' contract is deployed:
    // 1. set the deploying address as the owner of the contract
    // 2. set the deployed smart contract's cupcake balance to 100
    constructor() {
        owner = msg.sender;
        cupcakeBalances[address(this)] = 100;
    }

    // Allow the owner to increase the smart contract's cupcake balance
    function refill(uint amount) public {
        require(msg.sender == owner, "Only the owner can refill.");
        cupcakeBalances[address(this)] += amount;
    }

    // Allow anyone to purchase cupcakes
    function purchase(uint amount) public payable {
        require(msg.value >= amount * 1 ether, "You must pay at least 1 NUMB per cupcake");
        require(cupcakeBalances[address(this)] >= amount, "Not enough cupcakes in stock to complete this purchase");
        cupcakeBalances[address(this)] -= amount;
        cupcakeBalances[msg.sender] += amount;
    }
}
```

Like how a vending machine removes the need for a vendor employee, smart contracts can replace intermediaries in many industries.

## Permissionless {#permissionless}

Anyone can write a smart contract and deploy it to the network. You just need to learn how to code in a [smart contract language](/docs/developers/smart-contracts/languages/), and have enough NUMB to deploy your contract. Deploying a smart contract is technically a transaction, so you need to pay [Gas](/docs/foundational-topics/gas/) in the same way you need to pay gas for a simple NUMB transfer. However, gas costs for contract deployment are far higher.

NumBlock has solidity for writing smart contracts.

However, they must be compiled before they can be deployed so that NumBlock's virtual machine can interpret and store the contract. [More on compilation](docs/developers/smart-contracts/compiling-contracts/)

## Composability {#composability}

Smart contracts are public on NumBlock and can be thought of as open APIs. This means you can call other smart contracts in your own smart contract to greatly extend what's possible. Contracts can even deploy other contracts.

## Limitations {#limitations}

Smart contracts alone cannot get information about "real-world" events because they can't send HTTP requests. This is by design. Relying on external information could jeopardise consensus, which is important for security and decentralization.

Another limitation of smart contracts is the maximum contract size. A smart contract can be a maximum of 24KB or it will run out of gas. This can be circumnavigated by using [The Diamond Pattern](https://eips.ethereum.org/EIPS/eip-2535).

## Multisig contracts {#multisig}

Multisig (multiple-signature) contracts are smart contract accounts that require multiple valid signatures to execute a transaction. This is very useful for avoiding single points of failure for contracts holding substantial amounts of ether or other tokens. Multisigs also divide responsibility for contract execution and key management between multiple parties and prevent the loss of a single private key leading to irreversible loss of funds. For these reasons, multisig contracts can be used for simple DAO governance. Multisigs require N signatures out of M possible acceptable signatures (where N ≤ M, and M > 1) in order to execute. `N = 3, M = 5` and `N = 4, M = 7` are commonly used. A 4/7 multisig requires four out of seven possible valid signatures. This means the funds are still retrievable even if three signatures are lost. In this case, it also means that the majority of key-holders must agree and sign in order for the contract to execute.

## Smart contract resources {#smart-contract-resources}

**OpenZeppelin Contracts -** **_Library for secure smart contract development._**

- [openzeppelin.com/contracts/](https://openzeppelin.com/contracts/)
- [GitHub](https://github.com/OpenZeppelin/openzeppelin-contracts)
- [Community Forum](https://forum.openzeppelin.com/c/general/16)

**DappSys -** **_Safe, simple, flexible building-blocks for smart-contracts._**

- [Dappsys](https://dappsys.readthedocs.io/)
- [GitHub](https://github.com/dapphub/dappsys)

## Further reading {#further-reading}

- [Smart Contracts: The Blockchain Technology That Will Replace Lawyers](https://blockgeeks.com/guides/smart-contracts/) _– Blockgeeks_
- [Best Practices for Smart Contract Development](https://yos.io/2019/11/10/smart-contract-development-best-practices/) _– Nov 10, 2019 - Yos Riady_
- [Clean contracts - a guide on smart contract patterns & practices](https://www.wslyvh.com/clean-contracts/) _– Jul 30, 2020 - wslyvh_