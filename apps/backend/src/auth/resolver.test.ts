import { randomUUID } from 'crypto'

import type { DeepMocked } from '@golevelup/ts-jest'
import { createMock } from '@golevelup/ts-jest'
import { ForbiddenError } from '@nestjs/apollo'
import { NotFoundException } from '@nestjs/common'

import { createMockRepository, type MockRepository } from '../testHelpers'

import type { AuthService } from './service/auth'
import type { User } from './entities/user'
import { UserResolver } from './resolver'
import { UserRole } from './entities/userRole'

describe('moderation user resolver', () => {
  let authService: DeepMocked<AuthService>
  let repo: MockRepository<User>

  let resolver: UserResolver

  beforeEach(() => {
    authService = createMock<AuthService>()
    repo = createMockRepository<User>()

    resolver = new UserResolver(authService, repo)
  })

  describe('list moderators', () => {
    it('honors pagination limit', async () => {
      await resolver.users({ limit: 10 })

      expect(repo.mockQueryBuilder.limit).toHaveBeenCalledWith(10)
    })

    it('honors pagination offset', async () => {
      await resolver.users({ offset: 10 })

      expect(repo.mockQueryBuilder.offset).toHaveBeenCalledWith(10)
    })
  })

  describe('change user role', () => {
    const userId = randomUUID()

    it('errors when user wants to change their own role', async () => {
      const user = { id: userId } as unknown as User

      await expect(resolver.changeRole(userId, UserRole.MODERATOR, user)).rejects.toThrow(ForbiddenError)
    })

    it('errors when a user is not found', async () => {
      repo.findOneBy.mockResolvedValue(null)

      await expect(resolver.changeRole(userId, UserRole.MODERATOR, null)).rejects.toThrow(NotFoundException)

      expect(repo.findOneBy).toHaveBeenCalled()
    })
  })
})
