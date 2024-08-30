import type { ExecutionContext } from '@nestjs/common'
import type { Reflector } from '@nestjs/core'
import type { DeepMocked } from '@golevelup/ts-jest'
import { createMock } from '@golevelup/ts-jest'
import { GqlExecutionContext } from '@nestjs/graphql'

import { createMockRepository } from '../testHelpers'

import type { TokenService } from './service/token'
import type { User } from './entities/user'
import { AuthGuard } from './guard'
import { UserRole } from './entities/userRole'
import { Metadata } from './decorators'

describe('AuthGuard request', () => {
  let authGuard: AuthGuard
  let context: DeepMocked<ExecutionContext>
  const tokenService = createMock<TokenService>()
  const reflector = createMock<Reflector>()
  const userRepository = createMockRepository<User>()

  const decorateRouteAccess = (...decorators: Metadata[]) => {
    reflector.getAllAndOverride.mockImplementation((decorator: Metadata) => decorators.includes(decorator))
  }

  const setupReqHeaders = (reqHeaders: object) => {
    jest.spyOn(GqlExecutionContext, 'create').mockReturnValue({
      getContext: jest.fn().mockReturnValue({ req: { headers: reqHeaders } }),
    } as any)
  }

  beforeEach(() => {
    tokenService.verify.mockImplementation(() => {
      throw new Error('No valid token')
    })

    context = createMock<ExecutionContext>()

    authGuard = new AuthGuard(tokenService, reflector, userRepository)
  })

  describe('without authorization', () => {
    beforeEach(() => {
      setupReqHeaders({})
    })

    it('activates public routes', async () => {
      decorateRouteAccess(Metadata.IS_PUBLIC)
      await expect(authGuard.canActivate(context)).resolves.toBe(true)
    })

    it('locks reporter routes', async () => {
      decorateRouteAccess(Metadata.REPORTER_ONLY)
      await expect(authGuard.canActivate(context)).resolves.toBe(false)
    })

    it('locks admin routes', async () => {
      decorateRouteAccess(Metadata.ADMIN_ONLY)
      await expect(authGuard.canActivate(context)).resolves.toBe(false)
    })

    it('locks user routes', async () => {
      decorateRouteAccess()
      await expect(authGuard.canActivate(context)).resolves.toBe(false)
    })
  })

  describe('using x-holi headers', () => {
    beforeEach(() => {
      setupReqHeaders({
        'x-holi-user-id': 'reporter-id',
        'x-holi-user-email': 'reporter@example.com',
      })
    })

    it('activates reporter only routes', async () => {
      decorateRouteAccess(Metadata.REPORTER_ONLY)
      await expect(authGuard.canActivate(context)).resolves.toBe(true)
    })

    it('locks admin routes', async () => {
      decorateRouteAccess(Metadata.ADMIN_ONLY)
      await expect(authGuard.canActivate(context)).resolves.toBe(false)
    })

    it('activates public routes', async () => {
      decorateRouteAccess(Metadata.IS_PUBLIC)
      await expect(authGuard.canActivate(context)).resolves.toBe(true)
    })

    it('locks user routes', async () => {
      decorateRouteAccess()
      await expect(authGuard.canActivate(context)).resolves.toBe(false)
    })
  })

  describe('using jwt', () => {
    beforeEach(() => {
      setupReqHeaders({
        authorization: 'Bearer token',
      })
    })

    describe('as a moderator', () => {
      beforeEach(() => {
        tokenService.verify.mockResolvedValue({
          sub: 'sub',
          email: 'someEmail',
          role: UserRole.MODERATOR,
          'https://hasura.io/jwt/claims': {
            'x-hasura-allowed-roles': [UserRole.MODERATOR],
            'x-hasura-default-role': UserRole.MODERATOR,
            'x-hasura-user-id': 'someUserId',
          },
        })
      })

      it('locks reporter routes', async () => {
        decorateRouteAccess(Metadata.REPORTER_ONLY)
        await expect(authGuard.canActivate(context)).resolves.toBe(false)
      })

      it('locks admin routes', async () => {
        decorateRouteAccess(Metadata.ADMIN_ONLY)
        await expect(authGuard.canActivate(context)).resolves.toBe(false)
      })

      it('activates public routes', async () => {
        decorateRouteAccess(Metadata.IS_PUBLIC)
        await expect(authGuard.canActivate(context)).resolves.toBe(true)
      })

      it('activates user routes', async () => {
        decorateRouteAccess()
        await expect(authGuard.canActivate(context)).resolves.toBe(true)
      })
    })

    describe('as a admin', () => {
      beforeEach(() => {
        tokenService.verify.mockResolvedValue({
          sub: 'sub',
          email: 'someAdminEmail',
          role: UserRole.ADMIN,
          'https://hasura.io/jwt/claims': {
            'x-hasura-allowed-roles': [UserRole.ADMIN],
            'x-hasura-default-role': UserRole.ADMIN,
            'x-hasura-user-id': 'someAdminId',
          },
        })
      })

      it('locks reporter routes', async () => {
        decorateRouteAccess(Metadata.REPORTER_ONLY)
        await expect(authGuard.canActivate(context)).resolves.toBe(false)
      })

      it('activates admin routes', async () => {
        decorateRouteAccess(Metadata.ADMIN_ONLY)
        await expect(authGuard.canActivate(context)).resolves.toBe(true)
      })

      it('activates public routes', async () => {
        decorateRouteAccess(Metadata.IS_PUBLIC)
        await expect(authGuard.canActivate(context)).resolves.toBe(true)
      })

      it('activates user routes', async () => {
        decorateRouteAccess()
        await expect(authGuard.canActivate(context)).resolves.toBe(true)
      })
    })

    describe('with invalid token', () => {
      beforeEach(() => {
        tokenService.verify.mockImplementation(() => {
          throw new Error('Cant verify')
        })
      })

      it('locks reporter routes', async () => {
        decorateRouteAccess(Metadata.REPORTER_ONLY)
        await expect(authGuard.canActivate(context)).resolves.toBe(false)
      })

      it('locks admin routes', async () => {
        decorateRouteAccess(Metadata.ADMIN_ONLY)
        await expect(authGuard.canActivate(context)).resolves.toBe(false)
      })

      it('activates public routes', async () => {
        decorateRouteAccess(Metadata.IS_PUBLIC)
        await expect(authGuard.canActivate(context)).resolves.toBe(true)
      })

      it('locks user routes', async () => {
        decorateRouteAccess()
        await expect(authGuard.canActivate(context)).resolves.toBe(false)
      })
    })
  })

  describe('being the federator', () => {
    beforeEach(() => {
      setupReqHeaders({
        'x-hasura-role': UserRole.ADMIN,
      })
    })

    it('locks reporter routes', async () => {
      decorateRouteAccess(Metadata.REPORTER_ONLY)
      await expect(authGuard.canActivate(context)).resolves.toBe(false)
    })

    it('locks admin routes', async () => {
      decorateRouteAccess(Metadata.ADMIN_ONLY)
      await expect(authGuard.canActivate(context)).resolves.toBe(false)
    })

    it('activates public routes', async () => {
      decorateRouteAccess(Metadata.IS_PUBLIC)
      await expect(authGuard.canActivate(context)).resolves.toBe(true)
    })

    it('activates user routes so that the hasura graphql explorer works', async () => {
      decorateRouteAccess()
      await expect(authGuard.canActivate(context)).resolves.toBe(true)
    })
  })
})
