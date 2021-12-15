import { INetwork } from "@types";

const chains = {
  polygon: "Polygon",
  ethereum: "Ethereum",
  xdai: "xDAI",
  arbitrum: "Arbitrum",
  optimism: "Optimism",
};

const _networks: { [key: number]: INetwork } = {
  1: {
    chainId: 1,
    networkId: 1,
    supported: true,
    name: "Mainnet",
    chain: chains.ethereum,
    tag: "mainnet",
    network: "mainnet",
    token: {
      utility: ["0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"],
      wrapped: ["0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"],
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    subgraph: {
      prod: "https://api.thegraph.com/subgraphs/name/pods-finance/pods",
      dev: "https://api.thegraph.com/subgraphs/name/pods-finance/pods-dev",
    },
    rpc: ["https://api.mycryptoapi.com/eth", "https://cloudflare-eth.com"],
    explorer: "https://etherscan.io",
    infura: (key) => `https://mainnet.infura.io/v3/${key}`,
    multicall2: "0x5ba1e12693dc8f9c48aad8770482f4739beed696",
  },
  42: {
    chainId: 42,
    networkId: 42,
    name: "Kovan",
    supported: true,
    chain: chains.ethereum,
    tag: "kovan",
    network: "testnet",
    token: {
      utility: ["0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"],
      wrapped: ["0x824b1e309c4eb33501fb49f5de9cb7481686a799"],
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    subgraph: {
      prod: "https://api.thegraph.com/subgraphs/name/pods-finance/pods-kovan",
      dev:
        "https://api.thegraph.com/subgraphs/name/pods-finance/pods-experimental", // kovan-dev
    },
    rpc: [],
    explorer: "https://kovan.etherscan.io",
    faucet: "https://faucet.kovan.network",
    infura: (key) => `https://kovan.infura.io/v3/${key}`,
    multicall2: "0x5ba1e12693dc8f9c48aad8770482f4739beed696",
  },
  137: {
    chainId: 137,
    networkId: 137,
    name: "Polygon",
    supported: true,
    chain: chains.polygon,
    network: "mainnet",
    tag: "matic",
    token: {
      utility: ["0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"],
      wrapped: ["0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270"],
      name: "Matic",
      symbol: "MATIC",
      decimals: 18,
    },
    subgraph: {
      prod: "https://api.thegraph.com/subgraphs/name/pods-finance/pods-matic",
      dev:
        "https://api.thegraph.com/subgraphs/name/pods-finance/pods-matic-dev",
    },
    rpc: [
      "https://rpc-mainnet.matic.network",
      "wss://ws-mainnet.matic.network",
    ],
    explorer: "https://polygonscan.com",
    infura: (key) => `https://polygon-mainnet.infura.io/v3/${key}`,
    multicall2: "0x275617327c958bd06b5d6b871e7f491d76113dd8",
  },
  80001: {
    chainId: 80001,
    networkId: 80001,
    name: "Mumbai",
    supported: true,
    chain: chains.polygon,
    network: "testnet",
    tag: "mumbai",
    token: {
      utility: ["0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"],
      wrapped: ["0xfe7f1ef1386e6df3d462e30aa5709fb5ef647ec9"],
      name: "Matic",
      symbol: "MATIC",
      decimals: 18,
    },
    subgraph: {
      prod: "https://api.thegraph.com/subgraphs/name/pods-finance/pods-mumbai",
      dev:
        "https://api.thegraph.com/subgraphs/name/pods-finance/pods-mumbai-dev",
    },
    rpc: ["https://rpc-mumbai.matic.today", "wss://ws-mumbai.matic.today"],
    explorer: "https://mumbai.polygonscan.com",
    faucet: "https://faucet.matic.network",
    infura: (key) => `https://polygon-mumbai.infura.io/v3/${key}`,
    multicall2: "0xe9939e7Ea7D7fb619Ac57f648Da7B1D425832631",
  },
  3: {
    chainId: 3,
    networkId: 3,
    name: "Ropsten",
    supported: false,
    chain: chains.ethereum,
    tag: "ropsten",
    network: "testnet",
    token: {
      utility: ["0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"],
      wrapped: [],
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    subgraph: {
      prod: "",
      dev: "",
    },
    rpc: [],
    explorer: "https://ropsten.etherscan.io",
    infura: () => "",
    multicall2: "",
  },
  4: {
    chainId: 4,
    networkId: 4,
    name: "Rinkeby",
    supported: false,
    chain: chains.ethereum,
    tag: "rinkeby",
    network: "testnet",
    token: {
      utility: ["0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"],
      wrapped: [],
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    subgraph: {
      prod: "",
      dev: "",
    },
    rpc: [],
    explorer: "https://rinkeby.etherscan.io",
    infura: () => "",
    multicall2: "",
  },
  5: {
    chainId: 5,
    networkId: 5,
    name: "Goerli",
    supported: false,
    chain: chains.ethereum,
    tag: "goerli",
    network: "testnet",
    token: {
      utility: ["0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"],
      wrapped: [],
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    subgraph: {
      prod: "",
      dev: "",
    },
    rpc: [],
    explorer: "https://goerli.etherscan.io",
    infura: () => "",
    multicall2: "",
  },
  100: {
    chainId: 100,
    networkId: 100,
    name: "xDAI",
    supported: false,
    chain: chains.xdai,
    tag: "xdai",
    network: "mainnet",
    token: {
      utility: ["0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"],
      wrapped: [],
      name: "xDAI",
      symbol: "xDAI",
      decimals: 18,
    },
    subgraph: {
      prod: "",
      dev: "",
    },
    rpc: [],
    explorer: "https://blockscout.com/poa/xdai/mainnet/",
    infura: () => "",
    multicall2: "",
  },
  42161: {
    chainId: 42161,
    networkId: 42161,
    name: "Arbitrum",
    supported: false,
    chain: chains.arbitrum,
    network: "mainnet",
    tag: "arbitrum",
    token: {
      utility: ["0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"],
      wrapped: ["0x82af49447d8a07e3bd95bd0d56f35241523fbab1"],
      name: "Ether",
      symbol: "AETH",
      decimals: 18,
    },
    subgraph: {
      prod:
        "https://api.thegraph.com/subgraphs/name/pods-finance/pods-arbitrum",
      dev:
        "https://api.thegraph.com/subgraphs/name/pods-finance/pods-arbitrum-dev",
    },
    rpc: ["https://arb1.arbitrum.io/rpc", "wss://arb1.arbitrum.io/ws"],
    explorer: "https://arbiscan.io",
    infura: (key) => `https://mainnet.infura.io/v3/${key}`,
    multicall2: "0x842eC2c7D803033Edf55E478F461FC547Bc54EB2",
  },
  10: {
    chainId: 10,
    networkId: 10,
    name: "Optimism",
    supported: false,
    chain: chains.optimism,
    network: "mainnet",
    tag: "optimism",
    token: {
      utility: ["0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee"],
      wrapped: [""],
      name: "Ether",
      symbol: "ETH",
      decimals: 18,
    },
    subgraph: {
      prod: "",
      dev: "",
    },
    rpc: ["https://mainnet.optimism.io/"],
    explorer: "https://optimistic.etherscan.io/",
    infura: (key) => `https://mainnet.infura.io/v3/${key}`,
    multicall2: "",
  },
};

const networks: { [key: string]: INetwork } = {
  ..._networks,
  mainnet: _networks[1],
  kovan: _networks[42],
  matic: _networks[137],
  mumbai: _networks[80001],

  /** Mentioned but not supported */
  ropsten: _networks[3],
  rinkeby: _networks[4],
  goerli: _networks[5],
  xdai: _networks[100],
  arbitrum: _networks[42161],
  optimism: _networks[10],
};

export { chains };
export default networks;
