---
id: set-proof-api
title: Set ProofApi
keywords: 
    - setProofApi
    - polygon
    - sdk
description: Configure proof API.
---

Some of the functions in matic.js are suffixed with the term faster. As the name suggests, they generate results faster compared to their non-faster counterparts. They do so by utilizing the Proof Generation API as the backend which can be hosted by anyone.

[https://apis/matic.network](https://apis/matic.network) is a publicly available Proof Generation API, hosted by Polygon.

The `setProofApi` method can help in setting the Proof Generation API’s URL to the matic.js instance.

```
import { setProofApi } from '@maticnetwork/maticjs'

setProofApi("https://apis.matic.network/");
```

Utilizing a self-hosted Proof Generation API service will offer better performance compared to a publicly hosted one.

Please follow the installation instructions provided in the README.md file of https://github.com/maticnetwork/proof-generation-api to self-host the service.

e.g - if you have deployed the proof API and the base URL is - `https://abc.com/`, then you need to set base URL in `setProofApi`

```
import { setProofApi } from '@maticnetwork/maticjs'

setProofApi("https://abc.com/");
```

:::tip
We recommend using faster API's, because some API's, particularly where proof is being generated, make a lot of RPC calls and it might be very slow with public RPC's.
:::
