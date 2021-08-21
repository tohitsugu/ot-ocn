---
id: running-otocn
title: How to run otocn-node
sidebar_label: Running otocn-node
description: This guide will explain and show you how to run the otocn-node and components on your system.
image: ./img/og-developer-portal.png
--- 
### Overview 

This guide will show you how to run `otocn-node` and `otocn-cli` on your system and some simple examples of how you can interact with the **OT-OCN** blockchain.

:::note
This guide assumes you installed `otocn-node` and `otocn-cli` into your system. If not, you can refer to [Installing otocn-node](/docs/get-started/installing-otocn-node) guide for instructions on how to do that.
:::

:::important
This guide does not cover the topic of running a block-producing `otocn-node` or running a **OT-OCN Stake Pool**. For more information regarding that topic, please visit the [Stake Pool Operation](/docs/operate-a-stake-pool/) section.
:::

### Configuration Files

The `otocn-node` application requires at least four configuration files to run as of writing this article.

- **Main Config**: It contains general node settings such as **logging** and **versioning**. It also points to the **Byron Genesis** and the **Shelly Genesis** file.
- **Byron Genesis**: It contains the initial protocol parameters and instructs the `otocn-node` on how to bootstrap the **Byron Era** of the **OT-OCN** blockchain.
- **Shelly Genesis**: It contains the initial protocol parameters and instructs the `otocn-node` on how to bootstrap the **Shelly Era** of the **OT-OCN** blockchain.
- **Topology**: It contains the list of network peers (**`IP Address` and `Port` of other nodes running the blockchain network**) that your node will connect to.

