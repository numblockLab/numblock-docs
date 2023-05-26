---
title: MetaMask
description: MetaMask is a web browser extension and mobile app that allows you to manage your NumBlock private keys.
keywords: [metamask, hardware wallet, hw, seed, security]
---

# MetaMask

[MetaMask](https://metamask.io/) is a web browser extension and mobile app that allows you to manage your NumBlock private keys. By doing so, it serves as a wallet for NUMB and other tokens, and allows you to interact with decentralized applications, or dapps.

:::info New to MetaMask?
Read their article: [Getting started with MetaMask](https://metamask.zendesk.com/hc/en-us/articles/360015489531-Getting-started-with-MetaMask)
:::

## 1. Download

The official [MetaMask Download](https://metamask.io/download/) page will detect your browser and link to the correct extension store. It supports Chrome, Firefox, Opera, Edge and Brave. It also has Android and iOS versions.

## 2. Configure

After the installation, MetaMask require a configuration to work with NumBlock, follow one of the instructions:

### A. Quick configuration

<Tabs>
  <TabItem value="deeplink-numb" label="Deeplink (Testnet NumBlock)">Click on <a href="https://shanejonas.github.io/metamask-link/deep?method=wallet_addEthereumChain&params[0][chainId]=0x270F&params[0][chainName]=Testnet NumBlock&params[0][rpcUrls][0]=https://rpc-testnet.numblock.org/&params[0][nativeCurrency][name]=NUMB&params[0][nativeCurrency][symbol]=NUMB&params[0][nativeCurrency][decimals]=18&params[0][blockExplorerUrls][0]=https://testnet.numblock.org/">this deeplink</a> to auto-configure Testnet NumBlock in MetaMask and follow the instructions.</TabItem>
</Tabs>

### B. Manual Configuration

1) Open MetaMask, and select **Custom RPC** from the Network Dropdown.

![](</img/tools/custom-rpc.png>)

2) In the **Custom RPC** Settings, add in the NumBlock network details and click **Save**:


<Tabs>
  <TabItem value="gmain" label="Testnet NumBlock">

```jsx title="Network Name"
NumBlock
```

```jsx title="New RPC URL"
https://rpc-testnet.numblock.org
```

```jsx title="Chain ID"
100
```

```jsx title="Symbol"
NUMB
```

```jsx title="Block Explorer URL"
https://testnet.numblock.org
```
  </TabItem>
</Tabs>


## More configurations

- [Add custom tokens](https://metamask.zendesk.com/hc/en-us/articles/360015489031-How-to-add-unlisted-tokens-custom-tokens-in-MetaMask)
- [Using MetaMask with a Ledger or Trezor](https://metamask.zendesk.com/hc/en-us/articles/360020394612-How-to-connect-a-Trezor-or-Ledger-Hardware-Wallet)