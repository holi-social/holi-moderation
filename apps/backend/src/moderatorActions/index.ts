import { Module } from '@nestjs/common';
import { PubsubModule } from '../pubsub';
import { UserSuspensions } from './userSuspensions';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSuspension } from './entities/userSuspension';
import { UserSuspensionResolver } from './resolvers/userSuspension';
import { ReportLogsModule } from '../reportLogs';

@Module({
  imports: [
    PubsubModule,
    TypeOrmModule.forFeature([UserSuspension]),
    ReportLogsModule,
  ],
  providers: [UserSuspensions, UserSuspensionResolver],
})
export class ModeratorActionsModule {}
