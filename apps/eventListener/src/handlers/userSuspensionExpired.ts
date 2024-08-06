import { Ory } from '../ory'
import type { UserSuspensionExpiredData } from '../types'

import type { HandlerOptions } from './types'

export const handleUserSuspensionExpired = async (
  event: UserSuspensionExpiredData,
  { ory = Ory.fromEnvironment() }: HandlerOptions | undefined = {},
) => {
  await ory.activateUser(event.email)
}
