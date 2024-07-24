import { ClassProvider, Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { APP_GUARD } from '@nestjs/core'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigService } from '@nestjs/config'

import { AuthService } from './service/auth'
import { TokenService } from './service/token'
import { AuthResolver, UserResolver } from './resolver'
import { AuthGuard } from './guard'
import { User } from './entities/user'
import { CreateInitialUser } from './createInitialUser'

const GlobalAuthGuardProvider: ClassProvider = {
  provide: APP_GUARD,
  useClass: AuthGuard,
}

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get('MODERATION_JWT_SECRET'),
      }),
    }),
  ],
  providers: [
    AuthService,
    TokenService,
    AuthResolver,
    UserResolver,
    AuthGuard,
    GlobalAuthGuardProvider,
    CreateInitialUser,
  ],
  exports: [AuthGuard, CreateInitialUser],
})
export class AuthModule {}
