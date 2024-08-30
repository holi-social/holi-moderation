import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common'
import { Request } from 'express'
import { Reflector } from '@nestjs/core'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { GqlExecutionContext } from '@nestjs/graphql'

import { Metadata } from './decorators'
import { User } from './entities/user'
import { TokenPayload, TokenService } from './service/token'
import { UserRole } from './entities/userRole'
import { Reporter } from './entities/reporter'

type PossibleUnifiedApiRequest = { headers: { 'x-holi-user-id'?: string; 'x-holi-user-email'?: string } }
type ModerationServiceRequest = Request & PossibleUnifiedApiRequest

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly tokenService: TokenService,
    private readonly reflector: Reflector,
    @InjectRepository(User) private readonly users: Repository<User>,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const { isPublicRoute, isReporterRoute, isAdminRoute } = this.reflectRoutePermissions(context)

    if (isPublicRoute) {
      return true
    }

    // ctx is used to get the http request headers
    // and pass data to the resolvers via decorators
    const ctx = GqlExecutionContext.create(context).getContext<{
      req: ModerationServiceRequest
    }>()

    const request = ctx.req

    if (isReporterRoute) {
      if (this.isReporterRequest(request)) {
        const id = request.headers['x-holi-user-id']
        const email = request.headers['x-holi-user-email']
        ctx['reporter'] = new Reporter(id, email)
        return true
      } else {
        return false
      }
    }

    if (this.isFederatorRequest(request) && !isReporterRoute && !isPublicRoute && !isAdminRoute) {
      return true
    }

    const token = this.extractToken(request)
    if (!token) {
      return false
    }

    let payload: TokenPayload
    try {
      payload = await this.tokenService.verify(token)
    } catch {
      return false
    }

    const authenticatedUser = await this.users.findOneBy({ id: payload.sub })
    if (authenticatedUser) {
      ctx['authToken'] = payload
      ctx['user'] = authenticatedUser

      if (payload.role === UserRole.ADMIN) {
        return true
      }

      if (!isAdminRoute && payload.role === UserRole.MODERATOR) {
        return true
      }
    }

    return false
  }

  private reflectRoutePermissions(context: ExecutionContext) {
    const isPublicRoute = this.reflector.getAllAndOverride<boolean>(Metadata.IS_PUBLIC, [
      context.getHandler(),
      context.getClass(),
    ])

    const isReporterRoute = this.reflector.getAllAndOverride<boolean>(Metadata.REPORTER_ONLY, [
      context.getHandler(),
      context.getClass(),
    ])

    const isAdminRoute = this.reflector.getAllAndOverride<boolean>(Metadata.ADMIN_ONLY, [
      context.getHandler(),
      context.getClass(),
    ])
    return { isPublicRoute, isReporterRoute, isAdminRoute }
  }

  private extractToken(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? []
    return type === 'Bearer' ? token : undefined
  }

  private isReporterRequest(request: ModerationServiceRequest): boolean {
    return 'x-holi-user-id' in request.headers && 'x-holi-user-email' in request.headers
  }

  private isFederatorRequest(request: Request): boolean {
    return (
      !('authorization' in request.headers) &&
      'x-hasura-role' in request.headers &&
      request.headers['x-hasura-role'] === UserRole.ADMIN
    )
  }
}
