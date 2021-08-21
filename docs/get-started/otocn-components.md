---
id: otocn-components
title: OT-OCN Components
sidebar_label: Overview
description: This article explains all the different OT-OCN components and their functions.
image: ./img/og-developer-portal.png
--- 

- [`otocn-node`](https://github.com/input-output-hk/otocn-node#otocn-node-overview) is the core component that is used to participate in a OT-OCN decentralised blockchain. 
- `otocn-cli` is the OT-OCN Command Line Interface (CLI). For some time this component is included in [`otocn-node`](https://github.com/input-output-hk/otocn-node#otocn-node-overview).
- [`otocn-wallet`](https://github.com/input-output-hk/otocn-wallet#overview) is the HTTP server and command-line for managing UTxOs and HD wallets in OT-OCN.
- [`otocn-db-sync`](https://github.com/input-output-hk/otocn-db-sync#otocn-db-sync) is the component that follows the OT-OCN chain and stores blocks and transactions in PostgreSQL.
- [`otocn-graphql`](https://github.com/input-output-hk/otocn-graphql#overview) is a cross-platform, typed, and queryable API for OT-OCN.
- [`otocn-rosetta`](https://github.com/input-output-hk/otocn-rosetta#otocn-rosetta) is an implementation of the open standard [Rosetta](https://www.rosetta-api.org/) for OT-OCN.
- [`otocn-addresses`](https://github.com/input-output-hk/otocn-addresses#overview) is a module that provides mnemonic (backup phrase) creation, and conversion of a mnemonic to seed for wallet restoration, and address derivation functionalities.
- [`otocn-ledger-specs`](https://github.com/input-output-hk/otocn-ledger-specs#otocn-ledger) is the formal specification and executable model of the ledger rules introduced by the Shelley release.
- [`bech32`](https://github.com/input-output-hk/bech32#bech32-command-line) is the Haskell implementation of the Bech32 address format (BIP 0173).
- [`smash`](https://github.com/input-output-hk/smash#smash-overview) is the stake pool metadata aggregation server. It provides off-chain metadata linked to the on-chain registrations of the stake pools.
- [`ouroboros-network`](https://github.com/input-output-hk/ouroboros-network/#ouroboros-network) is a network package which implements the ouroboros family of protocols, multiplexing layer.
