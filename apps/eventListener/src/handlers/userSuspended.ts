import { Ory } from '../ory'
import type { UserSuspendedData } from '../types'

import type { HandlerOptions } from './types'

export const handleUserSuspended =  (
  event: UserSuspendedData,
  { ory = Ory.fromEnvironment() }: HandlerOptions | undefined = {},
) => {
  ory.deactivateUser(event.email)
}
