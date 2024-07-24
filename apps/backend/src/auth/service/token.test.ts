import { randomUUID } from 'crypto'

import { JwtService } from '@nestjs/jwt'
import { verify, type JwtPayload } from 'jsonwebtoken'

import { User } from '../entities/user'
import { UserRole } from '../entities/userRole'

import { AuthService } from './auth'
import { TokenService } from './token'

describe('token service', () => {
  const JWT_SECRET = 'foobar'

  let user: User
  let service: TokenService

  beforeAll(async () => {
    user = new User()
    user.id = randomUUID()
    user.email = 'test@holi.social'
    user.passwordHash = await AuthService.hashPassword('foobar')
    user.role = UserRole.MODERATOR

    service = new TokenService(new JwtService({ secret: JWT_SECRET }))
  })

  describe('sign', () => {
    it('creates valid JWT', async () => {
      const jwt = await service.signForUser(user)
      expect(() => verify(jwt, JWT_SECRET)).not.toThrow()
    })

    it('adds hasura claims to the payload', async () => {
      const jwt = await service.signForUser(user)
      const payload = verify(jwt, JWT_SECRET) as JwtPayload

      expect('https://hasura.io/jwt/claims' in payload).toBeTruthy()

      const hasuraClaims = payload['https://hasura.io/jwt/claims'] as Record<string, any>
      expect(hasuraClaims).toHaveProperty('x-hasura-allowed-roles')
      expect(hasuraClaims).toHaveProperty('x-hasura-default-role')
      expect(hasuraClaims).toHaveProperty('x-hasura-user-id')
    })
  })
})
