import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { TokenPayload, TokenService } from './service/token';
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

    const isAdminOnly = this.reflector.getAllAndOverride<boolean>(
      Metadata.ADMIN_ONLY,
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

    if (this.isHasuraAdminRequest(request)) {
      return true;
    }

    if (!token) {
      throw new UnauthorizedException();
    }

    let payload: TokenPayload;
    try {
      payload = await this.token.verify(token);
    } catch {
      return false;
    }

    ctx['authToken'] = payload;

    if (
      isAdminOnly &&
      payload.role !== 'admin' &&
      !this.isHasuraAdminRequest(request)
    ) {
      return false;
    }

    return true;
  }

  private extractToken(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

  private isHasuraAdminRequest(request: Request): boolean {
    return 'x-hasura-admin-secret' in request.headers;
  }
}
