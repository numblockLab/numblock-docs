"use strict";(self.webpackChunknumblock_docs=self.webpackChunknumblock_docs||[]).push([[4429],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>R});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},N=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(t),N=a,R=p["".concat(c,".").concat(N)]||p[N]||u[N]||o;return t?r.createElement(R,l(l({ref:n},d),{},{components:t})):r.createElement(R,l({ref:n},d))}));function R(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=N;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}N.displayName="MDXCreateElement"},5830:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={id:"use-case-nrc721-bridge",title:"Use case - NRC-721 Bridge",description:"Example for to bridge NRC-721 contract",keywords:["docs","Bridge","NRC-20"]},l=void 0,i={unversionedId:"developers/bridges/chainbridge/use-case-nrc721-bridge",id:"developers/bridges/chainbridge/use-case-nrc721-bridge",title:"Use case - NRC-721 Bridge",description:"Example for to bridge NRC-721 contract",source:"@site/docs/developers/bridges/chainbridge/use-case-nrc721-bridge.md",sourceDirName:"developers/bridges/chainbridge",slug:"/developers/bridges/chainbridge/use-case-nrc721-bridge",permalink:"/docs/developers/bridges/chainbridge/use-case-nrc721-bridge",draft:!1,tags:[],version:"current",frontMatter:{id:"use-case-nrc721-bridge",title:"Use case - NRC-721 Bridge",description:"Example for to bridge NRC-721 contract",keywords:["docs","Bridge","NRC-20"]},sidebar:"develop",previous:{title:"Use case - NRC-20 Bridge",permalink:"/docs/developers/bridges/chainbridge/use-case-nrc20-bridge"},next:{title:"Validators",permalink:"/docs/category/validators"}},c={},s=[{value:"Scenario",id:"scenario",level:2},{value:"Contracts",id:"contracts",level:2},{value:"Step1: Deploy Bridge and NRC-721 Handler contracts",id:"step1-deploy-bridge-and-nrc-721-handler-contracts",level:2},{value:"Step2: Deploy your NRC-721 contract",id:"step2-deploy-your-nrc-721-contract",level:2},{value:"Step3: Register resource ID in Bridge",id:"step3-register-resource-id-in-bridge",level:2},{value:"Step4: Set Mint/Burn mode in NRC-721 bridge of the local chain",id:"step4-set-mintburn-mode-in-nrc-721-bridge-of-the-local-chain",level:2},{value:"Step5: Mint NFT",id:"step5-mint-nft",level:2},{value:"Step6: Start NRC-721 transfer",id:"step6-start-nrc-721-transfer",level:2}],d={toc:s};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This section aims to give you a setup flow of NRC-721 Bridge for a practical use case."),(0,a.kt)("p",null,"In this guide, you will use NumBlock Testnet and local chain. Please make sure you have JSON-RPC endpoint for NumBlock Testnet and you've set up local chain environment."),(0,a.kt)("h2",{id:"scenario"},"Scenario"),(0,a.kt)("p",null,"This scenario is to setup a Bridge for the NRC-721 NFT that has been deployed in public chain (NumBlock Testnet) already in order to enable low-cost transfer in a private chain (NumBlock) for users in a regular case. In such a case, the original metadata has been defined in the public chain and the only NFTs that have been transferred from Public chain can exist in the private chain. For that reason, you'll need to use lock/release mode in the public chain and burn/mint mode in the private chain."),(0,a.kt)("p",null,"When sending NFTs from the public chain to the private chain, the NFT will be locked in NRC-721 Handler contract in the public chain and the same NFT will be minted in the private chain. On the other hand, in case of transfer from the private chain to the public chain, the NFT in the private chain will be burned and the same NFT will be released from NRC-721 Handler contract in the public chain."),(0,a.kt)("h2",{id:"contracts"},"Contracts"),(0,a.kt)("p",null,"Explaining with a simple NRC-721 contract instead of the contract developed by ChainBridge. For burn/mint mode, NRC-721 contract must have ",(0,a.kt)("inlineCode",{parentName:"p"},"mint")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"burn")," methods in addition to the methods defined in NRC-721 like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sol"},'pragma solidity ^0.8.14;\n\nimport "@openzeppelin/contracts/token/ERC-721/ERC-721.sol";\nimport "@openzeppelin/contracts/token/ERC-20/ERC-20.sol";\nimport "@openzeppelin/contracts/access/AccessControl.sol";\nimport "@openzeppelin/contracts/token/ERC-721/extensions/ERC-721Burnable.sol";\nimport "@openzeppelin/contracts/token/ERC-721/extensions/ERC-721URIStorage.sol";\n\ncontract SampleNFT is ERC-721, ERC-721Burnable, ERC-721URIStorage, AccessControl {\n    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");\n    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");\n\n    string public baseURI;\n\n    constructor(\n        string memory name,\n        string memory symbol,\n        string memory baseURI\n    ) NRC-721(name, symbol) {\n        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());\n        _setupRole(MINTER_ROLE, _msgSender());\n        _setupRole(BURNER_ROLE, _msgSender());\n\n        _setBaseURI(baseURI);\n    }\n\n    function mint(\n        address recipient,\n        uint256 tokenID,\n        string memory data\n    ) public onlyRole(MINTER_ROLE) {\n        _mint(recipient, tokenID);\n        _setTokenURI(tokenID, data);\n    }\n\n    function burn(uint256 tokenID)\n        public\n        override(ERC-721Burnable)\n        onlyRole(BURNER_ROLE)\n    {\n        _burn(tokenID);\n    }\n\n    function tokenURI(uint256 tokenId)\n        public\n        view\n        virtual\n        override(ERC-721, ERC-721URIStorage)\n        returns (string memory)\n    {\n        return super.tokenURI(tokenId);\n    }\n\n    function supportsInterface(bytes4 interfaceId)\n        public\n        view\n        override(ERC-721, AccessControl)\n        returns (bool)\n    {\n        return super.supportsInterface(interfaceId);\n    }\n\n    function _burn(uint256 tokenId)\n        internal\n        virtual\n        override(ERC-721, ERC-721URIStorage)\n    {\n        super._burn(tokenId);\n    }\n\n    function _setBaseURI(string memory baseURI_) internal {\n        baseURI = baseURI_;\n    }\n\n    function _baseURI() internal view virtual override returns (string memory) {\n        return baseURI;\n    }\n}\n')),(0,a.kt)("p",null,"All codes and scripts are in Github Repo ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Trapesys/chainbridge-example"},"Trapesys/chainbridge-example"),"."),(0,a.kt)("h2",{id:"step1-deploy-bridge-and-nrc-721-handler-contracts"},"Step1: Deploy Bridge and NRC-721 Handler contracts"),(0,a.kt)("p",null,"Firstly, you'll deploy Bridge and NRC-721Handler contracts using ",(0,a.kt)("inlineCode",{parentName:"p"},"cb-sol-cli")," in the both chains."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Deploy Bridge and NRC-721 contracts in NumBlock Testnet chain\n$ cb-sol-cli deploy --bridge --NRC-721Handler --chainId 99 \\\n  --url https://rpc-testnet.numblock.org \\\n  --gasPrice [GAS_PRICE] \\\n  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \\\n  --relayers [RELAYER_ACCOUNT_ADDRESS] \\\n  --relayerThreshold 1\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Deploy Bridge and NRC-721 contracts in local\n$ cb-sol-cli deploy --bridge --NRC-721Handler --chainId 100 \\\n  --url http://localhost:10002 \\\n  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \\\n  --relayers [RELAYER_ACCOUNT_ADDRESS] \\\n  --relayerThreshold 1\n")),(0,a.kt)("p",null,"You'll get Bridge and NRC-721Handler contract addresses like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"Deploying contracts...\n\u2713 Bridge contract deployed\n\u2713 NRC-721Handler contract deployed\n\n================================================================\nUrl:        https://rpc-testnet.numblock.org\nDeployer:   <ADMIN_ACCOUNT_ADDRESS>\nGas Limit:   8000000\nGas Price:   20000000\nDeploy Cost: 0.00029065308\n\nOptions\n=======\nChain Id:    <CHAIN_ID>\nThreshold:   <RELAYER_THRESHOLD>\nRelayers:    <RELAYER_ACCOUNT_ADDRESS>\nBridge Fee:  0\nExpiry:      100\n\nContract Addresses\n================================================================\nBridge:             <BRIDGE_CONTRACT_ADDRESS>\n----------------------------------------------------------------\nNRC-20 Handler:      Not Deployed\n----------------------------------------------------------------\nNRC-721 Handler:     <NRC-721_HANDLER_CONTRACT_ADDRESS>\n----------------------------------------------------------------\nGeneric Handler:    Not Deployed\n----------------------------------------------------------------\nNRC-20:              Not Deployed\n----------------------------------------------------------------\nNRC-721:             Not Deployed\n----------------------------------------------------------------\nCentrifuge Asset:   Not Deployed\n----------------------------------------------------------------\nWETC:               Not Deployed\n================================================================\n")),(0,a.kt)("h2",{id:"step2-deploy-your-nrc-721-contract"},"Step2: Deploy your NRC-721 contract"),(0,a.kt)("p",null,"You'll deploy your NRC-721 contract. This example guides you with hardhat project ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Trapesys/chainbridge-example"},"Trapesys/chainbridge-example"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/Trapesys/chainbridge-example.git\n$ cd chainbridge-example\n$ npm i\n")),(0,a.kt)("p",null,"Please create ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file and set the following values."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-.env"},"PRIVATE_KEYS=0x...\nMUMBAI_JSONRPC_URL=https://rpc-testnet.numblock.org\nEDGE_JSONRPC_URL=http://localhost:10002\n")),(0,a.kt)("p",null,"Next you'll deploy NRC-721 contract in the both chains."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx hardhat deploy --contract NRC-721 --name <NRC-721_TOKEN_NAME> --symbol <NRC-721_TOKEN_SYMBOL> --uri <BASE_URI> --network mumbai\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx hardhat deploy --contract NRC-721 --name <NRC-721_TOKEN_NAME> --symbol <NRC-721_TOKEN_SYMBOL> --uri <BASE_URI> --network edge\n")),(0,a.kt)("p",null,"After deployment is successful, you'll get contract address like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"NRC-721 contract has been deployed\nAddress: <NRC-721_CONTRACT_ADDRESS>\nName: <NRC-721_TOKEN_NAME>\nSymbol: <NRC-721_TOKEN_SYMBOL>\nBase URI: <NRC-721_BASE_URI>\n")),(0,a.kt)("h2",{id:"step3-register-resource-id-in-bridge"},"Step3: Register resource ID in Bridge"),(0,a.kt)("p",null,"You will register a resource ID that associates resources in a cross-chain environment."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ cb-sol-cli bridge register-resource \\\n  --url https://rpc-testnet.numblock.org \\\n  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \\\n  --gasPrice [GAS_PRICE] \\\n  # Set Resource ID for NRC-721\n  --resourceId "0x000000000000000000000000000000e389d61c11e5fe32ec1735b3cd38c69501" \\\n  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \\\n  --handler "[NRC-721_HANDLER_CONTRACT_ADDRESS]" \\\n  --targetContract "[NRC-721_CONTRACT_ADDRESS]"\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ cb-sol-cli bridge register-resource \\\n  --url http://localhost:10002 \\\n  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \\\n  # Set Resource ID for NRC-721\n  --resourceId "0x000000000000000000000000000000e389d61c11e5fe32ec1735b3cd38c69501" \\\n  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \\\n  --handler "[NRC-721_HANDLER_CONTRACT_ADDRESS]" \\\n  --targetContract "[NRC-721_CONTRACT_ADDRESS]"\n')),(0,a.kt)("h2",{id:"step4-set-mintburn-mode-in-nrc-721-bridge-of-the-local-chain"},"Step4: Set Mint/Burn mode in NRC-721 bridge of the local chain"),(0,a.kt)("p",null,"Bridge expects to work as burn/mint mode in local chain. You'll set burn/mint mode."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ cb-sol-cli bridge set-burn \\\n  --url http://localhost:10002 \\\n  --privateKey [ADMIN_ACCOUNT_PRIVATE_KEY] \\\n  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \\\n  --handler "[NRC-721_HANDLER_CONTRACT_ADDRESS]" \\\n  --tokenContract "[NRC-721_CONTRACT_ADDRESS]"\n')),(0,a.kt)("p",null,"And you need to grant a minter and burner role to the NRC-721 Handler contract."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx hardhat grant --role mint --contract [NRC-721_CONTRACT_ADDRESS] --address [NRC-721_HANDLER_CONTRACT_ADDRESS] --network edge\n$ npx hardhat grant --role burn --contract [NRC-721_CONTRACT_ADDRESS] --address [NRC-721_HANDLER_CONTRACT_ADDRESS] --network edge\n")),(0,a.kt)("h2",{id:"step5-mint-nft"},"Step5: Mint NFT"),(0,a.kt)("p",null,"You'll mint new NRC-721 NFT in NumBlock Agenek chain."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx hardhat mint --type NRC-721 --contract [NRC-721_CONTRACT_ADDRESS] --address [ACCOUNT_ADDRESS] --id 0x50 --data hello.json --network mumbai\n")),(0,a.kt)("p",null,"After transaction is successful, the account will have the minted NFT."),(0,a.kt)("h2",{id:"step6-start-nrc-721-transfer"},"Step6: Start NRC-721 transfer"),(0,a.kt)("p",null,"Before starting this step, please make sure that you've started relayer. Please check ",(0,a.kt)("a",{parentName:"p",href:"/docs/developers/bridges/chainbridge/setup"},"Setup")," for more details."),(0,a.kt)("p",null,"During NFT transfer from NumBlock Agenek to local chain, NRC-721 Handler contract in NumBlock Agenek withdraws NFT from your account. You'll call approve before transfer."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx hardhat approve --type NRC-721 --contract [NRC-721_CONTRACT_ADDRESS] --address [NRC-721_HANDLER_CONTRACT_ADDRESS] --id 0x50 --network mumbai\n")),(0,a.kt)("p",null,"Finally, you'll start NFT transfer from NumBlock Agenek to local chain."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Start transfer from NumBlock Agenek to NumBlock  chain\n$ cb-sol-cli NRC-721 deposit \\\n  --url https://rpc-testnet.numblock.org \\\n  --privateKey [PRIVATE_KEY] \\\n  --gasPrice [GAS_PRICE] \\\n  --id 0x50 \\\n  # ChainID for NumBlock  chain\n  --dest 100 \\\n  --bridge "[BRIDGE_CONTRACT_ADDRESS]" \\\n  --recipient "[RECIPIENT_ADDRESS_IN_LOCAL_CHAIN]" \\\n  --resourceId "0x000000000000000000000000000000e389d61c11e5fe32ec1735b3cd38c69501"\n')),(0,a.kt)("p",null,"After the deposit transaction is successful, the relayer will get the event and vote for the proposal.",(0,a.kt)("br",{parentName:"p"}),"\n","It executes a transaction to send NFT to the recipient account in NumBlock  chain after the required number of votes are submitted. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"INFO[11-19|09:07:50] Handling nonfungible deposit event       chain=figchain\nINFO[11-19|09:07:50] Attempting to resolve message            chain=local type=NonFungibleTransfer src=99 dst=100 nonce=2 rId=000000000000000000000000000000e389d61c11e5fe32ec1735b3cd38c69501\nINFO[11-19|09:07:50] Creating NRC-721 proposal                 chain=local src=99 nonce=2\nINFO[11-19|09:07:50] Watching for finalization event          chain=local src=99 nonce=2\nINFO[11-19|09:07:50] Submitted proposal vote                  chain=local tx=0x58a22d84a08269ad2e8d52d8dc038621f1a21109d11c7b6e0d32d5bf21ea8505 src=99 depositNonce=2 gasPrice=1\nINFO[11-19|09:08:15] Submitted proposal execution             chain=local tx=0x57419844881a07531e31667c609421662d94d21d0709e64fb728138309267e68 src=99 dst=100 nonce=2 gasPrice=3\n")),(0,a.kt)("p",null,"Once the execution transaction is successful, you will get NFT in local chain."))}p.isMDXComponent=!0}}]);