import { Ory } from '../ory'
import { UserSuspendedData } from '../types'

import { HandlerOptions } from './types'

export const handleUserSuspended = async (
  event: UserSuspendedData,
  { ory = Ory.fromEnvironment() }: HandlerOptions | undefined = {},
) => {
  ory.deactivateUser(event.email)
}
