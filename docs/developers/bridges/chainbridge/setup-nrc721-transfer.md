---
id: setup-nrc721-transfer
title: NRC-721 NFT Transfer
---

This section guides you through setting up an NRC-721 bridge and sending NFTs between blockchain networks.

## Step 1: Register resource ID

You will first need to register the resource ID for the NRC-721 token in the Bridge contracts on both chains.

```bash
# For NumBlock Testnet
$ cb-sol-cli bridge register-resource \
  --url https://rpc-testnet.numblock.org \
  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \
  --gasPrice [GAS_PRICE] \
  # Set ResourceID for NRC-721 Token
  --resourceId "0x000000000000000000000000000000e389d61c11e5fe32ec1735b3cd38c69501" \
  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \
  --handler "[NRC-721_HANDLER_CONTRACT_ADDRESS]" \
  --targetContract "[NRC-721_CONTRACT_ADDRESS]"

# For local chain
$ cb-sol-cli bridge register-resource \
  --url http://localhost:10002 \
  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \
  # Set ResourceID for NRC-721 Token
  --resourceId "0x000000000000000000000000000000e389d61c11e5fe32ec1735b3cd38c69501" \
  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \
  --handler "[NRC-721_HANDLER_CONTRACT_ADDRESS]" \
  --targetContract "[NRC-721_CONTRACT_ADDRESS]"
```

## (Optional): Make contracts mintable/burnable

To make the Tokens mintable/burnable, you will need to call the following commands:

```bash
# Let NRC-721 contract burn on source chain or mint on destination chain
$ cb-sol-cli bridge set-burn \
  --url http://localhost:10002 \
  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \
  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \
  --handler "[NRC-721_HANDLER_CONTRACT_ADDRESS]" \
  --tokenContract "[NRC-721_CONTRACT_ADDRESS]"

# Grant minter role to NRC-721 Handler contract (Only if you want to mint)
$ cb-sol-cli NRC-721 add-minter \
  --url http://localhost:10002 \
  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \
  --NRC-721Address "[NRC-721_CONTRACT_ADDRESS]" \
  --minter "[NRC-721_HANDLER_CONTRACT_ADDRESS]"
```

## Step 2: Transfer NFT

Firstly, you will mint an NFT if you need it.

```bash
# Mint NFT 0x50
$ cb-sol-cli NRC-721 mint \
  --url https://rpc-testnet.numblock.org \
  --privateKey [MINTER_ROLE_ACCOUNT] \
  --gasPrice [GAS_PRICE] \
  --NRC-721Address "[NRC-721_CONTRACT_ADDRESS]" \
  --id 0x50
```

To check the NFT owner, you can use `cb-sol-cli NRC-721 owner`

```bash
# Check the current owner of NFT
$ cb-sol-cli NRC-721 owner \
  --url https://rpc-testnet.numblock.org \
  --NRC-721Address "[NRC-721_CONTRACT_ADDRESS]" \
  --id 0x50
```

Then, you will approve a transfer of the NFT by NRC-721 Handler

```bash
# Approve transfer of the NFT 0x50 by NRC-721 Handler
$ cb-sol-cli NRC-721 approve \
  --url https://rpc-testnet.numblock.org \
  --privateKey [PRIVATE_KEY] \
  --gasPrice [GAS_PRICE] \
  --NRC-721Address "[NRC-721_CONTRACT_ADDRESS]" \
  --recipient "[NRC-721_HANDLER_CONTRACT_ADDRESS]" \
  --id 0x50
```

Finally, you will start the transfer

```bash
# Start transfer from NumBlock PoS to NumBlock  chain
$ cb-sol-cli NRC-721 deposit \
  --url https://rpc-testnet.numblock.org \
  --privateKey [PRIVATE_KEY] \
  --gasPrice [GAS_PRICE] \
  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \
  --resourceId "0x000000000000000000000000000000e389d61c11e5fe32ec1735b3cd38c69501" \
  --id 0x50 \
  # ChainID of NumBlock  chain
  --dest 100 \
  --recipient "[RECIPIENT_ADDRESS_IN_LOCAL_CHAIN]"
```

The relayer will get the event and vote for the proposal. It executes a transaction to send NFTs to the recipient account in the NumBlock  chain after the required number of votes are submitted. 

```bash
INFO[11-19|09:07:50] Handling nonfungible deposit event       chain=numblock
INFO[11-19|09:07:50] Attempting to resolve message            chain=local type=NonFungibleTransfer src=9999 dst=100 nonce=2 rId=000000000000000000000000000000e389d61c11e5fe32ec1735b3cd38c69501
INFO[11-19|09:07:50] Creating NRC-721 proposal                 chain=local src=9999 nonce=2
INFO[11-19|09:07:50] Watching for finalization event          chain=local src=9999 nonce=2
INFO[11-19|09:07:50] Submitted proposal vote                  chain=local tx=0x58a22d84a08269ad2e8d52d8dc038621f1a21109d11c7b6e0d32d5bf21ea8505 src=9999 depositNonce=2 gasPrice=1
INFO[11-19|09:08:15] Submitted proposal execution             chain=local tx=0x57419844881a07531e31667c609421662d94d21d0709e64fb728138309267e68 src=9999 dst=100 nonce=2 gasPrice=3
```

You can check the owner of the NFT on the NumBlock  network after the execution is completed.

```bash
# Check the owner of NFT 0x50 in NumBlock  chain
$ cb-sol-cli NRC-721 owner \
  --url http://localhost:10002 \
  --NRC-721Address "[NRC-721_CONTRACT_ADDRESS]" \
  --id 0x50
```
