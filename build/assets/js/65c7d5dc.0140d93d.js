"use strict";(self.webpackChunknumblock_docs=self.webpackChunknumblock_docs||[]).push([[2532],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},f=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),s=u(r),m=o,d=s["".concat(c,".").concat(m)]||s[m]||p[m]||l;return r?n.createElement(d,a(a({ref:t},f),{},{components:r})):n.createElement(d,a({ref:t},f))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2375:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const l={title:"Using Truffle",description:"Using Truffle with NumBlock",keywords:["Truffle","Figchain","Deployment","Smart","Chain","Contract","EVM","Ethereum","Guide"]},a="Using Truffle with NumBlock",i={unversionedId:"developers/smart-contracts/deploying/truffle",id:"developers/smart-contracts/deploying/truffle",title:"Using Truffle",description:"Using Truffle with NumBlock",source:"@site/docs/developers/smart-contracts/deploying/truffle.mdx",sourceDirName:"developers/smart-contracts/deploying",slug:"/developers/smart-contracts/deploying/truffle",permalink:"/docs/developers/smart-contracts/deploying/truffle",draft:!1,tags:[],version:"current",frontMatter:{title:"Using Truffle",description:"Using Truffle with NumBlock",keywords:["Truffle","Figchain","Deployment","Smart","Chain","Contract","EVM","Ethereum","Guide"]},sidebar:"develop",previous:{title:"Deploying Smart Contracts",permalink:"/docs/category/deploying-smart-contracts"},next:{title:"Using Hardhat",permalink:"/docs/developers/smart-contracts/deploying/hardhat"}},c={},u=[{value:"Config Truffle for NumBlock",id:"config-truffle-for-numblock",level:2},{value:"Compile your NumBlock contract",id:"compile-your-numblock-contract",level:2},{value:"Default Compile",id:"default-compile",level:3},{value:"Compile with Options",id:"compile-with-options",level:3},{value:"Deploy your Contract",id:"deploy-your-contract",level:2},{value:"Verify Contract",id:"verify-contract",level:2},{value:"Additional Truffle Documentation",id:"additional-truffle-documentation",level:2}],f=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},s=f("Tabs"),p=f("TabItem"),m={toc:u};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"using-truffle-with-numblock"},"Using Truffle with NumBlock"),(0,o.kt)("p",null,"Truffle is a development environment used for smart contract compiling, deploying, testing and debugging."),(0,o.kt)("p",null,"Follow the ",(0,o.kt)("a",{parentName:"p",href:"https://trufflesuite.com/docs/truffle/"},"Truffle documentation")," for general installation and overview. "),(0,o.kt)("h2",{id:"config-truffle-for-numblock"},"Config Truffle for NumBlock"),(0,o.kt)("p",null,"Update the config with NumBlock credentials"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers title=truffle-config.js",showLineNumbers:!0,title:"truffle-config.js"},'module.exports = {\n  // See <http://truffleframework.com/docs/advanced/configuration>\n  // for more about customizing your Truffle configuration!\n  networks: {\n    Numb lock: {\n          provider: function() {\n                return new HDWalletProvider(\n               process.env.MNEMONIC,\n               "https://rpc-testnet.numblock.org/")\n          },\n          network_id: 100,\n          gas: 500000,\n          gasPrice: 1000000000\n    }\n  }\n};\n')),(0,o.kt)("h2",{id:"compile-your-numblock-contract"},"Compile your NumBlock contract"),(0,o.kt)("h3",{id:"default-compile"},"Default Compile"),(0,o.kt)(s,{groupId:"networks",mdxType:"Tabs"},(0,o.kt)(p,{value:"NumBlock",label:"NumBlock Testnet",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"truffle compile --network numblock\n")))),(0,o.kt)("h3",{id:"compile-with-options"},"Compile with Options"),(0,o.kt)(s,{groupId:"networks",mdxType:"Tabs"},(0,o.kt)(p,{value:"NumBlock",label:"NumBlock Testnet",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"truffle compile [--list <filter>] [--all] [--network numblock] [--quiet]\n")))),(0,o.kt)("h2",{id:"deploy-your-contract"},"Deploy your Contract"),(0,o.kt)(s,{groupId:"networks",mdxType:"Tabs"},(0,o.kt)(p,{value:"NumBlock",label:"NumBlock Testnet",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"truffle migrate --network numb lock\n")))),(0,o.kt)("p",null,"View your deployed contract any of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/foundational-topics/networks/explorers/"},"explorers"),"."),(0,o.kt)("h2",{id:"verify-contract"},"Verify Contract"),(0,o.kt)("p",null,"Verify with Truffle by using ",(0,o.kt)("a",{parentName:"p",href:"https://trufflesuite.com/docs/truffle/reference/truffle-commands/#deploy"},"Truffle Plugin Verify")),(0,o.kt)("p",null,"Visit our ",(0,o.kt)("a",{parentName:"p",href:"/docs/developers/smart-contracts/verify/"},"Contract Verfication Page")," for more documentation on verification tools."),(0,o.kt)("h2",{id:"additional-truffle-documentation"},"Additional Truffle Documentation"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Additonal Truffle command documenation is located ",(0,o.kt)("a",{parentName:"li",href:"https://trufflesuite.com/docs/truffle/reference/truffle-commands/#deploy"},"here"),".")))}d.isMDXComponent=!0}}]);