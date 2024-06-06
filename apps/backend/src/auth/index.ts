import { ClassProvider, Module } from '@nestjs/common';
import { AuthService } from './service/auth';
import { TokenService } from './service/token';
import { AuthResolver, UserResolver } from './resolver';
import { AuthGuard } from './guard';
import { JwtModule } from '@nestjs/jwt';
import { CreateUserCommand, CreateUserQuestions } from './createUser.command';
import { APP_GUARD } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user';
import { CreateInitialUser } from './createInitialUser';

const GlobalAuthGuardProvider: ClassProvider = {
  provide: APP_GUARD,
  useClass: AuthGuard,
};

@Module({
  imports: [TypeOrmModule.forFeature([User]), JwtModule],
  providers: [
    AuthService,
    TokenService,
    AuthResolver,
    UserResolver,
    AuthGuard,
    CreateUserQuestions,
    CreateUserCommand,
    GlobalAuthGuardProvider,
    CreateInitialUser,
  ],
  exports: [AuthGuard, CreateUserCommand, CreateInitialUser],
})
export class AuthModule {}
