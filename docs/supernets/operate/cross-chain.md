---
id: supernets-cross-chain
title: How To Perform Cross-Chain Asset Transfers
sidebar_label: Cross-Chain Asset Transfers
description: "A guide on the available bridge transactions."
keywords:
  - docs
  - polygon
  - edge
  - supernets
  - bridge
  - crosschain
  - transactions
  - how to
  - how-to
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This document provides an overview of the cross-chain transfer options available for the ERC standards supported on Supernets.

:::warning Breaking changes
Supernets are rapidly evolving towards their production-ready state, and, as a result, instructions and concepts in these documents are subject to change. For production releases, we plan to version the documentation.

Test releases include breaking changes and offer no guarantees, including backward compatibility. Use the current test releases for testing and familiarization only.

It is highly recommended that you do not attempt deployments on your own; for support, please reach out to the Supernets team.
:::

## Prerequisites

You'll need to have a a successful bridge deployment to make any cross-chain transactions. If you haven't done so already, check out the local deployment guide [<ins>here</ins>](/docs/supernets/operate/local-supernet.md).

:::caution Key management and secure values
When passing values to run transactions, it is important to keep sensitive values like private keys and API keys secure.

<b>The sample commands provided in this guide use sample private keys for demonstration purposes only, in order to show the format and expected value of the parameter. It is important to note that hardcoding or directly passing private keys should never be done in a development or production environment.</b>

<details>
<summary>Here are some options for securely storing and retrieving private keys ↓</summary>

- **<ins>Environment Variables</ins>:** You can store the private key as an environment variable and access it in your code. For example, in Linux, you can set an environment variable like this: `export PRIVATE_KEY="my_private_key"`. Then, in your code, you can retrieve the value of the environment variable using `os.Getenv("PRIVATE_KEY")`.

- **<ins>Configuration Files</ins>:** You can store the private key in a configuration file and read it in your session. Be sure to keep the configuration file in a secure location and restrict access to it.

- **<ins>Vaults and Key Management Systems</ins>:** If you are working with sensitive data, you might consider using a vault or key management system like a keystore to store your private keys. These systems provide additional layers of security and can help ensure that your private keys are kept safe.

</details>

Regardless of how a private key is stored and retrieved, it's important to keep it secure and not expose it unnecessarily.

:::

<!-- ===================================================================================================================== -->
<!-- ===================================================================================================================== -->
<!-- ===================================================== GUIDE TABS ==================================================== -->
<!-- ===================================================================================================================== -->
<!-- ===================================================================================================================== -->

<Tabs
defaultValue="20"
values={[
{ label: 'ERC-20', value: '20', },
{ label: 'ERC-721', value: '721', },
{ label: 'ERC-1155', value: '1155', },
{ label: 'Tips & Troubleshoot (coming soon)', value: 'troubleshoot', },
]
}>

<!-- ===================================================================================================================== -->
<!-- ==================================================== ERC-20  ======================================================== -->
<!-- ===================================================================================================================== -->

<TabItem value="20">

## Deposit

This command deposits ERC-20 tokens from a rootchain to a Supernet.

- Replace `hex_encoded_depositor_private_key` with the private key of the account that will be depositing the tokens.
- Replace `receivers_addresses` with a comma-separated list of Ethereum addresses that will receive the tokens.
- Replace `amounts` with a comma-separated list of token amounts to be deposited for each receiver.
- Replace `root_erc20_token_address` with the address of the ERC-20 token contract on the rootchain.
- Replace `root_erc20_predicate_address` with the address of the ERC-20 predicate contract on the rootchain.
- Replace `root_chain_json_rpc_endpoint` with the JSON-RPC endpoint of the rootchain.

```bash
./polygon-edge bridge deposit-erc20 \
    --sender-key <hex_encoded_depositor_private_key> \
    --receivers <receivers_addresses> \
    --amounts <amounts> \
    --root-token <root_erc20_token_address> \
    --root-predicate <root_erc20_predicate_address> \
    --json-rpc <root_chain_json_rpc_endpoint>
```

