import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { ReportStatus } from '../reports/entities/reportStatus'
import {
  StatusChangedEventPayload,
  ReportLogEvent,
  ReportEventPayload,
  ReportCreatedEventPayload,
  UserSuspendedEventPayload,
} from '../reportLogs/types'
import { User } from '../auth/entities/user'

import { ReportEvent } from './entities/reportEvent'

@Injectable()
export class ReportLogger {
  constructor(
    @InjectRepository(ReportEvent)
    private readonly repository: Repository<ReportEvent>,
  ) {}

  public async getReportLog(reportId: string): Promise<ReportEvent[]> {
    return this.repository.find({
      where: { report: { id: reportId } },
      order: { occurredAt: 'ASC' },
      relations: { actor: true },
    })
  }

  public async logStatusChanged(
    reportId: string,
    oldStatus: ReportStatus,
    newStatus: ReportStatus,
    actor: User,
  ): Promise<void> {
    return this.logEvent<StatusChangedEventPayload>(
      reportId,
      ReportLogEvent.STATUS_CHANGED,
      { oldStatus, newStatus },
      actor,
    )
  }

  public async logReportCreated(reportId: string): Promise<void> {
    return this.logEvent<ReportCreatedEventPayload>(reportId, ReportLogEvent.REPORT_CREATED, {})
  }

  public async logUserSuspended(reportId: string, userEmail: string, actor: User, duration?: number): Promise<void> {
    return this.logEvent<UserSuspendedEventPayload>(
      reportId,
      ReportLogEvent.USER_SUSPENDED,
      { userEmail, duration },
      actor,
    )
  }

  private async logEvent<TPayload extends ReportEventPayload>(
    reportId: string,
    eventName: ReportLogEvent,
    eventPayload: TPayload,
    actor?: User,
  ) {
    const eventData = {
      report: { id: reportId },
      eventName,
      eventPayload,
    }
    if (actor) {
      eventData['actor'] = { id: actor.id }
    }

    await this.repository.createQueryBuilder().insert().into(ReportEvent).values(eventData).execute()
  }
}
