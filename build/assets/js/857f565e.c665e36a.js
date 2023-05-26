"use strict";(self.webpackChunknumblock_docs=self.webpackChunknumblock_docs||[]).push([[2677],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,u=p["".concat(s,".").concat(m)]||p[m]||h[m]||o;return n?a.createElement(u,i(i({ref:t},d),{},{components:n})):a.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6560:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={id:"definitions",title:"General Definitions"},i=void 0,l={unversionedId:"developers/bridges/chainbridge/definitions",id:"developers/bridges/chainbridge/definitions",title:"General Definitions",description:"Relayer",source:"@site/docs/developers/bridges/chainbridge/definitions.md",sourceDirName:"developers/bridges/chainbridge",slug:"/developers/bridges/chainbridge/definitions",permalink:"/docs/developers/bridges/chainbridge/definitions",draft:!1,tags:[],version:"current",frontMatter:{id:"definitions",title:"General Definitions"},sidebar:"develop",previous:{title:"Overview",permalink:"/docs/developers/bridges/chainbridge/overview"},next:{title:"Setup",permalink:"/docs/developers/bridges/chainbridge/setup"}},s={},c=[{value:"Relayer",id:"relayer",level:2},{value:"Types of contracts",id:"types-of-contracts",level:2},{value:"Types of accounts",id:"types-of-accounts",level:2},{value:"Chain ID",id:"chain-id",level:2},{value:"Resource ID",id:"resource-id",level:2},{value:"JSON-RPC URL for NumBlock",id:"json-rpc-url-for-numblock",level:2},{value:"Ways of processing the transfer of tokens",id:"ways-of-processing-the-transfer-of-tokens",level:2},{value:"Lock/release mode",id:"lockrelease-mode",level:3},{value:"Burn/mint mode",id:"burnmint-mode",level:3}],d={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"relayer"},"Relayer"),(0,r.kt)("p",null,"Chainbridge is a relayer type bridge. The role of a relayer is to vote for the execution of a request (how many tokens to burn/release, for example).\nIt monitors events from every chain, and votes for a proposal in the Bridge contract of the destination chain when it receives a ",(0,r.kt)("inlineCode",{parentName:"p"},"Deposit")," event from a chain. A relayer calls a method in the Bridge contract to execute the proposal after the required number of votes are submitted. The bridge delegates execution to the Handler contract."),(0,r.kt)("h2",{id:"types-of-contracts"},"Types of contracts"),(0,r.kt)("p",null,"In ChainBridge, there are three types of contracts on each chain, called Bridge/Handler/Target."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Bridge contract"),(0,r.kt)("td",{parentName:"tr",align:null},"A Bridge contract that manages requests, votes, executions needs to be deployed in each chain. Users will call ",(0,r.kt)("inlineCode",{parentName:"td"},"deposit")," in Bridge to start a transfer, and Bridge delegates the process to the Handler contract corresponding to the Target contract. Once the Handler contract has been successful in calling the Target contract, Bridge contract emits a ",(0,r.kt)("inlineCode",{parentName:"td"},"Deposit")," event to notify relayers.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Handler contract"),(0,r.kt)("td",{parentName:"tr",align:null},"This contract interacts with the Target contract to execute a deposit or proposal. It validates the user's request, calls the Target contract and helps with some settings for the Target contract. There are certain Handler contracts to call each Target contract that has a different interface. The indirect calls by the Handler contract make the bridge to enable the transfer of whatever kind of assets or data. Currently, there are three types of Handler contracts implemented by ChainBridge: NRC-20Handler, NRC-721Handler, and GenericHandler.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Target contract"),(0,r.kt)("td",{parentName:"tr",align:null},"A contract that manages assets to be exchanged or the messages that are transferred between chains. The interaction with this contract will be made from each side of the bridge.")))),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ChainBridge Architecture",src:n(927).Z,width:"2210",height:"780"}),"\n",(0,r.kt)("em",{parentName:"p"},"ChainBridge Architecture"))),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Workflow of NRC-20 token transfer",src:n(5651).Z,width:"2210",height:"780"}),"\n",(0,r.kt)("em",{parentName:"p"},"ex. Workflow of an NRC-20 token transfer"))),(0,r.kt)("h2",{id:"types-of-accounts"},"Types of accounts"),(0,r.kt)("p",null,"Please make sure the accounts have enough native tokens to create transactions before starting. In NumBlock, you can assign premined balances to accounts when generating the genesis block."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Type")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Admin"),(0,r.kt)("td",{parentName:"tr",align:null},"This account will be given the admin role as default.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User"),(0,r.kt)("td",{parentName:"tr",align:null},"The sender/recipient account that sends/receives assets. The sender account pays the gas fees when approving token transfers and calling deposit in the Bridge contract to begin a transfer.")))),(0,r.kt)("admonition",{title:"The admin role",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Certain actions can only be performed by the admin role account. By default, the deployer of the Bridge contract has the admin role. You will find below how to grant the admin role to another account or to remove it."),(0,r.kt)("h3",{parentName:"admonition",id:"add-admin-role"},"Add admin role"),(0,r.kt)("p",{parentName:"admonition"},"Adds an admin"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Grant admin role\n$ cb-sol-cli admin add-admin \\\n  --url [JSON_RPC_URL] \\\n  --privateKey [PRIVATE_KEY] \\\n  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \\\n  --admin "[NEW_ACCOUNT_ADDRESS]"\n')),(0,r.kt)("h3",{parentName:"admonition",id:"revoke-admin-role"},"Revoke admin role"),(0,r.kt)("p",{parentName:"admonition"},"Removes an admin"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Revoke admin role\n$ cb-sol-cli admin remove-admin \\\n  --url [JSON_RPC_URL] \\\n  --privateKey [PRIVATE_KEY] \\\n  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \\\n  --admin "[NEW_ACCOUNT_ADDRESS]"\n')),(0,r.kt)("h2",{parentName:"admonition",id:"the-operations-which-are-allowed-by-the-admin-account-are-as-below"},"The operations which are allowed by the ",(0,r.kt)("inlineCode",{parentName:"h2"},"admin")," account are as below."),(0,r.kt)("h3",{parentName:"admonition",id:"set-resource"},"Set Resource"),(0,r.kt)("p",{parentName:"admonition"},"Register a resource ID with a contract address for a handler."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Register new resource\n$ cb-sol-cli bridge register-resource \\\n  --url [JSON_RPC_URL] \\\n  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \\\n  --resourceId "[RESOURCE_ID]" \\\n  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \\\n  --handler "[HANDLER_CONTRACT_ADDRESS]" \\\n  --targetContract "[TARGET_CONTRACT_ADDRESS]"\n')),(0,r.kt)("h3",{parentName:"admonition",id:"make-contract-burnablemintable"},"Make contract burnable/mintable"),(0,r.kt)("p",{parentName:"admonition"},"Set a token contract as mintable/burnable in a handler."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Let contract burnable/mintable\n$ cb-sol-cli bridge set-burn \\\n  --url [JSON_RPC_URL] \\\n  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \\\n  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \\\n  --handler "[HANDLER_CONTRACT_ADDRESS]" \\\n  --tokenContract "[TARGET_CONTRACT_ADDRESS]"\n')),(0,r.kt)("h3",{parentName:"admonition",id:"cancel-proposal"},"Cancel proposal"),(0,r.kt)("p",{parentName:"admonition"},"Cancel proposal for execution"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Cancel ongoing proposal\n$ cb-sol-cli bridge cancel-proposal \\\n  --url [JSON_RPC_URL] \\\n  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \\\n  --resourceId "[RESOURCE_ID]" \\\n  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \\\n  --chainId "[CHAIN_ID_OF_SOURCE_CHAIN]" \\\n  --depositNonce "[NONCE]"\n')),(0,r.kt)("h3",{parentName:"admonition",id:"pauseunpause"},"Pause/Unpause"),(0,r.kt)("p",{parentName:"admonition"},"Pause deposits, proposal creation, voting, and deposit executions temporally."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Pause\n$ cb-sol-cli admin pause \\\n  --url [JSON_RPC_URL] \\\n  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \\\n  --bridge "[BRIDGE_CONTRACT_ADDRESS]"\n\n# Unpause\n$ cb-sol-cli admin unpause \\\n  --url [JSON_RPC_URL] \\\n  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \\\n  --bridge "[BRIDGE_CONTRACT_ADDRESS]"\n')),(0,r.kt)("h3",{parentName:"admonition",id:"change-fee"},"Change Fee"),(0,r.kt)("p",{parentName:"admonition"},"Change the fee which will be paid to Bridge Contract"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Change fee for execution\n$ cb-sol-cli admin set-fee \\\n  --url [JSON_RPC_URL] \\\n  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \\\n  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \\\n  --fee [FEE_IN_WEI]\n')),(0,r.kt)("h3",{parentName:"admonition",id:"addremove-a-relayer"},"Add/Remove a relayer"),(0,r.kt)("p",{parentName:"admonition"},"Add an account as a new relayer or remove an account from relayers"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Add relayer\n$ cb-sol-cli admin add-relayer \\\n  --url [JSON_RPC_URL] \\\n  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \\\n  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \\\n  --relayer "[NEW_RELAYER_ADDRESS]"\n  \n# Remove relayer\n$ cb-sol-cli admin remove-relayer \\\n  --url [JSON_RPC_URL] \\\n  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \\\n  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \\\n  --relayer "[RELAYER_ADDRESS]"\n')),(0,r.kt)("h3",{parentName:"admonition",id:"change-relayer-threshold"},"Change relayer threshold"),(0,r.kt)("p",{parentName:"admonition"},"Change the number of votes required for a proposal execution"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Remove relayer\n$ cb-sol-cli admin set-threshold \\\n  --url [JSON_RPC_URL] \\\n  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \\\n  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \\\n  --threshold [THRESHOLD]\n'))),(0,r.kt)("h2",{id:"chain-id"},"Chain ID"),(0,r.kt)("p",null,"The Chainbridge ",(0,r.kt)("inlineCode",{parentName:"p"},"chainId")," is an arbitrary value used in the bridge for differentiating between the blockchain networks, and it has to be in the range of uint8. To not be confused with the chain ID of the network, they are not the same thing. This value needs to be unique, but it doesn't have to be the same as the ID of the network."),(0,r.kt)("p",null,"In this example, we set  ",(0,r.kt)("inlineCode",{parentName:"p"},"64")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"chainId"),", because the chain ID of the NumBlock Testnet is ",(0,r.kt)("inlineCode",{parentName:"p"},"100"),", which cannot be represented with a uint8."),(0,r.kt)("h2",{id:"resource-id"},"Resource ID"),(0,r.kt)("p",null,"A resource ID is a unique 32-bytes value in a cross-chain environment, associated with a certain asset (resource) that is being transferred between networks."),(0,r.kt)("p",null,"The resource ID is arbitrary, but, as a convention, usually the last byte contains the chain ID of the source chain (the network from which this asset originated from). "),(0,r.kt)("h2",{id:"json-rpc-url-for-numblock"},"JSON-RPC URL for NumBlock"),(0,r.kt)("p",null,"For this guide, we\u2019ll use ",(0,r.kt)("a",{parentName:"p",href:"https://rpc-testnet.numblock.org"},"https://rpc-testnet.numblock.org"),", a public JSON-RPC URL provided by Polygon, which may have traffic or rate-limits. This will be used only to connect with the NumBlock Testnet. We advise you to obtain your JSON-RPC URL by an external service like Infura because deploying contracts will send many queries/requests to the JSON-RPC."),(0,r.kt)("h2",{id:"ways-of-processing-the-transfer-of-tokens"},"Ways of processing the transfer of tokens"),(0,r.kt)("p",null,"When transferring NRC-20 tokens between chains, they can be processed in two different modes:"),(0,r.kt)("h3",{id:"lockrelease-mode"},"Lock/release mode"),(0,r.kt)("b",null,"Source chain: "),"The tokens you are sending will be locked in the Handler Contract.  ",(0,r.kt)("br",null),(0,r.kt)("b",null,"Destination chain:")," The same amount of tokens as you sent in the source chain would be unlocked and transferred from the Handler contract to the recipient account in the destination chain.",(0,r.kt)("h3",{id:"burnmint-mode"},"Burn/mint mode"),(0,r.kt)("b",null,"Source chain:")," The tokens you are sending will be burned.   ",(0,r.kt)("br",null),(0,r.kt)("b",null,"Destination chain:")," The same amount of tokens that you sent and burned on the source chain will be minted on the destination chain and sent to the recipient account.",(0,r.kt)("p",null,"You can use different modes on each chain. It means that you can lock a token in the main chain while minting a token in the subchain for transfer. For instance, it may make sense to lock/release tokens if the total supply or mint schedule is controlled. Tokens would be minted/burned if the contract in the subchain has to follow the supply in the main chain."),(0,r.kt)("p",null,"The default mode is lock/release mode. If you want to make the Tokens mintable/burnable, you need to call ",(0,r.kt)("inlineCode",{parentName:"p"},"adminSetBurnable")," method. If you want to mint tokens on execution, you will need to grant ",(0,r.kt)("inlineCode",{parentName:"p"},"minter")," role to the NRC-20 Handler contract."))}p.isMDXComponent=!0},927:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/architecture-2e701720630df0546322f0c4226330d4.svg"},5651:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/erc20-workflow-a25ac68bd60fe1da8d883c340cd7fa6d.svg"}}]);