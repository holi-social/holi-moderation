import { Ory } from '../ory'

import { handleUserSuspended } from './userSuspended'

describe('userSuspended handler', () => {
  it('should deactivate ory identity', () => {
    const ory = Ory.withApiKey('')
    const deactivateUser = jest.spyOn(Ory.prototype, 'deactivateUser').mockImplementation(async () => {})

    handleUserSuspended(
      {
        email: 'test@holi.social',
      },
      { ory },
    )

    expect(deactivateUser).toHaveBeenCalledWith<[string]>('test@holi.social')
  })
})