<details>
<summary>Example ↓</summary>

In this example, we're depositing ERC-20 tokens to a test Supernet instance:

- We're using a private key of `0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef`.
- We're depositing tokens to two receiver addresses: `0x1111111111111111111111111111111111111111` and `0x2222222222222222222222222222222222222222`.
- We're depositing `100` tokens to the first receiver and `200` tokens to the second receiver.
- The address of the ERC-20 token contract on the rootchain is `0x123456789abcdef0123456789abcdef01234567`.
- The address of the ERC-20 predicate contract on the rootchain is `0x23456789abcdef0123456789abcdef012345678`.
- The JSON-RPC endpoint for the rootchain is `http://root-chain-json-rpc-endpoint.com:8545`.

```bash
./polygon-edge bridge deposit-erc20 \
    --sender-key 0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef \
    --receivers 0x1111111111111111111111111111111111111111,0x2222222222222222222222222222222222222222 \
    --amounts 100,200 \
    --root-token 0x123456789abcdef0123456789abcdef01234567 \
    --root-predicate 0x23456789abcdef0123456789abcdef012345678 \
    --json-rpc http://root-chain-json-rpc-endpoint.com:8545
```

</details>

## Withdraw

This command withdraws ERC-20 tokens from a Supernet to a rootchain.

- Replace `hex_encoded_txn_sender_private_key` with the private key of the account that will be sending the transaction.
- Replace `receivers_addresses` with a comma-separated list of Ethereum addresses that will receive the tokens.
- Replace `amounts` with a comma-separated list of token amounts to be withdrawn for each receiver.
- Replace `child_erc20_predicate_address` with the address of the ERC-20 predicate contract on the Supernet.
- Replace `child_erc20_token_address` with the address of the ERC-20 token contract on the Supernet (optional, only required if the token is not a default ERC-20 token).
- Replace `child_chain_json_rpc_endpoint` with the JSON-RPC endpoint of the Supernet.

```bash
 ./polygon-edge bridge withdraw-erc20 \
    --sender-key <hex_encoded_txn_sender_private_key> \
    --receivers <receivers_addresses> \
    --amounts <amounts> \
    --child-predicate <rchild_erc20_predicate_address> \
    --child-token <child_erc20_token_address> \
    --json-rpc <child_chain_json_rpc_endpoint>
```

<details>
<summary>Example ↓</summary>

- We're using a private key of `0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef`.
- We're withdrawing tokens from two receiver addresses: `0x1111111111111111111111111111111111111111` and `0x2222222222222222222222222222222222222222`.
- We're withdrawing `100` tokens from the first receiver and `200` tokens from the second receiver.
- The address of the ERC-20 predicate contract on the Supernet is `0x3456789abcdef0123456789abcdef0123456789`.
- The address of the ERC-20 token contract on the Supernet is `0x456789abcdef0123456789abcdef0123456789`.
- The JSON-RPC endpoint for the Supernet is `http://json-rpc-endpoint.com:8545`.

```bash
./polygon-edge bridge withdraw-erc20 \
    --sender-key 0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef \
    --receivers 0x1111111111111111111111111111111111111111,0x2222222222222222222222222222222222222222 \
    --amounts 100,200 \
    --child-predicate 0x3456789abcdef0123456789abcdef0123456789 \
    --child-token 0x456789abcdef0123456789abcdef0123456789 \
    --json-rpc http://json-rpc-endpoint.com:8545
```

</details>

## Exit

This command sends an exit transaction to the `ExitHelper` contract on the rootchain for a token that was deposited on the Supernet. It basically finalizes a withdrawal (initiated on the Supernets) and transfers assets to receiving address on a rootchain.

