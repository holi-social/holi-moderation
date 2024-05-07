import { Injectable } from '@nestjs/common';
import { ModerationDb } from './db';
import { reportEvents } from './db/schema';
import { ReportStatus } from './graphql/schema';
import { asc, eq } from 'drizzle-orm';
import { Field, InterfaceType, ObjectType } from '@nestjs/graphql';

export enum ReportLogEvent {
  STATUS_CHANGED = 'STATUS_CHANGED',
}

@InterfaceType()
export abstract class ReportEventPayload {}

@ObjectType({ implements: () => [ReportEventPayload] })
export class StatusChangedEventPayload extends ReportEventPayload {
  @Field()
  oldStatus: ReportStatus;

  @Field()
  newStatus: ReportStatus;
}

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
