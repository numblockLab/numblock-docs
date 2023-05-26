module.exports = {
    develop: [
        'overview',
        {
            type: 'category',
            label: 'Foundational Topics',
            collapsed: false,
            link: {
                type: "generated-index",
            },
            items: [

                'foundational-topics/intro-to-blockchain',
                'foundational-topics/terminology',
                'foundational-topics/roadmap',
                'foundational-topics/intro-to-token',
                'foundational-topics/tokenomics',
                'foundational-topics/account',
                {
                    type: 'category',
                    label: 'Wallets',
                    link: { type: 'doc', id: 'foundational-topics/wallets/wallets' },
                    items: [
                        'foundational-topics/wallets/numblock-wallet',
                        {
                            type: 'category',
                            label: 'MetaMask',
                            link: { type: 'doc', id: 'foundational-topics/wallets/metamask/metamask' },
                            items: [
                                {
                                    type: 'link',
                                    label: 'Add Custom Tokens',
                                    href: 'https://metamask.zendesk.com/hc/en-us/articles/360015489031-How-to-add-unlisted-tokens-custom-tokens-in-MetaMask',
                                },
                                {
                                    type: 'link',
                                    label: 'With a Ledger or Trezor',
                                    href: 'https://metamask.zendesk.com/hc/en-us/articles/360020394612-How-to-connect-a-Trezor-or-Ledger-Hardware-Wallet',
                                },
                            ]
                        },
                        {
                            type: 'category',
                            label: 'Hardware',
                            link: {
                                type: "generated-index",
                            },
                            items: [
                                'foundational-topics/wallets/hardware/dcent',
                                'foundational-topics/wallets/hardware/ledger',
                                'foundational-topics/wallets/hardware/trezor',
                            ]
                        },
                        {

                            type: 'category',
                            label: 'Software',
                            link: {
                                type: "generated-index",
                            },
                            items: [
                                'foundational-topics/wallets/software/ambire-wallet',
                                'foundational-topics/wallets/software/coinbase-wallet',
                                'foundational-topics/wallets/software/dex-wallet',
                                'foundational-topics/wallets/software/frame-wallet',
                                'foundational-topics/wallets/software/minerva-wallet',
                                'foundational-topics/wallets/software/mt-pelerin-wallet',
                                'foundational-topics/wallets/software/nabox-wallet',
                            ]
                        },
                    ]
                },
                'foundational-topics/transactions',
                'foundational-topics/blocks',
                'foundational-topics/gas',
                {
                    type: 'category',
                    label: 'Networks',
                    link: {
                        type: "generated-index",
                    },
                    items: [
                        {
                            type: 'category',
                            label: 'Explorers',
                            link: {type: 'doc', id: 'foundational-topics/networks/explorers/explorers'},
                            collapsed: true,
                            items: [
                                'foundational-topics/networks/explorers/blockscout',
                            ]
                        },
                        'foundational-topics/networks/explorers/rpc-provider',
                        'foundational-topics/networks/explorers/faucet'
                    ]
                },
                {
                    type: 'category',
                    label: 'Consensus Mechanism',
                    link: {
                        type: "generated-index",
                    },
                    items: [
                        'foundational-topics/consensus-mechanism/block-proposal',
                        'foundational-topics/consensus-mechanism/delegation',
                        'foundational-topics/consensus-mechanism/bls',
                        'foundational-topics/consensus-mechanism/pos-concepts',
                    ]
                },
                'foundational-topics/state'
            ]
        },



        {
            type: 'category',
            label: 'Architecture',
            collapsed: false,
            link: {
                type: "generated-index",
            },
            items: [
                'architecture/overview',
                'architecture/layering',
                {
                    type: 'category',
                    label: 'Modules',
                    link: {
                        type: "generated-index",
                    },
                    items: [
                        'architecture/modules/blockchain',
                        'architecture/modules/state',
                        'architecture/modules/networking',
                        'architecture/modules/txpool',
                        'architecture/modules/json-rpc',
                        'architecture/modules/consensus',
                        'architecture/modules/protocol',
                        'architecture/modules/storage',
                        'architecture/modules/native-bridge',
                        'architecture/modules/other-modules'
                    ]
                }
            ]
        },
        {
            type: 'category',
            label: 'Developers',
            link: {
                type: "generated-index",
            },
            items: [
                'developers/overview',
                'developers/application-toolkits',
                {
                    type: "category",
                    label: "JSON RPC Commands",
                    link: {
                      type: "generated-index",
                    },
                    items: [
                      "developers/api/json-rpc-eth",
                      "developers/api/json-rpc-net",
                      "developers/api/json-rpc-web3",
                      "developers/api/json-rpc-txpool",
                      "developers/api/json-rpc-debug",
                    ],
                },
                {
                    type: 'category',
                    label: 'Interacting with NumBlock',
                    collapsed: true,
                    link: { slug: 'developers/interact', type: 'generated-index', title: 'Interacting with NumBlock' },
                    items: [
                      "developers/interact/metamask",
                      "developers/interact/web3-js",
                      "developers/interact/ethers-js",
                    ],
                },
                {
                    type: 'category',
                    label: 'Smart Contracts',
                    collapsed: true,
                    link: {type: 'doc', id: 'developers/smart-contracts/smart-contracts'},
                    items: [
                        'developers/smart-contracts/languages',
                        'developers/smart-contracts/anatomy',
                        'developers/smart-contracts/libraries',
                        'developers/smart-contracts/compiling-contracts',
                        {
                            type: 'category',
                            label: 'Deploying Smart Contracts',
                            collapsed: true,
                            link: {
                                type: "generated-index",
                            },
                            items: [
                              "developers/smart-contracts/deploying/truffle",
                              "developers/smart-contracts/deploying/hardhat",
                              "developers/smart-contracts/deploying/remix",
                              "developers/smart-contracts/deploying/foundry",
                            ],
                        },
                        'developers/smart-contracts/testing-contracts',
                        {
                            type: 'category',
                            label: 'Verify Contracts',
                            collapsed: true,
                            link: {type: 'doc', id: 'developers/smart-contracts/verify/README'},
                            items: [
                              "developers/smart-contracts/verify/blockscout",
                              "developers/smart-contracts/verify/sourcify",
                            ],
                          },
                    ],
                },
                {
                    type: 'category',
                    label: 'Token Standards',
                    collapsed: true,
                    link: {type: 'doc', id: 'developers/token-standards/token-standards'},
                    items: [
                        'developers/token-standards/nrc-20',
                        'developers/token-standards/nrc-721',
                        'developers/token-standards/nrc-777',
                        'developers/token-standards/nrc-1155',
                        'developers/token-standards/nrc-4626',
                    ],
                },
                {
                    type: 'category',
                    label: 'Building DApps',
                    collapsed: true,
                    link: {
                        type: "generated-index",
                    },
                    items: [
                      "developers/building/first-contract",
                      "developers/building/token",
                      "developers/building/nft",
                    ],
                },
                {
                    type: 'category',
                    label: 'Bridges',
                    collapsed: true,
                    link: {
                        type: "generated-index",
                    },
                    items: [
                        {
                            type: 'category',
                            label: 'Chainbridge',
                            link: {
                                type: "generated-index",
                            },
                            items: [
                                'developers/bridges/chainbridge/overview',
                                'developers/bridges/chainbridge/definitions',
                                'developers/bridges/chainbridge/setup',
                                'developers/bridges/chainbridge/setup-nrc20-transfer',
                                'developers/bridges/chainbridge/setup-nrc721-transfer',
                                'developers/bridges/chainbridge/use-case-nrc20-bridge',
                                'developers/bridges/chainbridge/use-case-nrc721-bridge',
                            ]
                        },
                    ]
                },
            ]
        },
        {
            type: 'category',
            label: 'Validators',
            link: {
                type: "generated-index",
            },
            items: [
                'validators/overview',
                'validators/cli-commands',
                'validators/validator-node',
            ]
        },
        'benchmarks',

    ]
}