import { randomUUID } from 'crypto'

import { Repository } from 'typeorm'
import { ForbiddenException } from '@nestjs/common'

import { User } from '../entities/user'
import { UserRole } from '../entities/userRole'

import { AuthService } from './auth'

describe('auth service', () => {
  describe('login', () => {
    it('should fail when user is not found', async () => {
      const repo = {
        findOneBy: jest.fn().mockResolvedValue(null),
      }

      const service = new AuthService(repo as unknown as Repository<User>)

      await expect(async () => {
        await service.login('test@holi.social', 'test')
      }).rejects.toThrow(ForbiddenException)

      expect(repo.findOneBy).toHaveBeenCalledWith({
        email: 'test@holi.social',
      })
    })

    it("should fail when password doesn't match hash", async () => {
      const user = new User()
      user.id = randomUUID()
      user.email = 'test@holi.social'

      const repo = {
        findOneBy: jest.fn().mockResolvedValue(user),
      }

      const service = new AuthService(repo as unknown as Repository<User>)
      user.passwordHash = await AuthService.hashPassword('correct_password')

      await expect(async () => {
        await service.login('test@holi.social', 'incorrect_password')
      }).rejects.toThrow(ForbiddenException)

      expect(repo.findOneBy).toHaveBeenCalledWith({
        email: 'test@holi.social',
      })
    })

    it('should succeed when password matches hash', async () => {
      const user = new User()
      user.id = randomUUID()
      user.email = 'test@holi.social'

      const repo = {
        findOneBy: jest.fn().mockResolvedValue(user),
      }

      const service = new AuthService(repo as unknown as Repository<User>)
      user.passwordHash = await AuthService.hashPassword('correct_password')

      expect(await service.login('test@holi.social', 'correct_password')).toEqual(user)

      expect(repo.findOneBy).toHaveBeenCalledWith({
        email: 'test@holi.social',
      })
    })
  })

  describe('register', () => {
    it('creates a valid password hash', async () => {
      const repo = {
        create: jest
          .fn()
          .mockImplementation(
            ({ email, passwordHash, role }: { email: string; passwordHash: string; role: UserRole }) => {
              const user = new User()
              user.id = randomUUID()
              user.email = email
              user.passwordHash = passwordHash
              user.role = role

              return user
            },
          ),

        save: jest.fn().mockImplementation((user: User) => user),
      }

      const service = new AuthService(repo as unknown as Repository<User>)

      const savedUser = await service.register('test@holi.social', 'foobar', UserRole.MODERATOR)

      expect(repo.create).toHaveBeenCalled()
      expect(repo.save).toHaveBeenCalled()
      expect(await AuthService.verifyPasswordHash(savedUser.passwordHash, 'foobar')).toEqual(true)
    })
  })
})
