import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';

import { UUID } from './graphql/uuidScalar';
import { PubsubModule } from './pubsub';
import { ReportLogsModule } from './reportLogs';
import { ModeratorActionsModule } from './moderatorActions';
import { ReportsModule } from './reports';
import { AuthModule } from './auth';
import typeormConfig from './typeorm';
import { HealthCheckModule } from './healthcheck';

@Module({
  imports: [
    ConfigModule.forRoot({
      ignoreEnvFile: true,
      isGlobal: true,
      load: [typeormConfig],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => config.get('typeorm'),
    }),
    ScheduleModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
      resolvers: { UUID: UUID },
    }),
    AuthModule,
    PubsubModule,
    ReportLogsModule,
    ModeratorActionsModule,
    ReportsModule,
    HealthCheckModule,
  ],
})
export class AppModule {}