- Replace `hex_encoded_txn_sender_private_key` with the private key of the account that will send the exit transaction.
- Replace `exit_helper_address` with the address of the `ExitHelper` contract on the rootchain.
- Replace `exit_id` with the ID of the exit event.
- Replace `root_chain_json_rpc_endpoint` with the JSON-RPC endpoint of the rootchain.
- Replace `child_chain_json_rpc_endpoint` with the JSON-RPC endpoint of the Supernet.

```bash
./polygon-edge bridge exit \
    --sender-key <hex_encoded_txn_sender_private_key> \
    --exit-helper <exit_helper_address> \
    --exit-id <exit_event_id> \
    --root-json-rpc <root_chain_json_rpc_endpoint> \
    --child-json-rpc <child_chain_json_rpc_endpoint>
```

<details>
<summary>Example ↓</summary>

In this example, we're sending an exit transaction on a test Supernet instance:

- We're using a private key of `0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef`.
- The address of the `ExitHelper` contract on the rootchain is `0x123456789abcdef0123456789abcdef01234567`.
- The ID of the exit event is `42`.
- The JSON-RPC endpoint for the rootchain is `http://root-chain-json-rpc-endpoint.com:8545`, and the JSON-RPC endpoint for the Supernet is `http://json-rpc-endpoint.com:8545`.

```bash
./polygon-edge bridge exit \
    --sender-key 0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef \
    --exit-helper 0x123456789abcdef0123456789abcdef01234567 \
    --exit-id 42 \
    --root-json-rpc http://root-chain-json-rpc-endpoint.com:8545 \
    --child-json-rpc http://json-rpc-endpoint.com:8545
```

</details>

</TabItem>

<!-- ===================================================================================================================== -->
<!-- =================================================== ERC-721  ======================================================== -->
<!-- ===================================================================================================================== -->

<TabItem value="721">

## Deposit

This command deposits ERC-721 tokens from a rootchain to a Supernet.

- Replace `hex_encoded_depositor_private_key` with the private key of the account that will be depositing the tokens.
- Replace `receivers_addresses` with a comma-separated list of Ethereum addresses that will receive the tokens.
- Replace `token_ids` with a comma-separated list of token IDs that will be sent to the receivers' accounts.
- Replace `root_erc721_token_address` with the address of the ERC-721 token contract on the rootchain.
- Replace `root_erc721_predicate_address` with the address of the ERC-721 predicate contract on the rootchain.
- Replace `root_chain_json_rpc_endpoint` with the JSON-RPC endpoint of the rootchain.

```bash
./polygon-edge bridge deposit-erc721 \
    --sender-key <hex_encoded_depositor_private_key> \
    --receivers <receivers_addresses> \
    --token-ids <token_ids> \
    --root-token <root_erc721_token_address> \
    --root-predicate <root_erc721_predicate_address> \
    --json-rpc <root_chain_json_rpc_endpoint>
```

<details>
<summary>Example ↓</summary>

In this example, we're depositing ERC-721 tokens to a test Supernet instance:

- We're using a private key of `0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef`.
- We're depositing tokens with IDs `123` and `456` to two receiver addresses: `0x1111111111111111111111111111111111111111` and `0x2222222222222222222222222222222222222222`.
- The address of the ERC-721 token contract on the rootchain is `0x0123456789abcdef0123456789abcdef01234567`.
- The address of the ERC-721 predicate contract on the rootchain is `0x0123456789abcdef0123456789abcdef01234568`.
- The JSON-RPC endpoint for the rootchain is `https://rpc-mainnet.maticvigil.com`.

```bash
./polygon-edge bridge deposit-erc721 \
    --sender-key 0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef \
    --receivers 0x1111111111111111111111111111111111111111,0x2222222222222222222222222222222222222222 \
    --token-ids 123,456 \
    --root-token 0x0123456789abcdef0123456789abcdef01234567 \
    --root-predicate 0x0123456789abcdef0123456789abcdef01234568 \
    --json-rpc https://rpc-mainnet.maticvigil.com
```
</details>

