"use strict";(self.webpackChunknumblock_docs=self.webpackChunknumblock_docs||[]).push([[7133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2066:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={title:"Intro to NUMB",description:"A developer's introduction to the NUMB cryptocurrency.",lang:"en"},i=void 0,s={unversionedId:"foundational-topics/intro-to-token",id:"foundational-topics/intro-to-token",title:"Intro to NUMB",description:"A developer's introduction to the NUMB cryptocurrency.",source:"@site/docs/foundational-topics/intro-to-token.md",sourceDirName:"foundational-topics",slug:"/foundational-topics/intro-to-token",permalink:"/docs/foundational-topics/intro-to-token",draft:!1,tags:[],version:"current",frontMatter:{title:"Intro to NUMB",description:"A developer's introduction to the NUMB cryptocurrency.",lang:"en"},sidebar:"develop",previous:{title:"Roadmap",permalink:"/docs/foundational-topics/roadmap"},next:{title:"NUMB Tokenomics",permalink:"/docs/foundational-topics/tokenomics"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"What is a cryptocurrency?",id:"what-is-a-cryptocurrency",level:2},{value:"What is NUMB?",id:"what-is-numb",level:2},{value:"Denominations of NUMB",id:"denominations",level:2},{value:"Transferring NUMB",id:"transferring-NUMB",level:2},{value:"Querying NUMB",id:"querying-NUMB",level:2}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To help you better understand this page, we recommend you first read ",(0,o.kt)("a",{parentName:"p",href:"/docs/foundational-topics/intro-to-blockchain/"},"Introduction to NumBlock"),"."),(0,o.kt)("h2",{id:"what-is-a-cryptocurrency"},"What is a cryptocurrency?"),(0,o.kt)("p",null,"A cryptocurrency is a medium of exchange secured by a blockchain-based ledger."),(0,o.kt)("p",null,"A medium of exchange is anything widely accepted as payment for goods and services, and a ledger is a data store that keeps track of transactions. Blockchain technology allows users to make transactions on the ledger without reliance upon a trusted third party to maintain the ledger."),(0,o.kt)("p",null,"The first cryptocurrency was Bitcoin, created by Satoshi Nakamoto. Since Bitcoin's release in 2009, people have made thousands of cryptocurrencies across many different blockchains. "),(0,o.kt)("h2",{id:"what-is-numb"},"What is NUMB?"),(0,o.kt)("p",null,"NumBlock has a native token called NUMB, with a fixed supply. The NUMB token is used to pay for gas, and users can stake their NUMB tokens with validators in a Delegated Proof-of-Stake model within an epoch. The voting power of validators within this epoch is a function of the amount of NUMB in their staking pool, including both validator and user NUMB tokens. In any epoch, the set of validators is Byzantine fault tolerant. At the end of the epoch, fees collected through all transactions processed are distributed to validators according to their contribution to the operation of the network. Validators can in turn share some of the fees as rewards to users that stake their NUMB with them."),(0,o.kt)("p",null,"In addition, NUMB is also used to participate in various DeFi activities on the network such as lending, borrowing, liquidity pools, launchpad or for trading on ticketing and betting systems. NUMB is also used to manage voting rights, decision making on network development and governance."),(0,o.kt)("h2",{id:"denominations"},"Denominations of NUMB"),(0,o.kt)("p",null,"Since many transactions on NumBlock are small, NUMB has several denominations which may be referenced for smaller amounts. Of these denominations, Wei and gwei are particularly important."),(0,o.kt)("p",null,"Wei is the smallest possible amount of NUMB."),(0,o.kt)("p",null,"Gwei, short for giga-wei, is often used to describe gas costs on NumBlock."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Denomination"),(0,o.kt)("th",{parentName:"tr",align:null},"Value in NUMB"),(0,o.kt)("th",{parentName:"tr",align:null},"Common Usage"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Wei"),(0,o.kt)("td",{parentName:"tr",align:null},"10",(0,o.kt)("sup",null,"-18")),(0,o.kt)("td",{parentName:"tr",align:null},"Technical implementations")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Gwei"),(0,o.kt)("td",{parentName:"tr",align:null},"10",(0,o.kt)("sup",null,"-9")),(0,o.kt)("td",{parentName:"tr",align:null},"Human-readable gas fees")))),(0,o.kt)("h2",{id:"transferring-NUMB"},"Transferring NUMB"),(0,o.kt)("p",null,"Each transaction on NumBlock contains a ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," field, which specifies the amount of NUMB to be transferred, denominated in wei, to send from the sender's address to the recipient address."),(0,o.kt)("p",null,"When the recipient address is a ",(0,o.kt)("a",{parentName:"p",href:"/docs/developers/smart-contracts/"},"smart contract"),", this transferred NUMB may be used to pay for gas when the smart contract executes its code."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/foundational-topics/transactions"},"More on transactions")),(0,o.kt)("h2",{id:"querying-NUMB"},"Querying NUMB"),(0,o.kt)("p",null,"Users can query the NUMB balance of any ",(0,o.kt)("a",{parentName:"p",href:"/docs/foundational-topics/account"},"account")," by inspecting the account's ",(0,o.kt)("inlineCode",{parentName:"p"},"balance")," field, which shows NUMB holdings denominated in wei."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://testnet.numblock.org/"},"NumBlock Explorer")," is a popular tool to inspect address balances via a web-based application. Account balances can also be queried using wallets or directly by making requests to nodes."))}d.isMDXComponent=!0}}]);