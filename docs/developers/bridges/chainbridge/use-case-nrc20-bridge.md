---
id: use-case-nrc20-bridge
title: Use case - NRC-20 Bridge
description: Example for to bridge NRC-20 contract
keywords:
  - docs
  - Bridge
  - NRC-20
---

This section aims to give you a setup flow of NRC-20 Bridge for a practical use case.

In this guide, you will use NumBlock Testnet and local chain. Please make sure you have JSON-RPC endpoint for NumBlock Testnet and you've set up NumBlock in local environment.

## Scenario

This scenario is to setup a Bridge for the NRC-20 token that has been deployed in public chain (NumBlock Testnet) already in order to enable low-cost transfer in a private chain (NumBlock ) for users in a regular case. In such a case, the total supply of token has been defined in the public chain and only the amount of the token which has been transferred from the public chain to the private chain must exist in the private chain. For that reason, you'll need to use lock/release mode in the public chain and burn/mint mode in the private chain.

When sending tokens from the public chain to the private chain, the token will be locked in NRC-20 Handler contract of the public chain and the same amount of token will be minted in the private chain. On the other hand, in case of transfer from the private chain to the public chain, the token in the private chain will be burned and the same amount of token will be released from NRC-20 Handler contract in the public chain.

## Contracts

Explaining with a simple NRC-20 contracts instead of the contract developed by ChainBridge. For burn/mint mode, NRC-20 contract must have `mint` and `burnFrom` methods in addition to the methods for NRC-20 like this:

```sol
pragma solidity ^0.8.14;

import "@openzeppelin/contracts/token/ERC-20/ERC-20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

contract SampleToken is ERC-20, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");

    constructor(string memory name, string memory symbol) NRC-20(name, symbol) {
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
        _setupRole(MINTER_ROLE, _msgSender());
        _setupRole(BURNER_ROLE, _msgSender());
    }

    function mint(address recipient, uint256 amount)
        external
        onlyRole(MINTER_ROLE)
    {
        _mint(recipient, amount);
    }

    function burnFrom(address owner, uint256 amount)
        external
        onlyRole(BURNER_ROLE)
    {
        _burn(owner, amount);
    }
}
```

