import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { TokenService } from './service/token';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Reflector } from '@nestjs/core';
import { Metadata } from './decorators';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly token: TokenService,
    private readonly reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(
      Metadata.IS_PUBLIC,
      [context.getHandler(), context.getClass()],
    );

    if (isPublic) {
      return true;
    }

    const ctx = GqlExecutionContext.create(context).getContext<{
      req: Request;
    }>();

    const request = ctx.req;
    const token = this.extractToken(request);

    if (!token) {
      throw new UnauthorizedException();
    }

    return this.token.verify(token);
  }

  private extractToken(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
