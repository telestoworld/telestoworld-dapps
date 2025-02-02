import { toBN } from 'web3x-es/utils'
import { Authorization, AuthorizationType } from './types'

export function getTokenAmountToApprove() {
  return toBN(2).pow(toBN(180))
}

export function hasAuthorization(
  authorizations: Authorization[],
  authorizationToFind: Authorization
) {
  return authorizations.some(authorization =>
    areEqual(authorization, authorizationToFind)
  )
}

export function areEqual(left: Authorization, right: Authorization) {
  return (
    left.type === right.type &&
    left.authorizedAddress === right.authorizedAddress &&
    left.tokenAddress === right.tokenAddress &&
    left.chainId === right.chainId
  )
}

export function isValidType(type: string) {
  return Object.values<string>(AuthorizationType).includes(type)
}
