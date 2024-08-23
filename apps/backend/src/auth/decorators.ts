import type { ExecutionContext } from '@nestjs/common'
import { createParamDecorator, SetMetadata } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'

import type { TokenPayload } from './service/token'
import type { User } from './entities/user'
import type { Reporter } from './entities/reporter'

export enum Metadata {
  IS_PUBLIC = 'isPublic',
  REPORTER_ONLY = 'reporterOnly',
  ADMIN_ONLY = 'adminOnly',
}

export const Public = () => SetMetadata(Metadata.IS_PUBLIC, true)
export const ReporterOnly = () => SetMetadata(Metadata.REPORTER_ONLY, true)
export const AdminOnly = () => SetMetadata(Metadata.ADMIN_ONLY, true)

export const AuthToken = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) =>
    GqlExecutionContext.create(ctx).getContext<{ authToken?: TokenPayload }>().authToken,
)

export const AuthenticatedUser = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) =>
    GqlExecutionContext.create(ctx).getContext<{ moderator?: User }>().moderator,
)

export const AuthenticatedReporter = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) =>
    GqlExecutionContext.create(ctx).getContext<{ reporter: Reporter }>().reporter,
)
