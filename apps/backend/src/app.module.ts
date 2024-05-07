import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { ModerationDb } from './db';
import { MigrateCommand } from './db/migrate.command';
import { UUID } from './graphql/schema';
import { ModerationActionResolver, ReportsResolver } from './graphql/resolvers';
import { Publisher, PubsubProvider, PubsubTopicProvider } from './pubsub';
import GraphQLJSON from 'graphql-type-json';
import { ReportLogger } from './reportLog';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
      resolvers: { UUID: UUID, JSON: GraphQLJSON },
    }),
    ConfigModule.forRoot({ ignoreEnvFile: true }),
  ],
  providers: [
    ModerationDb,
    MigrateCommand,
    ReportsResolver,
    ModerationActionResolver,
    PubsubProvider,
    PubsubTopicProvider,
    Publisher,
    ReportLogger,
  ],
})
export class AppModule {}
