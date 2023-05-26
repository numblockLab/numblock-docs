"use strict";(self.webpackChunknumblock_docs=self.webpackChunknumblock_docs||[]).push([[9288],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),f=r,m=c["".concat(i,".").concat(f)]||c[f]||u[f]||o;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const o={title:"NRC-1155 Multi-Token Standard",lang:"en"},l=void 0,s={unversionedId:"developers/token-standards/nrc-1155",id:"developers/token-standards/nrc-1155",title:"NRC-1155 Multi-Token Standard",description:"Introduction",source:"@site/docs/developers/token-standards/nrc-1155.md",sourceDirName:"developers/token-standards",slug:"/developers/token-standards/nrc-1155",permalink:"/docs/developers/token-standards/nrc-1155",draft:!1,tags:[],version:"current",frontMatter:{title:"NRC-1155 Multi-Token Standard",lang:"en"},sidebar:"develop",previous:{title:"NRC-777 Token Standard",permalink:"/docs/developers/token-standards/nrc-777"},next:{title:"NRC-4626 Tokenized Vault Standard",permalink:"/docs/developers/token-standards/nrc-4626"}},i={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"NRC-1155 Functions and Features:",id:"body",level:2},{value:"Batch Transfers",id:"batch-transfers",level:3},{value:"Batch Balance",id:"batch-balance",level:3},{value:"Batch Approval",id:"batch-approval",level:3},{value:"Receive Hook",id:"receive-hook",level:3},{value:"NFT Support",id:"nft-support",level:3},{value:"Safe Transfer Rule",id:"safe-transfer-rule",level:3},{value:"Further reading",id:"further-reading",level:2}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"A standard interface for contracts that manage multiple token types. A single deployed contract may include any combination of fungible tokens, non-fungible tokens or other configurations (e.g. semi-fungible tokens)."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"What is meant by Multi-Token Standard?")),(0,r.kt)("p",null,"The idea is simple and seeks to create a smart contract interface that can represent and control any number of fungible and non-fungible token types. In this way, the NRC-1155 token can do the same functions as an ",(0,r.kt)("a",{parentName:"p",href:"/docs/developers/token-standards/nrc-20/"},"NRC-20")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/developers/token-standards/nrc-721/"},"NRC-721")," token, and even both at the same time. And best of all, improving the functionality of both standards, making it more efficient, and correcting obvious implementation errors on the NRC-20 and NRC-721 standards."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"To better understand this page, we recommend you first read about ",(0,r.kt)("a",{parentName:"p",href:"/docs/developers/token-standards/"},"token standards"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/developers/token-standards/nrc-20/"},"NRC-20"),", and ",(0,r.kt)("a",{parentName:"p",href:"//docs/developers/token-standards/nrc-721/"},"NRC-721"),"."),(0,r.kt)("h2",{id:"body"},"NRC-1155 Functions and Features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#batch_transfers"},"Batch Transfer"),": Transfer multiple assets in a single call."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#batch_balance"},"Batch Balance"),": Get the balances of multiple assets in a single call."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#batch_approval"},"Batch Approval"),": Approve all tokens to an address."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#recieve_hook"},"Hooks"),": Receive tokens hook."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#nft_support"},"NFT Support"),": If supply is only 1, treat it as NFT."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#safe_transfer_rule"},"Safe Transfer Rules"),": Set of rules for secure transfer.")),(0,r.kt)("h3",{id:"batch-transfers"},"Batch Transfers"),(0,r.kt)("p",null,"The batch transfer works very similar to regular NRC-20 transfers. Let's look at the regular NRC-20 transferFrom function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"// NRC-20\nfunction transferFrom(address from, address to, uint256 value) external returns (bool);\n\n// NRC-1155\nfunction safeBatchTransferFrom(\n    address _from,\n    address _to,\n    uint256[] calldata _ids,\n    uint256[] calldata _values,\n    bytes calldata _data\n) external;\n")),(0,r.kt)("p",null,"The only difference in NRC-1155 is that we pass the values as an array and we also pass an array of id's. For example given ",(0,r.kt)("inlineCode",{parentName:"p"},"ids=[3, 6, 13]")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"values=[100, 200, 5]"),", the resulting transfers will be"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Transfer 100 tokens with id 3 from ",(0,r.kt)("inlineCode",{parentName:"li"},"_from")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"_to"),"."),(0,r.kt)("li",{parentName:"ol"},"Transfer 200 tokens with id 6 from ",(0,r.kt)("inlineCode",{parentName:"li"},"_from")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"_to"),"."),(0,r.kt)("li",{parentName:"ol"},"Transfer 5 tokens with id 13 from ",(0,r.kt)("inlineCode",{parentName:"li"},"_from")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"_to"),".")),(0,r.kt)("p",null,"In NRC-1155 we only have ",(0,r.kt)("inlineCode",{parentName:"p"},"transferFrom"),", no ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer"),". To use it like a regular ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer"),", just set the from address to the address that's calling the function."),(0,r.kt)("h3",{id:"batch-balance"},"Batch Balance"),(0,r.kt)("p",null,"The respective NRC-20 ",(0,r.kt)("inlineCode",{parentName:"p"},"balanceOf")," call likewise has its partner function with batch support. As a reminder, this is the NRC-20 version:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"// NRC-20\nfunction balanceOf(address owner) external view returns (uint256);\n\n// NRC-1155\nfunction balanceOfBatch(\n    address[] calldata _owners,\n    uint256[] calldata _ids\n) external view returns (uint256[] memory);\n")),(0,r.kt)("p",null,"Even simpler for the balance call, we can retrieve multiple balances in a single call. We pass the array of owners, followed by the array of token ids."),(0,r.kt)("p",null,"For example given ",(0,r.kt)("inlineCode",{parentName:"p"},"_ids=[3, 6, 13]")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"_owners=[0xbeef..., 0x1337..., 0x1111...]"),", the return value will be"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"[\n    balanceOf(0xbeef...),\n    balanceOf(0x1337...),\n    balanceOf(0x1111...)\n]\n")),(0,r.kt)("h3",{id:"batch-approval"},"Batch Approval"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"// NRC-1155\nfunction setApprovalForAll(\n    address _operator,\n    bool _approved\n) external;\n\nfunction isApprovedForAll(\n    address _owner,\n    address _operator\n) external view returns (bool);\n")),(0,r.kt)("p",null,"The approvals are slightly different than NRC-20. Instead of approving specific amounts, you set an operator to approved or not approved via ",(0,r.kt)("inlineCode",{parentName:"p"},"setApprovalForAll"),"."),(0,r.kt)("p",null,"Reading the current status can be done via ",(0,r.kt)("inlineCode",{parentName:"p"},"isApprovedForAll"),". As you can see, it's an all or nothing. You cannot define how many tokens to approve or even which token class."),(0,r.kt)("p",null,"This is intentionally designed with simplicity in mind. You can only approve everything for one address."),(0,r.kt)("h3",{id:"receive-hook"},"Receive Hook"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"function onERC1155BatchReceived(\n    address _operator,\n    address _from,\n    uint256[] calldata _ids,\n    uint256[] calldata _values,\n    bytes calldata _data\n) external returns(bytes4);\n")),(0,r.kt)("p",null,"NRC-1155 supports receive hooks for smart contracts only. The hook function must return a magic predefined bytes4 value which is given as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'bytes4(keccak256("onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)"))\n')),(0,r.kt)("p",null,"When the receiving contract returns this value, it is assumed the contract accepts the transfer and knows how to handle the NRC-1155 tokens. Great, no more stuck tokens in a contract!"),(0,r.kt)("h3",{id:"nft-support"},"NFT Support"),(0,r.kt)("p",null,"When the supply is just one, the token is essentially a non-fungible token (NFT). And as is standard for NRC-721, you can define a metadata URL. The URL can be read and modified by clients."),(0,r.kt)("h3",{id:"safe-transfer-rule"},"Safe Transfer Rule"),(0,r.kt)("p",null,"We've touched on a few safe transfer rules already in the previous explanations. But let's look at the most important of the rules:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The caller must be approved to spend the tokens for the ",(0,r.kt)("inlineCode",{parentName:"li"},"_from")," address or the caller must equal ",(0,r.kt)("inlineCode",{parentName:"li"},"_from"),"."),(0,r.kt)("li",{parentName:"ol"},"The transfer call must revert if",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"_to")," address is 0."),(0,r.kt)("li",{parentName:"ol"},"length of ",(0,r.kt)("inlineCode",{parentName:"li"},"_ids")," is not the same as length of ",(0,r.kt)("inlineCode",{parentName:"li"},"_values"),"."),(0,r.kt)("li",{parentName:"ol"},"any of the balance(s) of the holder(s) for token(s) in ",(0,r.kt)("inlineCode",{parentName:"li"},"_ids")," is lower than the respective amount(s) in ",(0,r.kt)("inlineCode",{parentName:"li"},"_values")," sent to the recipient."),(0,r.kt)("li",{parentName:"ol"},"any other error occurs.")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note"),": All batch functions including the hook also exist as versions without batch. This is done for gas efficiency, considering transferring just one asset will likely still be the most commonly used way. We've left them out for simplicity in the explanations, including safe transfer rules. The names are identical, just remove the 'Batch'."),(0,r.kt)("h2",{id:"further-reading"},"Further reading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.openzeppelin.com/contracts/3.x/erc1155"},"ERC-1155: Openzeppelin Docs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/enjin/ERC-1155"},"ERC-1155: GitHub Repo")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.alchemy.com/alchemy/enhanced-apis/nft-api"},"Alchemy NFT API"))))}c.isMDXComponent=!0}}]);