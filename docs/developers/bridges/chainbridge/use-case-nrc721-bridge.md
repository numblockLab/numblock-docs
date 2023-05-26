---
id: use-case-nrc721-bridge
title: Use case - NRC-721 Bridge
description: Example for to bridge NRC-721 contract
keywords:
  - docs
  - Bridge
  - NRC-20
---

This section aims to give you a setup flow of NRC-721 Bridge for a practical use case.

In this guide, you will use NumBlock Testnet and local chain. Please make sure you have JSON-RPC endpoint for NumBlock Testnet and you've set up local chain environment.

## Scenario

This scenario is to setup a Bridge for the NRC-721 NFT that has been deployed in public chain (NumBlock Testnet) already in order to enable low-cost transfer in a private chain (NumBlock) for users in a regular case. In such a case, the original metadata has been defined in the public chain and the only NFTs that have been transferred from Public chain can exist in the private chain. For that reason, you'll need to use lock/release mode in the public chain and burn/mint mode in the private chain.

When sending NFTs from the public chain to the private chain, the NFT will be locked in NRC-721 Handler contract in the public chain and the same NFT will be minted in the private chain. On the other hand, in case of transfer from the private chain to the public chain, the NFT in the private chain will be burned and the same NFT will be released from NRC-721 Handler contract in the public chain.

## Contracts

Explaining with a simple NRC-721 contract instead of the contract developed by ChainBridge. For burn/mint mode, NRC-721 contract must have `mint` and `burn` methods in addition to the methods defined in NRC-721 like this:

```sol
pragma solidity ^0.8.14;

import "@openzeppelin/contracts/token/ERC-721/ERC-721.sol";
import "@openzeppelin/contracts/token/ERC-20/ERC-20.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/token/ERC-721/extensions/ERC-721Burnable.sol";
import "@openzeppelin/contracts/token/ERC-721/extensions/ERC-721URIStorage.sol";

contract SampleNFT is ERC-721, ERC-721Burnable, ERC-721URIStorage, AccessControl {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");

    string public baseURI;

    constructor(
        string memory name,
        string memory symbol,
        string memory baseURI
    ) NRC-721(name, symbol) {
        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());
        _setupRole(MINTER_ROLE, _msgSender());
        _setupRole(BURNER_ROLE, _msgSender());

        _setBaseURI(baseURI);
    }

    function mint(
        address recipient,
        uint256 tokenID,
        string memory data
    ) public onlyRole(MINTER_ROLE) {
        _mint(recipient, tokenID);
        _setTokenURI(tokenID, data);
    }

    function burn(uint256 tokenID)
        public
        override(ERC-721Burnable)
        onlyRole(BURNER_ROLE)
    {
        _burn(tokenID);
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override(ERC-721, ERC-721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC-721, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function _burn(uint256 tokenId)
        internal
        virtual
        override(ERC-721, ERC-721URIStorage)
    {
        super._burn(tokenId);
    }

    function _setBaseURI(string memory baseURI_) internal {
        baseURI = baseURI_;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }
}
```

