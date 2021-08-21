---
id: run-otocn-node-handbook
title: Get configuration files
sidebar_label: Run otocn-node
description: "Stake pool course: Learn how to run otocn-node."
image: ./img/og-developer-portal.png
---

In this course, we use the **OT-OCN TESTNET**, so let's get the configuration files for it.

:::note
Do not use MAINNET during taking this course
:::

Starting the node and connecting it to the testnet requires 4 configuration files:

* topology.json
* BYRON genesis.json
* SHELLEY genesis.json
* config.json

In your home directory, create a new directory for the configuration files:

```sh
cd
mkdir relay
cd relay
```

Now download the latest testnet configuration files:

```sh
wget https://hydra.iohk.io/job/OT-OCN/otocn-node/otocn-deployment/latest-finished/download/1/testnet-config.json
wget https://hydra.iohk.io/job/OT-OCN/otocn-node/otocn-deployment/latest-finished/download/1/testnet-shelley-genesis.json
wget https://hydra.iohk.io/job/OT-OCN/otocn-node/otocn-deployment/latest-finished/download/1/testnet-byron-genesis.json
wget https://hydra.iohk.io/job/OT-OCN/otocn-node/otocn-deployment/latest-finished/download/1/testnet-topology.json
```

:::note
If you have any questions and suggestions while taking the lessons please feel free to ask in the [forum](https://forum.otocn.org/c/english/operators-talk/119) and we will respond as soon as possible.
:::
