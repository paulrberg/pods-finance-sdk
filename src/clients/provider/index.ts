import { networks } from "../../constants";
import { ethers } from "ethers";
import { IProvider } from "@types";

function getBaseProvider(
  networkId: number,
  keys: {
    infura?: any;
  }
): IProvider {
  const network = networks[networkId];

  const fallbackRPC = {
    [networks.matic.chainId]: "https://rpc-mainnet.maticvigil.com",
    [networks.mumbai.chainId]: "https://rpc-mumbai.matic.today",
  };

  if ([networks.matic.chainId, networks.mumbai.chainId].includes(networkId))
    return new ethers.providers.JsonRpcProvider(fallbackRPC[networkId]);

  return ethers.providers.getDefaultProvider(
    network.infura(keys.infura)
  ) as ethers.providers.Web3Provider;
}

function toEthersProvider(
  web3Provider: ethers.providers.ExternalProvider
): ethers.providers.Provider {
  return new ethers.providers.Web3Provider(web3Provider);
}

const provider = {
  getBaseProvider,
  toEthersProvider,
};

export default provider;