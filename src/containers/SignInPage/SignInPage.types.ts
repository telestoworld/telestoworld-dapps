import { Dispatch } from 'redux'
import { ProviderType } from 'telestoworld-connect'
import { SignInProps } from 'telestoworld-ui'
import { EnableWalletRequestAction } from '../../modules/wallet/actions'

export type SignInPageProps = Omit<SignInProps, 'onConnect'> & {
  onConnect: (providerType: ProviderType) => any
  hasTranslations?: boolean
}

export type SignInPageState = {
  isLoginModalOpen: boolean
}

export type MapStateProps = Pick<
  SignInPageProps,
  'isConnecting' | 'isConnected' | 'hasTranslations' | 'hasError'
>
export type MapDispatchProps = Pick<SignInPageProps, 'onConnect'>
export type MapDispatch = Dispatch<EnableWalletRequestAction>
