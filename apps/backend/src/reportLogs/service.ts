import {
  StatusChangedEventPayload,
  ReportLogEvent,
  EmptyPayload,
  ReportEventPayload,
} from '../reportLogs/types';

import { Injectable } from '@nestjs/common';
import { eq, asc } from 'drizzle-orm';
import { ModerationDb } from '../db';
import { reportEvents } from '../reports/dbSchema';
import { ReportStatus } from '../reports/schema';

@Injectable()
export class ReportLogger {
  constructor(private readonly moderationDb: ModerationDb) {}

  public async getReportLog(reportId: string) {
    return this.moderationDb.db.query.reportEvents.findMany({
      where: eq(reportEvents.reportId, reportId),
      orderBy: asc(reportEvents.occurredAt),
    });
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
    await this.moderationDb.db.insert(reportEvents).values({
      reportId,
      eventName,
      eventPayload,
    });
  }
}
