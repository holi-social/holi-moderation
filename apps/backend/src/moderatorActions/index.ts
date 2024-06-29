import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PubsubModule } from '../pubsub';
import { ReportLogsModule } from '../reportLogs';

import { UserSuspensions } from './userSuspensions';
import { UserSuspension } from './entities/userSuspension';
import { UserSuspensionResolver } from './resolvers/userSuspension';

@Module({
  imports: [
    PubsubModule,
    TypeOrmModule.forFeature([UserSuspension]),
    ReportLogsModule,
  ],
  providers: [UserSuspensions, UserSuspensionResolver],
})
export class ModeratorActionsModule {}
