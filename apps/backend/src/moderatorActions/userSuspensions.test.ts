import { randomUUID } from 'crypto'

import type { Repository } from 'typeorm'
import type { DeepMocked } from '@golevelup/ts-jest'
import { createMock } from '@golevelup/ts-jest'
import { add } from 'date-fns'

import type { Publisher } from '../pubsub/publisher'
import type { MockRepository } from '../testHelpers'
import { createMockRepository } from '../testHelpers'

import { UserSuspensions } from './userSuspensions'
import { UserSuspension } from './entities/userSuspension'

describe('user suspensions', () => {
  describe('is user suspended', () => {
    let repo: { existsBy: jest.Mock }
    let service: UserSuspensions

    beforeEach(() => {
      repo = {
        existsBy: jest.fn(),
      }

      service = new UserSuspensions(repo as unknown as Repository<UserSuspension>, null)
    })

    it('correctly returns that a user is suspended', async () => {
      repo.existsBy.mockResolvedValue(true)
      expect(await service.isUserSuspended('test@holi.team')).toBeTruthy()
    })

    it('correctly returns that a user is not suspended', async () => {
      repo.existsBy.mockResolvedValue(false)
      expect(await service.isUserSuspended('test@holi.team')).toBeFalsy()
    })
  })

  describe('suspend user', () => {
    let repo: DeepMocked<Repository<UserSuspension>>
    let publisher: DeepMocked<Publisher>
    let service: UserSuspensions

    beforeEach(() => {
      repo = createMockRepository<UserSuspension>({
        create: (input: Partial<Pick<UserSuspension, 'email' | 'reason' | 'expiresAt'>>) => {
          const suspension = new UserSuspension()
          suspension.id = randomUUID()
          suspension.createdAt = new Date()

          return {
            ...suspension,
            ...input,
          }
        },
      })

      publisher = createMock<Publisher>()
      service = new UserSuspensions(repo, publisher)
    })

    it('publishes event when suspending user', async () => {
      await service.suspendUser('test@holi.social')
      expect(publisher.publish).toHaveBeenCalled()
    })

    it('saves an indefinite suspension correctly', async () => {
      await service.suspendUser('test@holi.social', 'bad behaviour')

      expect(repo.create).toHaveBeenCalledTimes(1)
      expect(repo.save).toHaveBeenCalledTimes(1)

      const savedUserSuspension = repo.save.mock.calls[0][0]
      expect(savedUserSuspension.email).toEqual('test@holi.social')
      expect(savedUserSuspension.reason).toEqual('bad behaviour')
      expect(savedUserSuspension.expiresAt).toBeUndefined()
    })

    it('saves a definite suspension correctly', async () => {
      jest.useFakeTimers()

      await service.suspendUser('test@holi.social', 'bad behaviour', {
        minutes: 30,
      })

      expect(repo.create).toHaveBeenCalledTimes(1)
      expect(repo.save).toHaveBeenCalledTimes(1)

      const savedUserSuspension = repo.save.mock.calls[0][0]
      expect(savedUserSuspension.email).toEqual('test@holi.social')
      expect(savedUserSuspension.reason).toEqual('bad behaviour')
      expect(savedUserSuspension.expiresAt).toEqual(add(jest.now(), { minutes: 30 }))

      jest.useRealTimers()
    })
  })

  describe('lift expired suspensions', () => {
    let repo: MockRepository<UserSuspension>
    let publisher: DeepMocked<Publisher>
    let service: UserSuspensions

    beforeEach(() => {
      repo = createMockRepository<UserSuspension>()
      publisher = createMock<Publisher>()

      service = new UserSuspensions(repo, publisher)
    })

    it("doesn't publish anything when no suspensions expired", async () => {
      repo.mockQueryBuilder.getMany.mockResolvedValue([])

      await service.liftExpiredSuspensions()

      expect(publisher.publish).not.toHaveBeenCalled()
      expect(repo.softRemove).toHaveBeenLastCalledWith([])
    })

    it('publishes event when subscription expired', async () => {
      const expiredSuspension = new UserSuspension()
      expiredSuspension.id = randomUUID()
      expiredSuspension.email = 'test@holi.social'

      repo.mockQueryBuilder.getMany.mockResolvedValue([expiredSuspension])

      await service.liftExpiredSuspensions()

      expect(publisher.publish).toHaveBeenCalledTimes(1)
      expect(repo.softRemove).toHaveBeenCalledWith([expiredSuspension])
      expect(repo.save).toHaveBeenCalledWith([expiredSuspension])
    })
  })
})