## Withdraw

This command withdraws ERC-721 tokens from a Supernet to a rootchain.

- Replace `hex_encoded_sender_private_key` with the private key of the account that will initiate the withdrawal.
- Replace `receivers_addresses` with a comma-separated list of Ethereum addresses that will receive the withdrawn tokens on the rootchain.
- Replace `token_ids` with a comma-separated list of token IDs to be withdrawn.
- Replace `child_predicate_address` with the address of the predicate contract on the Supernet that holds the tokens being withdrawn.
- Replace `child_token_address` with the address of the ERC-721 token contract on the Supernet that holds the tokens being withdrawn.
- Replace `child_chain_json_rpc_endpoint` with the JSON-RPC endpoint of the Supernet.

```bash
./polygon-edge bridge withdraw-erc721 \
    --sender-key <hex_encoded_sender_private_key> \
    --receivers <receivers_addresses> \
    --token-ids <token_ids> \
    --child-predicate <child_predicate_address> \
    --child-token <child_token_address> \
    --jsonrpc <child_chain_json_rpc_endpoint>
```

<details>
<summary>Example ↓</summary>

In this example, we're withdrawing ERC-721 tokens from a test Supernet instance:

- We're using a private key of `0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef`.
- We're withdrawing tokens with IDs `123` and `456`.
- The address of the ERC-721 Supernet predicate contract is `0x23456789abcdef0123456789abcdef012345678`.
- The address of the ERC-721 Supernet token contract is `0x3456789abcdef0123456789abcdef012345678`.
- The JSON-RPC endpoint for the Supernet is `http://json-rpc-endpoint.com:8545`.

</details>
## Exit

This command sends an exit transaction to the `ExitHelper` contract on the rootchain for a token that was deposited on the Supernet. It basically finalizes a withdrawal (initiated on the Supernets) and transfers assets to receiving address on a rootchain.

- Replace `hex_encoded_txn_sender_private_key` with the private key of the account that will send the exit transaction.
- Replace `exit_helper_address` with the address of the `ExitHelper` contract on the rootchain.
- Replace `exit_id` with the ID of the exit event.
- Replace `root_chain_json_rpc_endpoint` with the JSON-RPC endpoint of the rootchain.
- Replace `child_chain_json_rpc_endpoint` with the JSON-RPC endpoint of the Supernet.

```bash
./polygon-edge bridge exit \
    --sender-key <hex_encoded_txn_sender_private_key> \
    --exit-helper <exit_helper_address> \
    --exit-id <exit_event_id> \
    --root-json-rpc <root_chain_json_rpc_endpoint> \
    --child-json-rpc <child_chain_json_rpc_endpoint>
```

<details>
<summary>Example ↓</summary>

In this example, we're sending an exit transaction on a test Supernet instance:

- We're using a private key of `0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef`.
- The address of the `ExitHelper` contract on the rootchain is `0x123456789abcdef0123456789abcdef01234567`.
- The ID of the exit event is `42`.
- The JSON-RPC endpoint for the rootchain is `http://root-chain-json-rpc-endpoint.com:8545`, and the JSON-RPC endpoint for the Supernet is `http://json-rpc-endpoint.com:8545`.

```bash
./polygon-edge bridge exit \
    --sender-key 0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef \
    --exit-helper 0x123456789abcdef0123456789abcdef01234567 \
    --exit-id 42 \
    --root-json-rpc http://root-chain-json-rpc-endpoint.com:8545 \
    --child-json-rpc http://json-rpc-endpoint.com:8545
```

</details>

</TabItem>

<!-- ===================================================================================================================== -->
<!-- ==================================================== ERC-1155 ======================================================= -->
<!-- ===================================================================================================================== -->

<TabItem value="1155">

## Deposit

