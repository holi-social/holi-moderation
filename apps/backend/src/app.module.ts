import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UUID } from './graphql/uuidScalar';
import { PubsubModule } from './pubsub';
import { ReportLogsModule } from './reportLogs';
import { ModeratorActionsModule } from './moderatorActions';
import { ReportsModule } from './reports';
import { AuthModule } from './auth';
import { TypeOrmModule } from '@nestjs/typeorm';
import typeormConfig from './typeorm';

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
  ],
})
export class AppModule {}