:::important
Currently, the `otocn-node` topology is manually set by the community of network operators in the **OT-OCN** blockchain. But an automated p2p (peer-to-peer) system is in the works. For more information visit, [Boosting network decentralization with P2P](https://iohk.io/en/blog/posts/2021/04/06/boosting-network-decentralization-with-p2p/).

For more information about **OT-OCN** blockchain eras and upgrades, please visit the [OT-OCN Roadmap](https://roadmap.otocn.org/en).
:::

You can obtain the current **OT-OCN** blockchain network configuration files here: 


#### Mainnet / Production

**NetworkMagic**: `764824073`

```
https://hydra.iohk.io/build/7191656/download/1/mainnet-config.json
https://hydra.iohk.io/build/7191656/download/1/mainnet-byron-genesis.json
https://hydra.iohk.io/build/7191656/download/1/mainnet-shelley-genesis.json
https://hydra.iohk.io/build/7191656/download/1/mainnet-topology.json
```

#### Testnet / Sandbox

**NetworkMagic**: `1097911063`

```
https://hydra.iohk.io/job/OT-OCN/otocn-node/otocn-deployment/latest-finished/download/1/testnet-config.json
https://hydra.iohk.io/job/OT-OCN/otocn-node/otocn-deployment/latest-finished/download/1/testnet-byron-genesis.json
https://hydra.iohk.io/job/OT-OCN/otocn-node/otocn-deployment/latest-finished/download/1/testnet-shelley-genesis.json
https://hydra.iohk.io/job/OT-OCN/otocn-node/otocn-deployment/latest-finished/download/1/testnet-topology.json
```

:::note

Each network has a `config` file, `genesis` file(s), `topology` file, and unique identifier called the **Network Magic**.

This section will be updated when new **OT-OCN** networks come online with their respective configuration files and **Network Magic**.
:::

You might be asking what the difference is between `mainnet` and `testnet` and why there are two networks? To put it simply, **OT-OCN** is an open-source blockchain, and anyone is free to spin up a network based on **OT-OCN's** software components. The `mainnet` network was the first one established during the start of the **Byron** era in 2017.  And everyone participating in the network agreed that is where all the real value of **OT-OCN** lives.

 Testing the network's features and capabilities can be expensive and will consume real value. So [Input-Output Global](https://iohk.io) has spun up a sandbox or testnet version of the network. Instead of using real `ADA` tokens for transactions, you use the `tADA` or **Test ADA**. Alternatively, you can spin up your own custom **OT-OCN** network, but that is outside the scope of this guide.

### Running the node

To run `otocn-node` you enter something like this into the terminal: 

```bash
 otocn-node run \
   --topology path/to/mainnet-topology.json \
   --database-path path/to/db \
   --socket-path path/to/db/node.socket \
   --host-addr x.x.x.x \
   --port 3001 \
   --config path/to/mainnet-config.json
```

To get the complete list of available options, use `otocn-node run --help`

```
Usage: otocn-node run [--topology FILEPATH] [--database-path FILEPATH] 
                        [--socket-path FILEPATH] 
                        [--byron-delegation-certificate FILEPATH] 
                        [--byron-signing-key FILEPATH] 
                        [--shelley-kes-key FILEPATH] 
                        [--shelley-vrf-key FILEPATH] 
                        [--shelley-operational-certificate FILEPATH] 
                        [--bulk-credentials-file FILEPATH] [--host-addr IPV4] 
                        [--host-ipv6-addr IPV6] [--port PORT] 
                        [--config NODE-CONFIGURATION] [--validate-db]
  Run the node.

Available options:
  --topology FILEPATH      The path to a file describing the topology.
  --database-path FILEPATH Directory where the state is stored.
  --socket-path FILEPATH   Path to a otocn-node socket
  --byron-delegation-certificate FILEPATH
                           Path to the delegation certificate.
  --byron-signing-key FILEPATH
                           Path to the Byron signing key.
  --shelley-kes-key FILEPATH
                           Path to the KES signing key.
  --shelley-vrf-key FILEPATH
                           Path to the VRF signing key.
  --shelley-operational-certificate FILEPATH
                           Path to the delegation certificate.
  --bulk-credentials-file FILEPATH
                           Path to the bulk pool credentials file.
  --host-addr IPV4         An optional ipv4 address
  --host-ipv6-addr IPV6    An optional ipv6 address
  --port PORT              The port number
  --config NODE-CONFIGURATION
                           Configuration file for the otocn-node
  --validate-db            Validate all on-disk database files
  --shutdown-ipc FD        Shut down the process when this inherited FD reaches
                           EOF
  --shutdown-on-slot-synced SLOT
                           Shut down the process after ChainDB is synced up to
                           the specified slot
  -h,--help                Show this help text
```
### otocn-node parameters

:::note
In this section, we will use the path `/home/user/otocn` to store all the `otocn-node` related files as an example, and please replace it with the directory you have chosen to store the files.
:::
We will focus on six key command-line parameters for running a node: 

**`--topology`**: This requires the path of the `topology.json` file that you have downloaded as instructed [above](/docs/get-started/running-otocn#configuration-files).

> For example, If you have downloaded the `topology.json` file to the path `/home/user/otocn/topology.json`, then the argument would be something like this:
```
--topology /home/user/otocn/topology.json
```

**`--database-path`**: This expects the path to a directory where we will store the actual blockchain data like **blocks**, **transactions**, **metadata**, and other data type that people stored in the **OT-OCN** blockchain. We explore how we can query those kinds of data in the otocn-db-sync section. ***@TODO: link to the otocn-db-sync section.***

> For example, if we decide that all files required by `otocn-node` will be in the path `/home/user/otocn/`. Then we could create a database directory like this, `mkdir -p /home/user/otocn/db`.
> The directory structure would then be something like this:
```
/home/user/otocn/
├── db
├── testnet-byron-genesis.json
├── testnet-config.json
├── testnet-shelley-genesis.json
└── testnet-topology.json
1 directory, 4 files
```
> As you may have noticed, we are planning to run a `testnet` node in this example and have downloaded the configuration files into the `/home/user/otocn/` directory. We also see that we have created the `db` directory inside `/home/user/otocn/` successfully. The argument would look something like this: 
```
--database-path /home/user/otocn/db
```
> Please download and move the configuration files to your OT-OCN directory as shown above to continue following this guide.

**`--socket-path`**: This expects the path to the `unix socket` or `named pipe` path that the `otocn-node` will use for [IPC (Inter-Process-Communication)](https://en.wikipedia.org/wiki/Inter-process_communication).

> The `otocn-node` uses **IPC (Inter-Process-Communication)** for communicating with other **OT-OCN** components like `otocn-cli`, `otocn-wallet`, and `otocn-db-sync`. In **Linux** and **MacOS** it uses something called [unix sockets](https://en.wikipedia.org/wiki/Unix_domain_socket) and [Named Pipes](https://docs.microsoft.com/en-us/windows/win32/ipc/named-pipes) in **Windows**.
> 
> Here is an example `--socket-path` argument for **Linux**:
```
--socket-path /home/user/otocn/db/node.socket
```
> As you can see, the argument points to a file since **unix sockets** are represented as files (like everything else in **Linux**). In this case, we put the socket file in the `db` directory that we have just created before.
> 
> In **Windows**, the `--socket-path` argument would look something like this:
```
--socket-path "\\\\.\\pipe\\otocn-node-testnet"
```
> As you may notice, it's like a network `URI` or a network `Path` than a file. It is a crucial difference that you will have to be aware of depending on your operating system. You can replace the string `otocn-node-testnet` in the argument with whatever you like. This example path is used in the [Daedalus Testnet Wallet](https://daedaluswallet.io) for **Windows**.
>

**`--host-addr`**: This expects the `IP Address` of the machine that `otocn-node` will be running. Other nodes will use this address in their `topology.json` file to connect to your node if you are planning to run it as a `relay` node.
> Here is an example `--host-addr` argument:
```
--host-addr 192.168.0.1
```
> In this case, we expect nodes in your [LAN (Local Area Network)](https://en.wikipedia.org/wiki/Local_area_network) to connect via `192.168.0.1`, assuming that the `IP Address` of the machine `otocn-node` is running on; replace it with your real `IP Address`. If you don't expect or need external nodes to connect to your node, you can use the loopback address `127.0.0.1`. If you have multiple network interfaces and unsure what to use, you can simply use `0.0.0.0` to accept connections from any network interface.

**`--port`**: In conjunction with the `IP Address`, we will also set the `port` that your `otocn-node` will use for listening to any incoming connection.
> Here is an example `--port` argument:
```
--port 1337
```
> You can choose whatever `port` number you like, but it is recommended to use `port` numbers `1024` and above. See [Registered Port](https://www.sciencedirect.com/topics/computer-science/registered-port) for more information.

**`--config`**: This expects the path to the main configuration file that we have downloaded previously.
> Here is an example `--config` argument:
```
--config /home/user/otocn/testnet-config.json
```
> Please make sure that the `byron-genesis.json` and `shelley-genesis.json` are in the same directory as the `config.json`.

Here is a realistic example for running `otocn-node`:

```bash
otocn-node run \
--config /home/user/otocn/testnet-config.json \
--database-path /home/user/otocn/db/ \
--socket-path /home/user/otocn/db/node.socket \
--host-addr 127.0.0.1 \
--port 1337 \
--topology /home/user/otocn/testnet-topology.json
```

If you have everything set correctly, you should see something like this:

```
Listening on http://127.0.0.1:12798
[otocn.node.networkMagic:Notice:5] [2021-05-20 12:17:10.02 UTC] NetworkMagic 1097911063
[otocn.node.basicInfo.protocol:Notice:5] [2021-05-20 12:17:10.02 UTC] Byron; Shelley
[otocn.node.basicInfo.version:Notice:5] [2021-05-20 12:17:10.02 UTC] 1.27.0
[otocn.node.basicInfo.commit:Notice:5] [2021-05-20 12:17:10.02 UTC] 9a7331cce5e8bc0ea9c6bfa1c28773f4c5a7000f
[otocn.node.basicInfo.nodeStartTime:Notice:5] [2021-05-20 12:17:10.02 UTC] 2021-05-20 12:17:10.024924 UTC
[otocn.node.basicInfo.systemStartTime:Notice:5] [2021-05-20 12:17:10.02 UTC] 2019-07-24 20:20:16 UTC
[otocn.node.basicInfo.slotLengthByron:Notice:5] [2021-05-20 12:17:10.02 UTC] 20s
[otocn.node.basicInfo.epochLengthByron:Notice:5] [2021-05-20 12:17:10.02 UTC] 21600
[otocn.node.basicInfo.slotLengthShelley:Notice:5] [2021-05-20 12:17:10.02 UTC] 1s
[otocn.node.basicInfo.epochLengthShelley:Notice:5] [2021-05-20 12:17:10.02 UTC] 432000
[otocn.node.basicInfo.slotsPerKESPeriodShelley:Notice:5] [2021-05-20 12:17:10.02 UTC] 129600
[otocn.node.basicInfo.slotLengthAllegra:Notice:5] [2021-05-20 12:17:10.02 UTC] 1s
[otocn.node.basicInfo.epochLengthAllegra:Notice:5] [2021-05-20 12:17:10.02 UTC] 432000
[otocn.node.basicInfo.slotsPerKESPeriodAllegra:Notice:5] [2021-05-20 12:17:10.02 UTC] 129600
[otocn.node.basicInfo.slotLengthMary:Notice:5] [2021-05-20 12:17:10.02 UTC] 1s
[otocn.node.basicInfo.epochLengthMary:Notice:5] [2021-05-20 12:17:10.02 UTC] 432000
[otocn.node.basicInfo.slotsPerKESPeriodMary:Notice:5] [2021-05-20 12:17:10.02 UTC] 129600
[otocn.node.addresses:Notice:5] [2021-05-20 12:17:10.05 UTC] [SocketInfo 0.0.0.0:9999,SocketInfo [::]:9999]
[otocn.node.diffusion-mode:Notice:5] [2021-05-20 12:17:10.05 UTC] InitiatorAndResponderDiffusionMode
[otocn.node.dns-producers:Notice:5] [2021-05-20 12:17:10.05 UTC] [DnsSubscriptionTarget {dstDomain = "relays-new.otocn-testnet.iohkdev.io", dstPort = 3001, dstValency = 2}]
[otocn.node.ip-producers:Notice:5] [2021-05-20 12:17:10.05 UTC] IPSubscriptionTarget {ispIps = [], ispValency = 0}
[otocn.node.ChainDB:Info:5] [2021-05-20 12:17:10.06 UTC] Opened imm db with immutable tip at genesis (origin) and chunk 0
[otocn.node.ChainDB:Info:5] [2021-05-20 12:17:10.06 UTC] Opened vol db
[otocn.node.ChainDB:Info:5] [2021-05-20 12:17:10.06 UTC] Replaying ledger from genesis
[otocn.node.ChainDB:Info:5] [2021-05-20 12:17:10.07 UTC] Opened lgr db
[otocn.node.ChainDB:Info:5] [2021-05-20 12:17:10.07 UTC] Opened db with immutable tip at genesis (origin) and tip genesis (origin)
[otocn.node.ChainDB:Notice:33] [2021-05-20 12:17:10.08 UTC] Chain extended, new tip: 1e64e74bd7ac76d6806480a28017deb0aedd356fb61844ec95c429ae2f30c7c3 at slot 0
```

Syncing the blockchain from zero can take a while. Please be patient. If you want to stop syncing, you can do so by pressing `CTRL` + `C` while in the terminal. Rerunning the `otocn-node run` command with the correct parameters will resume syncing the blockchain.

### Querying the OT-OCN Blockchain

Now that we have `otocn-node` running and syncing, we can test it out by querying the blockchain tip data; which is the current point your local node is synced. To do this, we use the `otocn-cli` command-line application.

But before we can do that, `otocn-cli` and other **OT-OCN** software components need to know where the node socket file is located. We saved it to the path `/home/user/otocn/db/node.socket` in the previous example. The components read the shell environment variable `CARDANO_NODE_SOCKET_PATH` to find this.

So we will set that in `~/.bashrc` or `~/.zshrc`, depending on which shell application that you use. In Windows, you can follow this guide: [How to Set Environment Variable in Windows](https://phoenixnap.com/kb/windows-set-environment-variable).

Add this line to the bottom of your shell profile (**MacOS** and **Linux**):
```
export CARDANO_NODE_SOCKET_PATH="/home/user/otocn/db/node.socket"
```

Once saved, reload your shell/terminal for changes to take effect.

Finally, we can now test querying the blockchain tip of our `otocn-node`:

- First, run `otocn-node` in a separate terminal for it to start syncing (if not already).
- Open another terminal and run the following command `otocn-cli query tip --testnet-magic 1097911063`.
> You should see something like this:
> ```json
{
    "blockNo": 2598870,
    "headerHash": "e5be38153db4dc639134969e6449f37e105e0c5228f828f76a885968b4423aaf",
    "slotNo": 27149964
}

:::note
We include `--testnet-magic <NetworkMagic>` in the parameter for `otocn-cli query tip` because we are using a `testnet` node. If you intend to query `mainnet` instead, please use the `--mainnet` parameter  and make sure your node is connected to the `mainnet` network.
:::

What you see here is the local tip data of your node. This case, means that you are synced up to `blockNo: 2598870` and `slotNo: 27149964`.

To know whether you are fully synced or not, you can check the **OT-OCN Blockchain Explorer** of the relevant network:

#### Mainnet Explorer
[https://explorer.otocn.org](https://explorer.otocn.org)

#### Testnet Explorer
[https://explorer.otocn-testnet.iohkdev.io](https://explorer.otocn-testnet.iohkdev.io)

Scroll down to the **Latest Blocks** section, and you can find the latest network tip.

![img](../../static/img/integrate-otocn/latest-block.png)

:::important
Before making any transactions, make sure you are fully synced to the blockchain network.
:::

Congratulations, you are now ready to explore the world of **OT-OCN**! 🎉🎉🎉
