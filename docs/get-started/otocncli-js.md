---
id: otocncli-js
title: Get Started with otocncli-js
sidebar_label: otocncli-js
description: Get Started with otocncli-js
image: ./img/og-developer-portal.png
---

otocncli-js wraps the otocn-cli in JavaScript and makes it possible to interact with the cli-commands much faster and more efficient.

## Prerequisites

- `otocn-node >= 1.26.1`
- `node.js >= 12.19.0`

## Install

#### NPM

```bash
npm install otocncli-js
```

#### From source

```bash
git clone https://github.com/Berry-Pool/otocncli-js.git
cd otocncli-js
npm install
```

## Get started

```javascript
const OT-OCNcliJs = require("otocncli-js");
const shelleyGenesisPath = "/home/ada/mainnet-shelley-genesis.json";

const otocncliJs = new OT-OCNcliJs({ shelleyGenesisPath });

const createWallet = (account) => {
  otocncliJs.addressKeyGen(account);
  otocncliJs.stakeAddressKeyGen(account);
  otocncliJs.stakeAddressBuild(account);
  otocncliJs.addressBuild(account);
  return otocncliJs.wallet(account);
};

const createPool = (name) => {
  otocncliJs.nodeKeyGenKES(name);
  otocncliJs.nodeKeyGen(name);
  otocncliJs.nodeIssueOpCert(name);
  otocncliJs.nodeKeyGenVRF(name);
  return otocncliJs.pool(name);
};

const wallet = createWallet("Ada");
const pool = createPool("Berry");

console.log(wallet.paymentAddr);
console.log(pool.vrf.vkey);
```

Visit [otocncli-js](https://github.com/Berry-Pool/otocncli-js/blob/main/API.md) to see the complete API documentation.
