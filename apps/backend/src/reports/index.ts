import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ReportLogsModule } from '../reportLogs'

import { Report } from './entities/report'
import { ReportsResolver } from './resolver'

@Module({
  imports: [ReportLogsModule, TypeOrmModule.forFeature([Report])],
  providers: [ReportsResolver],
  exports: [ReportsResolver],
})
export class ReportsModule {}
