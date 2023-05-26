"use strict";(self.webpackChunknumblock_docs=self.webpackChunknumblock_docs||[]).push([[5638],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),u=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,y=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return r?o.createElement(y,l(l({ref:t},s),{},{components:r})):o.createElement(y,l({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:n,l[1]=c;for(var u=2;u<a;u++)l[u]=r[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2141:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const a={title:"Using Foundry",description:"Using Foundry with NumBlock",keywords:["Foundry","Forge","NumBlock","Deployment","Smart","Chain","Contract","EVM","Ethereum","Guide"]},l="Using Foundry",c={unversionedId:"developers/smart-contracts/deploying/foundry",id:"developers/smart-contracts/deploying/foundry",title:"Using Foundry",description:"Using Foundry with NumBlock",source:"@site/docs/developers/smart-contracts/deploying/foundry.md",sourceDirName:"developers/smart-contracts/deploying",slug:"/developers/smart-contracts/deploying/foundry",permalink:"/docs/developers/smart-contracts/deploying/foundry",draft:!1,tags:[],version:"current",frontMatter:{title:"Using Foundry",description:"Using Foundry with NumBlock",keywords:["Foundry","Forge","NumBlock","Deployment","Smart","Chain","Contract","EVM","Ethereum","Guide"]},sidebar:"develop",previous:{title:"Using Remix and MetaMask",permalink:"/docs/developers/smart-contracts/deploying/remix"},next:{title:"Testing Smart Contracts",permalink:"/docs/developers/smart-contracts/testing-contracts"}},i={},u=[{value:"Foundry is a smart contract development toolchain.",id:"foundry-is-a-smart-contract-development-toolchain",level:4},{value:"Compile your NumBlock Contract",id:"compile-your-numblock-contract",level:2},{value:"Deploy your Contract",id:"deploy-your-contract",level:2},{value:"Deploy your contract on NumBlock with the following Forge command:",id:"deploy-your-contract-on-numblock-with-the-following-forge-command",level:4},{value:"Deploy with constructor arguments:",id:"deploy-with-constructor-arguments",level:4},{value:"Verify your Contract",id:"verify-your-contract",level:2},{value:"Verify your NumBlock contract on deployment using Etherscan:",id:"verify-your-numblock-contract-on-deployment-using-etherscan",level:4}],s=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},p=s("Tabs"),d=s("TabItem"),m={toc:u};function y(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"using-foundry"},"Using Foundry"),(0,n.kt)("h4",{id:"foundry-is-a-smart-contract-development-toolchain"},"Foundry is a smart contract development toolchain."),(0,n.kt)("p",null,"Follow the ",(0,n.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/getting-started/installation"},"Foundry documentation")," for general installation and overview."),(0,n.kt)("p",null,"Foundry consists of:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/foundry-rs/foundry/blob/master/forge"},"Forge"),": Ethereum testing framework (like Truffle, Hardhat and DappTools)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/foundry-rs/foundry/blob/master/cast"},"Cast"),": Swiss army knife for interacting with EVM smart contracts, sending      transactions and getting chain data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/foundry-rs/foundry/blob/master/anvil"},"Anvil"),": local Ethereum node, akin to Ganache, Hardhat Network.")),(0,n.kt)("h2",{id:"compile-your-numblock-contract"},"Compile your NumBlock Contract"),(0,n.kt)("p",null,"Compile your contract with this command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"forge build\n")),(0,n.kt)("p",null,"Additional compilation options can be found ",(0,n.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/reference/forge/forge-build"},"here"),"."),(0,n.kt)("h2",{id:"deploy-your-contract"},"Deploy your Contract"),(0,n.kt)("p",null,"Forge can only deploy one contract at a time."),(0,n.kt)("p",null,"Because Solidity files may contain multiple contracts, ",(0,n.kt)("inlineCode",{parentName:"p"},":<YourContract>")," (Seen below) specifies which contract to deploy."),(0,n.kt)("h4",{id:"deploy-your-contract-on-numblock-with-the-following-forge-command"},"Deploy your contract on NumBlock with the following Forge command:"),(0,n.kt)(p,{groupId:"networks",mdxType:"Tabs"},(0,n.kt)(d,{value:"numblock",label:"NumBlock Testnet",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"forge create --rpc-url https://rpc-testnet.numblock.org --private-key <your_private_key> src/<YourContract>.sol:<YourContract>\n")))),(0,n.kt)("h4",{id:"deploy-with-constructor-arguments"},"Deploy with constructor arguments:"),(0,n.kt)("p",null,"Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"--constructor-args")," flag to pass arguments to the constructor:"),(0,n.kt)(p,{groupId:"networks",mdxType:"Tabs"},(0,n.kt)(d,{value:"numblock",label:"NumBlock Testnet",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"forge create --rpc-url https://rpc-testnet.numblock.org \\\n    --constructor-args <argument-1> <argument-2...>\\\n    --private-key <your_private_key> src/<YourToken>.sol:<YourToken> \\\n")))),(0,n.kt)("h2",{id:"verify-your-contract"},"Verify your Contract"),(0,n.kt)("h4",{id:"verify-your-numblock-contract-on-deployment-using-etherscan"},"Verify your NumBlock contract on deployment using Etherscan:"),(0,n.kt)("p",null," Use the ",(0,n.kt)("inlineCode",{parentName:"p"},"--verify")," flag as shown below:"),(0,n.kt)(p,{groupId:"networks",mdxType:"Tabs"},(0,n.kt)(d,{value:"numblock",label:"NumBlock Testnet",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"forge create --rpc-url https://rpc-testnet.numblock.org \\\n    --private-key <your_private_key> src/<YourToken>.sol:<YourToken> \\\n    --etherscan-api-key <your_etherscan_api_key> \\\n    --verify\n")))),(0,n.kt)("p",null,"For information regarding pre-existing contract verification, visit the ",(0,n.kt)("a",{parentName:"p",href:"https://book.getfoundry.sh/forge/deploying#verifying-a-pre-existing-contract"},"offical Forge documentation"),"."))}y.isMDXComponent=!0}}]);