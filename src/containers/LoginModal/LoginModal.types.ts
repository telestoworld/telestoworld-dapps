import { Dispatch } from 'redux'
import { LoginModalProps } from 'telestoworld-ui'
import { ProviderType } from 'telestoworld-connect'
import { EnableWalletRequestAction } from '../../modules/wallet/actions'

export type DefaultProps = { isLoading: boolean }

export type Props = DefaultProps &
  LoginModalProps & {
    hasTranslations?: boolean
    onConnect: (providerType: ProviderType) => any
  }

export type State = {
  hasError: boolean
}

export type MapStateProps = Pick<
  Props,
  'hasTranslations' | 'isLoading' | 'hasError'
>
export type MapDispatchProps = Pick<Props, 'onConnect'>
export type MapDispatch = Dispatch<EnableWalletRequestAction>
