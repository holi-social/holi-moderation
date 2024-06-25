import { Module } from '@nestjs/common';
import { PubsubModule } from '../pubsub';
import { UserSuspensions } from './userSuspensions';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSuspension } from './entities/userSuspension';
import { UserSuspensionResolver } from './resolvers/userSuspension';

@Module({
  imports: [PubsubModule, TypeOrmModule.forFeature([UserSuspension])],
  providers: [UserSuspensions, UserSuspensionResolver],
})
export class ModeratorActionsModule {}
