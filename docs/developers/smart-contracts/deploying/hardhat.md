---
title: Using Hardhat
description: Using Hardhat with NumBlock
keywords: [Hardhat, NumBlock, Deployment, Smart, Chain, Contract, EVM, Ethereum, Guide] 
---

# Using Hardhat

#### Hardhat is a development environment used for smart contract compiling, deploying, testing and debugging.

Follow the [Hardhat documentation](https://hardhat.org/hardhat-runner/docs/getting-started#installation) for general installation and overview.

## Config Hardhat for NumBlock

1. Change the default Network to NumBlock.

<Tabs groupId="networks">
<TabItem value="NumBlock" label="NumBlock Testnet">

```tsx title="/packages/hardhat-ts/hardhat.config.ts"
const defaultNetwork = 'numblock';
```
</TabItem>
</Tabs>

2. Update the config with NumBlock credentials

```js showLineNumbers  title="hardhat.config.js"
    const config: HardhatUserConfig = {
  networks: {
    localhost: {
      url: 'http://localhost:8545',
    },
    numblock: {
      url: 'https://rpc-testnet.numblock.org/',
      gasPrice: 1000000000,
      accounts: {
        mnemonic: Mnemonic,
      },
    }
  },
};
```

3. Change the TNetworkInfo variable to NumBlock

<Tabs groupId="networks">
<TabItem value="NumBlock" label="NumBlock Testnet">

```js title=hardhat.config.js
export const targetNetworkInfo: TNetworkInfo = NETWORKS.NumBlock;
```
</TabItem>
</Tabs>

## Compile your NumBlock contract

```bash
npx hardhat compile
```

## Deploy your Contract

<Tabs groupId="networks">
<TabItem value="NumBlock" label="NumBlock Testnet">

```bash
hardhat run --network numblock scripts/deploy.js
```
</TabItem>
</Tabs>

View your deployed contract on any of the [explorers](/docs/foundational-topics/networks/explorers/).

## Verify Contract

<Tabs groupId="networks">
<TabItem value="NumBlock" label="NumBlock Testnet">

```bash
hardhat --network numblock sourcify
```
</TabItem>
</Tabs>

## Additional Hardhat Documentation

- Additonal Hardhat deployment documentation is located [here.](https://hardhat.org/hardhat-runner/docs/guides/deploying)