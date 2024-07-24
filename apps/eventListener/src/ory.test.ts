import { randomUUID } from 'crypto'

import { Identity, JsonPatchOpEnum, type IdentityApi } from '@ory/client'

import { Ory } from './ory'

describe('ory service', () => {
  it('should fail when constructing from environment with API key missing', () => {
    delete process.env.ORY_API_KEY
    expect(() => Ory.fromEnvironment()).toThrow()
  })

  describe('find identity', () => {
    it('should succeed finding a single identity', async () => {
      const identity = {
        listIdentities: jest.fn(() => ({ data: [{ id: randomUUID() }] })),
      }

      const ory = new Ory(identity as unknown as IdentityApi)
      await ory.findIdentity('test@holi.social')

      expect(identity.listIdentities).toHaveBeenCalledWith({
        credentialsIdentifier: 'test@holi.social',
      })
    })

    it('should fail when finding multiple identities', async () => {
      const identity = {
        listIdentities: jest.fn(() => ({
          data: [{ id: randomUUID() }, { id: randomUUID() }],
        })),
      }

      const ory = new Ory(identity as unknown as IdentityApi)

      await expect(ory.findIdentity('test@holi.social')).rejects.toThrow()
      expect(identity.listIdentities).toHaveBeenCalledWith({
        credentialsIdentifier: 'test@holi.social',
      })
    })

    it('should return null when finding no identity', async () => {
      const identity = {
        listIdentities: jest.fn(() => ({ data: [] })),
      }

      const ory = new Ory(identity as unknown as IdentityApi)

      expect(await ory.findIdentity('test@holi.social')).toBeNull()
    })
  })

  describe('terminate all sessions', () => {
    it('should call the identity API correctly', async () => {
      const identity = {
        deleteIdentitySessions: jest.fn(async () => {}),
      }

      const ory = new Ory(identity as unknown as IdentityApi)
      const identityId = randomUUID()

      await ory.terminateAllSessions(identityId)
      expect(identity.deleteIdentitySessions).toHaveBeenCalledWith({
        id: identityId,
      })
    })
  })

  describe('update identity state', () => {
    it.each(['active', 'inactive'])('should update state to %s correctly', async (state) => {
      const identity = {
        patchIdentity: jest.fn(() => {}),
      }

      const identityId = randomUUID()

      const ory = new Ory(identity as unknown as IdentityApi)

      await ory.updateIdentityState(identityId, state as 'active' | 'inactive')

      expect(identity.patchIdentity).toHaveBeenCalledWith({
        id: identityId,
        jsonPatch: [
          {
            op: JsonPatchOpEnum.Replace,
            value: state,
            path: '/state',
          },
        ],
      })
    })
  })

  describe('deactivate user', () => {
    let ory: Ory

    beforeEach(() => {
      ory = Ory.withApiKey('')
      jest.restoreAllMocks()
    })

    it('should fail when identity is not found', async () => {
      jest.spyOn(Ory.prototype, 'findIdentity').mockResolvedValue(null)

      await expect(ory.deactivateUser('test@holi.social')).rejects.toThrow(/^User with email ".+" not found$/)
    })

    it('should terminate all sessions and update identity', async () => {
      const identityId = randomUUID()

      jest.spyOn(Ory.prototype, 'terminateAllSessions').mockImplementation(async () => {})

      jest.spyOn(Ory.prototype, 'updateIdentityState').mockImplementation(async () => {})

      jest.spyOn(Ory.prototype, 'findIdentity').mockResolvedValue({ id: identityId } as unknown as Identity)

      await ory.deactivateUser('test@holi.social')

      expect(ory.findIdentity).toHaveBeenCalledTimes(1)
      expect(ory.terminateAllSessions).toHaveBeenCalledWith(identityId)
      expect(ory.updateIdentityState).toHaveBeenCalledWith(identityId, 'inactive')
    })
  })

  describe('activate user', () => {
    let ory: Ory

    beforeEach(() => {
      ory = Ory.withApiKey('')
      jest.restoreAllMocks()
    })

    it('should fail when identity is not found', async () => {
      jest.spyOn(Ory.prototype, 'findIdentity').mockResolvedValue(null)

      await expect(ory.activateUser('test@holi.social')).rejects.toThrow(/^User with email ".+" not found$/)
    })

    it('should update identity', async () => {
      const identityId = randomUUID()

      jest.spyOn(Ory.prototype, 'updateIdentityState').mockImplementation(async () => {})

      jest.spyOn(Ory.prototype, 'findIdentity').mockResolvedValue({ id: identityId } as unknown as Identity)

      await ory.activateUser('test@holi.social')

      expect(ory.findIdentity).toHaveBeenCalledTimes(1)
      expect(ory.updateIdentityState).toHaveBeenCalledWith(identityId, 'active')
    })
  })
})
