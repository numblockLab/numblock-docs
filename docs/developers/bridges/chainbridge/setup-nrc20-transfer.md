---
id: setup-nrc20-transfer
title: NRC-20 Token Transfer
---

So far, we've set up bridge to exchange assets/data between NumBlock Testnet and local chain. This section will guide you to set up an NRC-20 bridge and send tokens between different blockchains.

## Step 1: Register resource ID

Firstly, you will register a resource ID that associates resources in a cross-chain environment. A Resource ID is a 32-bytes value that must be unique to the resource that we are transferring between these blockchains. The Resource IDs are arbitrary, but they may have the chain ID of the home chain in the last byte, as a convention (home chain referring to the network on which these resources originated from).

To register resource ID, you can use the `cb-sol-cli bridge register-resource` command. You will need to give the private key of the `admin` account.

```bash
# For NumBlock Testnet
$ cb-sol-cli bridge register-resource \
  --url https://rpc-testnet.numblock.org \
  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \
  --gasPrice [GAS_PRICE] \
  # Set Resource ID for NRC-20
  --resourceId "0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00" \
  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \
  --handler "[NRC-20_HANDLER_CONTRACT_ADDRESS]" \
  --targetContract "[NRC-20_CONTRACT_ADDRESS]" 

# For local chain
$ cb-sol-cli bridge register-resource \
  --url http://localhost:10002 \
  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \
  # Set Resource ID for NRC-20
  --resourceId "0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00" \
  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \
  --handler "[NRC-20_HANDLER_CONTRACT_ADDRESS]" \
  --targetContract "[NRC-20_CONTRACT_ADDRESS]"
```

## (Optional) Make contracts mintable/burnable


```bash
# Let NRC-20 contract burn on source chain and mint on destination chain
$ cb-sol-cli bridge set-burn \
  --url http://localhost:10002 \
  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \
  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \
  --handler "[NRC-20_HANDLER_CONTRACT_ADDRESS]" \
  --tokenContract "[NRC-20_CONTRACT_ADDRESS]"

# Grant minter role to NRC-20 Handler contract
$ cb-sol-cli NRC-20 add-minter \
  --url http://localhost:10002 \
  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \
  --NRC-20Address "[NRC-20_CONTRACT_ADDRESS]" \
  --minter "[NRC-20_HANDLER_CONTRACT_ADDRESS]"
```

## Step 2: Transfer NRC-20 Token

We will send NRC-20 Tokens from the NumBlock Testnet to the local chain.

First, you will get tokens by minting. An account with the `minter` role can mint new tokens. The account that has deployed the NRC-20 contract has the `minter` role by default. To specify other accounts as members of the `minter` role, you need to run the `cb-sol-cli NRC-20 add-minter` command.

```bash
# Mint NRC-20 tokens
$ cb-sol-cli NRC-20 mint \
  --url https://rpc-testnet.numblock.org \
  --privateKey [MINTER_ACCOUNT_PRIVATE_KEY] \
  --gasPrice [GAS_PRICE] \
  --NRC-20Address "[NRC-20_CONTRACT_ADDRESS]" \
  --amount 1000
```

To check the current balance, you can use `cb-sol-cli NRC-20 balance` command.

```bash
# Check NRC-20 token balance
$ cb-sol-cli NRC-20 balance \
  --url https://rpc-testnet.numblock.org \
  --NRC-20Address "[NRC-20_CONTRACT_ADDRESS]" \
  --address "[ACCOUNT_ADDRESS]"

[NRC-20/balance] Account <ACCOUNT_ADDRESS> has a balance of 1000.0
```

Next, you need to approve NRC-20 token transfer from the account by NRC-20 Handler

```bash
# Approve transfer from the account by NRC-20 Handler
$ cb-sol-cli NRC-20 approve \
  --url https://rpc-testnet.numblock.org \
  --privateKey [USER_ACCOUNT_ADDRESS] \
  --gasPrice [GAS_PRICE] \
  --NRC-20Address "[NRC-20_CONTRACT_ADDRESS]" \
  --recipient "[NRC-20_HANDLER_CONTRACT_ADDRESS]" \
  --amount 500
```

To transfer tokens to NumBlock  chains, you will call `deposit`.

```bash
# Start transfer from NumBlock Testnet to local chain
$ cb-sol-cli NRC-20 deposit \
  --url https://rpc-testnet.numblock.org \
  --privateKey [PRIVATE_KEY] \
  --gasPrice [GAS_PRICE] \
  --amount 10 \
  # ChainID of NumBlock  chain
  --dest 100 \
  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \
  --recipient "[RECIPIENT_ADDRESS_IN_LOCAL_CHAIN]" \
  --resourceId "0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00"
```

After the deposit transaction was successful, the relayer will get the event and vote for the proposal. It executes a transaction to send tokens to the recipient account in the NumBlock  chain after the required number of votes are submitted. 

```bash
INFO[11-19|08:15:58] Handling fungible deposit event          chain=numblock dest=100 nonce=1
INFO[11-19|08:15:59] Attempting to resolve message            chain=local type=FungibleTransfer src=99 dst=100 nonce=1 rId=000000000000000000000000000000c76ebe4a02bbc34786d860b355f5a5ce00
INFO[11-19|08:15:59] Creating NRC-20 proposal                  chain=local src=99 nonce=1
INFO[11-19|08:15:59] Watching for finalization event          chain=local src=99 nonce=1
INFO[11-19|08:15:59] Submitted proposal vote                  chain=local tx=0x67a97849951cdf0480e24a95f59adc65ae75da23d00b4ab22e917a2ad2fa940d src=99 depositNonce=1 gasPrice=1
INFO[11-19|08:16:24] Submitted proposal execution             chain=local tx=0x63615a775a55fcb00676a40e3c9025eeefec94d0c32ee14548891b71f8d1aad1 src=99 dst=100 nonce=1 gasPrice=5
```

Once the execution transaction has been successful, you will get tokens in the local chain.

```bash
# Check the NRC-20 balance in local chain
$ cb-sol-cli NRC-20 balance \
  --url https://localhost:10002 \
  --privateKey [PRIVATE_KEY] \
  --NRC-20Address "[NRC-20_CONTRACT_ADDRESS]" \
  --address "[ACCOUNT_ADDRESS]"

[NRC-20/balance] Account <RECIPIENT_ACCOUNT_ADDRESS> has a balance of 10.0
```
