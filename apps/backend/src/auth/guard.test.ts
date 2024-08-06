import { createMock } from '@golevelup/ts-jest'
import type { Reflector } from '@nestjs/core'
import type { ExecutionContext } from '@nestjs/common'

import { createMockRepository } from '../testHelpers'

import type { TokenService } from './service/token'
import type { User } from './entities/user'
import { AuthGuard } from './guard'

describe('auth guard', () => {
  const tokenService = createMock<TokenService>()
  const reflector = createMock<Reflector>()
  const users = createMockRepository<User>()

  const guard = new AuthGuard(tokenService, reflector, users)
  const executionContext = createMock<ExecutionContext>()

  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('passes when route is public', async () => {
    reflector.getAllAndOverride.mockReturnValue(true)

    expect(await guard.canActivate(executionContext)).toEqual(true)
    expect(reflector.getAllAndOverride).toHaveBeenCalled()
  })
})
