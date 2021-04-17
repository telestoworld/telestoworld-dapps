import { ChainId, Network } from 'tw-schemas'
import { RPC_URLS } from 'telestoworld-connect'

export const TELO_GRAPH_BY_CHAIN_ID = {
  [ChainId.ETHEREUM_MAINNET]:
    'https://api.thegraph.com/subgraphs/name/telestoworld/telo-ethereum-mainnet',
  [ChainId.ETHEREUM_ROPSTEN]:
    'https://api.thegraph.com/subgraphs/name/telestoworld/telo-ethereum-ropsten',
  [ChainId.ETHEREUM_GOERLI]:
    'https://api.thegraph.com/subgraphs/name/telestoworld/telo-ethereum-goerli',
  [ChainId.ETHEREUM_RINKEBY]:
    'https://api.thegraph.com/subgraphs/name/telestoworld/telo-ethereum-rinkeby',
  [ChainId.MATIC_MAINNET]:
    'https://api.thegraph.com/subgraphs/name/telestoworld/telo-matic-mainnet',
  [ChainId.MATIC_MUMBAI]:
    'https://api.thegraph.com/subgraphs/name/telestoworld/telo-matic-mumbai'
}

const NETWORK_MAPPING_BY_CHAIN_ID = {
  [ChainId.ETHEREUM_MAINNET]: {
    [Network.ETHEREUM]: ChainId.ETHEREUM_MAINNET,
    [Network.MATIC]: ChainId.MATIC_MAINNET
  },
  [ChainId.ETHEREUM_ROPSTEN]: {
    [Network.ETHEREUM]: ChainId.ETHEREUM_ROPSTEN,
    [Network.MATIC]: ChainId.MATIC_MUMBAI
  },
  [ChainId.ETHEREUM_GOERLI]: {
    [Network.ETHEREUM]: ChainId.ETHEREUM_GOERLI,
    [Network.MATIC]: ChainId.MATIC_MUMBAI
  },
  [ChainId.ETHEREUM_RINKEBY]: {
    [Network.ETHEREUM]: ChainId.ETHEREUM_RINKEBY,
    [Network.MATIC]: ChainId.MATIC_MUMBAI
  },
  [ChainId.MATIC_MAINNET]: {
    [Network.ETHEREUM]: ChainId.MATIC_MAINNET,
    [Network.MATIC]: ChainId.MATIC_MAINNET
  },
  [ChainId.MATIC_MUMBAI]: {
    [Network.ETHEREUM]: ChainId.MATIC_MUMBAI,
    [Network.MATIC]: ChainId.MATIC_MUMBAI
  }
}

const NETWORK_BY_CHAIN_ID: Record<ChainId, Network> = {
  [ChainId.ETHEREUM_MAINNET]: Network.ETHEREUM,
  [ChainId.ETHEREUM_ROPSTEN]: Network.ETHEREUM,
  [ChainId.ETHEREUM_GOERLI]: Network.ETHEREUM,
  [ChainId.ETHEREUM_KOVAN]: Network.ETHEREUM,
  [ChainId.ETHEREUM_RINKEBY]: Network.ETHEREUM,
  [ChainId.MATIC_MAINNET]: Network.MATIC,
  [ChainId.MATIC_MUMBAI]: Network.MATIC
}

type ChainConfiguration = {
  network: Network
  teloGraphURL: string
  rpcURL: string
  networkMapping: Record<Network, ChainId>
}

export function getChainConfiguration(chainId: ChainId): ChainConfiguration {
  return {
    network: NETWORK_BY_CHAIN_ID[chainId],
    teloGraphURL: TELO_GRAPH_BY_CHAIN_ID[chainId],
    rpcURL: RPC_URLS[chainId],
    networkMapping: NETWORK_MAPPING_BY_CHAIN_ID[chainId]
  }
}
