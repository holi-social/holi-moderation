import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';

import { User } from '../entities/user';
import { UserRole } from '../entities/userRole';

type Role = `${UserRole}`;

export type TokenPayload = {
  sub: string;
  email: string;
  role: Role;
  'https://hasura.io/jwt/claims': {
    'x-hasura-allowed-roles': Role[];
    'x-hasura-default-role': Role;
    'x-hasura-user-id': string;
  };
};

@Injectable()
export class TokenService {
  private readonly JWT_SECRET: string;
  private readonly JWT_OPTIONS: Omit<JwtSignOptions, 'secret'> = {
    expiresIn: 6 * 60 * 60, // 6 hours
    algorithm: 'HS256',
    audience: 'moderation.holi.social',
  };

  constructor(
    config: ConfigService,
    private readonly jwt: JwtService,
  ) {
    this.JWT_SECRET = config.get('MODERATION_JWT_SECRET');
  }

  async signForUser(user: User): Promise<string> {
    const payload = this.payloadForUser(user);

    return this.jwt.signAsync(payload, this.jwtOptions());
  }

  async verify(token: string): Promise<TokenPayload> {
    return this.jwt.verify<TokenPayload>(token, this.jwtOptions());
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
    };
  }

  private jwtOptions(): JwtSignOptions {
    return { secret: this.JWT_SECRET, ...this.JWT_OPTIONS };
  }
}
