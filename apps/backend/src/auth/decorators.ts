import {
  ExecutionContext,
  SetMetadata,
  createParamDecorator,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { TokenPayload } from './service/token';

export enum Metadata {
  IS_PUBLIC = 'isPublic',
  ADMIN_ONLY = 'adminOnly',
}

export const Public = () => SetMetadata(Metadata.IS_PUBLIC, true);
export const AdminOnly = () => SetMetadata(Metadata.ADMIN_ONLY, true);

export const AuthToken = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) =>
    GqlExecutionContext.create(ctx).getContext<{ authToken: TokenPayload }>()
      .authToken,
);
