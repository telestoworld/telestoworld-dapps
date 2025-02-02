import { ChainId, Network } from 'tw-schemas'
import { Provider, ProviderType } from 'telestoworld-connect'

export { Provider, ProviderType }

export type NetworkData = {
  mana: number
  chainId: ChainId
}
export type Networks = Record<Network, NetworkData>

export interface Wallet {
  address: string
  networks: Networks
  network: Network
  chainId: ChainId
  providerType: ProviderType
}

export interface CreateWalletOptions {
  TELO_ADDRESS?: string
  CHAIN_ID?: string | number
  POLL_INTERVAL?: number
}
