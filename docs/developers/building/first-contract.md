---
description: In the following tutorial we will go through a step-by-step guide on how to deploy a Basic Contract to NumBlock
keywords: [deploy dapp, full stack app, tutorial, web3, dapp development]
---

# Deploying a Basic Contract

NumBlock is an EVM based chain, meaning deployment steps are the same as deployment to NumBlock or other chains. Check the [network specifications](/docs/category/networks).

:::note
You will also need a [small amount of NUMB](/docs/foundational-topics/networks/explorers/faucet) to deploy a contract, and for any contract functions.
For testing purposes, it is recommended to first deploy to [NumBlock Testnet](https://testnet.numblock.org/). After functionality is tested and confirmed, deploy to NumBlock mainnet.
:::

## Tutorials

In general you can choose almost any development environment you wish as they all have their own benefits. A few of the most used environments are shown below. Using the [official ethereum documentation](https://ethereum.org/en/developers/tutorials/hello-world-smart-contract/), you can change the network to NumBlock and deploy a hello world contract.

### Hardhat Deployment

Following the [Official Hardhat documentation](https://hardhat.org/hardhat-runner/docs/guides/project-setup), also how to [configure Hardhat to NumBlock](/docs/developers/smart-contracts/deploying/hardhat).

- For NumBlock network Config, you have to export an object from ```hardhat.config.js```

- The ```networks``` config field an optional object where network names map to their configuration.

- There are two kinds of networks in Hardhat: [JSON-RPC](https://eth.wiki/json-rpc/API) based networks, and the built-in Hardhat Network.

- You can customize which network is used by default when running Hardhat by setting the config's ```defaultNetwork``` field. If you omit this config, its default value is ```"hardhat"```.

### Truffle Deployment

[This Tutorial on Kauri](https://kauri.io/#collections/POA%20Tutorial%20series/poa-part-1-develop-and-deploy-a-smart-contract/) shows how to deploy a DApp to the test network. It can be adapted to the NumBlock network with a few minor tweaks.

1. For NumBlock, edit the truffle.js file to the following:

```js showLineNumbers
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
// See <http://truffleframework.com/docs/advanced/configuration>
// for more about customizing your Truffle configuration!
    networks: {
        numblock: {
            provider: function() {
                    return new HDWalletProvider(
                process.env.MNEMONIC,
                "https://rpc-testnet.numblock.org")
            },
            network_id: 100,
            gas: 500000,
            gasPrice: 1000000000
        },
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*" // Match any network id
        }
    }
};
```

2. Run the Truffle deployment to NumBlock.

```bash
truffle migrate --network numblock
```
