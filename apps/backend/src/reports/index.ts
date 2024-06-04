import { Module } from '@nestjs/common';
import { ReportsResolver } from './resolver';
import { ReportLogsModule } from '../reportLogs';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Report } from './entities/report';

@Module({
  imports: [ReportLogsModule, TypeOrmModule.forFeature([Report])],
  providers: [ReportsResolver],
  exports: [ReportsResolver],
})
export class ReportsModule {}
