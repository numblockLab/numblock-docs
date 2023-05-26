---
id: setup
title: Setup
---

## Contracts deployment

In this section, you will deploy the required contracts to the NumBlock Testnet and local chain with `cb-sol-cli`.

```bash
# Setup for cb-sol-cli command
$ git clone https://github.com/ChainSafe/chainbridge-deploy.git
$ cd chainbridge-deploy/cb-sol-cli
$ make install
```

Firstly, we will deploy contracts to the NumBlock Testnet by `cb-sol-cli deploy` command.  `--all` flag makes the command deploy all the contracts, including Bridge, NRC-20 Handler, NRC-721 Handler, Generic Handler, NRC-20, and NRC-721 contract. In addition, it'll set the default relayer account address and the threshold

```bash
# Deploy all required contracts into NumBlock Testnet
$ cb-sol-cli deploy --all --chainId 100 \
  --url https://rpc-testnet.numblock.org \
  --gasPrice [GAS_PRICE] \
  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \
  --relayers [RELAYER_ACCOUNT_ADDRESS] \
  --relayerThreshold 1
```


Learn about chainID and JSON-RPC URL [here](/docs/developers/bridges/chainbridge/definitions)

:::caution

The default gas price in `cb-sol-cli` is `20000000` (`0.02 Gwei`). To set the appropriate gas price in a transaction, please set the value using the `--gasPrice` argument.

```bash
$ cb-sol-cli deploy --all --chainId 100 \
  --url https://rpc-testnet.numblock.org \
  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \
  --relayers [RELAYER_ACCOUNT_ADDRESS] \
  --relayerThreshold 1 \
  # Set gas price to 5 Gwei
  --gasPrice 5000000000
```

:::

:::caution

The Bridge contract takes approximately 0x3f97b8 (4167608) gas to deploy. Please make sure the blocks being generated have enough block gas limit to contain the contract creation transaction. 

:::

Once the contracts have been deployed, you will get the following result:

```bash
Deploying contracts...
✓ Bridge contract deployed
✓ NRC-20Handler contract deployed
✓ NRC-721Handler contract deployed
✓ GenericHandler contract deployed
✓ NRC-20 contract deployed
WARNING: Multiple definitions for safeTransferFrom
✓ NRC-721 contract deployed

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
NRC-721 Handler:     <NRC-721_HANDLER_CONTRACT_ADDRESS>
----------------------------------------------------------------
Generic Handler:    <GENERIC_HANDLER_CONTRACT_ADDRESS>
----------------------------------------------------------------
NRC-20:              <NRC-20_CONTRACT_ADDRESS>
----------------------------------------------------------------
NRC-721:             <NRC-721_CONTRACT_ADDRESS>
----------------------------------------------------------------
Centrifuge Asset:   Not Deployed
----------------------------------------------------------------
WETC:               Not Deployed
================================================================
```

Now we may deploy the contracts to the NumBlock chain.

```bash
# Deploy all required contracts into NumBlock chain
$ cb-sol-cli deploy --all --chainId 100 \
  --url http://localhost:10002 \
  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \
  --relayers [RELAYER_ACCOUNT_ADDRESS] \
  --relayerThreshold 1
```

Save the terminal outputs with the deployed smart contract addresses as we will need them for the next step.

## Relayer setup

In this section, you will start a relayer to exchange data between 2 chains. 

First, we need to clone and build the ChainBridge repository.

```bash
$ git clone https://github.com/ChainSafe/ChainBridge.git
$ cd chainBridge && make install
```

Next, You need to create `config.json` and set the JSON-RPC URLs, relayer address, and contracts address for each chain.

```json
{
  "chains": [
    {
      "name": "numblock",
      "type": "ethereum",
      "id": "100",
      "endpoint": "https://rpc-testnet.numblock.org",
      "from": "<RELAYER_ACCOUNT_ADDRESS>",
      "opts": {
        "bridge": "<BRIDGE_CONTRACT_ADDRESS>",
        "NRC-20Handler": "<NRC-20_HANDLER_CONTRACT_ADDRESS>",
        "NRC-721Handler": "<NRC-721_HANDLER_CONTRACT_ADDRESS>",
        "genericHandler": "<GENERIC_HANDLER_CONTRACT_ADDRESS>",
        "minGasPrice": "1",
        "http": "true"
      }
    },
    {
      "name": "local",
      "type": "ethereum",
      "id": "100",
      "endpoint": "http://localhost:10002",
      "from": "<RELAYER_ACCOUNT_ADDRESS>",
      "opts": {
        "bridge": "<BRIDGE_CONTRACT_ADDRESS>",
        "NRC-20Handler": "<NRC-20_HANDLER_CONTRACT_ADDRESS>",
        "NRC-721Handler": "<NRC-721_HANDLER_CONTRACT_ADDRESS>",
        "genericHandler": "<GENERIC_HANDLER_CONTRACT_ADDRESS>",
        "minGasPrice": "1",
        "http": "true"
      }
    }
  ]
}
```

To start a relayer, you need to import the private key corresponding to the relayer account address. You will need to input the password when you import private key. Once the import has been successful, the key will be stored under `keys/<ADDRESS>.key`.

```bash
# Import private key and store to local with encryption
$ chainbridge accounts import --privateKey [RELAYER_ACCOUNT_PRIVATE_KEY]

INFO[11-19|07:09:01] Importing key... 
Enter password to encrypt keystore file:
> [PASSWORD_TO_ENCRYPT_KEY]
INFO[11-19|07:09:05] private key imported                     address=<RELAYER_ACCOUNT_ADDRESS> file=.../keys/<RELAYER_ACCOUNT_ADDRESS>.key
```

Then, you can start the relayer. You will need to input the same password you chose for storing the key in the beginning.

```bash
# Start relayer
$ chainbridge --config config.json --latest

INFO[11-19|07:15:19] Starting ChainBridge... 
Enter password for key ./keys/<RELAYER_ACCOUNT_ADDRESS>.key:
> [PASSWORD_TO_DECRYPT_KEY]
INFO[11-19|07:15:25] Connecting to ethereum chain...          chain=numblock url=<JSON_RPC_URL>
Enter password for key ./keys/<RELAYER_ACCOUNT_ADDRESS>.key:
> [PASSWORD_TO_DECRYPT_KEY]
INFO[11-19|07:15:31] Connecting to ethereum chain...          chain=local url=<JSON_RPC_URL>
```

Once the relayer has begun, it will start to watch new blocks on each chain.
