import type { StringValueNode } from 'graphql'
import { GraphQLScalarType } from 'graphql'
import { validate as validateUUID } from 'uuid'

const assertUUID = (input: string) => {
  if (!validateUUID(input)) {
    throw new Error('Invalid UUID value')
  }

  return input
}

export const UUID = new GraphQLScalarType({
  name: 'UUID',
  description: 'UUID',
  parseValue: assertUUID,
  parseLiteral: (ast: StringValueNode) => assertUUID(ast.value),
  serialize: assertUUID,
})
