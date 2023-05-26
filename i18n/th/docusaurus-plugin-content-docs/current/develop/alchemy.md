---
id: alchemy
title: ส่งสัญญาอัจฉริยะโดยใช้ Alchemy
sidebar_label: Using Alchemy
description: คู่มือในการปรับใช้สัญญาอัจฉริยะโดยใช้ Alchemy
keywords:
  - docs
  - matic
  - polygon
  - alchemy
  - create smart contract
  - deploy on polygon
image: https://wiki.polygon.technology/img/polygon-wiki.png
---

## ภาพรวม {#overview}

บทช่วยสอนนี้ใช้สำหรับนักพัฒนาที่เพิ่งใช้การพัฒนาบล็อกเชน Ethereum หรือต้องการเข้าใจความรู้พื้นฐานของการปรับใช้และการโต้ตอบกับสัญญาอัจฉริยะโดยจะเดินคุณผ่านการสร้างและส่งสัญญาอัจฉริยะบนเครือข่ายทดสอบ Magon ของ Polygon โดยใช้กระเป๋าสตางค์แบบรหัส ([Metamask](https://metamask.io)) , [Solidity](https://docs.soliditylang.org/en/v0.8.0/), [Hardhat](https://hardhat.org) และ [Alchemy](https://alchemy.com/?a=polygon-docs)

:::tip

หากคุณมีคำถามหรือข้อกังวลโปรดติดต่อทีมของ Alchemy ผ่านทางเซิร์ฟเวอร์ [<ins>Discord อย่างเป็นทางการ</ins>](https://discord.gg/gWuC7zB)ของพวกเขา

:::

## สิ่งที่คุณจะได้เรียนรู้ {#what-you-will-learn}

หากต้องการสร้างสัญญาอัจฉริยะในบทช่วยสอนนี้ คุณจะต้องศึกษาวิธีใช้แพลตฟอร์มของ Alchemy ในการ:
- สร้างแอปพลิเคชันของสัญญาแบบฉลาด
- ตรวจสอบค่าคงเหลือของกระเป๋าตังค์
- การยืนยันการเรียกสัญญาในบล็อกเชน

## สิ่งที่คุณจะทำ {#what-you-will-do}

เมื่อทำตามบทช่วยสอน คุณจะ:
1. เริ่มต้นสร้างแอปบน Alchemy
2. สร้างที่อยู่ของวอลเล็ตกับ Metamask
3. เพิ่มยอดคงเหลือไปยังกระเป๋าสตางค์ (โดยใช้โทเค็นการทดสอบ)
4. ใช้ Hardhat และ Ethers.js เพื่อคอมไพล์และปรับใช้โปรเจกต์
5. ตรวจสอบสถานะสัญญาบนแพลตฟอร์ม

## สร้างและอัพโหลดสัญญาอัจฉริยะของคุณ {#create-and-deploy-your-smart-contract}

### เชื่อมต่อไปยังเครือข่าย Polygon {#connect-to-the-polygon-network}

การสร้างคำขอไปยังเชน Polygon PoS มีอยู่หลายวิธีด้วยกันแทนการเรียกใช้โหนดของคุณเอง คุณจะได้ใช้บัญชีฟรีบนแพลตฟอร์มนักพัฒนาของ Alchemy และโต้ตอบกับ Alchemy Polygon PoS API เพื่อสื่อสารกับเชน Polygon PoSแพลตฟอร์มประกอบด้วยชุดเต็มชุดของทูลิงผู้พัฒนา ซึ่งรวมถึงความสามารถในการติดตามคำขอ, การวิเคราะห์ข้อมูลซึ่งแสดงให้เห็นว่าจะเกิดอะไรขึ้นภายใต้การใช้งานแบบอัจฉริยะ เอพีไอเอส (Transact, NFTs, ฯลฯ ) และ อีเธอร์เอสดีเค

หากคุณยังไม่มี บัญชี Alchemy อยู่แล้ว เริ่มด้วยการลงนามสำหรับบัญชีฟรี[ที่นี่](https://www.alchemy.com/polygon/?a=polygon-docs)หลังจากที่สร้างบัญชีแล้ว คุณจะมีตัวเลือกในการสร้างแอปแรกทันทีก่อนที่จะไปถึงแดชบอร์ด

![img](/img/alchemy/alchemy-dashboard.png)

### สร้างแอพของคุณ (และกุญแจ API ) {#create-your-app-and-api-key}

หลังจากสร้างบัญชี Alchemy เรียบร้อยแล้ว คุณจะต้องสร้างคีย์ของ API โดยสร้างแอพแล้ว โดยตรวจสอบความถูกต้องว่าคำขอที่ทำกับเน็ตของ Polygon Mumbaiหากคุณไม่คุ้นเคยกับ Testnet ให้ดู[คู่มือ Testnet นี้](https://docs.alchemyapi.io/guides/choosing-a-network)

เพื่อสร้างคีย์ API ใหม่ นำทางไปยังแท็บ **แอพ** บนแถบการนำทาง Alchemy และเลือกรูปแบบย่อยของ **Make**

![img](/img/alchemy/create-app.png)

ชื่อแอพใหม่ของคุณ **Hello World** ให้รายละเอียดสั้น เลือกโพลีกอนสำหรับเชน และเลือก **Polygon**** Mumbai** สำหรับเครือข่ายของคุณ

สุดท้าย คลิกบน**แอพ สร้างสรรค์** แอพใหม่ของคุณจะปรากฏบนตารางด้านล่าง

### สร้างที่อยู่ของกระเป๋าสตางค์ {#create-a-wallet-address}

Polygon PoS คือโซลูชั่นการเลื่อนแบบ 2 ชั้น สำหรับ Ethereumดังนั้นเราจึงต้องการกระเป๋าสตางค์ Ethereum และเพิ่มที่อยู่ Polygon แบบกำหนดเองเพื่อส่งและรับธุรกรรมบนเน็ตของ Polygon Mumbiสำหรับบทเรียนนี้ เราจะใช้ MetaMake ซึ่งเป็นกระเป๋าสตางค์ เข้ารหัสที่ใช้งานร่วมกันสำหรับเรียกดูใช้ จัดการที่อยู่ของกระเป๋าคุมข้อมูลของคุณหากคุณต้องการทำความเข้าใจเพิ่มเติมว่าธุรกรรมบน Ethereum ทำงานอย่างไร ตรวจดู[คู่มือธุรกรรมนี้](https://ethereum.org/en/developers/docs/transactions/)โดย Ethereum Foundation

เพื่อรับที่อยู่ Polygon RPC แบบกำหนดเองของคุณจากอัลคีมี่ ไปยังแอพ**เวิลด์**ของคุณในแดชบอร์ด Alchemy และคลิก**คีย์View** ที่มุมขวาสุดจากนั้น ทำงานต่อไปและคัดลอกคีย์ Alchemy HTTP API ของคุณ

![img](/img/alchemy/view-key.png)

คุณสามารถดาวน์โหลดและสร้างบัญชี Metamask ฟรีได้[ที่นี่](https://metamask.io/download.html) เมื่อคุณสร้างบัญชี ให้ทำตามขั้นตอนเหล่านี้เพื่อตั้งค่าเครือข่าย Polygon PoS บนกระเป๋าสตางค์ของคุณ

1. เลือก**การตั้ง**ค่าจากเมนูแบบเลื่อนลงที่มุมขวาบนของกระเป๋าสตางค์ MetaMask ของคุณ
2. เลือก**เครือข่าย**จากเมนูไปทางซ้าย
3. เชื่อมต่อกระเป๋าสตางค์ของคุณไปยังเน็ตของ Mumbi โดยใช้พารามิเตอร์ต่อไปนี้:

**ชื่อเครือข่าย** Polygon Testbai

**ที่อยู่ RPC ใหม่:** https://polygon-umไบ.g.alchemy/v2/your-api-key:

**ChainID:** 80001

**สัญลักษณ์:** MATIC

**บล็อก Explorer URL** : https://mumby.polygonscan.com/


### เพิ่มMATIC การทดสอบของ Polygon {#add-polygon-mumbai-test-matic}

คุณจะต้องใช้โทเค็นสำหรับการทดสอบสองสามตัวเพื่อปรับใช้สัญญาอัจฉริยะของคุณไปยังเน็ตเวิร์ค Mumbaiเพื่อรับโทเค็นเน็ตไปที่ [Polygon Mumbai](https://faucet.polygon.technology/)**** เลือกโทเค็น **MATIC** และป้อนที่อยู่กระเป๋าสตางค์ Polygon ของคุณแล้วคลิก **Submit**เนื่องจากการจราจรของเครือข่าย อาจใช้เวลาสักครู่ในการได้รับโทเค็นสำหรับการทดสอบของคุณ

คุณยังสามารถใช้[ก๊อกสำหรับ Maumbai ฟรี](https://mumbaifaucet.com/?a=polygon-docs)ของ Alkeemy

![img](/img/alchemy/faucet.png)

คุณจะเห็นโทเค็น Testnet ในบัญชี MetaMask ของคุณไม่นานหลังจากนั้น

### ตรวจสอบค่าใช้จ่ายของกระเป๋าสตางค์ของคุณ {#check-your-wallet-balance}

เพื่อตรวจซ้ำว่าเรามียอดคงเหลือ เราจะสร้างคำขอ [eth\_getBalance](https://docs.alchemy.com/reference/eth-getbalance-polygon) โดยใช้ [ ซึ่งเป็นเครื่องมือ Composer ของ Alchemy](https://composer.alchemyapi.io/)เลือก **Polygon** เป็นเชน **Polygon Mumbi Polygon** เป็นเครือข่าย `eth_getBalance`เป็นวิธีการและป้อนที่อยู่ของคุณซึ่งจะส่งคืนจำนวน MATIC ในวอลเล็ตของเราสำรวจ[วิดีโอนี้](https://youtu.be/r6sjRxBZJuU) เพื่อดูคำแนะนำวิธีใช้เครื่องมือ Composer

![img](/img/alchemy/get-balance.png)

หลังจากที่คุณป้อนที่อยู่บัญชี MetaMask และคลิกร้องขอ**ของ Send** คุณควรรีบการตอบกลับที่ดูเหมือนนี้:

```json
{ "jsonrpc": "2.0", "id": 0, "result": "0xde0b6b3a7640000" }
```

:::info

ผลลัพธ์นี้มีหน่วยเป็น Wei ไม่ใช่ ETH Wei คือธนบัตรที่เล็กที่สุดของ Ether.การแปลงจาก Wei เป็น Ether คือ: 1 Ether = 10^18 Weiดังนั้น หากเราแปลง "0xde0b6b3a7640000" เป็นเลขทศนิยม เราก็จะได้รับค่า 1\*10^18 ซึ่งเท่ากับ 1 ETHซึ่งสามารถแม็ปให้เป็น 1 MATIC ตามหน่วยเงิน

:::

### เริ่มโครงการของคุณ {#initialize-your-project}

ก่อนอื่น เราจะต้องสร้างโฟลเดอร์สำหรับโปรเจกต์ของเราไปที่[บรรทัดคำสั่ง](https://www.computerhope.com/jargon/c/commandi.htm)ของคุณ และพิมพ์:

```bash
mkdir hello-world
cd hello-world
```

ตอนนี้เรากำลังอยู่ในโฟลเดอร์โครงการของเรา เราจะใช้`npm init`เพื่อเริ่มโครงการนี้หากคุณยังไม่ได้ติดตั้ง npm ปฏิบัติตาม[คำแนะนำเหล่านี้](https://docs.alchemyapi.io/alchemy/guides/alchemy-for-macs#1-install-nodejs-and-npm) (เราจะต้องใช้ Node.js เช่นกัน ขอให้ดาวน์โหลดมาด้วย)

```bash
npm init # (or npm init --yes)
```

คุณจะตอบคำถามการติดตั้งอย่างไรก็ได้ โดยเรามีตัวอย่างเพื่อเป็นข้อมูลอ้างอิงดังนี้:

```
package name: (hello-world)
version: (1.0.0)
description: hello world smart contract
entry point: (index.js)
test command:
git repository:
keywords:
author:
license: (ISC)

About to write to /Users/.../.../.../hello-world/package.json:

{   
   "name": "hello-world",
   "version": "1.0.0",
   "description": "hello world smart contract",
   "main": "index.js",
   "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
   },
   "author": "",
   "license": "ISC"
}
```

อนุมัติ package.json แล้วเราก็จะดำเนินการต่อไปได้

### ดาวน์โหลด [Hardhat](https://hardhat.org/getting-started/#overview)

Hardhat เป็นสภาพแวดล้อมการพัฒนาในการคอมไพล์ ปรับใช้ ทดสอบ และแก้จุดบกพร่องของซอฟต์แวร์ Ethereum ของคุณโดยช่วยเหลือนักพัฒนาเมื่อสร้างสัญญาอัจฉริยะและ DApp ภายในเครื่อง ก่อนที่จะปรับใช้กับเชนที่ใช้งานจริง

ในโครงการของเรา`hello-world`, รัน:

```bash
npm install --save-dev hardhat
```

สำรวจหน้านี้เพื่อดูรายละเอียดเพิ่มเติมเกี่ยวกับ[คำแนะนำการติดตั้ง](https://hardhat.org/getting-started/#overview)

### สร้างโครงการฮาร์ดแฮต {#create-hardhat-project}

ในโฟลเดอร์`hello-world`โครงการของเรา, รัน:

```bash
npx hardhat
```

คุณควรเห็นข้อความและตัวเลือกการต้อนรับเพื่อเลือกสิ่งที่คุณต้องการทำเลือก**สร้างฮาร์ดแฮตว่าง.config.js**:

```bash
888    888                      888 888               888
888    888                      888 888               888
888    888                      888 888               888
8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888
888    888     "88b 888P"  d88" 888 888 "88b     "88b 888
888    888 .d888888 888    888  888 888  888 .d888888 888
888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.
888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888

👷 Welcome to Hardhat v2.0.11 👷‍

What do you want to do? …
Create a sample project
❯ Create an empty hardhat.config.js
Quit
```

ซึ่งจะทำให้`hardhat.config.js`ไฟล์สำหรับเรา ซึ่งก็คือที่ที่เราจะกำหนดการตั้งค่าทั้งหมดสำหรับโครงการของเรา

### เพิ่มโฟลเดอร์โครงการ {#add-project-folders}

เพื่อให้โครงการจัดระเบียบเราจะสร้างโฟลเดอร์ใหม่สองเล่มนำไปยังไดเรกทอรีรากของ`hello-world`โครงการของคุณในบรรทัดและประเภทของคำสั่งของคุณ:

```bash
mkdir contracts
mkdir scripts
```

* `contracts/` คือตำแหน่งที่เราจะเก็บไฟล์โค้ดของสัญญาอัจฉริยะ Hello World ของเรา
* `scripts/` คือตำแหน่งที่เราจะเก็บสคริปต์เพื่อปรับใช้และโต้ตอบกับสัญญาของเรา

### เขียนสัญญา {#write-the-contract}

เปิดโครงการ**ฮัลโหลเวิลด์**ในเครื่องมือแก้ไขโปรดของคุณ เช่น [VSCode](https://code.visualstudio.com)สัญญาอัจฉริยะเขียนด้วยภาษามือที่เรียกว่า Solidity ซึ่งเป็นสิ่งที่เราจะใช้ในการเขียน`HelloWorld.sol`สัญญาอัจฉริยะของเรา

1. นำไปยัง`contracts`โฟลเดอร์ และสร้างไฟล์ใหม่ที่เรียกว่า`HelloWorld.sol`
2. ด้านล่างนี้เป็นตัวอย่างสัญญาอัจฉริยะ Hello World จาก [Ethereum Foundation](https://ethereum.org/en/) ที่เราจะใช้สำหรับบทช่วยสอนนี้คัดลอกเนื้อหาด้านล่างนี้และวางลงในไฟล์ `HelloWorld.sol` ของคุณ และจะต้องอ่านความคิดเห็นเพื่อให้เข้าใจว่าสัญญานี้ทำอะไร:

```solidity
// SPDX-License-Identifier: None

// Specifies the version of Solidity, using semantic versioning.
// Learn more: https://solidity.readthedocs.io/en/v0.5.10/layout-of-source-files.html#pragma
pragma solidity >=0.8.9;

// Defines a contract named `HelloWorld`.
// A contract is a collection of functions and data (its state). Once deployed, a contract resides at a specific address on the Ethereum blockchain. Learn more: https://solidity.readthedocs.io/en/v0.5.10/structure-of-a-contract.html
contract HelloWorld {

   //Emitted when update function is called
   //Smart contract events are a way for your contract to communicate that something happened on the blockchain to your app front-end, which can be 'listening' for certain events and take action when they happen.
   event UpdatedMessages(string oldStr, string newStr);

   // Declares a state variable `message` of type `string`.
   // State variables are variables whose values are permanently stored in contract storage. The keyword `public` makes variables accessible from outside a contract and creates a function that other contracts or clients can call to access the value.
   string public message;

   // Similar to many class-based object-oriented languages, a constructor is a special function that is only executed upon contract creation.
   // Constructors are used to initialize the contract's data. Learn more:https://solidity.readthedocs.io/en/v0.5.10/contracts.html#constructors
   constructor(string memory initMessage) {

      // Accepts a string argument `initMessage` and sets the value into the contract's `message` storage variable).
      message = initMessage;
   }

   // A public function that accepts a string argument and updates the `message` storage variable.
   function update(string memory newMessage) public {
      string memory oldMsg = message;
      message = newMessage;
      emit UpdatedMessages(oldMsg, newMessage);
   }
}
```

นี่คือสัญญาอัจฉริยะที่ง่ายมาก ซึ่งจัดเก็บข้อความเมื่อสร้างขึ้น และสามารถอัปเดตได้โดยเรียกฟังก์ชัน `update`

### เชื่อมต่อกับ MetaMask และ Alchemy {#connect-with-metamask-alchemy}

เราได้สร้างวอลเล็ต Metamask, บัญชี Alchemy และเขียนสัญญาอัจฉริยะของเราแล้ว ตอนนี้ก็ถึงเวลาเชื่อมต่อทั้งสามอย่างนี้แล้ว

ทุกๆ ธุรกรรมที่ส่งจากวอลเล็ตเสมือนของคุณต้องใช้ลายเซ็นโดยใช้คีย์ส่วนตัวที่ไม่ซ้ำกันของคุณเพื่อจัดให้โปรแกรมของเรามีสิทธิ์การใช้งานนี้ เราสามารถจัดเก็บคีย์ส่วนตัวของเรา (และคีย์ Alchemy API) ได้อย่างปลอดภัยในไฟล์แวดล้อม

ก่อนอื่น ติดตั้งแพ็คเกจ dotenv ในไดเรกทอรีโปรเจกต์ของคุณ:

```bash
npm install dotenv --save
```

จากนั้นสร้าง`.env`ไฟล์ในไดเรกทอรีรากของโครงการของเรา และเพิ่มคีย์ส่วนตัวและ Altop Alchemy API ไปยังที่อยู่

:::warning คำเตือน

ต้องตั้งชื่อไฟล์สิ่งแวดล้อมของคุณให้ตั้งชื่อ`.env`หรือจะไม่รับการยอมรับว่าเป็นไฟล์สภาพแวดล้อมห้ามตั้งชื่อว่า `process.env` หรือ `.env-custom` หรือชื่ออื่นนอกเหนือจากนี้

นอกจากนี้ หากคุณกำลังใช้ระบบควบคุมแบบเช่น git เพื่อจัดการโครงการของคุณ **โปรดอย่า**ติดตาม`.env`ไฟล์เพิ่ม`.env`เข้าไปใน`.gitignore`ไฟล์ของคุณเพื่อหลีกเลี่ยงการเผยแพร่ข้อมูลลับ

:::

* ปฏิบัติตาม[คำแนะนำเหล่านี้](https://metamask.zendesk.com/hc/en-us/articles/360015289632-How-to-Export-an-Account-Private-Key) เพื่อส่งออกคีย์ส่วนตัวของคุณ
* เพื่อรับคีย์เอปต์ Alchemy HTTP ของคุณ (RPC URL) นำทาง ไปยังแอพ**เวิลด์**ของคุณบนแดชบอร์ดของบัญชีและคลิก**คีย์ดูบน**มุมขวาด้านบน

`.env` ของคุณควรมีลักษณะเช่นนี้:

```
API_URL = "https://polygon-mumbai.g.alchemy.com/v2/your-api-key"
PRIVATE_KEY = "your-metamask-private-key"
```

เพื่อเชื่อมต่อเหล่านี้กับโค้ดของเรา เราจะอ้างอิงตัวแปรเหล่านี้ใน`hardhat.config.js`ไฟล์ของเราในภายหลังในบทเรียนนี้

### ติดตั้ง Ethers.js {#install-ethers-js}

Ethers.js เป็นไลบรารีที่ทำให้โต้ตอบและสร้างคำขอกับ Ethereum ได้ง่ายขึ้น โดยการ Wrap [เมธอด JSON-RPC มาตรฐาน](https://docs.alchemyapi.io/alchemy/documentation/alchemy-api-reference/json-rpc)กับเมธอดที่ใช้งานง่ายกว่า

Hardhat ช่วยให้ผสานการทำงาน[ปลั๊กอิน](https://hardhat.org/plugins/)ได้ง่าย เพื่อเครื่องมือเพิ่มเติมและการทำงานที่มากขึ้นเราจะใช้ประโยชน์จาก[ปลั๊กอิน Ethers](https://hardhat.org/plugins/nomiclabs-hardhat-ethers.html) เพื่อการปรับใช้สัญญา[Ethers.js](https://github.com/ethers-io/ethers.js/) มีเมธอดในการปรับใช้สัญญาที่มีประโยชน์

ในไดเรกทอรีโครงการของคุณประเภท:

```bash
npm install --save-dev @nomiclabs/hardhat-ethers "ethers@^5.0.0"
```

เราจะใช้ Ether ใน `hardhat.config.js` ของเราด้วยในขั้นตอนต่อไป

### อัปเดตฮาร์ดแฮต..config.js {#update-hardhat-config-js}

เราได้เพิ่มจำนวนที่อยู่อาศัยและปลั๊กอินและปลั๊กอินหลายอย่างแล้วตอนนี้เราต้องอัปเดต`hardhat.config.js`เพื่อให้โครงการของเราจะรับสถานะการเชื่อมต่อเหล่านั้น

อัปเดต `hardhat.config.js` ของคุณเพื่อให้มีลักษณะดังนี้:

```javascript
/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.9",
   defaultNetwork: "polygon_mumbai",
   networks: {
      hardhat: {},
      polygon_mumbai: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
}
```

### รวมสัญญาอัจฉริยะของเรา {#compile-our-smart-contract}

เพื่อให้แน่ใจว่าทุกสิ่งทุกอย่างจะใช้งานได้ เราจะมาคอมไฟล์สัญญาของเรางาน `compile` เป็นงาน Hardhat ในตัวงานหนึ่ง

เรียกใช้รายการต่อไปนี้จากบรรทัดคำสั่ง:

```bash
npx hardhat compile
```

คุณอาจได้รับคำเตือน`SPDX license identifier not provided in source file`เกี่ยวกับ แต่โปรแกรมอาจจะยังใช้งานได้ดีหากไม่เป็นเช่นนั้น คุณสามารถส่งข้อความใน [Alchemy Discord](https://discord.gg/u72VCg3) ได้เสมอ

### เขียนสคริปต์ที่ปรับใช้ของเรา {#write-our-deploy-script}

ตอนนี้ก็ได้เขียนสัญญาของเราแล้ว และไฟล์การกำหนดค่าพร้อมใช้งานแล้ว ถึงเวลาแล้วที่จะเขียนสคริปต์การปรับใช้สัญญา

ไปที่โฟลเดอร์ `scripts/` และสร้างไฟล์ใหม่ที่ชื่อ `deploy.js` โดยเพิ่มเนื้อหาต่อไปนี้ลงในไฟล์:

```javascript
async function main() {
   const HelloWorld = await ethers.getContractFactory("HelloWorld");

   // Start deployment, returning a promise that resolves to a contract object
   const hello_world = await HelloWorld.deploy("Hello World!");   
   console.log("Contract deployed to address:", hello_world.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
```

เราได้นำคำอธิบายของทีม Hardhat จาก[บทช่วยสอนเรื่องสัญญา](https://hardhat.org/tutorial/testing-contracts.html#writing-tests)ที่นี่มาใช้ เพื่อบอกว่าโค้ดแต่ละบรรทัดเหล่านี้ทำอะไร

```javascript
const HelloWorld = await ethers.getContractFactory("HelloWorld");
```

`ContractFactory` ใน ethers.js เป็นแนวคิดที่ใช้เพื่อปรับใช้สัญญาอัจฉริยะใหม่ ดังนั้น `HelloWorld` ที่นี่จึงเป็น[โรงงาน](https://en.wikipedia.org/wiki/Factory\_\(object-oriented\_programming\))สำหรับอินสแตนซ์ของสัญญา Hello World ของเราเมื่อใช้ปลั๊กอิน `hardhat-ethers` `ContractFactory` และ `Contract`อินสแตนซ์จะได้รับการเชื่อมต่อกับผู้ลงนาม (เจ้าของ) รายแรก ตามค่าเริ่มต้น

```javascript
const hello_world = await HelloWorld.deploy();
```

การเรียก `deploy()` บน `ContractFactory` จะเริ่มต้นการปรับใช้ และส่งคืน `Promise` ที่แยกวิเคราะห์อ็อบเจ็กต์ `Contract`นี่คืออ็อบเจ็กต์ที่มีเมธอดสำหรับแต่ละฟังก์ชันของสัญญาอัจฉริยะของเรา

### อัพโหลดสัญญาอัจฉริยะของเรา {#deploy-our-smart-contract}

ไปที่บรรทัดคำสั่ง และเรียกใช้:

```bash
npx hardhat run scripts/deploy.js --network polygon_mumbai
```

คุณควรเห็นบางสิ่งเช่นนี้:

```bash
Contract deployed to address: 0x3d94af870ED272Cd5370e4135F9B2Bd0e311d65D
```

หากเราไปที่[ผู้สำรวจ Polygon Mumbi](https://mumbai.polygonscan.com/) และค้นหาที่อยู่สัญญาของเรา เราควรสามารถดูได้ว่ามีการส่งการใช้งานเรียบร้อยแล้ว

`From`ที่อยู่ควรจะตรงกับที่อยู่บัญชี MetaMask ของคุณ และ`To`ที่อยู่จะบอกว่า**การ**สร้างสัญญาแต่ถ้าเราคลิกเข้าธุรกรรมแล้ว เราจะเห็นที่อยู่สัญญาของเราใน`To`สนาม

![img](/img/alchemy/polygon-scan.png)

### ตรวจสอบสัญญา {#verify-the-contract}

Alchemy ให้[สำรวจ](https://dashboard.alchemyapi.io/explorer) ซึ่งคุณสามารถค้นหาข้อมูลเกี่ยวกับวิธีการที่ใช้งานพร้อมกับสัญญาอัจฉริยะ เช่น เวลาตอบสนอง สถานะ HTTP รหัสข้อผิดพลาดในหมู่ผู้อื่นซึ่งเป็นสภาพแวดล้อมที่ดีในการตรวจยืนยันสัญญาของคุณ และตรวจสอบว่าธุรกรรมผ่านหรือไม่

![img](/img/alchemy/calls.png)

**ขอแสดงความยินดี คุณแค่ส่งสัญญาอัจฉริยะไปยังเครือข่าย Magon ของ Polygon**

## แหล่งข้อมูลเพิ่มเติม {#additional-resources}

- [วิธีพัฒนาสัญญาอัจฉริยะ](https://docs.alchemy.com/docs/how-to-develop-an-nft-smart-contract-erc721-with-alchemy) NFT - Alchemy มีบทเรียนที่เขียนด้วยวิดีโอ Youtube ในหัวข้อนี้นี่คือสัปดาห์ 1 **ของโร้ด** 10 สัปดาห์ฟรีไปยังซีรี่ส์ Web3 dev
- คู่มือนักพัฒนา[ของ Polygon API QuickStart](https://docs.alchemy.com/reference/polygon-api-quickstart) – คู่มือการพัฒนา Alchemy เพื่อเพิ่มขึ้นและทำงานด้วย Polygon
