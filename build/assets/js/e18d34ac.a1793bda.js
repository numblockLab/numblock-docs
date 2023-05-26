"use strict";(self.webpackChunknumblock_docs=self.webpackChunknumblock_docs||[]).push([[9482],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(o,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(h,s(s({ref:t},p),{},{components:n})):a.createElement(h,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var d=2;d<i;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={title:"NRC-4626 Tokenized Vault Standard",description:"A standard for yield bearing vaults.",lang:"en"},s=void 0,l={unversionedId:"developers/token-standards/nrc-4626",id:"developers/token-standards/nrc-4626",title:"NRC-4626 Tokenized Vault Standard",description:"A standard for yield bearing vaults.",source:"@site/docs/developers/token-standards/nrc-4626.md",sourceDirName:"developers/token-standards",slug:"/developers/token-standards/nrc-4626",permalink:"/docs/developers/token-standards/nrc-4626",draft:!1,tags:[],version:"current",frontMatter:{title:"NRC-4626 Tokenized Vault Standard",description:"A standard for yield bearing vaults.",lang:"en"},sidebar:"develop",previous:{title:"NRC-1155 Multi-Token Standard",permalink:"/docs/developers/token-standards/nrc-1155"},next:{title:"Building DApps",permalink:"/docs/category/building-dapps"}},o={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"NRC-4626 Functions and Features:",id:"body",level:2},{value:"Methods",id:"methods",level:3},{value:"asset",id:"asset",level:4},{value:"totalAssets",id:"totalassets",level:4},{value:"convertToShares",id:"convertoshares",level:4},{value:"convertToAssets",id:"convertoassets",level:4},{value:"maxDeposit",id:"maxdeposit",level:4},{value:"previewDeposit",id:"previewdeposit",level:4},{value:"deposit",id:"deposit",level:4},{value:"maxMint",id:"maxmint",level:4},{value:"previewMint",id:"previewmint",level:4},{value:"mint",id:"mint",level:4},{value:"maxWithdraw",id:"maxwithdraw",level:4},{value:"previewWithdraw",id:"previewwithdraw",level:4},{value:"withdraw",id:"withdraw",level:4},{value:"maxRedeem",id:"maxredeem",level:4},{value:"previewRedeem",id:"previewredeem",level:4},{value:"redeem",id:"redeem",level:4},{value:"totalSupply",id:"totalsupply",level:4},{value:"balanceOf",id:"balanceof",level:4},{value:"Events",id:"events",level:3},{value:"Deposit Event",id:"deposit-event",level:4},{value:"Withdraw Event",id:"withdraw-event",level:4},{value:"Further reading",id:"further-reading",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"NRC-4626 is a standard to optimize and unify the technical parameters of yield-bearing vaults. It provides a standard API for tokenized yield-bearing vaults that represent shares of a single underlying NRC-20 token. NRC-4626 also outlines an optional extension for tokenized vaults utilizing NRC-20, offering basic functionality for depositing, withdrawing tokens and reading balances."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The role of NRC-4626 in yield-bearing vaults")),(0,r.kt)("p",null,"Lending markets, aggregators, and intrinsically interest-bearing tokens help users find the best yield on their crypto tokens by executing different strategies. These strategies are done with slight variation, which might be error-prone or waste development resources."),(0,r.kt)("p",null,"NRC-4626 in yield-bearing vaults will lower the integration effort and unlock access to yield in various applications with little specialized effort from developers by creating more consistent and robust implementation patterns."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To better understand this page, we recommend you first read about ",(0,r.kt)("a",{parentName:"p",href:"/docs/developers/token-standards/"},"token standards"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/developers/token-standards/nrc-20/"},"NRC-20"),", and ",(0,r.kt)("a",{parentName:"p",href:"//docs/developers/token-standards/nrc-721/"},"NRC-721"),"."),(0,r.kt)("h2",{id:"body"},"NRC-4626 Functions and Features:"),(0,r.kt)("h3",{id:"methods"},"Methods"),(0,r.kt)("h4",{id:"asset"},"asset"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function asset() public view returns (address)\n")),(0,r.kt)("p",null,"This function returns the address of the underlying token used for the vault for accounting, depositing, withdrawing."),(0,r.kt)("h4",{id:"totalassets"},"totalAssets"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function totalAssets() public view returns (uint256)\n")),(0,r.kt)("p",null,"This function returns the total amount of underlying assets held by the vault."),(0,r.kt)("h4",{id:"convertoshares"},"convertToShares"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function convertToShares(uint256 assets) public view returns (uint256 shares)\n")),(0,r.kt)("p",null,"This function returns the amount of ",(0,r.kt)("inlineCode",{parentName:"p"},"shares")," that would be exchanged by the vault for the amount of ",(0,r.kt)("inlineCode",{parentName:"p"},"assets")," provided."),(0,r.kt)("h4",{id:"convertoassets"},"convertToAssets"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function convertToAssets(uint256 shares) public view returns (uint256 assets)\n")),(0,r.kt)("p",null,"This function returns the amount of ",(0,r.kt)("inlineCode",{parentName:"p"},"assets")," that would be exchanged by the vault for the amount of ",(0,r.kt)("inlineCode",{parentName:"p"},"shares")," provided."),(0,r.kt)("h4",{id:"maxdeposit"},"maxDeposit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function maxDeposit(address receiver) public view returns (uint256)\n")),(0,r.kt)("p",null,"This function returns the maximum amount of underlying assets that can be deposited in a single ",(0,r.kt)("a",{parentName:"p",href:"#deposit"},(0,r.kt)("inlineCode",{parentName:"a"},"deposit"))," call by the ",(0,r.kt)("inlineCode",{parentName:"p"},"receiver"),"."),(0,r.kt)("h4",{id:"previewdeposit"},"previewDeposit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function previewDeposit(uint256 assets) public view returns (uint256)\n")),(0,r.kt)("p",null,"This function allows users to simulate the effects of their deposit at the current block."),(0,r.kt)("h4",{id:"deposit"},"deposit"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function deposit(uint256 assets, address receiver) public returns (uint256 shares)\n")),(0,r.kt)("p",null,"This function deposits ",(0,r.kt)("inlineCode",{parentName:"p"},"assets")," of underlying tokens into the vault and grants ownership of ",(0,r.kt)("inlineCode",{parentName:"p"},"shares")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"receiver"),"."),(0,r.kt)("h4",{id:"maxmint"},"maxMint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function maxMint(address receiver) public view returns (uint256)\n")),(0,r.kt)("p",null,"This function returns the maximum amount of shares that can be minted in a single ",(0,r.kt)("a",{parentName:"p",href:"#mint"},(0,r.kt)("inlineCode",{parentName:"a"},"mint"))," call by the ",(0,r.kt)("inlineCode",{parentName:"p"},"receiver"),"."),(0,r.kt)("h4",{id:"previewmint"},"previewMint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function previewMint(uint256 shares) public view returns (uint256)\n")),(0,r.kt)("p",null,"This function allows users to simulate the effects of their mint at the current block."),(0,r.kt)("h4",{id:"mint"},"mint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function mint(uint256 shares, address receiver) public returns (uint256 assets)\n")),(0,r.kt)("p",null,"This function mints exactly ",(0,r.kt)("inlineCode",{parentName:"p"},"shares")," vault shares to ",(0,r.kt)("inlineCode",{parentName:"p"},"receiver")," by depositing ",(0,r.kt)("inlineCode",{parentName:"p"},"assets")," of underlying tokens."),(0,r.kt)("h4",{id:"maxwithdraw"},"maxWithdraw"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function maxWithdraw(address owner) public view returns (uint256)\n")),(0,r.kt)("p",null,"This function returns the maximum amount of underlying assets that can be withdrawn from the ",(0,r.kt)("inlineCode",{parentName:"p"},"owner")," balance with a single ",(0,r.kt)("a",{parentName:"p",href:"#withdraw"},(0,r.kt)("inlineCode",{parentName:"a"},"withdraw"))," call."),(0,r.kt)("h4",{id:"previewwithdraw"},"previewWithdraw"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function previewWithdraw(uint256 assets) public view returns (uint256)\n")),(0,r.kt)("p",null,"This function allows users to simulate the effects of their withdrawal at the current block."),(0,r.kt)("h4",{id:"withdraw"},"withdraw"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function withdraw(uint256 assets, address receiver, address owner) public returns (uint256 shares)\n")),(0,r.kt)("p",null,"This function burns ",(0,r.kt)("inlineCode",{parentName:"p"},"shares")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"owner")," and send exactly ",(0,r.kt)("inlineCode",{parentName:"p"},"assets")," token from the vault to ",(0,r.kt)("inlineCode",{parentName:"p"},"receiver"),"."),(0,r.kt)("h4",{id:"maxredeem"},"maxRedeem"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function maxRedeem(address owner) public view returns (uint256)\n")),(0,r.kt)("p",null,"This function returns the maximum amount of shares that can be redeem from the ",(0,r.kt)("inlineCode",{parentName:"p"},"owner")," balance through a ",(0,r.kt)("a",{parentName:"p",href:"#redeem"},(0,r.kt)("inlineCode",{parentName:"a"},"redeem"))," call."),(0,r.kt)("h4",{id:"previewredeem"},"previewRedeem"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function previewRedeem(uint256 shares) public view returns (uint256)\n")),(0,r.kt)("p",null,"This function allows users to simulate the effects of their redeemption at the current block."),(0,r.kt)("h4",{id:"redeem"},"redeem"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function redeem(uint256 shares, address receiver, address owner) public returns (uint256 assets)\n")),(0,r.kt)("p",null,"This function redeems a specific number of ",(0,r.kt)("inlineCode",{parentName:"p"},"shares")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"owner")," and send ",(0,r.kt)("inlineCode",{parentName:"p"},"assets")," of underlying token from the vault to ",(0,r.kt)("inlineCode",{parentName:"p"},"receiver"),"."),(0,r.kt)("h4",{id:"totalsupply"},"totalSupply"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function totalSupply() public view returns (uint256)\n")),(0,r.kt)("p",null,"Returns the total number of unredeemed vault shares in circulation."),(0,r.kt)("h4",{id:"balanceof"},"balanceOf"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function balanceOf(address owner) public view returns (uint256)\n")),(0,r.kt)("p",null,"Returns the total amount of vault shares the ",(0,r.kt)("inlineCode",{parentName:"p"},"owner")," currently has."),(0,r.kt)("h3",{id:"events"},"Events"),(0,r.kt)("h4",{id:"deposit-event"},"Deposit Event"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MUST")," be emitted when tokens are deposited into the vault via the ",(0,r.kt)("a",{parentName:"p",href:"#mint"},(0,r.kt)("inlineCode",{parentName:"a"},"mint"))," and ",(0,r.kt)("a",{parentName:"p",href:"#deposit"},(0,r.kt)("inlineCode",{parentName:"a"},"deposit"))," methods"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"event Deposit(\n    address indexed sender,\n    address indexed owner,\n    uint256 assets,\n    uint256 shares\n)\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"sender")," is the user who exchanged ",(0,r.kt)("inlineCode",{parentName:"p"},"assets")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"shares"),", and transferred those ",(0,r.kt)("inlineCode",{parentName:"p"},"shares")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"owner"),"."),(0,r.kt)("h4",{id:"withdraw-event"},"Withdraw Event"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MUST")," be emitted when shares are withdrawn from the vault by a depositor in the ",(0,r.kt)("a",{parentName:"p",href:"#redeem"},(0,r.kt)("inlineCode",{parentName:"a"},"redeem"))," or ",(0,r.kt)("a",{parentName:"p",href:"#withdraw"},(0,r.kt)("inlineCode",{parentName:"a"},"withdraw"))," methods."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"event Withdraw(\n    address indexed sender,\n    address indexed receiver,\n    address indexed owner,\n    uint256 assets,\n    uint256 share\n)\n")),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"sender")," is the user who triggered the withdrawal and exchanged ",(0,r.kt)("inlineCode",{parentName:"p"},"shares"),", owned by ",(0,r.kt)("inlineCode",{parentName:"p"},"owner"),", for ",(0,r.kt)("inlineCode",{parentName:"p"},"assets"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"receiver")," is the user who received the withdrawn ",(0,r.kt)("inlineCode",{parentName:"p"},"assets"),"."),(0,r.kt)("h2",{id:"further-reading"},"Further reading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/Rari-Capital/solmate/blob/main/src/mixins/ERC4626.sol"},"ERC-4626: GitHub Repo"))))}u.isMDXComponent=!0}}]);