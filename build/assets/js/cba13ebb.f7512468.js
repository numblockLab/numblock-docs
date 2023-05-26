"use strict";(self.webpackChunknumblock_docs=self.webpackChunknumblock_docs||[]).push([[9212],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),h=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=h(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=h(n),p=i,m=d["".concat(c,".").concat(p)]||d[p]||u[p]||r;return n?a.createElement(m,o(o({ref:t},l),{},{components:n})):a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var h=2;h<r;h++)o[h]=n[h];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9882:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var a=n(7462),i=(n(7294),n(3905));const r={id:"native-bridge",title:"NumBlock Native Bridge"},o="NumBlock Native Bridge",s={unversionedId:"architecture/modules/native-bridge",id:"architecture/modules/native-bridge",title:"NumBlock Native Bridge",description:"NumBlock incorporate a built-in two-way bridging mechanism that facilitates arbitrary message passing between a NumBlock (also referred to as childchain) and another EVM-compatible PoS blockchain (referred to as rootchain). With this feature, messages can consist of any data type (arbitrary bytes), and the bridge operates as an extension of NumBlock consensus algorithm (NumBPFT) and can be enabled or disabled as needed.",source:"@site/docs/architecture/modules/native-bridge.md",sourceDirName:"architecture/modules",slug:"/architecture/modules/native-bridge",permalink:"/docs/architecture/modules/native-bridge",draft:!1,tags:[],version:"current",frontMatter:{id:"native-bridge",title:"NumBlock Native Bridge"},sidebar:"develop",previous:{title:"Storage",permalink:"/docs/architecture/modules/storage"},next:{title:"Other modules",permalink:"/docs/architecture/modules/other-modules"}},c={},h=[{value:"StateSender",id:"statesender",level:2},{value:"StateReceiver",id:"statereceiver",level:2},{value:"Synchronization and Commitments",id:"synchronization-and-commitments",level:2},{value:"CheckpointManager",id:"checkpointmanager",level:2}],l={toc:h};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"numblock-native-bridge"},"NumBlock Native Bridge"),(0,i.kt)("p",null,"NumBlock incorporate a built-in two-way bridging mechanism that facilitates arbitrary message passing between a NumBlock (also referred to as childchain) and another EVM-compatible PoS blockchain (referred to as rootchain). With this feature, messages can consist of any data type (arbitrary bytes), and the bridge operates as an extension of NumBlock consensus algorithm (NumBPFT) and can be enabled or disabled as needed."),(0,i.kt)("h1",{id:"statesync-real-time-synchronization"},"StateSync: Real-Time Synchronization"),(0,i.kt)("p",null,"State synchronization (StateSync) is a mechanism used to update the state of a contract on the childchain based on events occurring on the rootchain. It is a critical component of blockchain technology as it enables secure and efficient communication between the two chains. State synchronization allows for a more efficient and secure way to update the chain state on the childchain without needing to process all transactions from the genesis block."),(0,i.kt)("p",null,"Message passing between a rootchain and a childchain is achieved through continuous state synchronization, known as StateSync. This process involves transferring state data between system calls."),(0,i.kt)("h2",{id:"statesender"},"StateSender"),(0,i.kt)("p",null,"The StateSender contract is responsible for generating sync state events based on receiver and data. The syncState function allows anyone to call this method to emit an event. The receiver on the NumBlock chain should add a check based on the sender. The data is sent along with the event and represents the state change that needs to be executed on the childchain."),(0,i.kt)("h2",{id:"statereceiver"},"StateReceiver"),(0,i.kt)("p",null,"The StateReceiver contract is responsible for executing and relaying the state data on the childchain. It receives the state change data from the rootchain contract bundled up in the form of a commitment, sent with the Merkle Tree root hash. This tree is created by bundling a number of StateSync events received by the StateSender. Commitments are submitted to the StateReceiver by a block proposer, and it is a system (state) transaction. They are used to verify the execution of state data from the rootchain to the childchain (e.g., transferring funds from L1 to L2 or from Childchain1 to Childchain2). Commitments are similar to checkpoints but are used in the process of transferring data from L1 to L2, while checkpoints are used in the process of transferring data from L2 to L1."),(0,i.kt)("h2",{id:"synchronization-and-commitments"},"Synchronization and Commitments"),(0,i.kt)("p",null,"he StateSync process involves two main steps: synchronization and commitments."),(0,i.kt)("p",null,"In the synchronization step, the StateSender contract on the rootchain generates sync state events based on receiver and data. The syncState function allows anyone to call this method to emit an event. The data is sent along with the event and represents the state change that needs to be executed on the childchain."),(0,i.kt)("p",null,"In the commitments step, the StateReceiver contract on the childchain receives the state change data along with a Merkle proof from the StateSender contract and verifies the proof to ensure the data's integrity. If the proof is valid, the state change is executed on the childchain."),(0,i.kt)("p",null,"To ensure the validity of the state change, the StateSender contract generates a unique id for each sync state event. This id is used by the StateReceiver contract to prevent replay attacks, which could result in the execution of duplicate state changes."),(0,i.kt)("p",null,"The StateReceiver contract also implements a BLS signature scheme to verify the signatures submitted by the validators. The validators' signatures are aggregated, and the contract checks whether the required voting power threshold is met to accept the state change."),(0,i.kt)("h1",{id:"checkpoints-ensuring-liveliness-and-reference-points"},"Checkpoints: Ensuring Liveliness and Reference Points"),(0,i.kt)("p",null,"When passing messages from a childchain to a rootchain, the validator set commits checkpoints, which are snapshots of the childchain state containing only the root of the Exit events, excluding all transactions. Checkpoints serve as reference points for clients, and validators periodically checkpoint all transactions occurring on the childchain to the rootchain. Checkpoints also ensure liveliness and are submitted to the associated rootchain asset contract."),(0,i.kt)("h2",{id:"checkpointmanager"},"CheckpointManager"),(0,i.kt)("p",null,"A CheckpointManager contract responsible for managing checkpoints in the network."),(0,i.kt)("p",null,"The checkpoints represent a snapshot of the childchain state, which is periodically checkpointed to the rootchain by the validators. The checkpoints are used as a reference point for the rootchain to verify the integrity and accuracy of the data on the childchain."),(0,i.kt)("p",null,"The contract has several functions to facilitate the management of checkpoints, such as submitting a new checkpoint with metadata, verifying signatures, and getting the event root by block number or epoch. The contract also has a mapping to store the checkpoints and the current validator set, and an array to keep track of the checkpoint block numbers."),(0,i.kt)("p",null,"The contract uses a Merkle tree to efficiently prove the membership of an event in the childchain state. The tree is constructed using the hashed exit events sent by the L2StateSender, which the Edge client saves to its local storage after their transactions are executed. The membership proofs can be verified using the Merkle proofs provided by the users."),(0,i.kt)("p",null,"The contract also implements a BLS signature scheme to verify the signatures submitted by the validators. The validators' signatures are aggregated, and the contract checks whether the required voting power threshold is met to accept the checkpoint."),(0,i.kt)("p",null,"To elaborate, the root of the Merkle tree is a hash value that represents a specific subset of the childchain state at a specific point in time. This state includes only the exit events sent by the L2StateSender contract. When a user wants to exit the L2 chain (transfer their tokens from L2 to L1), their exit transaction is included in this Merkle tree."),(0,i.kt)("p",null,"When a checkpoint is made, the root of the Merkle tree is included as part of the checkpoint, along with other metadata. This checkpoint is then sent to the rootchain where it is verified and stored by the validators."),(0,i.kt)("p",null,"Later, when a user wants to verify a particular exit event on the childchain, they can provide a Merkle proof, which is a cryptographic proof that demonstrates the inclusion of a particular exit event in the Merkle tree. The Merkle proof can be verified by the rootchain using the root of the Merkle tree, which was included in the checkpoint."),(0,i.kt)("p",null,"In short, the root of the Merkle tree is a compact representation of the exit events on the childchain at a specific point in time, which is included in checkpoints and used for verification purposes."),(0,i.kt)("h1",{id:"bridge-states-tracking-event-progress"},"Bridge States: Tracking Event Progress"),(0,i.kt)("p",null,"The bridge can exist in one of three states:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Pending"),": Events are waiting to be bundled and sent over."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Committed"),": Event data has been relayed to the associated chain."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Executed"),": The event has been committed, and the state executed, resulting in a state change."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Token Standards"),": Supporting a Range of Assets\nThe bridge is compatible with various token standards, including ERC20, ERC721, and others, enabling a wide range of assets to be transferred between chains.")))}d.isMDXComponent=!0}}]);