This command deposits ERC-1155 tokens from the rootchain to the Supernet.

- Replace `depositor_private_key` with the private key of the account that will be depositing the tokens.
- Replace `receivers_addresses` with a comma-separated list of Ethereum addresses that will receive the tokens.
- Replace `amounts` with a comma-separated list of token amounts to be deposited for each receiver.
- Replace `token_ids` with a comma-separated list of token IDs to be deposited.
- Replace `root_erc1155_token_address` with the address of the ERC-1155 token contract on the rootchain.
- Replace `root_erc1155_predicate_address` with the address of the ERC-1155 predicate contract on the rootchain.
- Replace `root_chain_json_rpc_endpoint` with the JSON-RPC endpoint of the rootchain.

```bash
./polygon-edge bridge deposit-erc1155 \
    --sender-key <depositor_private_key> \
    --receivers <receivers_addresses> \
    --amounts <amounts> \
    --token-ids <token_ids> \
    --root-token <root_erc1155_token_address> \
    --root-predicate <root_erc1155_predicate_address> \
    --json-rpc <root_chain_json_rpc_endpoint>
```

<details>
<summary>Example ↓</summary>

In this example, we're depositing ERC-1155 tokens to a test Supernet instance:

- We're using a private key of `0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef`.
- We're depositing tokens to two receiver addresses: `0x0123456789abcdef0123456789abcdef01234567` and `0x89abcdef0123456789abcdef0123456789abcdef`.
- We're depositing `10` tokens to the first receiver and `20` tokens to the second receiver.
- The address of the ERC-1155 token contract on the rootchain is `0x0123456789abcdef0123456789abcdef01234567`.
- The address of the ERC-1155 predicate contract on the rootchain is `0x89abcdef0123456789abcdef0123456789abcdef`.
- The JSON-RPC endpoint for the rootchain is `http://localhost:8545`.

```bash
./polygon-edge bridge deposit-erc1155 \
    --sender-key 0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef \
    --receivers 0x0123456789abcdef0123456789abcdef01234567,0x89abcdef0123456789abcdef0123456789abcdef \
    --amounts 10,20 \
    --token-ids 1,2 \
    --root-token 0x0123456789abcdef0123456789abcdef01234567 \
    --root-predicate 0x89abcdef0123456789abcdef0123456789abcdef \
    --json-rpc http://localhost:8545
```

</details>

## Withdraw

This command withdraws ERC-1155 tokens from the Supernet to the rootchain.

- Replace `hex_encoded_withdrawer_private_key` with the private key of the account that will be withdrawing the tokens.
- Replace `receivers_addresses` with a comma-separated list of Ethereum addresses that will receive the tokens.
- Replace `amounts` with a comma-separated list of token amounts to be withdrawn for each receiver.
- Replace `token_ids` with a comma-separated list of token IDs to be withdrawn.
- Replace `root_erc1155_token_address` with the address of the ERC-1155 token contract on the rootchain.
- Replace `root_erc1155_predicate_address` with the address of the ERC-1155 predicate contract on the rootchain.
- Replace `child_chain_json_rpc_endpoint` with the JSON-RPC endpoint of the Supernet.

```bash
./polygon-edge bridge withdraw-erc1155 \
    --sender-key <hex_encoded_withdrawer_private_key> \
    --receivers <receivers_addresses> \
    --amounts <amounts> \
    --token-ids <token_ids> \
    --root-token <root_erc1155_token_address> \
    --root-predicate <root_erc1155_predicate_address> \
    --json-rpc <child_chain_json_rpc_endpoint>
```

<details>
<summary>Example ↓</summary>

In this example, we're withdrawing ERC-1155 tokens from a test Supernet instance to the rootchain:

