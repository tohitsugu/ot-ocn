module.exports = {
  someSidebar: {
    "Get Started": [
      "get-started/overview",
      {
        type: "category",
        label: "OT-OCN Components",
        items: [
          "get-started/otocn-components",
          "get-started/installing-otocn-node",
          "get-started/running-otocn",
          "get-started/installing-otocn-wallet",
        ],
      },
      {
        type: "category",
        label: "Builder Tools",
        items: [
          "get-started/blockfrost",
          "get-started/otocncli-js",
          "get-started/dandelion-apis",
          "get-started/ogmios",
          "get-started/otocnsharp-wallet",
          {
            type: "category",
            label: "Serialization-Lib",
            items: [
              "get-started/otocn-serialization-lib/overview",
              "get-started/otocn-serialization-lib/prerequisite-knowledge",
              "get-started/otocn-serialization-lib/generating-keys",
              "get-started/otocn-serialization-lib/generating-transactions",
              "get-started/otocn-serialization-lib/transaction-metadata",
            ],
          },
        ],
      },
      "get-started/technical-concepts",
      "get-started/testnets-and-devnets",
      "get-started/smart-contracts-signpost",
      "get-started/otocn-developer-community",
    ],
    "Integrate OT-OCN": [
      "integrate-otocn/overview",
      "integrate-otocn/creating-wallet-faucet",
      "integrate-otocn/multi-witness-transactions-cli",
      "integrate-otocn/listening-for-payments-cli",
      "integrate-otocn/listening-for-payments-wallet",
      "integrate-otocn/testnet-faucet",
    ],
    "Build with Transaction Metadata": [
      "transaction-metadata/overview",
      "transaction-metadata/how-to-create-a-metadata-transaction-cli",
      "transaction-metadata/how-to-create-a-metadata-transaction-wallet",
      "transaction-metadata/retrieving-metadata",
    ],
    "Discover Native Tokens": [
      "native-tokens/overview",
      "native-tokens/minting",
      "native-tokens/minting-nfts",
      "native-tokens/otocn-token-registry"
    ],
    "Fund your Project": [
      "fund-your-project/overview", 
      "fund-your-project/project-catalyst", 
      "fund-your-project/alternatives"
    ],
    "Operate a Stake Pool": [
      "operate-a-stake-pool/overview",
      "operate-a-stake-pool/otocn-key-pairs",
      {
        type: "category",
        label: "Stake Pool Course",
        items: [
          "stake-pool-course/overview",
          "stake-pool-course/introduction-to-otocn",
          "stake-pool-course/lesson-1",
          "stake-pool-course/lesson-2",
          "stake-pool-course/lesson-3",
          "stake-pool-course/lesson-4",
          "stake-pool-course/lesson-5",
          {
            type: "category",
            label: "Handbook",
            items: [
              "stake-pool-course/handbook/setup-virtual-box-written",
              "stake-pool-course/handbook/setup-a-server-on-aws-written",
              "stake-pool-course/handbook/setup-firewall",
              // "stake-pool-course/handbook/install-otocn-node-written",
              // "stake-pool-course/handbook/run-otocn-node-handbook",
              "stake-pool-course/handbook/use-cli",
              "stake-pool-course/handbook/utxo-model",
              "stake-pool-course/handbook/keys-addresses",
              "stake-pool-course/handbook/create-simple-transaction",
              "stake-pool-course/handbook/create-stake-pool-keys",
              "stake-pool-course/handbook/register-stake-keys",
              "stake-pool-course/handbook/generate-stake-pool-keys",
              "stake-pool-course/handbook/configure-topology-files",
              "stake-pool-course/handbook/register-stake-pool-metadata",
              "stake-pool-course/handbook/apply-logging-prometheus",
            ],
          },
          {
            type: "category",
            label: "Assignments",
            items: [
              "stake-pool-course/assignments/assignment-1",
              "stake-pool-course/assignments/assignment-2",
              "stake-pool-course/assignments/kes_period",
            ],
          },
        ],
      },
      {
        type: "category",
        label: "Operator Tools",
        items: [
          "operate-a-stake-pool/guild-ops-suite",
        ],
      },
      "operate-a-stake-pool/marketing-stake-pool",
    ],
    "Contribute to the Developer Portal": [
      "portal-contributors",
      "portal-contribute",
      "portal-style-guide",
    ],
  },
};
