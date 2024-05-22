import { Module } from '@nestjs/common';
import { AuthService } from './service/auth';
import { TokenService } from './service/token';
import { UserService } from './service/user';
import { AuthResolver } from './resolver';
import { AuthGuard } from './guard';
import { DbModule } from '../db';
import { JwtModule } from '@nestjs/jwt';
import { CreateUserCommand, CreateUserQuestions } from './createUser.command';

@Module({
  imports: [DbModule, JwtModule],
  providers: [
    AuthService,
    TokenService,
    UserService,
    AuthResolver,
    AuthGuard,
    CreateUserQuestions,
    CreateUserCommand,
  ],
  exports: [AuthGuard, CreateUserCommand],
})
export class AuthModule {}
