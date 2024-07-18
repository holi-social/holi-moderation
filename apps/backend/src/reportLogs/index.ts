import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { ReportLogger } from './service'
import { ReportEvent } from './entities/reportEvent'

@Module({
  imports: [TypeOrmModule.forFeature([ReportEvent])],
  providers: [ReportLogger],
  exports: [ReportLogger],
})
export class ReportLogsModule {}
