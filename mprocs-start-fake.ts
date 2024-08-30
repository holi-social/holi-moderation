import type { IncomingMessage, ServerResponse } from 'http'
import { createServer } from 'http'

import type { IntrospectionQuery } from 'graphql'
import { introspectionFromSchema, parse as parseGql } from 'graphql'
import { NestFactory } from '@nestjs/core'
import { GraphQLSchemaBuilderModule, GraphQLSchemaFactory } from '@nestjs/graphql'
import { ReportsResolver } from '@holi/moderation-backend/dist/src/reports/resolver'
import { Pagination, Success } from '@holi/moderation-backend/dist/src/graphql/commonSchema'
import { AuthResolver } from '@holi/moderation-backend/dist/src/auth/resolver'

async function introSpectionSchemaFor(types: Array<any>): Promise<IntrospectionQuery> {
  const app = await NestFactory.create(GraphQLSchemaBuilderModule)
  await app.init()
  const gqlSchemaFactory = app.get(GraphQLSchemaFactory)
  const schema = await gqlSchemaFactory.create(types)
  await app.close()

  return introspectionFromSchema(schema)
}

const buildListener =
  (introspectionResponse: object, createReportResponse: object) => (req: IncomingMessage, res: ServerResponse) => {
    let body = ''

    req.on('data', (chunk) => {
      body += chunk.toString()
    })

    req.on('end', () => {
      if (!body) return res.end()

      const parsedBody = JSON.parse(body)
      const query = parsedBody.query
      const operationName = parsedBody.operationName

      const parsedQuery = parseGql(query)
      const inferredOperationName =
        operationName ||
        parsedQuery.definitions.find((def) => def.kind === 'OperationDefinition')?.name?.value ||
        'Unnamed Operation'

      console.log(inferredOperationName)

      if ('IntrospectionQuery' === inferredOperationName) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(introspectionResponse))
      }
      if ('ReportContent' === inferredOperationName) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ data: createReportResponse }))
      }
    })
  }

const PORT = 3001

const COMMON_RESOLVERS = [AuthResolver]
const COMMON_TYPES = [Pagination, Success]

const RESOLVERS_TO_FAKE = [ReportsResolver]

;(async () => {
  const introspectionSchema = await introSpectionSchemaFor([...RESOLVERS_TO_FAKE, ...COMMON_RESOLVERS, ...COMMON_TYPES])

  const introspectionResponse = {
    data: introspectionSchema,
  }
  const createReportResponse = {
    // "moderation_" relates to the unified-api mesh prefix name for the mutation
    moderation_createReport: {
      success: true,
    },
  }

  const listener = buildListener(introspectionResponse, createReportResponse)
  const server = createServer(listener)
  server.listen(PORT, () => {
    console.log(`Fake backend running on http://localhost:${PORT}/graphql`)
  })
})()
