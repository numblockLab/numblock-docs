---
title: Using Truffle
description: This truffle plugin allows you to automatically verify your smart contracts' source code on NumBlock, straight from the Truffle CLI.
keywords: [truffle verify, verify contracts, plugin, truffle plugin] 
---

# Truffle Verify

This [truffle plugin](https://www.npmjs.com/package/truffle-plugin-verify) allows you to automatically verify your smart contracts' source code on NumBlock (by Etherscan), straight from the Truffle CLI.

## Installation

Install the plugin with npm or yarn

<Tabs groupId="package-manager">
<TabItem value="yarn" label="yarn">

```bash
yarn add -D truffle-plugin-verify
```
</TabItem>

<TabItem value="npm" label="npm">

```bash
npm install -D truffle-plugin-verify
```
</TabItem>
</Tabs>

Add the plugin to your truffle-config.js file

```js
module.exports = {
  /* ... rest of truffle-config */

  plugins: ['truffle-plugin-verify']
}
```

Generate an API Key on your [NumBlock account].

Add your NumBlock API key to your truffle config (make sure to use something like dotenv so you don't commit the api key)

```js
module.exports = {
  /* ... rest of truffle-config */

  api_keys: {
    NumBlock: 'MY_API_KEY'
  }
}
```

## Useful links

- [Automatically verify Truffle smart contracts on Etherscan](https://kalis.me/verify-truffle-smart-contracts-etherscan/)
- [Truffle Quickstart](https://trufflesuite.com/docs/truffle/quickstart/)