- We're using a private key of `0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef`.
- We're withdrawing tokens to a single receiver address: `0x1111111111111111111111111111111111111111`.
- We're withdrawing `100` tokens with ID `1`.
- The address of the ERC-1155 token contract on the rootchain is `0x123456789abcdef0123456789abcdef01234567`.
- The address of the ERC-1155 predicate contract on the rootchain is `0x23456789abcdef0123456789abcdef012345678`.
- The JSON-RPC endpoint for the Supernet is `http://json-rpc-endpoint.com:8545`.

```bash
./polygon-edge bridge withdraw-erc1155 \
    --sender-key 0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef \
    --receivers 0x1111111111111111111111111111111111111111 \
    --amounts 100 \
    --token-ids 1 \
    --root-token 0x123456789abcdef0123456789abcdef01234567 \
    --root-predicate 0x23456789abcdef0123456789abcdef012345678 \
    --json-rpc http://json-rpc-endpoint.com:8545
```

</details>

## Exit

This command sends an exit transaction to the `ExitHelper` contract on the rootchain for a token that was deposited on the Supernet. It basically finalizes a withdrawal (initiated on the Supernets) and transfers assets to receiving address on a rootchain.

- Replace `hex_encoded_txn_sender_private_key` with the private key of the account that will send the exit transaction.
- Replace `exit_helper_address` with the address of the `ExitHelper` contract on the rootchain.
- Replace `exit_id` with the ID of the exit event.
- Replace `root_chain_json_rpc_endpoint` with the JSON-RPC endpoint of the rootchain.
- Replace `child_chain_json_rpc_endpoint` with the JSON-RPC endpoint of the Supernet.

```bash
./polygon-edge bridge exit \
    --sender-key <hex_encoded_txn_sender_private_key> \
    --exit-helper <exit_helper_address> \
    --exit-id <exit_event_id> \
    --root-json-rpc <root_chain_json_rpc_endpoint> \
    --child-json-rpc <child_chain_json_rpc_endpoint>
```

<details>
<summary>Example ↓</summary>

In this example, we're sending an exit transaction on a test Supernet instance:

- We're using a private key of `0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef`.
- The address of the `ExitHelper` contract on the rootchain is `0x123456789abcdef0123456789abcdef01234567`.
- The ID of the exit event is `42`.
- The JSON-RPC endpoint for the rootchain is `http://root-chain-json-rpc-endpoint.com:8545`, and the JSON-RPC endpoint for the Supernet is `http://json-rpc-endpoint.com:8545`.

```bash
./polygon-edge bridge exit \
    --sender-key 0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef \
    --exit-helper 0x123456789abcdef0123456789abcdef01234567 \
    --exit-id 42 \
    --root-json-rpc http://root-chain-json-rpc-endpoint.com:8545 \
    --child-json-rpc http://json-rpc-endpoint.com:8545
```

</details>

</TabItem>

<!-- ===================================================================================================================== -->
<!-- ================================================ Troubleshoot ======================================================= -->
<!-- ===================================================================================================================== -->

<TabItem value="troubleshoot">

:::info Coming soon
:::

## What's the difference between Withdraw and Exit?

Withdrawal initiates the transfer of tokens or assets from the Supernet to an address on the rootchain. This involves burning the tokens on the Supernet and paying gas and transaction fees. The transfer process may take some time as the transaction needs to be processed and confirmed.

Exit, on the other hand, finalizes the withdrawal process by transferring the bridged tokens from the Supernet to the rootchain. It involves sending a message to the `ExitHelper` contract on the rootchain to request the exit of a particular asset. The `ExitHelper` contract verifies the request and then transfers the asset to the rootchain immediately, without queuing it. However, it is essential that the checkpoint block, containing the given withdrawal, is sent to the rootchain.

Withdrawal can be seen as a direct transfer of assets from the Supernet to the rootchain, while exit is an indirect transfer that uses the `ExitHelper` contract to finalize the withdrawal process. Compared to withdrawal, exit is faster and more efficient as it does not require the same level of on-chain processing and confirmation.

</TabItem>
</Tabs>
