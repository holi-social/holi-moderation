import { Module } from '@nestjs/common';
import { ReportsResolver } from './resolver';
import { DbModule } from '../db';
import { ReportLogsModule } from '../reportLogs';

@Module({
  imports: [DbModule, ReportLogsModule],
  providers: [ReportsResolver],
  exports: [ReportsResolver],
})
export class ReportsModule {}
