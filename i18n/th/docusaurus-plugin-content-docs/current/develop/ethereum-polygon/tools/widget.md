---
id: widget
title: วิดเจ็ต "วอลเล็ต"
sidebar_label: Wallet Widget
description: "เครื่องมือ UI เพื่อดำเนินการธุรกรรมบริดจ์"
keywords:
  - docs
  - matic
image: https://matic.network/banners/matic-network-16x9.png
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

วิดเจ็ต "วอลเล็ต" เป็นเครื่องมือ UI ที่สามารถฝังลงในแอปพลิเคชันบนเว็บใดก็ได้สำหรับการทำธุรกรรมบริดจ์ - ฝากและถอน

มีการระบุทุกวิดเจ็ตไว้ด้วยชื่อที่ไม่ซ้ำกัน ซึ่งคุณสามารถรับได้จาก[แดชบอร์ดควิดเจ็ต](https://wallet.polygon.technology/widget-dashboard)

### แดชบอร์ดของวิดเจ็ต {#widget-dashboard}

สร้างวิดเจ็ตจากหน้าแดชบอร์ดวิดเจ็ตในแอปพลิเคชันวอลเล็ตได้โดยช่วยให้ผู้ใช้สร้างวิดเจ็ตใหม่พร้อมตัวเลือกที่ปรับแต่งได้

เมื่อสร้างวิดเจ็ตแล้ว คุณสามารถคัดลอกส่วนย่อยของโค้ดและเพิ่มลงในแอปพลิเคชันของคุณหรือใช้ชื่อวิดเจ็ตและกำหนดค่าด้วยตัวเองได้

ลิงก์ไปยังแดชบอร์ดวิดเจ็ตมีดังนี้ -

* Mainnet - https://wallet.polygon.technology/widget-dashboard
* Testnet - https://wallet-dev.polygon.technology/widget-dashboard

## ติดตั้ง {#install}

ส่งออกวิดเจ็ตเป็นไลบรารี javascript และพร้อมใช้งานในรูปแบบแพ็คเกจ npm

```bash
npm i @maticnetwork/wallet-widget
```

## ตัวอย่าง {#examples}

เราได้สร้างตัวอย่างสำหรับเฟรมเวิร์กและเครื่องมือต่างๆ เพื่อช่วยคุณในการพัฒนาตัวอย่างทั้งหมดมีอยู่ที่ - [https://github.com/maticnetwork/wallet-widget-example](https://github.com/maticnetwork/wallet-widget-example)

## วิธีใช้ {#how-to-use}
### มี target {#with-target}

พิจารณาว่าคุณมีปุ่มในแอปและต้องการแสดงวิดเจ็ตเมื่อคลิกปุ่มนั้น -

```html
<button id="btnMaticWidget"></btn>
```

```javascript
import { Widget } from "@maticnetwork/wallet-widget";

var widget = new Widget({
    appName: "<widget name>", //widget name from dashboard
    target: '#btnMaticWidget', // element selector for showing widget on click
    network: 'mainnet' // network to be used - testnet or mainnet
});
```

สร้างวิดเจ็ตเมื่อใดก็ตามที่คุณพร้อมขอแนะนำให้เรียกฟังก์ชัน create หลังจากโหลดเอกสารแล้ว

```javascript
await widget.create();
```
มีการสร้างวิดเจ็ตแล้ว ตอนนี้ ให้คลิกปุ่มและวิดเจ็ตจะปรากฏขึ้น

### ไม่มี target {#without-target}

```javascript
import { Widget } from "@maticnetwork/wallet-widget";

var widget = new Widget({
    appName: "<widget name>", //widget name from dashboard
    network: 'mainnet' // network to be used - testnet or mainnet
});

await widget.create();
```

ในตอนนี้ มีการสร้างวิดเจ็ตแล้ว แต่เพื่อแสดงวิดเจ็ต - คุณจะต้องเรียก `show` API

```
widget.show();
```

ในทำนองเดียวกัน คุณสามารถซ่อนวิดเจ็ตโดยเรียก `hide` API

```
widget.hide();
```

### หมายเหตุสำคัญ 👉 {#important-note}

1. ตามเครือข่าย "Testnet" หรือ "Mainnet" คุณต้องสร้างแอปบนแดชบอร์ดที่เกี่ยวข้องแนะนำให้สร้างแอปที่มีชื่อเดียวกันทั้งบน Testnet และ Mainnet เพื่อไม่ให้เกิดปัญหาขณะเปลี่ยนเครือข่าย

2. วิดเจ็ต "วอลเล็ต" คือ UI Library และจะดูแตกต่างไปรวมถึงอาจมีปัญหาบางอย่างบนเว็บไซต์อื่น เช่น สี การตอบสนอง ฯลฯ ดังนั้นเผื่อเวลาทำการทดสอบและปรับแต่งหากต้องการความช่วยเหลือ โปรดติดต่อ[ทีมสนับสนุน](https://support.polygon.technology/)

3. วิดเจ็ต "วอลเล็ต" เป็นแบบเต็มหน้าจอในอุปกรณ์มือถือ แต่คุณสามารถปรับแต่งได้โดยการกำหนดค่า `style`

## การปรับแต่ง {#configuration}

ทำการกำหนดค่าได้ในตัวสร้างวิดเจ็ต

## การกำหนดค่าที่ใช้ได้คือ {#available-configuration-are}

- **target** : string - ตัวเลือก CSS สำหรับแสดงวิดเจ็ตเมื่อคลิกองค์ประกอบตัวอย่างเช่น "#btnMaticWidget" จะเป็นเป้าหมายในโค้ดด้านล่าง

```javascript
<button id="btnMaticWidget">Matic widget</button>
```

- **network** : string - เครือข่ายที่จะใช้มีสองตัวเลือก คือ "Testnet" หรือ "Mainnet"
- **width** : number - ความกว้างของวิดเจ็ต
- **height** : number - ความสูงของวิดเจ็ต
- **autoShowTime** : number - แสดงวิดเจ็ตโดยอัตโนมัติหลังจากเวลาที่กำหนด หน่วยเป็นมิลลิวินาที
- **appName** : string - ชื่อแอปของคุณ ซึ่งสามารถเรียกคืนได้บนแดชบอร์ดวิดเจ็ต
- **position** : string - ตั้งค่าตำแหน่งของวิดเจ็ตตัวเลือกที่มีอยู่คือ -
    - center
    - bottom-right
    - bottom-left
- **amount** : string - เติมจำนวนในกล่องข้อความไว้ล่วงหน้า
- **page** : string - เลือกหน้าตัวเลือกที่มีอยู่คือ - `withdraw`, `deposit`
- **overlay** : boolean - แสดงรายการซ้อนทับเมื่อเปิดวิดเจ็ตค่าเริ่มต้นคือ false
- **style** : object - ใช้สไตล์ CSS บางอย่างกับวิดเจ็ต

```
var widget = new MaticWidget({
    appName: "<your app id>", //appName from dashboard
    target: '#btnMaticWidget', // element selector for showing widget on click
    network: 'testnet' // network to be used - testnet or mainnet,
    style:{
      color:'red'
    }
});
```

## อีเวนต์ {#events}

วิดเจ็ตจะส่งอีเวนต์บางอย่างที่สามารถนำไปใช้เพื่อให้รู้ว่าเกิดอะไรขึ้นภายในแอปพลิเคชัน

### สมัครติดตามอีเวนต์ {#subscribe-to-events}

```javascript
widget.on('load',()=>{
  console.log('widget is loaded');
})
```

### ยกเลิกการสมัครติดตามอีเวนต์ {#unsubscribe-to-events}

```javascript
widget.off('load',<callback>)
```

> Callback ควรเหมือนกับรายการที่ใช้ในการสมัครติดตามดังนั้นการเก็บ callback ไว้เป็นตัวแปรจึงเป็นทางเลือกที่ดีกว่า`

## รายการอีเวนต์: {#list-of-events}

- **load** - โหลดวิดเจ็ต
- **close** - ปิดวิดเจ็ต
- **approveInit** - เริ่มต้นธุรกรรมการอนุมัติแล้ว
- **approveComplete** - เสร็จสิ้นธุรกรรมการอนุมัติแล้ว
- **approveError** - ธุรกรรมการอนุมัติล้มเหลว เนื่องจากข้อผิดพลาดบางอย่าง หรือผู้ใช้ปฏิเสธธุรกรรมบน Metamask
- **depositInit** - เริ่มต้นธุรกรรมฝากแล้ว
- **depositComplete** - เสร็จสิ้นธุรกรรมฝากแล้ว
- **depositError** - ธุรกรรมฝากล้มเหลว เนื่องจากข้อผิดพลาดบางอย่าง หรือผู้ใช้ปฏิเสธธุรกรรมการทำให้การฝากเสร็จสิ้นใน Metamask
- **burnInit** - เริ่มต้นธุรกรรมการเบิร์นสำหรับการถอนแล้ว
- **burnComplete** - เสร็จสิ้นธุรกรรมการเบิร์นสำหรับการถอนแล้ว
- **confirmWithdrawInit** - การถอนผ่านเช็คพอยต์ และเริ่มต้นธุรกรรมการยืนยันแล้ว
- **confirmWithdrawComplete** - เสร็จสิ้นธุรกรรมการยืนยันการถอนแล้ว
- **confirmWithdrawError** - ธุรกรรมยืนยันการถอนล้มเหลว เนื่องจากข้อผิดพลาดบางอย่างหรือผู้ใช้ปฏิเสธธุรกรรมการยืนยันการถอนใน Metamask
- **exitInit** - เริ่มต้นธุรกรรมการออกจากการถอนแล้ว
- **exitComplete** - เสร็จสิ้นธุรกรรมการออกจากการถอนแล้ว
- **exitError** - ธุรกรรมการออกจากการถอนล้มเหลว เนื่องจากข้อผิดพลาดบางอย่างหรือผู้ใช้ปฏิเสธธุรกรรมการออกจากการถอนใน Metamask

## API {#apis}

- **show** -
แสดงวิดเจ็ต

```javascript
widget.show()
```

- **hide** -
ซ่อนวิดเจ็ต

```javascript
widget.hide()
```

- **on** -สมัครติดตามอีเวนต์

```javascript
widget.on('<event name>', callback)
```

- **off** -ยกเลิกการสมัครติดตามอีเวนต์

```javascript
widget.off('<event name>', callback)
```
