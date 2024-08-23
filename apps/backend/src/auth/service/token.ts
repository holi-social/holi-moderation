import { Injectable } from '@nestjs/common'
import { JwtService, JwtSignOptions } from '@nestjs/jwt'

import { User } from '../entities/user'
import { UserRole } from '../entities/userRole'

type Role = UserRole

export type TokenPayload = {
  sub: string
  email: string
  role: Role
  'https://hasura.io/jwt/claims': {
    'x-hasura-allowed-roles': Role[]
    'x-hasura-default-role': Role
    'x-hasura-user-id': string
  }
}

@Injectable()
export class TokenService {
  private readonly JWT_OPTIONS: Omit<JwtSignOptions, 'secret'> = {
    expiresIn: 6 * 60 * 60, // 6 hours
    algorithm: 'HS256',
    audience: 'moderation.holi.social',
  }

  constructor(private readonly jwt: JwtService) {}

  async signForUser(user: User): Promise<string> {
    const payload = this.payloadForUser(user)

    return this.jwt.signAsync(payload, this.JWT_OPTIONS)
  }

  async verify(token: string): Promise<TokenPayload> {
    return this.jwt.verifyAsync<TokenPayload>(token, this.JWT_OPTIONS)
  }

  private payloadForUser(user: User): TokenPayload {
    return {
      sub: user.id,
      email: user.email,
      role: user.role,
      'https://hasura.io/jwt/claims': {
        'x-hasura-allowed-roles': [user.role],
        'x-hasura-default-role': user.role,
        'x-hasura-user-id': user.id,
      },
    }
  }
}