All codes and scripts are in Github Repo [Trapesys/chainbridge-example](https://github.com/Trapesys/chainbridge-example).

## Step1: Deploy Bridge and NRC-721 Handler contracts

Firstly, you'll deploy Bridge and NRC-721Handler contracts using `cb-sol-cli` in the both chains.

```bash
# Deploy Bridge and NRC-721 contracts in NumBlock Testnet chain
$ cb-sol-cli deploy --bridge --NRC-721Handler --chainId 99 \
  --url https://rpc-testnet.numblock.org \
  --gasPrice [GAS_PRICE] \
  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \
  --relayers [RELAYER_ACCOUNT_ADDRESS] \
  --relayerThreshold 1
```

```bash
# Deploy Bridge and NRC-721 contracts in local
$ cb-sol-cli deploy --bridge --NRC-721Handler --chainId 100 \
  --url http://localhost:10002 \
  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \
  --relayers [RELAYER_ACCOUNT_ADDRESS] \
  --relayerThreshold 1
```

You'll get Bridge and NRC-721Handler contract addresses like this:

```bash
Deploying contracts...
✓ Bridge contract deployed
✓ NRC-721Handler contract deployed

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
NRC-20 Handler:      Not Deployed
----------------------------------------------------------------
NRC-721 Handler:     <NRC-721_HANDLER_CONTRACT_ADDRESS>
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

## Step2: Deploy your NRC-721 contract

You'll deploy your NRC-721 contract. This example guides you with hardhat project [Trapesys/chainbridge-example](https://github.com/Trapesys/chainbridge-example).

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

Next you'll deploy NRC-721 contract in the both chains.

```bash
$ npx hardhat deploy --contract NRC-721 --name <NRC-721_TOKEN_NAME> --symbol <NRC-721_TOKEN_SYMBOL> --uri <BASE_URI> --network mumbai
```

```bash
$ npx hardhat deploy --contract NRC-721 --name <NRC-721_TOKEN_NAME> --symbol <NRC-721_TOKEN_SYMBOL> --uri <BASE_URI> --network edge
```

After deployment is successful, you'll get contract address like this:

```bash
NRC-721 contract has been deployed
Address: <NRC-721_CONTRACT_ADDRESS>
Name: <NRC-721_TOKEN_NAME>
Symbol: <NRC-721_TOKEN_SYMBOL>
Base URI: <NRC-721_BASE_URI>
```

## Step3: Register resource ID in Bridge

You will register a resource ID that associates resources in a cross-chain environment.

```bash
$ cb-sol-cli bridge register-resource \
  --url https://rpc-testnet.numblock.org \
  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \
  --gasPrice [GAS_PRICE] \
  # Set Resource ID for NRC-721
  --resourceId "0x000000000000000000000000000000e389d61c11e5fe32ec1735b3cd38c69501" \
  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \
  --handler "[NRC-721_HANDLER_CONTRACT_ADDRESS]" \
  --targetContract "[NRC-721_CONTRACT_ADDRESS]"
```

```bash
$ cb-sol-cli bridge register-resource \
  --url http://localhost:10002 \
  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \
  # Set Resource ID for NRC-721
  --resourceId "0x000000000000000000000000000000e389d61c11e5fe32ec1735b3cd38c69501" \
  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \
  --handler "[NRC-721_HANDLER_CONTRACT_ADDRESS]" \
  --targetContract "[NRC-721_CONTRACT_ADDRESS]"
```

## Step4: Set Mint/Burn mode in NRC-721 bridge of the local chain

Bridge expects to work as burn/mint mode in local chain. You'll set burn/mint mode.

```bash
$ cb-sol-cli bridge set-burn \
  --url http://localhost:10002 \
  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \
  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \
  --handler "[NRC-721_HANDLER_CONTRACT_ADDRESS]" \
  --tokenContract "[NRC-721_CONTRACT_ADDRESS]"
```

And you need to grant a minter and burner role to the NRC-721 Handler contract.

```bash
$ npx hardhat grant --role mint --contract [NRC-721_CONTRACT_ADDRESS] --address [NRC-721_HANDLER_CONTRACT_ADDRESS] --network edge
$ npx hardhat grant --role burn --contract [NRC-721_CONTRACT_ADDRESS] --address [NRC-721_HANDLER_CONTRACT_ADDRESS] --network edge
```

## Step5: Mint NFT

You'll mint new NRC-721 NFT in NumBlock Agenek chain.

```bash
$ npx hardhat mint --type NRC-721 --contract [NRC-721_CONTRACT_ADDRESS] --address [ACCOUNT_ADDRESS] --id 0x50 --data hello.json --network mumbai
```

After transaction is successful, the account will have the minted NFT.

## Step6: Start NRC-721 transfer

Before starting this step, please make sure that you've started relayer. Please check [Setup](/docs/developers/bridges/chainbridge/setup) for more details.

During NFT transfer from NumBlock Agenek to local chain, NRC-721 Handler contract in NumBlock Agenek withdraws NFT from your account. You'll call approve before transfer.

```bash
$ npx hardhat approve --type NRC-721 --contract [NRC-721_CONTRACT_ADDRESS] --address [NRC-721_HANDLER_CONTRACT_ADDRESS] --id 0x50 --network mumbai
```

Finally, you'll start NFT transfer from NumBlock Agenek to local chain.

```bash
# Start transfer from NumBlock Agenek to NumBlock  chain
$ cb-sol-cli NRC-721 deposit \
  --url https://rpc-testnet.numblock.org \
  --privateKey [PRIVATE_KEY] \
  --gasPrice [GAS_PRICE] \
  --id 0x50 \
  # ChainID for NumBlock  chain
  --dest 100 \
  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \
  --recipient "[RECIPIENT_ADDRESS_IN_LOCAL_CHAIN]" \
  --resourceId "0x000000000000000000000000000000e389d61c11e5fe32ec1735b3cd38c69501"
```

After the deposit transaction is successful, the relayer will get the event and vote for the proposal.  
It executes a transaction to send NFT to the recipient account in NumBlock  chain after the required number of votes are submitted. 

```bash
INFO[11-19|09:07:50] Handling nonfungible deposit event       chain=figchain
INFO[11-19|09:07:50] Attempting to resolve message            chain=local type=NonFungibleTransfer src=99 dst=100 nonce=2 rId=000000000000000000000000000000e389d61c11e5fe32ec1735b3cd38c69501
INFO[11-19|09:07:50] Creating NRC-721 proposal                 chain=local src=99 nonce=2
INFO[11-19|09:07:50] Watching for finalization event          chain=local src=99 nonce=2
INFO[11-19|09:07:50] Submitted proposal vote                  chain=local tx=0x58a22d84a08269ad2e8d52d8dc038621f1a21109d11c7b6e0d32d5bf21ea8505 src=99 depositNonce=2 gasPrice=1
INFO[11-19|09:08:15] Submitted proposal execution             chain=local tx=0x57419844881a07531e31667c609421662d94d21d0709e64fb728138309267e68 src=99 dst=100 nonce=2 gasPrice=3
```

Once the execution transaction is successful, you will get NFT in local chain.
