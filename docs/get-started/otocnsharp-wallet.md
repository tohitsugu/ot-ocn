---
id: otocnsharp-wallet
title: Get Started with OT-OCNSharp Wallet
sidebar_label: OT-OCNSharp Wallet
description: Get Started with OT-OCNSharp Wallet
image: ./img/og-developer-portal.png
--- 

# OT-OCNSharp.Wallet 
[![Build status](https://ci.appveyor.com/api/projects/status/knh87k86mf7gbxyo?svg=true)](https://ci.appveyor.com/project/nothingalike/otocnsharp-wallet/branch/main) [![Test status](https://img.shields.io/appveyor/tests/nothingalike/otocnsharp-wallet)](https://ci.appveyor.com/project/nothingalike/otocnsharp-wallet/branch/main) [![NuGet Version](https://img.shields.io/nuget/v/OT-OCNSharp.Wallet.svg?style=flat)](https://www.nuget.org/packages/OT-OCNSharp.Wallet/) ![NuGet Downloads](https://img.shields.io/nuget/dt/OT-OCNSharp.Wallet.svg)

OT-OCNSharp Wallet is a .NET library for Creating/Managing Wallets and Building/Signing Transactions.

## Features

* Generate Mnemonics
* Create Private and Public Keys
* Create Addresses
* Build Transactions
* Sign Transactions

## Getting Started

OT-OCNSharp.Wallet is installed from NuGet.

```sh
Install-Package OT-OCNSharp.Wallet
```

## Generate a Mnemonic

```csharp
using OT-OCNSharp.Wallet;
using OT-OCNSharp.Wallet.Enums;
using OT-OCNSharp.Wallet.Models.Keys;

class Program
{
    static void Main(string[] args)
    {
        // The KeyServices exposes functions for Mnemonics and Deriving Keys
        var keyService = new KeyService();
        // The AddressService allows us to create Addresses from our Public Keys
        var addressService = new AddressService();
        // 24 represents the number of words we want for our Mnemonic
        int size = 24;

        // This will generate a 24 English Mnemonic
        Mnemonic mnemonic = keyService.Generate(size, WordLists.English);
        System.Console.WriteLine(mnemonic.Words);
    }
}
```

## Create Private and Public Keys

Add powerful extensions to create and derive keys.

```csharp
using OT-OCNSharp.Wallet.Extensions.Models;
```

```csharp
// The masterKey is a PrivateKey made of up of the 
//  - byte[] Key
//  - byte[] Chaincode
PrivateKey masterKey = mnemonic.GetRootKey();

// This path will give us our Payment Key on index 0
string paymentPath = $"m/1852'/1815'/0'/0/0";
// The paymentPrv is another Tuple with the Private Key and Chain Code
PrivateKey paymentPrv = masterKey.Derive(paymentPath);
// Get the Public Key from the Payment Private Key
PublicKey paymentPub = paymentPrv.GetPublicKey(false);

// This path will give us our Stake Key on index 0
string stakePath = $"m/1852'/1815'/0'/2/0";
// The stakePrv is another Tuple with the Private Key and Chain Code
var stakePrv = masterKey.Derive(stakePath);
// Get the Public Key from the Stake Private Key
var stakePub = stakePrv.GetPublicKey(false);
```

## Create Addresses

```csharp
// Creating Addresses require the Public Payment and Stake Keys
Address baseAddr = addressService.GetAddress(
    paymentPub, 
    stakePub, 
    NetworkType.Testnet, 
    AddressType.Base);
```

### NetworkType

```csharp
namespace OT-OCNSharp.Wallet.Enums
{
    public enum NetworkType
    {
        Testnet,
        Mainnet
    }
}
```

### AddressType

```csharp
namespace OT-OCNSharp.Wallet.Enums
{
    public enum AddressType
    {
        Base,
        Enterprise,
        Reward
    }
}
```

## Build and Sign Transactions

This is just an example of how to start. You will need to Calculate Fees, compare with Protocol Parameters and re-serialize.

```csharp
using OT-OCNSharp.Wallet.Models.Transactions;
```

```csharp
// The Transaction Builder allows us to contruct and serialize our Transaction
using OT-OCNSharp.Wallet.Models.Transactions;
using OT-OCNSharp.Wallet.Extensions.Models.Transactions;
//For CBOR Utilities
using PeterO.Cbor2;

// Create the Transaction Body
//  The Transaction Body:
//      Supported
//       - Transaction Inputs
//       - Transaction Outputs
//       - Fee
//       - TTL
//       - Certificates
//       - Metadata Hash
//      Coming Soon
//       - Transaction Start Interval
//       - Withdrawls
//       - Mint
var transactionBody = new TransactionBody()
{
    TransactionInputs = new List<TransactionInput>()
    {
        new TransactionInput()
        {
            TransactionIndex = 0,
            TransactionId = new byte[32]
        }
    },
    TransactionOutputs = new List<TransactionOutput>()
    {
        new TransactionOutput()
        {
            Address = baseAddr.GetBytes(),
            Value = new TransactionOutputValue()
            {
                Coin = 1
            }
        }
    },
    Ttl = 10,
    Fee = 0
};

// Add our witness(es)
//  Currently we only support VKey Witnesses
var witnesses = new TransactionWitnessSet()
{
    VKeyWitnesses = new List<VKeyWitness>()
    {
        new VKeyWitness()
        {
            VKey = paymentPub.Key,
            SKey = paymentPrv.Key
        }
    }
};

// Create Transaction
var transaction = new Transaction()
{
    TransactionBody = transactionBody,
    TransactionWitnessSet = witnesses
};

// Serialize Transaction with Body and Witnesses
//  This results in a Signed Transaction
var signedTxSerialized = transaction.Serialize();
```

### Calculate Fees

```csharp
// From Current Protocol Parameters
// 44     = txFeePerByte
// 155381 = txFeeFixed
var fee = transaction.CalculateFee(44, 155381);
```

### Adding Metadata

```csharp
var auxData = new AuxiliaryData()
{
    Metadata = new Dictionary<int, object>()
    {
        { 1234, new { name = "simple message" } }
    }
};

var transaction = new Transaction()
{
    TransactionBody = transactionBody,
    TransactionWitnessSet = witnesses,
    AuxiliaryData = auxData
};
```

### More Examples

Please see the [Transaction Tests](https://github.com/OT-OCNSharp/otocnsharp-wallet/blob/main/OT-OCNSharp.Wallet.Test/TransactionTests.cs)
