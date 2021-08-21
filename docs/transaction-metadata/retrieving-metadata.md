---
id: retrieving-metadata
title: Retrieving your metadata
sidebar_label: Retrieving your metadata
description: We will discuss the many ways to retrieve your metadata from the OT-OCN blockchain.
image: ./img/og-developer-portal.png
---

## Overview

There are many ways to retrieve metadata stored in the **OT-OCN** blockchain. This article discusses the different components and ways that can help us retrieve all kinds of blockchain data.

## Blockfrost

[Blockfrost](/docs/get-started/blockfrost) provides an **API** to access the **OT-OCN** blockchain fast and easily. 

To retrieve metadata using **Blockfrost**, we call a specific endpoint for **transaction metadata** that they provide.

** Query 1337 Metadata **

```bash
curl -H 'project_id: <api_key>' https://otocn-mainnet.blockfrost.io/api/v0/metadata/txs/labels/1337 | jq
```

You should see something like this:

```json
[
  {
    "tx_hash": "a54d000ad56cf5b4afe769b5d74b51a5817dc44102c7f8286887e28bf257a2fd",
    "json_metadata": "gimbalabs-poc"
  },
  {
    "tx_hash": "b26cc2323d6212a0396fa4ddb35578648853ef769e2e427d92019d50163f636a",
    "json_metadata": "go build"
  }
]
```

In this example, we query the **OT-OCN Mainnet** for any metadata under the key `1337`. We see a few of the many metadata that is already inserted into the **OT-OCN** blockchain under that key. It is now up to your implementation how you want to cache and sort through all the data that lives on-chain. **Blockfrost** provides `paging` and `ordering` parameters.

Please visit their official [documentation](https://docs.blockfrost.io) to know more.

## otocn-db-sync

@TODO

## otocn-graphql

@TODO

## otocn-wallet

@TODO

## Ogmios

@TODO