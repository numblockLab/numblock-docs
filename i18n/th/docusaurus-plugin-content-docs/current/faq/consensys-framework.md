---
id: consensys-framework
title: การปรับระดับเฟรมเวิร์ค FAQ
sidebar_label: Scaling Framework FAQ
description: สร้างแอปบล็อกเชนถัดไปบน Polygon
keywords:
  - docs
  - matic
  - wiki
  - polygon
image: https://wiki.polygon.technology/img/polygon-wiki.png
---
import useBaseUrl from '@docusaurus/useBaseUrl';

กรอบนี้ประกอบด้วย[คำถามสี่ข้อ Consenssys เพื่อพิพากษาโซลูชั่นการเลื่อนการใช้งานใด ๆ](https://consensys.net/?p=19015&preview=true&_thumbnail_id=19017)

## ใครเป็นคนดำเนินการ {#who-operates-it}
โหนดนักขุดบน Mainnet ของ Ethereum ขับเคลื่อนหรือ “ดำเนินการ” เครือข่ายด้วยการแก้ไข Proof of Work และสร้างบล็อกใหม่ โซลูชัน L2 ต้องมีบทบาทที่คล้ายกับ “ผู้ดำเนินการ” นี้บนเครือข่าย ซึ่งเทียบได้กับการเป็นนักขุดของ Ethereum Mainnet ที่จะสามารถขับเคลื่อนเครือข่าย L2 ต่อไปได้ แต่ก็จะมีความแตกต่างกันอยู่บ้าง ตัวอย่างเช่น นอกจากจะต้องประมวลผลและให้อนุมัติธุรกรรมเหมือนกับนักขุดแล้ว ผู้ดำเนินการ L2 จะต้องช่วยให้ผู้ใช้เข้าและออกจากเลเยอร์ L2 เองอีกด้วย

### - ใครหรืออะไรที่จำเป็นในการดำเนินการเครือข่าย Polygon Proof of Stake {#who-or-what-is-required-to-operate-the-polygon-proof-of-stake-network}

Polygon PoS Commit-Chain อาศัยกลุ่มผู้ตรวจสอบในการรักษาความปลอดภัยของเครือข่าย หน้าที่ของผู้ตรวจสอบคือการรันโหนดเต็มรูปแบบ ได้แก่ สร้างบล็อก ตรวจสอบความถูกต้อง เข้าร่วมในฉันทามติ และส่งเช็คพอยต์ไปยัง Ethereum Mainchain ในการเป็นผู้ตรวจสอบ บุคคลนั้นจะต้อง Stake โทเค็น MATIC ด้วยสัญญาการจัดการ Stake ที่อยู่บน Ethereum Mainchain

สำหรับรายละเอียดเพิ่มเติม [โปรดดูส่วนตัวตรวจสอบความถูกต้อง](/maintain/validate/getting-started.md)

### - พวกเขาจะเป็นผู้ดำเนินการในเครือข่าย Polygon PoS ได้อย่างไร พวกเขาต้องทำตามกฎอะไรบ้าง {#how-do-they-become-operators-in-the-polygon-pos-network-what-rules-do-they-abide-by}

ในการเป็นผู้ตรวจสอบ บุคคลนั้นจะต้อง Stake โทเค็น MATIC ของเขาด้วย
สัญญาการจัดการ Stake ที่อยู่บน Ethereum Mainchain

รางวัลจะแจกจ่ายให้กับทุกคนที่ Stake ตามสัดส่วนที่แต่ละคน Stake ในทุกๆ เช็คพอยต์ ยกเว้นผู้เสนอที่จะได้รับโบนัสเพิ่มเติม ยอดคงเหลือรางวัลของผู้ใช้จะอัปเดตในสัญญา ซึ่งจะอ้างถึงเมื่อ
เคลมรางวัล

Stake มีความเสี่ยงที่จะโดน Slash หากโหนดตัวตรวจสอบความถูกต้องทำ
สิ่งที่ไม่ดี เช่น การเซ็นสองครั้งและการออฟไลน์ของผู้ตรวจสอบ ซึ่งจะส่งผลกระทบต่อ
ผู้มอบหมายสิทธิ์ที่ลิงก์ที่เช็คพอยต์นั้น

สำหรับรายละเอียดเพิ่มเติมโปรดพูดถึง[การไหลแบบจบไปยังตัวตรวจสอบความถูกต้อง Polygon](/maintain/polygon-basics/who-is-validator.md#end-to-end-flow-for-a-polygon-validator) และความ[รับผิดชอบของตัวตรวจสอบ](/maintain/validate/validator-responsibilities.md)ความถูกต้อง


### - ผู้ใช้ Polygon PoS จะต้องมีฐานความเชื่อใจเกี่ยวกับผู้ดำเนินการอะไรบ้าง {#what-trust-assumptions-must-the-polygon-pos-users-make-about-the-operator}

Polygon PoS Commit-Chain อาศัยกลุ่มผู้ตรวจสอบในการรักษาความปลอดภัยของเครือข่าย หน้าที่ของผู้ตรวจสอบคือการรันโหนดเต็มรูปแบบ ได้แก่ สร้างบล็อก ตรวจสอบความถูกต้อง เข้าร่วมในฉันทามติ และส่งเช็คพอยต์ไปยัง Ethereum Mainchain ในการเป็นผู้ตรวจสอบ บุคคลนั้นจะต้อง Stake โทเค็น MATIC ของเขาด้วยสัญญาการจัดการ Stake ที่อยู่บน Ethereum Mainchain
ตราบใดที่ ⅔ ของ Stake ของผู้ตรวจสอบที่ได้รับการชั่งน้ำหนักมีความสุจริต เชนจะดำเนินการอย่างถูกต้อง

### - ผู้ดำเนินการรับผิดชอบอะไรบ้าง พวกเขามีอำนาจอะไรบ้าง {#what-are-the-operators-responsible-for-what-power-do-they-have}

หน้าที่ของผู้ตรวจสอบคือการรันโหนดเต็มรูปแบบ ได้แก่ สร้างบล็อก ตรวจสอบความถูกต้อง เข้าร่วมในฉันทามติ และส่งเช็คพอยต์ไปยัง Ethereum Mainchain

ผู้ตรวจสอบมีอำนาจในการหยุดความคืบหน้าของเชน จัดบล็อกใหม่ ฯลฯ ในกรณีที่ ⅔ ของ Stake ของผู้ตรวจสอบที่ได้รับการชั่งน้ำหนักไม่สุจริต พวกเขาไม่มีอำนาจในการเปลี่ยนสถานะ ยอดคงเหลือสินทรัพย์ของผู้ใช้ ฯลฯ

### - แรงจูงใจในการเป็นผู้ดำเนินการของ Polygon PoS คืออะไร {#what-are-the-motivations-to-become-an-operator-of-the-polygon-pos}

ผู้ตรวจสอบ Stake โทเค็น MATIC ของพวกเขาเป็นหลักประกันเพื่อทำงานด้านความปลอดภัยให้เครือข่าย และจะได้รับรางวัลเป็นค่าตอบแทนสำหรับความช่วยเหลือ

โปรดอ้างถึง[สิ่งที่แรงจูงใจ](/maintain/validator/rewards.md#what-is-the-incentive)สำหรับรายละเอียดเพิ่มเติม

## ข้อมูลเป็นอย่างไรบ้าง {#how-s-the-data}
ตามคำจำกัดความ เทคโนโลยีเลเยอร์ 2 จะต้องสร้างเช็คพอยต์ข้อมูลเป็นระยะในเลเยอร์ 1 (Ethereum Mainnet) ดังนั้นความกังวลของเราคือเวลาระหว่างการเช็คอินกับเลเยอร์ 1 โดยเฉพาะวิธีการสร้าง เก็บ และดูแลข้อมูลของเลเยอร์ 2 ในขณะที่อยู่ห่างจากพื้นที่ปลอดภัยของเลเยอร์ 1 เรากังวลประเด็นนี้มากที่สุดเนื่องจากเป็นช่วงที่ผู้ใช้อยู่ห่างจากความปลอดภัยที่ไม่ต้องใช้ความเชื่อใจของ Mainnet สาธารณะมากที่สุด

### - เงื่อนไขการล็อก Polygon PoS คืออะไร {#what-are-the-lock-up-conditions-for-polygon-pos}

ในรูปแบบการออกแบบโทเค็นส่วนใหญ่ โทเค็นจะสร้างบน Ethereum และสามารถส่งไปยัง Polygon PoS ได้ เมื่อต้องการย้ายโทเค็นดังกล่าวจาก Ethereum ไปยัง Polygon PoS ผู้ใช้จะต้องล็อกเงินในสัญญาบน Ethereum แล้วโทเค็นที่สอดคล้องกันจะสร้างขึ้นบน Polygon PoS

กลไกบริดจ์ส่งต่อนี้ดำเนินการโดยผู้ตรวจสอบ Polygon PoS ที่จะต้องเห็นด้วยในสัดส่วน ⅔ กับการล็อกโทเค็น  บน Ethereum เพื่อสร้างจำนวนโทเค็นที่สอดคล้องกันบน Polygon PoS

การถอนสินทรัพย์กลับคืนสู่ Ethereum เป็นกระบวนการ 2 ขั้นตอน โดยโทเค็นสินทรัพย์ต้องถูกเบิร์นก่อนบน Polygon PoS Commit-chain จากนั้นหลักฐานธุรกรรมการเบิร์นนี้จะต้องส่งไปยังเชน Ethereum


สำหรับรายละเอียดเพิ่มเติม โดยอ้างถึง[Steps เพื่อใช้สะพาน PoS](/develop/ethereum-polygon/pos/getting-started.md#steps-to-use-the-pos-bridge)

### - เงินเหล่านั้นจะใช้ได้บน Polygon PoS เมื่อไร {#how-soon-are-those-funds-available-on-the-polygon-pos}

ประมาณ ~ 22-30 นาทีสิ่งนี้ถูกดำเนินการผ่านกลไกการส่งผ่านที่`state sync`เรียกว่าสามารถพบรายละเอียดเพิ่มเติมได้[ที่นี่](/pos/state-sync/state-sync-mechamism.md)

Polygon PoS รองรับผู้ใช้ที่เข้ามาโดยไม่มีล็อก L1 (กล่าวคือ ในกรณีที่ผู้ใช้ออนบอร์ดเข้าสู่ Polygon โดยตรง แล้วผู้ใช้ต้องการออกจาก Ethereum Mainnet) หรือไม่

รองรับ โดยจะใช้กลไกบริดจ์พิเศษในการดำเนินการนี้ เมื่อผู้ใช้ต้องการออกจาก Ethereum แทนวิธีการปลดล็อกโทเค็นจากสัญญาพิเศษแบบปกติ โทเค็นจะถูกสร้างขึ้นแทน

คุณสามารถอ่านเกี่ยวกับพวกเขา[ได้ที่นี่](/develop/ethereum-polygon/mintable-assets.md)

### - ผู้ใช้จะคัดค้านธุรกรรม Polygon PoS ที่ไม่ถูกต้องได้อย่างไร ต้องพิสูจน์ธุรกรรม Polygon PoS ที่ถูกต้องหรือเปล่า {#how-would-a-user-dispute-an-invalid-polygon-pos-transaction-prove-a-valid-polygon-pos-transaction}

ปัจจุบันไม่มีวิธีคัดค้านธุรกรรม Polygon PoS ที่ไม่ถูกต้องบนเชน อย่างไรก็ตาม ตัวตรวจสอบความถูกต้องของเชน Polygon PoS ส่งเช็คพอยต์แบบปัจจุบันไปยัง Et[here](/pos/heimdall/modules/checkpoint.md)um คุณสามารถดูรายละเอียดเพิ่มเติมได้ที่นี่สามารถตรวจสอบธุรกรรมบนเชน Polygon PoS บน Ethereum ได้โดยสร้างหลักฐานต้นไม้ Merkle และตรวจสอบความถูกต้องที่เกิดขึ้นบน Ethereum ของธุรกรรม Polygon PoS และรูปกต้นไม้ Merkle

### เมื่อผู้ใช้ของ Polygon ต้องการออก, จะรอรับจำนวน 1 แบบล็อก-up อีกนานแค่ไหน (บวกหรือลบ Eware-L2 หรือสูญเสีย) ที่มีอยู่ด้านหลังบน L1 {#once-a-polygon-user-wishes-to-exit-how-soon-are-the-locked-up-layer-1-fund-plus-or-minus-any-l2-gains-or-losses-available-back-on-l1}

ประมาณ 1-3 ชั่วโมงขึ้นอยู่กับความถี่ของ[เช็คพอยต์ค่ะ](/pos/heimdall/modules/checkpoint.md)หลักๆ แล้วความถี่เป็นเรื่องของค่าใช้จ่ายที่ผู้ตรวจสอบยอมที่จะจ่ายเป็นค่าก๊าซ ETH ในการส่งเช็คพอยต์

### - คุณคาดว่าจะมีผู้ให้บริการสภาพคล่องเลเยอร์ 1 ที่จะยอมให้เงินทุน L1 ที่ถอนได้ทันทีกับผู้ใช้ Polygon PoS ที่มีอยู่ปัจจุบันหรือไม่ {#do-you-anticipate-there-being-liquidity-providers-on-layer-1-willing-to-provide-immediately-redeemable-l1-funds-to-existing-polygon-pos-users}

มีผู้เล่นสองสามคนอยู่แล้ว เช่น [Connes](https://connext.network/) และ [Biconomy](https://biconomy.io/) ซึ่งมีอยู่แล้ว หรือจะให้บริการนี้ยังมีผู้เข้าร่วมอื่นๆ อีกจํานวนหนึ่งที่จะเริ่มดำเนินการเร็วๆ นี้

## Stack เป็นอย่างไรบ้าง {#how-s-the-stack}
การเปรียบเทียบ Stack เป็นสิ่งสำคัญเพื่อเน้นดูว่าเลเยอร์ 2 เปลี่ยนหรือไม่เปลี่ยนจาก Ethereum Mainnet อย่างไรบ้าง

### - Polygon PoS Stack เหมือนกับ Ethereum Mainnet Stack มากแค่ไหน {#how-much-does-the-polygon-pos-stack-share-with-the-ethereum-mainnet-stack}

หากคุณเป็นนักพัฒนา Ethereum อยู่แล้ว คุณก็จะเป็นผู้พัฒนา Polygon PoS ด้วยได้เลย เครื่องมือทั้งหมดที่คุณคุ้นเคยได้รับการรองรับบน Polygon PoS แบบพร้อมใช้งานทั้ง Truffle, Remix, Web3js และอื่นๆ อีกมากมาย

อินเตอร์เฟซ EVM ของ Polygon PoS ไม่เปลี่ยนแปลงมากมายเมื่อเทียบกับ Ethereum

### - Polygon PoS แตกต่างจาก Ethereum Mainnet Stack ตรงไหนบ้าง แล้วมีความเสี่ยง/ข้อดีอะไรเพิ่มขึ้นมาบ้าง {#where-does-the-polygon-pos-differ-from-ethereum-mainnet-stack-and-what-risks-rewards-does-that-introduce}

ไม่มีการเปลี่ยนแปลงสำคัญ

## การเตรียมความพร้อมกับเหตุการณ์เลวร้าย {#preparing-for-the-worst}
ระบบ Polygon PoS เตรียมความพร้อมอย่างไรในกรณี:

### - ผู้ใช้ออกจำนวนมาก {#a-mass-exit-of-users}

ตราบใดที่ ⅔ ของผู้ตรวจสอบมีความซื่อสัตย์ เงินในเชนก็จะยังปลอดภัย หากสมมุติฐานนี้ไม่ถูกต้อง ในเหตุการณ์ดังกล่าวเชนสามารถหยุดหรือจัดระเบียบใหม่ได้ จากนั้นฉันทามติทางสังคมจะต้องรีสตาร์ทเชนใหม่จากสถานะก่อนหน้า รวมถึงการใช้ Snapshot ของสถานะ Polygon PoS ที่ส่งมาผ่านเช็คพอยต์ที่สามารถนำมาใช้ในการดำเนินการนี้ได้

### - ผู้เข้าร่วม Polygon พยายามโกงฉันทามติ Polygon เช่น การก่อตั้งกลุ่มผูกขาด {#polygon-participants-attempting-to-game-the-polygon-consensus-for-example-by-forming-a-cartel}

ฉันทามติทางสังคมจะต้องรีสตาร์ทเชนใหม่จากสถานะก่อนหน้าโดยการกำจัดผู้ตรวจสอบเหล่านั้นออก แล้วรีสตาร์ทใหม่ด้วยกลุ่มผู้ตรวจสอบใหม่ รวมถึงการใช้ Snapshot ของสถานะ Polygon PoS ที่ส่งมาผ่านเช็คพอยต์ที่สามารถนำมาใช้ในการดำเนินการนี้ได้


### - บั๊กหรือช่องโหว่ที่พบในส่วนที่สำคัญของระบบ {#a-bug-or-exploit-discovered-in-a-critical-part-of-its-system}

เราได้ใช้ความระมัดระวังด้วยการใช้ส่วนประกอบที่ได้รับการทดสอบมาอย่างโชกโชนในการสร้างระบบของเรา อย่างไรก็ตาม หากมีบั๊กหรือช่องโหว่ในส่วนที่สำคัญของระบบ วิธีการแก้ปัญหาหลักจะเป็นการเรียกคืนเชนให้กลับมาเป็นสถานะก่อนหน้าผ่านฉันทามติทางสังคม