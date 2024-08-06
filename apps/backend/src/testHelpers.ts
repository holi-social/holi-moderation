import type { DeepMocked, PartialFuncReturn } from '@golevelup/ts-jest'
import { createMock } from '@golevelup/ts-jest'
import type { ObjectLiteral, Repository, SelectQueryBuilder } from 'typeorm'
import { jest } from '@jest/globals'

type MockQueryBuilder<T> = DeepMocked<SelectQueryBuilder<T>>

export const createMockQueryBuilder = <T>(overrides?: PartialFuncReturn<SelectQueryBuilder<T>>) =>
  createMock<SelectQueryBuilder<T>>({
    select: jest.fn().mockReturnThis(),
    where: jest.fn().mockReturnThis(),
    andWhere: jest.fn().mockReturnThis(),
    orderBy: jest.fn().mockReturnThis(),
    limit: jest.fn().mockReturnThis(),
    offset: jest.fn().mockReturnThis(),
    ...overrides,
  }) as MockQueryBuilder<T>

export type MockRepository<T> = DeepMocked<Repository<T>> & { mockQueryBuilder: MockQueryBuilder<T> }

export const createMockRepository = <T>(overrides?: PartialFuncReturn<Repository<T>>) => {
  const mockQueryBuilder = createMockQueryBuilder<T>()

  const mockRepo = createMock<Repository<T>>({
    createQueryBuilder: jest.fn().mockReturnValue(mockQueryBuilder),
    save: (entity: ObjectLiteral) => Promise.resolve(entity),
    ...overrides,
  })

  mockRepo['mockQueryBuilder'] = mockQueryBuilder

  return mockRepo as MockRepository<T>
}
