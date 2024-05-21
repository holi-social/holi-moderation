import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { ModerationDb } from './db';
import { MigrateCommand } from './db/migrate.command';
import { UUID } from './graphql/schema';
import { ModerationActionResolver, ReportsResolver } from './graphql/resolvers';
import { Publisher, PubsubProvider, PubsubTopicProvider } from './pubsub';
import { ReportLogger } from './reportLog';
import { AuthService } from './auth/service/auth';
import { TokenService } from './auth/service/token';
import { UserService } from './auth/service/user';
import { AuthGuard } from './auth/guard';
import { JwtService } from '@nestjs/jwt';
import { AuthResolver } from './auth/resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      sortSchema: true,
      resolvers: { UUID: UUID },
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
    AuthService,
    TokenService,
    UserService,
    AuthGuard,
    JwtService,
    AuthResolver,
    // CreateUserQuestions,
    // CreateUserCommand,
  ],
})
export class AppModule {}
