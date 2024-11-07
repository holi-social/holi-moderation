import { Ory } from '../ory'

import { handleUserSuspensionExpired } from './userSuspensionExpired'

describe('userSuspensionExpired handler', () => {
  it('should activate ory identity', async () => {
    const ory = Ory.withApiKey('')

    const activateUser = jest.spyOn(Ory.prototype, 'activateUser').mockImplementation(async () => {})

    await handleUserSuspensionExpired(
      {
        email: 'test@holi.social',
      },
      { ory },
    )

    expect(activateUser).toHaveBeenCalledWith<[string]>('test@holi.social')
  })
})
