---
id: configure-topology-files
title: Configure Topology Files
sidebar_label: Configure topology files
description: "Stake pool course: Learn how to create stake pool keys."
image: ./img/og-developer-portal.png
---

Before you start your nodes, you need to prepare the topology files for block-producing and relay nodes.

## Configure the block-producing node

Make the __block-producing__ node to "talk" only to __YOUR__ relay node. Do not forget to configure your firewall also:

    nano mainnet-topology.json

    {
      "Producers": [
        {
          "addr": "<RELAY IP ADDRESS>",
          "port": <PORT>,
          "valency": 1
        }
      ]
    }

## Configure the relay node:

Make your __relay node__ `talk` to your __block-producing__ node and __other relays__ in the network by editing the `topology.json` file:


    nano mainnet-topology.json

    {
      "Producers": [
        {
          "addr": "<BLOCK-PRODUCING IP ADDRESS>",
          "port": <PORT>,
          "valency": 1
        },
        {
          "addr": "<IP ADDRESS>",
          "port": <PORT>,
          "valency": 1
        },
        {
          "addr": "<IP ADDRESS>",
          "port": <PORT>,
          "valency": 1
        }
      ]
    }