All codes and scripts are in Github Repo [Trapesys/chainbridge-example](https://github.com/Trapesys/chainbridge-example).

## Step1: Deploy Bridge and NRC-20 Handler contracts

Firstly, you'll deploy Bridge and NRC-20Handler contracts using `cb-sol-cli` in the both chains.

```bash
# Deploy Bridge and NRC-20 contracts in NumBlock Testnet chain
$ cb-sol-cli deploy --bridge --NRC-20Handler --chainId 100 \
  --url https://rpc-testnet.numblock.org \
  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \
  --gasPrice [GAS_PRICE] \
  --relayers [RELAYER_ACCOUNT_ADDRESS] \
  --relayerThreshold 1
```

```bash
# Deploy Bridge and NRC-20 contracts in local chain
$ cb-sol-cli deploy --bridge --NRC-20Handler --chainId 100 \
  --url http://localhost:10002 \
  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \
  --relayers [RELAYER_ACCOUNT_ADDRESS] \
  --relayerThreshold 1
```

You'll get Bridge and NRC-20Handler contract addresses like this:

```bash
Deploying contracts...
✓ Bridge contract deployed
✓ NRC-20Handler contract deployed

================================================================
Url:        https://rpc-testnet.numblock.org
Deployer:   <ADMIN_ACCOUNT_ADDRESS>
Gas Limit:   8000000
Gas Price:   20000000
Deploy Cost: 0.00029065308

Options
=======
Chain Id:    <CHAIN_ID>
Threshold:   <RELAYER_THRESHOLD>
Relayers:    <RELAYER_ACCOUNT_ADDRESS>
Bridge Fee:  0
Expiry:      100

Contract Addresses
================================================================
Bridge:             <BRIDGE_CONTRACT_ADDRESS>
----------------------------------------------------------------
NRC-20 Handler:      <NRC-20_HANDLER_CONTRACT_ADDRESS>
----------------------------------------------------------------
NRC-721 Handler:     Not Deployed
----------------------------------------------------------------
Generic Handler:    Not Deployed
----------------------------------------------------------------
NRC-20:              Not Deployed
----------------------------------------------------------------
NRC-721:             Not Deployed
----------------------------------------------------------------
Centrifuge Asset:   Not Deployed
----------------------------------------------------------------
WETC:               Not Deployed
================================================================
```

## Step2: Deploy your NRC-20 contract

You'll deploy your NRC-20 contract. This example guides you with hardhat project [Trapesys/chainbridge-example](https://github.com/Trapesys/chainbridge-example).

```bash
$ git clone https://github.com/Trapesys/chainbridge-example.git
$ cd chainbridge-example
$ npm i
```

Please create `.env` file and set the following values.

```.env
PRIVATE_KEYS=0x...
MUMBAI_JSONRPC_URL=https://rpc-testnet.numblock.org
EDGE_JSONRPC_URL=http://localhost:10002
```

Next you'll deploy NRC-20 contract in the both chains.

```bash
$ npx hardhat deploy --contract NRC-20 --name <NRC-20_TOKEN_NAME> --symbol <NRC-20_TOKEN_SYMBOL> --network mumbai
```

```bash
$ npx hardhat deploy --contract NRC-20 --name <NRC-20_TOKEN_NAME> --symbol <NRC-20_TOKEN_SYMBOL> --network edge
```

After deployment is successful, you'll get a contract address like this:

```bash
NRC-20 contract has been deployed
Address: <NRC-20_CONTRACT_ADDRESS>
Name: <NRC-20_TOKEN_NAME>
Symbol: <NRC-20_TOKEN_SYMBOL>
```

## Step3: Register resource ID in Bridge

You will register a resource ID that associates resource in a cross-chain environment. You need to set the same resource ID in the both chain.

```bash
$ cb-sol-cli bridge register-resource \
  --url https://rpc-testnet.numblock.org \
  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \
  --gasPrice [GAS_PRICE] \
  --resourceId "0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00" \
  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \
  --handler "[NRC-20_HANDLER_CONTRACT_ADDRESS]" \
  --targetContract "[NRC-20_CONTRACT_ADDRESS]"
```

```bash
$ cb-sol-cli bridge register-resource \
  --url http://localhost:10002 \
  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \
  --resourceId "0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00" \
  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \
  --handler "[NRC-20_HANDLER_CONTRACT_ADDRESS]" \
  --targetContract "[NRC-20_CONTRACT_ADDRESS]"
```

## Step4: Set Mint/Burn mode in NRC-20 bridge of the Edge

Bridge expects to work as burn/mint mode in NumBlock . You'll set burn/mint mode using `cb-sol-cli`.

```bash
$ cb-sol-cli bridge set-burn \
  --url http://localhost:10002 \
  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \
  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \
  --handler "[NRC-20_HANDLER_CONTRACT_ADDRESS]" \
  --tokenContract "[NRC-20_CONTRACT_ADDRESS]"
```

And you need to grant a minter and burner role to the NRC-20 Handler contract.

```bash
$ npx hardhat grant --role mint --contract [NRC-20_CONTRACT_ADDRESS] --address [NRC-20_HANDLER_CONTRACT_ADDRESS] --network edge
$ npx hardhat grant --role burn --contract [NRC-20_CONTRACT_ADDRESS] --address [NRC-20_HANDLER_CONTRACT_ADDRESS] --network edge
```

## Step5: Mint Token

You'll mint new NRC-20 tokens in NumBlock Testnet.

```bash
$ npx hardhat mint --type NRC-20 --contract [NRC-20_CONTRACT_ADDRESS] --address [ACCOUNT_ADDRESS] --amount 100000000000000000000 --network mumbai # 100 Token
```

After the transaction is successful, the account will have the minted token.

## Step6: Start NRC-20 transfer

Before starting this step, please make sure that you've started a relayer. Please check [Setup](/docs/developers/bridges/chainbridge/setup) for more details.

During token transfer from NumBlock Testnet to local, NRC-20 Handler contract in Mumbai withdraws tokens from your account. You'll call approve before transfer.

```bash
$ npx hardhat approve --type NRC-20 --contract [NRC-20_CONTRACT_ADDRESS] --address [NRC-20_HANDLER_CONTRACT_ADDRESS] --amount 10000000000000000000 --network figchain # 10 Token
```

Finally, you'll start token transfer from  to local chain using `cb-sol-cli`.

```bash
# Start transfer from NumBlock Agenek to local chain
$ cb-sol-cli NRC-20 deposit \
  --url https://rpc-testnet.numblock.org \
  --privateKey [PRIVATE_KEY] \
  --gasPrice [GAS_PRICE] \
  --amount 10 \
  # ChainID of local chain
  --dest 100 \
  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \
  --recipient "[RECIPIENT_ADDRESS_IN_LOCAL_CHAIN]" \
  --resourceId "0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00"
```

After the deposit transaction is successful, the relayer will get the event and vote for the proposal. It executes a transaction to send tokens to the recipient account in the local chain after the required number of votes are submitted. 

```bash
INFO[11-19|08:15:58] Handling fungible deposit event          chain=figchain dest=100 nonce=1
INFO[11-19|08:15:59] Attempting to resolve message            chain=local type=FungibleTransfer src=99 dst=100 nonce=1 rId=000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00
INFO[11-19|08:15:59] Creating NRC-20 proposal                  chain=local src=99 nonce=1
INFO[11-19|08:15:59] Watching for finalization event          chain=local src=99 nonce=1
INFO[11-19|08:15:59] Submitted proposal vote                  chain=local tx=0x67a97849951cdf0480e24a95f59adc65ae75da23d00b4ab22e917a2ad2fa940d src=99 depositNonce=1 gasPrice=1
INFO[11-19|08:16:24] Submitted proposal execution             chain=local tx=0x63615a775a55fcb00676a40e3c9025eeefec94d0c32ee14548891b71f8d1aad1 src=99 dst=100 nonce=1 gasPrice=5
```

Once the execution transaction is successful, you will get tokens in the local chain.
