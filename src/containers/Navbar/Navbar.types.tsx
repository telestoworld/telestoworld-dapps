import { NavbarProps as NavbarComponentProps } from 'telestoworld-ui'

export type NavbarProps = NavbarComponentProps & {
  hasTranslations?: boolean
}

export type MapStateProps = Pick<
  NavbarProps,
  'mana' | 'address' | 'isConnected' | 'isConnecting' | 'hasTranslations'
>

export type MapDispatchProps = {}
