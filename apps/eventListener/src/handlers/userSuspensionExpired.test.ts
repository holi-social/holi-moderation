import { Ory } from '../ory'

import { handleUserSuspensionExpired } from './userSuspensionExpired'

describe('userSuspensionExpired handler',  () => {
  it('should activate ory identity', () => {
    const ory = Ory.withApiKey('')

    const activateUser = jest.spyOn(Ory.prototype, 'activateUser').mockImplementation(async () => {})

    handleUserSuspensionExpired(
      {
        email: 'test@holi.social',
      },
      { ory },
    )

    expect(activateUser).toHaveBeenCalledWith<[string]>('test@holi.social')
  })
}) 
