import { Module } from '@nestjs/common';
import { ReportLogger } from './service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportEvent } from './entities/reportEvent';

@Module({
  imports: [TypeOrmModule.forFeature([ReportEvent])],
  providers: [ReportLogger],
  exports: [ReportLogger],
})
export class ReportLogsModule {}
