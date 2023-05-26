"use strict";(self.webpackChunknumblock_docs=self.webpackChunknumblock_docs||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"Modular Blockchains - A Deep Dive","metadata":{"permalink":"/blog/Modular Blockchains - A Deep Dive","source":"@site/blog/2023-02-02-blog3/index.md","title":"Modular Blockchains - A Deep Dive","description":"The idea of a \u201cmodular blockchain\u201d is becoming a category-defining narrative around scalability and blockchain infrastructure.","date":"2023-02-02T00:00:00.000Z","formattedDate":"February 2, 2023","tags":[{"label":"blockchain","permalink":"/blog/tags/blockchain"},{"label":"numblock","permalink":"/blog/tags/numblock"},{"label":"modular","permalink":"/blog/tags/modular"}],"readingTime":3.35,"hasTruncateMarker":false,"authors":[{"name":"Alex Reeve","imageURL":"https://github.com/yangshun.png","key":"reeve"}],"frontMatter":{"slug":"Modular Blockchains - A Deep Dive","title":"Modular Blockchains - A Deep Dive","authors":["reeve"],"tags":["blockchain","numblock","modular"]},"nextItem":{"title":"The Application of Blockchain in Building a Ticketing System.","permalink":"/blog/The Application of Blockchain in Building a Ticketing System."}},"content":"**The idea of a \u201cmodular blockchain\u201d is becoming a category-defining narrative around scalability and blockchain infrastructure.\\n\u200dThe thesis is simple: by disaggregating the core components of a Layer 1 blockchain, we can make 100x improvements on individual layers, resulting in a more scalable, composable, and decentralized system. Before we can discuss modular blockchains at length, we must understand existing blockchain architecture and the limitations blockchains face with their current implementation.**\\n\\n# What is a Blockchain?\\nLet\u2019s briefly recap blockchain basics. Blocks in a blockchain consist of two components: the block header, and the transaction data associated with that header. Blocks are validated through \u201cfull nodes\u201d, which parse and compute the entire block data to ensure transactions are valid and that users aren\u2019t sending more ether than their account balance, for instance.\\n\\nLet\u2019s also briefly outline the \u201clayers\u201d of functionality that compose a blockchain.\\n\\n## Execution\\nTransactions and state changes are initially processed here. Users also typically interact with the blockchain through this layer by signing transactions, deploying smart contracts, and transferring assets.\\n\u200d\\n\\n## Settlement\\nThe settlement layer is where the execution of rollups is verified and disputes are resolved. This layer does not exist in monolithic chains and is an optional part of the modular stack. In an analogy to the U.S. court system, think of the Settlement layer as the U.S. Supreme Court, providing final arbitration on disputes.\\n\u200d\\n\\n## Consensus\\nThe consensus layer of blockchains provides ordering and finality through a network of full nodes downloading and executing the contents of blocks, and reaching consensus on the validity of state transitions.\\n\u200d\\n\\n## \u200dData Availability\\nThe data required to verify that a state transition is valid should be published and stored on this layer. This should be easily verifiable in the event of attacks where malicious block producers withhold transaction data. The data availability layer is the main bottleneck for the blockchain scalability trilemma, we\u2019ll explore why later on.\\n\\nEthereum, for example, is monolithic, meaning the base layer handles all components mentioned above.\\n\\n![blog3](./blog3.png)\\n\\nBlockchains currently face a problem called the \u201cBlockchain Scalability Trilemma\u201d. Similar to Brewer\u2019s theorem for distributed systems, blockchain architecture typically compromises on decentralization, security, or scalability in order to provide strong guarantees for the other two.\\n\\nSecurity refers to the ability for the network to function under attack. This principle is a core tenet of blockchains and should never be compromised, so the real tradeoff is usually between scalability and decentralization.\\n\\nLet\'s define decentralization in the context of blockchain systems: in order for a blockchain to be decentralized, hardware requirements must not be a limitation for participation, and the resource requirements of verifying the network should be low. \\n\\nScalability refers to a blockchain\u2019s throughput divided by its cost to verify: the ability of a blockchain to handle an increasing amount of transactions while keeping resource requirements for verification low. There are two main ways to increase throughput. First, you can increase the block size, and therefore the capacity of transactions that can be included in a block. Unfortunately, larger block sizes result in centralization of the network as the hardware requirements of running full nodes increases in response to the need for higher computational output. Monolithic blockchains, in particular, run into this issue as an increase in throughput is correlated with an increase in the cost to verify the chain, resulting in less decentralization. Secondly, you can move execution off-chain, shifting the burden of computation away from nodes on the main network while utilizing proofs that allow the verification of computation on-chain. \\n\\nWith a modular architecture, it is possible for blockchains to begin to solve the blockchain scalability trilemma through the principle of separation of concerns. Through a modular execution and data availability layer, blockchains are able to scale throughput while at the same time maintaining properties that make the network trustless and decentralized by breaking the correlation between computation and verification cost. Let\u2019s explore how this is possible by introducing fault proofs, rollups, and how they pertain to the Data Availability problem."},{"id":"The Application of Blockchain in Building a Ticketing System.","metadata":{"permalink":"/blog/The Application of Blockchain in Building a Ticketing System.","source":"@site/blog/2023-01-14-blog2/index.md","title":"The Application of Blockchain in Building a Ticketing System.","description":"blog2","date":"2023-01-14T00:00:00.000Z","formattedDate":"January 14, 2023","tags":[{"label":"blockchain","permalink":"/blog/tags/blockchain"},{"label":"numblock","permalink":"/blog/tags/numblock"},{"label":"ticketing system","permalink":"/blog/tags/ticketing-system"}],"readingTime":0.825,"hasTruncateMarker":false,"authors":[{"name":"Alex Reeve","imageURL":"https://github.com/yangshun.png","key":"reeve"}],"frontMatter":{"slug":"The Application of Blockchain in Building a Ticketing System.","title":"The Application of Blockchain in Building a Ticketing System.","authors":["reeve"],"tags":["blockchain","numblock","ticketing system"]},"prevItem":{"title":"Modular Blockchains - A Deep Dive","permalink":"/blog/Modular Blockchains - A Deep Dive"},"nextItem":{"title":"What Web3 Identity Needs","permalink":"/blog/What Web3 Identity Needs"}},"content":"![blog2](./blog2.png)\\n\\nBlockchain plays a crucial role in building a ticketing system, providing significant benefits for managing and processing ticket transactions.\\n\\nFirstly, blockchain ensures the integrity and security of ticket information. By using cryptographic technology, tickets stored on the blockchain cannot be tampered with or have their information altered. This helps users feel more secure about the integrity of their tickets and reduces the risk of purchasing fake tickets.\\n\\nSecondly, blockchain increases the transparency and reliability of the ticketing system. With ticket transactions stored on the blockchain, users can easily check and verify information, ensuring that transactions are executed accurately and transparently.\\n\\nFinally, blockchain improves the efficiency and cost-effectiveness of the ticketing system. With blockchain, ticket transactions are processed quickly and efficiently, while reducing costs associated with intermediaries. This helps reduce operating costs for ticketing system managers, bringing economic benefits.\\n\\nIn summary, blockchain plays a critical role in building a ticketing system, increasing integrity, transparency, and efficiency while reducing risk and associated costs of ticketing operations"},{"id":"What Web3 Identity Needs","metadata":{"permalink":"/blog/What Web3 Identity Needs","source":"@site/blog/2022-08-26-blog1/index.md","title":"What Web3 Identity Needs","description":"TLDR: To create an open financial system for the world, we need to ensure web3 is usable by everyone. This means building an identity experience that\u2019s intuitive, forgiving, and trustworthy, combining the best of web2 and web3. Our first step is to make it easy for anyone to claim a web3 (ENS) username for free, but there\u2019s more work to be done.","date":"2022-08-26T00:00:00.000Z","formattedDate":"August 26, 2022","tags":[{"label":"blockchain","permalink":"/blog/tags/blockchain"},{"label":"numblock","permalink":"/blog/tags/numblock"},{"label":"web3","permalink":"/blog/tags/web-3"}],"readingTime":5.94,"hasTruncateMarker":false,"authors":[{"name":"Alex Reeve","imageURL":"https://github.com/yangshun.png","key":"reeve"}],"frontMatter":{"slug":"What Web3 Identity Needs","title":"What Web3 Identity Needs","authors":["reeve"],"tags":["blockchain","numblock","web3"]},"prevItem":{"title":"The Application of Blockchain in Building a Ticketing System.","permalink":"/blog/The Application of Blockchain in Building a Ticketing System."}},"content":"**TLDR: To create an open financial system for the world, we need to ensure web3 is usable by everyone. This means building an identity experience that\u2019s intuitive, forgiving, and trustworthy, combining the best of web2 and web3. Our first step is to make it easy for anyone to claim a web3 (ENS) username for free, but there\u2019s more work to be done.**\\n\\n![blog1](./blog1.png)\\n\\ntokens or NFTs to intimidating 42-character addresses like 0x2133a64a3bE8B64827B26B08e166d0b478bd09D3. To make this easier, we worked with Ethereum Name Service (ENS) to allow users to claim \u201cname.cb.id\u201d usernames using Coinbase Wallet\u2019s browser extension.\\n\\nIn order to create an open financial system for the world, we need to ensure that people from all walks of life can use web3. Fostering adoption of a human-readable username standard is a key part of making web3 user-friendly for everyone. With this feature, anyone can now claim a free \u201cname.cb.id\u201d web3 username to send and receive crypto (instead of using 42-character addresses), engage with others, and to use as the foundation of their web3 identity.\\n\\nWhile this is an important milestone, your username is only part of your online identity. There are other identity-related gaps to fill before web3 is usable by billions of people. While web3 has early promise, it\u2019s often unintuitive, and it lacks viable ways of conveying and assessing trust and legitimacy. To fill these gaps, we need to combine the convenience of web2 with the privacy, security, and control of web3.\\n\\n# What is identity? Why does it matter?\\nWhen you create an account or sign in to a product, you\u2019re using your identity to gain access. Identity is how products and platforms represent people, manage access and authorization, and assess trust. Identity has three core parts:\\n\\n1. Representation: how you\u2019re represented as a user (e.g. your username and profile).\\n\\n2. Access: proving that you\u2019re the owner of said identity (e.g. signing in) to get access to the product.\\n\\n3. Authorization: determining what you\u2019re allowed to access based on who you are.\\n\\nWith web3 today, you\u2019re represented by a wallet address or username like nick.eth or nick.cb.id. You access web3 by using your seed phrase to configure your wallet or recover access to your wallet. Specific tokens or NFTs can authorize you to access exclusive communities, merchandise drops, and more.\\n\\n# Hasn\u2019t web2 already solved this problem?\\nWeb2 companies have invested heavily in developing intuitive and convenient identity products. But the cracks in web2 identity are starting to show: the need to manage multiple accounts and passwords; having to fend off relentless spam; and the insidious lack of privacy, security, and control.\\n\\nMany of us have exchanged privacy, security, and control for convenience. We only become aware of web2\u2019s downsides when we\u2019re impacted by a data breach, organizational overreach, or loss of access. But in today\u2019s world, these events are becoming inevitabilities.\\n\\n# What does web3 need to thrive?\\nBasic customer needs are the same for web2 and web3 identity. The difference is how they\u2019re met. Web2 is centralized, providing convenience and flexibility at the cost of privacy, security, and control. Web3 is trustless and decentralized, but it has usability gaps. For web3 to thrive, we need to combine the best of both (flexibility and usability without sacrificing privacy, security or control) and create an experience that\u2019s:\\n\\nIntuitive. It needs to be easy for every user to transact and engage with others through human-readable usernames rather than intimidating 42-character addresses.\\n\\nForgiving. Every user needs security, and they need a way to recover access without being reliant on safely storing a sensitive recovery phrase \u2014 where a single mistake can cost someone their livelihood.\\n\\nTrustworthy. People need to be able to understand whether the person or app they\u2019re interacting with is trustworthy, and apps and people need tools to demonstrate trust to others.\\n\\n![blog2](./blog1_2.png)\\n\\n# Evolving web3 identity\\nWeb3 has the opportunity to address many of web2\u2019s flaws. With crypto, you control the keys to your identity and your security is in your own hands. But let\u2019s be realistic: web3 as it exists today is intimidating. So what do we, the web3 community, need to build to make the benefits of web3 available to everyone?\\n\\n## An identity for the user.\\n\\nWe need to make it easy to define and manage portable, interoperable, human-readable usernames that sit on rich, customizable public identities ranging from anonymous to fully public. Users should be able to maintain multiple identities for different contexts (e.g. one for work and one for gaming).\\n\\nTools to help everyone stay secure and feel secure.\\n\\nToday, web3 violates one of the cardinal laws of security in that our identities are vulnerable to a single point of failure: the recovery phrase. A compromised app, device, or a social engineering attack can lead to identity theft. Multi-factor authentication (MFA) is the quintessential web2 example, and web3 will need an equivalent solution that can protect every user.\\n\\n## Recovery for when something goes wrong.\\n\\nWe\u2019ve all forgotten a password at some point, and we shouldn\u2019t expect recovery phrases to be any different. We can\u2019t scale an ecosystem where losing a recovery phrase can cost someone access to their livelihood \u2014 users need ways of regaining access. Products like social recovery or the multi-party computation (MPC) technology that powers Coinbase\u2019s dapp wallet are creating more forgiving experiences that can enable broader web3 adoption.\\n\\n## Signals for trust and legitimacy.\\n\\nPassports only work because governments attest to their legitimacy. The utility of web3 identity will also rely on trusted parties attesting to the legitimacy of an identity. Users will need ways of collecting, managing, and communicating \u201cattestations\u201d that validate their credentials and legitimacy. Applications will need ways of both issuing and verifying the legitimacy of a user\u2019s identity and credentials.\\n\\n## Interoperability across web2 and web3.\\n\\nOver time, the concepts of \u201cweb2\u201d and \u201cweb3\u201d will blur and users who are later on the adoption curve won\u2019t see a clear difference between the two. They will expect to be able to seamlessly access both \u201cweb2\u201d and \u201cweb3\u201d from a single identity and set of credentials, and we need to enable that experience. Similarly, we need to provide users with a chain-agnostic identity that they can use across all of web3.\\n\\n## Building identity for web3\\nBuilding a robust web3 identity layer will require deep focus from strong teams that can build and iterate rapidly. This will often mean building and refining locally before scaling globally (and in a decentralized way). Coinbase and organizations like us need to embrace this long-term vision from the start: open source, open standards, and close collaboration with the broader web3 ecosystem.\\n\\nMost importantly, we can\u2019t lose sight of the core promise of web3 identity. We need to build in a way that prioritizes privacy, security, and control for the user while being intuitive, forgiving, and trustworthy.\\n\\nWe\u2019ve started this journey with organizations like ENS and Verite to enable a free web3 identity (cb.id) for everyone, and we\u2019ll continue expanding our identity offerings. Watch this space: this is only the beginning of an exciting new chapter for identity and web3 for Coinbase and for the web3 community at large."}]}')}}]);