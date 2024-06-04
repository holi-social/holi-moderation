import {
  StatusChangedEventPayload,
  ReportLogEvent,
  EmptyPayload,
  ReportEventPayload,
} from '../reportLogs/types';

import { Injectable } from '@nestjs/common';
import { ReportStatus } from '../reports/entities/reportStatus';
import { InjectRepository } from '@nestjs/typeorm';
import { ReportEvent } from './entities/reportEvent';
import { Repository } from 'typeorm';

@Injectable()
export class ReportLogger {
  constructor(
    @InjectRepository(ReportEvent)
    private readonly repository: Repository<ReportEvent>,
  ) {}

  public async getReportLog(reportId: string): Promise<ReportEvent[]> {
    return this.repository.findBy({ report: { id: reportId } });
  }

  public async logStatusChanged(
    reportId: string,
    oldStatus: ReportStatus,
    newStatus: ReportStatus,
  ): Promise<void> {
    return this.logEvent<StatusChangedEventPayload>(
      reportId,
      ReportLogEvent.STATUS_CHANGED,
      { oldStatus, newStatus },
    );
  }

  public async logReportCreated(reportId: string): Promise<void> {
    return this.logEvent<EmptyPayload>(
      reportId,
      ReportLogEvent.REPORT_CREATED,
      {},
    );
  }

  private async logEvent<TPayload extends ReportEventPayload>(
    reportId: string,
    eventName: ReportLogEvent,
    eventPayload: TPayload,
  ) {
    await this.repository
      .createQueryBuilder()
      .insert()
      .into(ReportEvent)
      .values({
        report: { id: reportId },
        eventName,
        eventPayload,
      })
      .execute();
  }
}
