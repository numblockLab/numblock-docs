"use strict";(self.webpackChunknumblock_docs=self.webpackChunknumblock_docs||[]).push([[9708],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},b=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),b=a,y=u["".concat(l,".").concat(b)]||u[b]||h[b]||o;return n?i.createElement(y,r(r({ref:t},d),{},{components:n})):i.createElement(y,r({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}b.displayName="MDXCreateElement"},858:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=n(7462),a=(n(7294),n(3905));const o={slug:"What Web3 Identity Needs",title:"What Web3 Identity Needs",authors:["reeve"],tags:["blockchain","numblock","web3"]},r=void 0,s={permalink:"/blog/What Web3 Identity Needs",source:"@site/blog/2022-08-26-blog1/index.md",title:"What Web3 Identity Needs",description:"TLDR: To create an open financial system for the world, we need to ensure web3 is usable by everyone. This means building an identity experience that\u2019s intuitive, forgiving, and trustworthy, combining the best of web2 and web3. Our first step is to make it easy for anyone to claim a web3 (ENS) username for free, but there\u2019s more work to be done.",date:"2022-08-26T00:00:00.000Z",formattedDate:"August 26, 2022",tags:[{label:"blockchain",permalink:"/blog/tags/blockchain"},{label:"numblock",permalink:"/blog/tags/numblock"},{label:"web3",permalink:"/blog/tags/web-3"}],readingTime:5.94,hasTruncateMarker:!1,authors:[{name:"Alex Reeve",imageURL:"https://github.com/yangshun.png",key:"reeve"}],frontMatter:{slug:"What Web3 Identity Needs",title:"What Web3 Identity Needs",authors:["reeve"],tags:["blockchain","numblock","web3"]},prevItem:{title:"The Application of Blockchain in Building a Ticketing System.",permalink:"/blog/The Application of Blockchain in Building a Ticketing System."}},l={authorsImageUrls:[void 0]},c=[{value:"An identity for the user.",id:"an-identity-for-the-user",level:2},{value:"Recovery for when something goes wrong.",id:"recovery-for-when-something-goes-wrong",level:2},{value:"Signals for trust and legitimacy.",id:"signals-for-trust-and-legitimacy",level:2},{value:"Interoperability across web2 and web3.",id:"interoperability-across-web2-and-web3",level:2},{value:"Building identity for web3",id:"building-identity-for-web3",level:2}],d={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TLDR: To create an open financial system for the world, we need to ensure web3 is usable by everyone. This means building an identity experience that\u2019s intuitive, forgiving, and trustworthy, combining the best of web2 and web3. Our first step is to make it easy for anyone to claim a web3 (ENS) username for free, but there\u2019s more work to be done.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"blog1",src:n(8683).Z,width:"1100",height:"618"})),(0,a.kt)("p",null,"tokens or NFTs to intimidating 42-character addresses like 0x2133a64a3bE8B64827B26B08e166d0b478bd09D3. To make this easier, we worked with Ethereum Name Service (ENS) to allow users to claim \u201cname.cb.id\u201d usernames using Coinbase Wallet\u2019s browser extension."),(0,a.kt)("p",null,"In order to create an open financial system for the world, we need to ensure that people from all walks of life can use web3. Fostering adoption of a human-readable username standard is a key part of making web3 user-friendly for everyone. With this feature, anyone can now claim a free \u201cname.cb.id\u201d web3 username to send and receive crypto (instead of using 42-character addresses), engage with others, and to use as the foundation of their web3 identity."),(0,a.kt)("p",null,"While this is an important milestone, your username is only part of your online identity. There are other identity-related gaps to fill before web3 is usable by billions of people. While web3 has early promise, it\u2019s often unintuitive, and it lacks viable ways of conveying and assessing trust and legitimacy. To fill these gaps, we need to combine the convenience of web2 with the privacy, security, and control of web3."),(0,a.kt)("h1",{id:"what-is-identity-why-does-it-matter"},"What is identity? Why does it matter?"),(0,a.kt)("p",null,"When you create an account or sign in to a product, you\u2019re using your identity to gain access. Identity is how products and platforms represent people, manage access and authorization, and assess trust. Identity has three core parts:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Representation: how you\u2019re represented as a user (e.g. your username and profile).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Access: proving that you\u2019re the owner of said identity (e.g. signing in) to get access to the product.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Authorization: determining what you\u2019re allowed to access based on who you are."))),(0,a.kt)("p",null,"With web3 today, you\u2019re represented by a wallet address or username like nick.eth or nick.cb.id. You access web3 by using your seed phrase to configure your wallet or recover access to your wallet. Specific tokens or NFTs can authorize you to access exclusive communities, merchandise drops, and more."),(0,a.kt)("h1",{id:"hasnt-web2-already-solved-this-problem"},"Hasn\u2019t web2 already solved this problem?"),(0,a.kt)("p",null,"Web2 companies have invested heavily in developing intuitive and convenient identity products. But the cracks in web2 identity are starting to show: the need to manage multiple accounts and passwords; having to fend off relentless spam; and the insidious lack of privacy, security, and control."),(0,a.kt)("p",null,"Many of us have exchanged privacy, security, and control for convenience. We only become aware of web2\u2019s downsides when we\u2019re impacted by a data breach, organizational overreach, or loss of access. But in today\u2019s world, these events are becoming inevitabilities."),(0,a.kt)("h1",{id:"what-does-web3-need-to-thrive"},"What does web3 need to thrive?"),(0,a.kt)("p",null,"Basic customer needs are the same for web2 and web3 identity. The difference is how they\u2019re met. Web2 is centralized, providing convenience and flexibility at the cost of privacy, security, and control. Web3 is trustless and decentralized, but it has usability gaps. For web3 to thrive, we need to combine the best of both (flexibility and usability without sacrificing privacy, security or control) and create an experience that\u2019s:"),(0,a.kt)("p",null,"Intuitive. It needs to be easy for every user to transact and engage with others through human-readable usernames rather than intimidating 42-character addresses."),(0,a.kt)("p",null,"Forgiving. Every user needs security, and they need a way to recover access without being reliant on safely storing a sensitive recovery phrase \u2014 where a single mistake can cost someone their livelihood."),(0,a.kt)("p",null,"Trustworthy. People need to be able to understand whether the person or app they\u2019re interacting with is trustworthy, and apps and people need tools to demonstrate trust to others."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"blog2",src:n(1956).Z,width:"1100",height:"618"})),(0,a.kt)("h1",{id:"evolving-web3-identity"},"Evolving web3 identity"),(0,a.kt)("p",null,"Web3 has the opportunity to address many of web2\u2019s flaws. With crypto, you control the keys to your identity and your security is in your own hands. But let\u2019s be realistic: web3 as it exists today is intimidating. So what do we, the web3 community, need to build to make the benefits of web3 available to everyone?"),(0,a.kt)("h2",{id:"an-identity-for-the-user"},"An identity for the user."),(0,a.kt)("p",null,"We need to make it easy to define and manage portable, interoperable, human-readable usernames that sit on rich, customizable public identities ranging from anonymous to fully public. Users should be able to maintain multiple identities for different contexts (e.g. one for work and one for gaming)."),(0,a.kt)("p",null,"Tools to help everyone stay secure and feel secure."),(0,a.kt)("p",null,"Today, web3 violates one of the cardinal laws of security in that our identities are vulnerable to a single point of failure: the recovery phrase. A compromised app, device, or a social engineering attack can lead to identity theft. Multi-factor authentication (MFA) is the quintessential web2 example, and web3 will need an equivalent solution that can protect every user."),(0,a.kt)("h2",{id:"recovery-for-when-something-goes-wrong"},"Recovery for when something goes wrong."),(0,a.kt)("p",null,"We\u2019ve all forgotten a password at some point, and we shouldn\u2019t expect recovery phrases to be any different. We can\u2019t scale an ecosystem where losing a recovery phrase can cost someone access to their livelihood \u2014 users need ways of regaining access. Products like social recovery or the multi-party computation (MPC) technology that powers Coinbase\u2019s dapp wallet are creating more forgiving experiences that can enable broader web3 adoption."),(0,a.kt)("h2",{id:"signals-for-trust-and-legitimacy"},"Signals for trust and legitimacy."),(0,a.kt)("p",null,"Passports only work because governments attest to their legitimacy. The utility of web3 identity will also rely on trusted parties attesting to the legitimacy of an identity. Users will need ways of collecting, managing, and communicating \u201cattestations\u201d that validate their credentials and legitimacy. Applications will need ways of both issuing and verifying the legitimacy of a user\u2019s identity and credentials."),(0,a.kt)("h2",{id:"interoperability-across-web2-and-web3"},"Interoperability across web2 and web3."),(0,a.kt)("p",null,"Over time, the concepts of \u201cweb2\u201d and \u201cweb3\u201d will blur and users who are later on the adoption curve won\u2019t see a clear difference between the two. They will expect to be able to seamlessly access both \u201cweb2\u201d and \u201cweb3\u201d from a single identity and set of credentials, and we need to enable that experience. Similarly, we need to provide users with a chain-agnostic identity that they can use across all of web3."),(0,a.kt)("h2",{id:"building-identity-for-web3"},"Building identity for web3"),(0,a.kt)("p",null,"Building a robust web3 identity layer will require deep focus from strong teams that can build and iterate rapidly. This will often mean building and refining locally before scaling globally (and in a decentralized way). Coinbase and organizations like us need to embrace this long-term vision from the start: open source, open standards, and close collaboration with the broader web3 ecosystem."),(0,a.kt)("p",null,"Most importantly, we can\u2019t lose sight of the core promise of web3 identity. We need to build in a way that prioritizes privacy, security, and control for the user while being intuitive, forgiving, and trustworthy."),(0,a.kt)("p",null,"We\u2019ve started this journey with organizations like ENS and Verite to enable a free web3 identity (cb.id) for everyone, and we\u2019ll continue expanding our identity offerings. Watch this space: this is only the beginning of an exciting new chapter for identity and web3 for Coinbase and for the web3 community at large."))}u.isMDXComponent=!0},8683:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/blog1-2c7c8fcb52e00b5df3691c21769382d0.png"},1956:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/blog1_2-f6b8b85ce4ffd43df54707051ed97508.png"}}]);