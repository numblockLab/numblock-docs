---
title: Using Foundry
description: Using Foundry with NumBlock
keywords: [Foundry, Forge, NumBlock, Deployment, Smart, Chain, Contract, EVM, Ethereum, Guide] 
---

# Using Foundry

#### Foundry is a smart contract development toolchain.

Follow the [Foundry documentation](https://book.getfoundry.sh/getting-started/installation) for general installation and overview.

Foundry consists of:

- [Forge](https://github.com/foundry-rs/foundry/blob/master/forge): Ethereum testing framework (like Truffle, Hardhat and DappTools).
- [Cast](https://github.com/foundry-rs/foundry/blob/master/cast): Swiss army knife for interacting with EVM smart contracts, sending      transactions and getting chain data.
- [Anvil](https://github.com/foundry-rs/foundry/blob/master/anvil): local Ethereum node, akin to Ganache, Hardhat Network.

## Compile your NumBlock Contract

Compile your contract with this command:

```bash
forge build
```


Additional compilation options can be found [here](https://book.getfoundry.sh/reference/forge/forge-build).

## Deploy your Contract

Forge can only deploy one contract at a time.

Because Solidity files may contain multiple contracts, ```:<YourContract>``` (Seen below) specifies which contract to deploy.

#### Deploy your contract on NumBlock with the following Forge command:

<Tabs groupId="networks">
<TabItem value="numblock" label="NumBlock Testnet">

```bash
forge create --rpc-url https://rpc-testnet.numblock.org --private-key <your_private_key> src/<YourContract>.sol:<YourContract>
```
</TabItem>
</Tabs>

#### Deploy with constructor arguments:

Use the ```--constructor-args``` flag to pass arguments to the constructor:

<Tabs groupId="networks">

<TabItem value="numblock" label="NumBlock Testnet">

```bash
forge create --rpc-url https://rpc-testnet.numblock.org \
    --constructor-args <argument-1> <argument-2...>\
    --private-key <your_private_key> src/<YourToken>.sol:<YourToken> \
```
</TabItem>
</Tabs>

## Verify your Contract

#### Verify your NumBlock contract on deployment using Etherscan:

 Use the ```--verify``` flag as shown below:

<Tabs groupId="networks">
<TabItem value="numblock" label="NumBlock Testnet">

```bash
forge create --rpc-url https://rpc-testnet.numblock.org \
    --private-key <your_private_key> src/<YourToken>.sol:<YourToken> \
    --etherscan-api-key <your_etherscan_api_key> \
    --verify
```
</TabItem>
</Tabs>

For information regarding pre-existing contract verification, visit the [offical Forge documentation](https://book.getfoundry.sh/forge/deploying#verifying-a-pre-existing-contract).
