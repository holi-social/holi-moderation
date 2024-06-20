import { Module } from '@nestjs/common';
import { ModerationActionResolver } from './resolver';
import { PubsubModule } from '../pubsub';
import { UserSuspensions } from './userSuspensions';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSuspension } from './entities/userSuspension';

@Module({
  imports: [PubsubModule, TypeOrmModule.forFeature([UserSuspension])],
  providers: [UserSuspensions, ModerationActionResolver],
})
export class ModeratorActionsModule {}
