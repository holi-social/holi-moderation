import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db';
import { UUID } from './graphql/uuidScalar';
import { PubsubModule } from './pubsub';
import { ReportLogsModule } from './reportLogs';
import { ModeratorActionsModule } from './moderatorActions';
import { ReportsModule } from './reports';
import { AuthModule } from './auth';
import { MigrateCommand } from './db/migrate.command';
import { CommandRunnerModule } from 'nest-commander';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
      resolvers: { UUID: UUID },
    }),
    ConfigModule.forRoot({ ignoreEnvFile: true, isGlobal: true }),
    CommandRunnerModule.forModule(),
    DbModule,
    AuthModule,
    PubsubModule,
    ReportLogsModule,
    ModeratorActionsModule,
    ReportsModule,
  ],
  providers: [MigrateCommand], // for some reason this doesn't work when defined in the DbModule. So here it stays.
})
export class AppModule {}
