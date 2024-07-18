import { Ory } from '../ory'
import { UserSuspensionExpiredData } from '../types'

import { HandlerOptions } from './types'

export const handleUserSuspensionExpired = async (
  event: UserSuspensionExpiredData,
  { ory = Ory.fromEnvironment() }: HandlerOptions | undefined = {},
) => {
  await ory.activateUser(event.email)
}
