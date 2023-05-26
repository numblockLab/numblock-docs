"use strict";(self.webpackChunknumblock_docs=self.webpackChunknumblock_docs||[]).push([[4867],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||r;return n?o.createElement(f,i(i({ref:t},d),{},{components:n})):o.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const r={id:"delegation",title:"Delegation"},i="What is Delegation?",s={unversionedId:"foundational-topics/consensus-mechanism/delegation",id:"foundational-topics/consensus-mechanism/delegation",title:"Delegation",description:"Delegation is a consensus mechanism used in blockchain networks that employs a voting system to select a fixed number of validators to secure the network. Delegation offers several advantages, including scalability, efficiency, and security.",source:"@site/docs/foundational-topics/consensus-mechanism/delegation.md",sourceDirName:"foundational-topics/consensus-mechanism",slug:"/foundational-topics/consensus-mechanism/delegation",permalink:"/docs/foundational-topics/consensus-mechanism/delegation",draft:!1,tags:[],version:"current",frontMatter:{id:"delegation",title:"Delegation"},sidebar:"develop",previous:{title:"Block Proposal",permalink:"/docs/foundational-topics/consensus-mechanism/block-proposal"},next:{title:"BLS",permalink:"/docs/foundational-topics/consensus-mechanism/bls"}},c={},l=[],d={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-delegation"},"What is Delegation?"),(0,a.kt)("p",null,"Delegation is a consensus mechanism used in blockchain networks that employs a voting system to select a fixed number of validators to secure the network. Delegation offers several advantages, including scalability, efficiency, and security."),(0,a.kt)("h1",{id:"delegation-in-numblock"},"Delegation in NumBlock"),(0,a.kt)("p",null,"In the context of the NumBlock, each network can have its network sovereignty, enabling a customized Delegation consensus mechanism that caters to the NumBlock network. Customizing the validator set provides greater flexibility to the consensus mechanism while retaining the benefits of scalability, efficiency, and security."),(0,a.kt)("p",null,"Delegation relies on the election process in which delegators participate by delegating their stake to their preferred validator candidates. Once selected, validators are responsible for verifying transactions and creating new blocks. Validators are incentivized to act in the network's best interest as they receive rewards for block creation and verification activities."),(0,a.kt)("p",null,"In a trustless and permissionless environment, stakeholders can participate in the network by delegating their stake to the validator of their choice. Validators are selected through a tamper-proof and transparent voting system that prevents collusion and bribery. DPoS ensures the selection of validators based on the stakeholders' preferences who are most likely to act in the network's best interest."),(0,a.kt)("p",null,"In a permissioned scenario, such as a company where all employees become delegators to delegate their stake for their company's validator set, ",(0,a.kt)("strong",{parentName:"p"},"NumBlock Consensus Algorithm")," enables the company to maintain control over the validator set while allowing employees to participate in the network by delegating their stake. This arrangement provides additional security and control for the company while enabling network participation and rewards for all stakeholders."))}p.isMDXComponent=!0}}]);