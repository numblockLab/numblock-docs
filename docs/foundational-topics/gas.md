---
title: Gas and Fees
description: Gas is essential to the NumBlock network. It is the fuel that allows it to operate, in the same way that a car needs gasoline to run.
lang: en
---

Gas is essential to the NumBlock network. It is the fuel that allows it to operate, in the same way that a car needs gasoline to run.

## What is gas? {#what-is-gas}

Gas refers to the unit that measures the amount of computational effort required to execute specific operations on the NumBlock network.

Since each transaction requires computational resources to execute, each transaction requires a fee. Gas refers to the fee required to conduct a transaction on NumBlock successfully.

![A diagram showing where gas is needed in EVM operations](</img/gas.png>)

Gas fees are paid in NumBlock's native currency. Gas prices are denoted in gwei, which itself is a denomination of NUMB - each gwei is equal to 0.000000001 NUMB (10<sup>-9</sup> NUMB). For example, instead of saying that your gas costs 0.000000001 NUMB, you can say your gas costs 1 gwei. The word 'gwei' itself means 'giga-wei', and it is equal to 1,000,000,000 wei. Wei itself (named after [Wei Dai](https://wikipedia.org/wiki/Wei_Dai), creator of [b-money](https://www.investopedia.com/terms/b/bmoney.asp)) is the smallest unit of NUMB.

### Priority fee (tips) {#priority-fee}

For transactions that need to get preferentially executed ahead of other transactions in the same block, a higher tip will be necessary to attempt to outbid competing transactions.

### Max fee {#maxfee}

To execute a transaction on the network, users can specify a maximum limit they are willing to pay for their transaction to be executed. This optional parameter is known as the `maxFeePerGas`. For a transaction to be executed, the max fee must exceed the sum of the base fee and the tip. The transaction sender is refunded the difference between the max fee and the sum of the base fee and tip.

### Calculating fees {#calculating-fees}

One of the main benefits of the London upgrade is improving the user's experience when setting transaction fees. For wallets that support the upgrade, instead of explicitly stating how much you are willing to pay to get your transaction through, wallet providers will automatically set a recommended transaction fee (base fee + recommended priority fee) to reduce the amount of complexity burdened onto their users.

## Why do gas fees exist? {#why-do-gas-fees-exist}

In short, gas fees help keep the NumBlock network secure. By requiring a fee for every computation executed on the network, we prevent bad actors from spamming the network. In order to avoid accidental or hostile infinite loops or other computational wastage in code, each transaction is required to set a limit to how many computational steps of code execution it can use. The fundamental unit of computation is "gas".

Although a transaction includes a limit, any gas not used in a transaction is returned to the user (i.e. `max fee - (base fee + tip)` is returned).

![Diagram showing how unused gas is refunded](</img/gases.png>)
