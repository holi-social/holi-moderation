import { Module } from '@nestjs/common';
import { ReportLogger } from './service';
import { DbModule } from '../db';

@Module({
  imports: [DbModule],
  providers: [ReportLogger],
  exports: [ReportLogger],
})
export class ReportLogsModule {}
