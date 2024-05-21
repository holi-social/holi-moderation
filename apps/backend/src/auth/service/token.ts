import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { User } from './user';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';

type HasuraRole = 'moderator';

export type TokenPayload = {
  sub: string;
  email: string;
  'https://hasura.io/jwt/claims': {
    'x-hasura-allowed-roles': HasuraRole[];
    'x-hasura-default-role': HasuraRole;
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

  async verify(token: string): Promise<boolean> {
    try {
      this.jwt.verify(token, this.jwtOptions());
    } catch {
      return false;
    }

    return true;
  }

  private payloadForUser(user: User): TokenPayload {
    return {
      sub: user.id,
      email: user.email,
      'https://hasura.io/jwt/claims': {
        'x-hasura-allowed-roles': ['moderator'],
        'x-hasura-default-role': 'moderator',
        'x-hasura-user-id': user.id,
      },
    };
  }

  private jwtOptions(): JwtSignOptions {
    return { secret: this.JWT_SECRET, ...this.JWT_OPTIONS };
  }
}
