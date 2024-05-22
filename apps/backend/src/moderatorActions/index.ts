import { Module } from '@nestjs/common';
import { ModerationActionResolver } from './resolver';
import { PubsubModule } from '../pubsub';

@Module({
  imports: [PubsubModule],
  providers: [ModerationActionResolver],
})
export class ModeratorActionsModule {}
