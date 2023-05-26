---
id: block-proposal
title: Block Proposal
---

## Overview

Blocks are the fundamental units of the blockchain. Blocks are discrete units of information that get passed between nodes, agreed upon and added to each node's database. This page explains how they are produced.

## Who produces block?

Validator accounts propose blocks. Validator accounts are managed by node operators who run validator software as part of their execution and consensus clients and have deposited at least 1 NUMB into the deposit contract. However, each validator is only occasionally responsible for proposing a block. NumBlock measures time in slots and epochs. Each slot is 2 seconds. Every slot is an opportunity to add a new block on NumBlock.

### Random selection {#random-selection}

A single validator is pseudo-randomly chosen to propose a block in each slot. There is no such thing as true randomness in a blockchain because if each node generated genuinely random numbers, they couldn't come to consensus. Instead, the aim is to make the validator selection process unpredictable. The randomness is achieved on NumBlock using an algorithm called RANDAO that mixes a hash from the block proposer with a seed that gets updated every block. This value is used to select a specific validator from the total validator set. The validator selection is fixed four epochs in advance as a way to protect against certain kinds of seed manipulation.

Although validators add to RANDAO in each slot, the global RANDAO value is only updated once per epoch. To compute the index of the next block proposer, the RANDAO value is mixed with the slot number to give a unique value in each slot. The probability of an individual validator being selected is not simply 1/N (where N = total active validators). Instead, it is weighted by the effective NUMB balance of each validator. The maximum effective balance is 1 NUMB (this means that balance < 1 NUMB leads to a lower weight than balance == 1 NUMB, but balance > 1 NUMB does not lead to higher weighting than balance == 32 NUMB).

Only one block proposer is selected in each slot. Under normal conditions, a single block producer creates and releases a single block in their dedicated slot. Creating two blocks for the same slot is a slashable offence, often known as "equivocation".

