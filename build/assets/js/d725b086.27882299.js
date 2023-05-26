"use strict";(self.webpackChunknumblock_docs=self.webpackChunknumblock_docs||[]).push([[9527],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(r),d=a,y=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return r?n.createElement(y,s(s({ref:t},p),{},{components:r})):n.createElement(y,s({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[h]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7197:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={id:"storage",title:"Storage"},s=void 0,i={unversionedId:"architecture/modules/storage",id:"architecture/modules/storage",title:"Storage",description:"Overview",source:"@site/docs/architecture/modules/storage.md",sourceDirName:"architecture/modules",slug:"/architecture/modules/storage",permalink:"/docs/architecture/modules/storage",draft:!1,tags:[],version:"current",frontMatter:{id:"storage",title:"Storage"},sidebar:"develop",previous:{title:"Interconnect",permalink:"/docs/architecture/modules/protocol"},next:{title:"NumBlock Native Bridge",permalink:"/docs/architecture/modules/native-bridge"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"LevelDB",id:"leveldb",level:2},{value:"Prefixes",id:"prefixes",level:3},{value:"\ud83d\udcdc Resources",id:"-resources",level:2}],p={toc:c};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The NumBlock currently utilizes ",(0,a.kt)("strong",{parentName:"p"},"LevelDB")," for data storage, as well as an ",(0,a.kt)("strong",{parentName:"p"},"in-memory")," data store."),(0,a.kt)("p",null,"Throughout the NumBlock, when modules need to interact with the underlying data store,\nthey don't need to know which DB engine or service they're speaking to."),(0,a.kt)("p",null,"The DB layer is abstracted away between a module called ",(0,a.kt)("strong",{parentName:"p"},"Storage"),", which exports interfaces that modules query."),(0,a.kt)("p",null,"Each DB layer, for now only ",(0,a.kt)("strong",{parentName:"p"},"LevelDB"),", implements these methods separately, making sure they fit in with their implementation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="blockchain/storage/storage.go"',title:'"blockchain/storage/storage.go"'},"// Storage is a generic blockchain storage\ntype Storage interface {\n    ReadCanonicalHash(n uint64) (types.Hash, bool)\n    WriteCanonicalHash(n uint64, hash types.Hash) error\n\n    ReadHeadHash() (types.Hash, bool)\n    ReadHeadNumber() (uint64, bool)\n    WriteHeadHash(h types.Hash) error\n    WriteHeadNumber(uint64) error\n\n    WriteForks(forks []types.Hash) error\n    ReadForks() ([]types.Hash, error)\n\n    WriteDiff(hash types.Hash, diff *big.Int) error\n    ReadDiff(hash types.Hash) (*big.Int, bool)\n\n    WriteHeader(h *types.Header) error\n    ReadHeader(hash types.Hash) (*types.Header, error)\n\n    WriteCanonicalHeader(h *types.Header, diff *big.Int) error\n\n    WriteBody(hash types.Hash, body *types.Body) error\n    ReadBody(hash types.Hash) (*types.Body, error)\n\n    WriteSnapshot(hash types.Hash, blob []byte) error\n    ReadSnapshot(hash types.Hash) ([]byte, bool)\n\n    WriteReceipts(hash types.Hash, receipts []*types.Receipt) error\n    ReadReceipts(hash types.Hash) ([]*types.Receipt, error)\n\n    WriteTxLookup(hash types.Hash, blockHash types.Hash) error\n    ReadTxLookup(hash types.Hash) (types.Hash, bool)\n\n    Close() error\n}\n")),(0,a.kt)("h2",{id:"leveldb"},"LevelDB"),(0,a.kt)("h3",{id:"prefixes"},"Prefixes"),(0,a.kt)("p",null,"In order to make querying the LevelDB storage deterministic, and to avoid key storage clashing, the NumBlock leverages\nprefixes and sub-prefixes when storing data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go",metastring:'title="blockchain/storage/keyvalue.go"',title:'"blockchain/storage/keyvalue.go"'},'// Prefixes for the key-value store\nvar (\n    // DIFFICULTY is the difficulty prefix\n    DIFFICULTY = []byte("d")\n\n    // HEADER is the header prefix\n    HEADER = []byte("h")\n\n    // HEAD is the chain head prefix\n    HEAD = []byte("o")\n\n    // FORK is the entry to store forks\n    FORK = []byte("f")\n\n    // CANONICAL is the prefix for the canonical chain numbers\n    CANONICAL = []byte("c")\n\n    // BODY is the prefix for bodies\n    BODY = []byte("b")\n\n    // RECEIPTS is the prefix for receipts\n    RECEIPTS = []byte("r")\n\n    // SNAPSHOTS is the prefix for snapshots\n    SNAPSHOTS = []byte("s")\n\n    // TX_LOOKUP_PREFIX is the prefix for transaction lookups\n    TX_LOOKUP_PREFIX = []byte("l")\n)\n\n// Sub-prefixes\nvar (\n    HASH   = []byte("hash")\n    NUMBER = []byte("number")\n    EMPTY  = []byte("empty")\n)\n')),(0,a.kt)("h2",{id:"-resources"},"\ud83d\udcdc Resources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("a",{parentName:"strong",href:"https://github.com/google/leveldb"},"LevelDB")))))}h.isMDXComponent=!0}}]);