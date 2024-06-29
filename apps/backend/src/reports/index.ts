import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ReportLogsModule } from '../reportLogs';

import { ReportsResolver } from './resolver';
import { Report } from './entities/report';

@Module({
  imports: [ReportLogsModule, TypeOrmModule.forFeature([Report])],
  providers: [ReportsResolver],
  exports: [ReportsResolver],
})
export class ReportsModule {}
