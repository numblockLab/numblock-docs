---
title: With a Ledger or Trezor
description: MetaMask currently supports five lines of hardware wallet
lang: en
---

# Hardware Wallet Hub

**MetaMask currently supports five lines of hardware wallet: AirGap Vault, Keystone, Lattice, Ledger and Trezor. These wallets are supported on Extension, and will be able to be added to Mobile in future updates.**

Am I in the right place?

If you're looking for an explanation about what a hardware wallet is and why you should have one, keep reading.

If you're looking for support regarding your particular hardware wallet, scroll down to the corresponding section.

If you're setting up a hardware wallet for the first time, take a look at our User Guide for our recommended configuration.

##What is a hardware wallet? And why should I have one?##
Understanding hardware wallets means getting 'under the hood' of Ethereum a little bit. Let's first take a look at what we mean when we talk about a 'wallet'. At first glance, it's an intuitive concept: it's a digital container to hold digital money and other things. Just like, in a real wallet, you may have some currency and some pictures of your cat or your family; well, in your MetaMask wallet you have some currency and some CryptoKitties and an animated GIF of a zombie. Pretty similar so far.

Well, it turns out that calling it a 'wallet' is a bit of a metaphor. It's a good one in terms of how we experience it, but it doesn't accurately represent what's happening, technologically. The contents of your 'wallet' actually consists of the assets assigned to your address on the blockchain. When we send ETH 'to' someone, it doesn't go anywhere; it's simply deducted from the balance of ETH assigned to your address, and reassigned to the balance of the address you're sending it to. Remember, a public blockchain is also called distributed ledger technology, and all of our wallets are lines in that ledger; our balances, our holdings, are the columns, and the Ethereum Virtual Machine is our automated bookkeeper.

In this sense, MetaMask is 'simply' a web application that sends requests to the Ethereum blockchain: for information about what assets are assigned to your address; to 'send' tokens from one address to another, and so on. It does this by using your Secret Recovery Phrase.

Your public Ethereum address is one half of a pair: a cryptographic key pair, to be precise. The public half, your address, can be given to anyone without fear of them being able to hack in and steal your funds. The private half, the Secret Recovery Phrase (also known as a 'seed phrase'), authenticates whoever holds it as having full and complete access over the address and all accounts associated with it. Remember: "not your keys, not your coins".

Now, MetaMask is extremely secure, and as long as no one has access to your Secret Recovery Phrase (you wrote it down in a safe offline location, right?), your account should be secure. There are many other factors that are outside of the control of MetaMask and its security engineers: how safe your browser is, whether someone gets physical control over your computer, or takes over your computer using a virus, for example.

For this reason, we recommend that if you are storing any significant amount of value in your MetaMask wallet—or simply assets that are important to you—that you use a hardware wallet as a second line of defense. 

With all that background out of the way:

##TL;DR
** A hardware wallet is a physical device outside of your computer that secures your wallet's keys, and acts as a firewall between attackers and the contents of your wallet. **

In order to transact with funds secured by a hardware wallet, you will have to interact with the hardware wallet in order to approve the transaction. This way, even if someone somehow gains access to your MetaMask wallet, they will be stopped from moving things out of it.

......
