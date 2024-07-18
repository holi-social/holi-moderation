import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common'
import { Request } from 'express'
import { GqlExecutionContext } from '@nestjs/graphql'
import { Reflector } from '@nestjs/core'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'

import { Metadata } from './decorators'
import { User } from './entities/user'
import { TokenPayload, TokenService } from './service/token'
import { UserRole } from './entities/userRole'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly token: TokenService,
    private readonly reflector: Reflector,
    @InjectRepository(User) private readonly users: Repository<User>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(Metadata.IS_PUBLIC, [
      context.getHandler(),
      context.getClass(),
    ])

    const isAdminOnly = this.reflector.getAllAndOverride<boolean>(Metadata.ADMIN_ONLY, [
      context.getHandler(),
      context.getClass(),
    ])

    if (isPublic) {
      return true
    }

    const ctx = GqlExecutionContext.create(context).getContext<{
      req: Request
    }>()

    const request = ctx.req
    const token = this.extractToken(request)

    if (this.isHasuraAdminRequest(request)) {
      return true
    }

    if (!token) {
      throw new UnauthorizedException()
    }

    let payload: TokenPayload
    try {
      payload = await this.token.verify(token)
    } catch {
      return false
    }

    ctx['authToken'] = payload
    ctx['user'] = this.users.findOneBy({ id: payload.sub })

    if (isAdminOnly && payload.role !== UserRole.ADMIN) {
      return false
    }

    return true
  }

  private extractToken(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? []
    return type === 'Bearer' ? token : undefined
  }

  private isHasuraAdminRequest(request: Request): boolean {
    return (
      !('authorization' in request.headers) &&
      'x-hasura-role' in request.headers &&
      request.headers['x-hasura-role'] === UserRole.ADMIN
    )
  }
}
