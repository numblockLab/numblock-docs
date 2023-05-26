"use strict";(self.webpackChunknumblock_docs=self.webpackChunknumblock_docs||[]).push([[5307],{3905:(t,e,n)=>{n.d(e,{Zo:()=>h,kt:()=>f});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var s=a.createContext({}),l=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},h=function(t){var e=l(t.components);return a.createElement(s.Provider,{value:e},t.children)},u="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,s=t.parentName,h=i(t,["components","mdxType","originalType","parentName"]),u=l(n),p=o,f=u["".concat(s,".").concat(p)]||u[p]||d[p]||r;return n?a.createElement(f,c(c({ref:e},h),{},{components:n})):a.createElement(f,c({ref:e},h))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,c=new Array(r);c[0]=p;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i[u]="string"==typeof t?t:o,c[1]=i;for(var l=2;l<r;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7901:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={id:"state",title:"State in NumBlock"},c=void 0,i={unversionedId:"foundational-topics/state",id:"foundational-topics/state",title:"State in NumBlock",description:'In NumBlock, "state" refers to the current values of all accounts and smart contracts on the blockchain. It represents the current state of the blockchain at any given time, including the balance of each account, the storage values of each smart contract, and other information such as the nonce, which is used to prevent replay attacks.',source:"@site/docs/foundational-topics/state.md",sourceDirName:"foundational-topics",slug:"/foundational-topics/state",permalink:"/docs/foundational-topics/state",draft:!1,tags:[],version:"current",frontMatter:{id:"state",title:"State in NumBlock"},sidebar:"develop",previous:{title:"Proof of Stake",permalink:"/docs/foundational-topics/consensus-mechanism/pos-concepts"},next:{title:"Architecture",permalink:"/docs/category/architecture"}},s={},l=[],h={toc:l};function u(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,a.Z)({},h,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'In NumBlock, "state" refers to the current values of all accounts and smart contracts on the blockchain. It represents the current state of the blockchain at any given time, including the balance of each account, the storage values of each smart contract, and other information such as the nonce, which is used to prevent replay attacks.'),(0,o.kt)("p",null,"The state is maintained and updated by the nodes on the NumBlock network through Proof of Stake (PoS) consensus algorithm. Whenever a new block is added to the chain, the state is updated to reflect the changes made by the transactions included in that block."),(0,o.kt)("p",null,"The state is stored in a Merkle Patricia tree, which allows for efficient verification and retrieval of data. This structure also enables the Ethereum Virtual Machine (EVM) to execute smart contracts by accessing their storage values from the state trie."),(0,o.kt)("p",null,"Overall, the state is a crucial component of the NumBlock blockchain as it provides a record of all past and current transactions and smart contract interactions, allowing for transparency, security, and immutability of the network."),(0,o.kt)("p",null,"NumBlock has 4 types of tries:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The world state trie contains the mapping between addresses and account states. The hash of the root node of the\nworld state trie is included in a block (in the stateRoot field) to represent the current state when that block was\ncreated. We only have one world state trie"),(0,o.kt)("li",{parentName:"ol"},"The account storage trie contains the data associated with a smart contract. The hash of the root node of the Account\nstorage trie is included in the account state (in the storageRoot field). We have one Account storage trie for each\naccount"),(0,o.kt)("li",{parentName:"ol"},"The transaction trie contains all the transactions included in a block. The hash of the root node of the Transaction\ntrie is included in the block header (in the transactionsRoot field). We have one transaction trie per block"),(0,o.kt)("li",{parentName:"ol"},"The transaction receipt trie contains all the transaction receipts for the transactions included in a block. The hash\nof the root node of the transaction receipts trie is included in also included in the block header (in the\nreceiptsRoot field); We have one transaction receipts trie per block")),(0,o.kt)("p",null,"Objects covered:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"World state"),": the hard drive of the distributed computer that is NumBlock. It is a mapping between addresses and\naccount states"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Account state"),": stores the state of each one of NumBlock's accounts. It also contains the storageRoot of the\naccount state trie, which contains the storage data for the account"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Transaction"),": represents a state transition in the system. It can be a funds transfer, a message call, or a\ncontract deployment"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Block"),": contains the link to the previous block (parentHash) and contains a group of transactions that, when\nexecuted, will yield the new state of the system. It also contains the stateRoot, the transactionRoot and the\nreceiptsRoot, the hash of the root nodes of the world state trie, the transaction trie, and the transaction receipts\ntrie, respectively")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Main Diagram",src:n(3607).Z,width:"2698",height:"1453"})))}u.isMDXComponent=!0},3607:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/mainDiagram-c8c2c6dbd832c60f9d77c172e6257722.png"}}]);