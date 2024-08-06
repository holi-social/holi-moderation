import { randomUUID } from 'crypto'

import type { DeepPartial } from 'typeorm'

import { ReportStatus } from '../reports/entities/reportStatus'
import type { User } from '../auth/entities/user'
import { createMockRepository } from '../testHelpers'

import { ReportEvent } from './entities/reportEvent'
import { ReportLogger } from './service'
import { ReportLogEvent } from './types'

describe('report log', () => {
  const reportId = randomUUID()
  const actorId = randomUUID()

  const repo = createMockRepository<ReportEvent>({
    create: (input: DeepPartial<ReportEvent>) => {
      const event = new ReportEvent()
      event.id = randomUUID()
      event.occurredAt = new Date()

      return {
        ...event,
        ...input,
      }
    },
  })
  const service = new ReportLogger(repo)

  beforeEach(() => {
    repo.create.mockClear()
    repo.save.mockClear()
  })

  it('logs report creation', async () => {
    await service.logReportCreated(reportId)

    expect(repo.create).toHaveBeenCalledTimes(1)
    expect(repo.save).toHaveBeenCalledTimes(1)

    const savedEvent = repo.save.mock.calls[0][0]

    expect(savedEvent.report.id).toEqual(reportId)
    expect(savedEvent.eventName).toEqual(ReportLogEvent.REPORT_CREATED)
    expect(savedEvent.eventPayload).toEqual({})
    expect(savedEvent.actor).toBeUndefined()
  })

  it('logs report status change', async () => {
    await service.logStatusChanged(reportId, ReportStatus.OPEN, ReportStatus.IN_PROGRESS, {
      id: actorId,
    } as unknown as User)

    expect(repo.create).toHaveBeenCalledTimes(1)
    expect(repo.save).toHaveBeenCalledTimes(1)

    const savedEvent = repo.save.mock.calls[0][0]

    expect(savedEvent.report.id).toEqual(reportId)
    expect(savedEvent.eventName).toEqual(ReportLogEvent.STATUS_CHANGED)
    expect(savedEvent.eventPayload).toEqual({
      oldStatus: ReportStatus.OPEN,
      newStatus: ReportStatus.IN_PROGRESS,
    })
    expect(savedEvent.actor.id).toEqual(actorId)
  })

  it('logs when a user is suspended', async () => {
    const suspensionDuration = 7 * 24 * 60 // 7 days in minutes

    await service.logUserSuspended(
      reportId,
      'test@holi.social',
      {
        id: actorId,
      } as unknown as User,
      suspensionDuration,
    )

    expect(repo.create).toHaveBeenCalledTimes(1)
    expect(repo.save).toHaveBeenCalledTimes(1)

    const savedEvent = repo.save.mock.calls[0][0]

    expect(savedEvent.report.id).toEqual(reportId)
    expect(savedEvent.eventName).toEqual(ReportLogEvent.USER_SUSPENDED)
    expect(savedEvent.eventPayload).toEqual({
      userEmail: 'test@holi.social',
      duration: suspensionDuration,
    })
    expect(savedEvent.actor.id).toEqual(actorId)
  })
})
