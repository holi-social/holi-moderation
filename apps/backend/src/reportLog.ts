import { Injectable } from '@nestjs/common';
import { ModerationDb } from './db';
import { reportEvents } from './db/schema';
import { ReportStatus } from './graphql/schema';
import { asc, eq } from 'drizzle-orm';

export enum ReportLogEvent {
  REPORT_CREATED = 'REPORT_CREATED',
  STATUS_CHANGED = 'STATUS_CHANGED',
}

export type EmptyPayload = Record<string, never>;

export type ReportEventPayload = StatusChangedEventPayload | EmptyPayload;

export type ReportCreatedEventPayload = EmptyPayload;
export type StatusChangedEventPayload = {
  oldStatus: ReportStatus;
  newStatus: ReportStatus;
};

export
@Injectable()
class ReportLogger {
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
