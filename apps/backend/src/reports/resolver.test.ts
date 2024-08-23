import { randomUUID } from 'crypto'

import type { DeepMocked } from '@golevelup/ts-jest'
import { createMock } from '@golevelup/ts-jest'
import { NotFoundException } from '@nestjs/common'

import type { User } from '../auth/entities/user'
import type { ReportLogger } from '../reportLogs/service'
import type { MockRepository } from '../testHelpers'
import { createMockRepository } from '../testHelpers'
import type { Reporter } from '../auth/entities/reporter'

import { ReportsResolver } from './resolver'
import { Report } from './entities/report'
import { ReportStatus } from './entities/reportStatus'
import { ContentType } from './entities/contentType'
import type { ReportSubmission } from './schema'

describe('reports resolver', () => {
  let reportLogger: DeepMocked<ReportLogger>
  let repo: MockRepository<Report>
  let resolver: ReportsResolver

  const fakeReport = (overrides: Partial<Report> = {}) => {
    const report = new Report()
    report.id = randomUUID()
    report.contentType = ContentType.POST
    report.contentId = randomUUID()
    report.status = ReportStatus.OPEN
    report.details = 'bad content'
    report.reporterId = randomUUID()
    report.createdAt = new Date()
    report.updatedAt = new Date()
    report.events = []

    return {
      ...report,
      ...overrides,
    }
  }

  beforeEach(() => {
    reportLogger = createMock()

    repo = createMockRepository<Report>({
      create: jest.fn().mockImplementation(fakeReport),
    })

    resolver = new ReportsResolver(reportLogger, repo)
  })

  describe('list reports', () => {
    it('always sorts by created date', async () => {
      await resolver.reports(null, null)

      expect(repo.mockQueryBuilder.orderBy).toHaveBeenCalledWith('report.createdAt', 'DESC')
    })

    it('handles pagination parameters in list query', async () => {
      await resolver.reports(null, { limit: 10, offset: 10 })

      expect(repo.mockQueryBuilder.limit).toHaveBeenCalledWith(10)
      expect(repo.mockQueryBuilder.offset).toHaveBeenCalledWith(10)
    })

    it('filters on reporter', async () => {
      const reporterId = randomUUID()

      await resolver.reports({ reporter: reporterId }, null)

      expect(repo.mockQueryBuilder.andWhere).toHaveBeenCalledWith('report.reporterId = :reporterId', { reporterId })
    })

    it('can search details', async () => {
      const searchInput = 'foobar'

      await resolver.reports({ search: searchInput }, null)

      expect(repo.mockQueryBuilder.andWhere).toHaveBeenCalledWith('report.details ILIKE :search', {
        search: `%${searchInput}%`,
      })
    })

    it('can filter on status', async () => {
      await resolver.reports({ status: ReportStatus.OPEN }, null)

      expect(repo.mockQueryBuilder.andWhere).toHaveBeenCalledWith({
        status: ReportStatus.OPEN,
      })
    })
  })

  describe('fetch report by ID', () => {
    it('raises an error when report is not found', async () => {
      repo.findOneBy.mockResolvedValue(null)

      await expect(async () => await resolver.report(randomUUID())).rejects.toThrow(NotFoundException)
    })

    it('returns a found report', async () => {
      const report = fakeReport()
      repo.findOneBy.mockResolvedValue(report)

      const returnedReport = await resolver.report(report.id)

      expect(returnedReport).toEqual(report)
    })
  })

  describe('createReport', () => {
    const reportSubmission: ReportSubmission = {
      contentId: randomUUID(),
      contentType: ContentType.POST,
      details: 'bad content',
    }

    const reporter: Reporter = {
      id: randomUUID(),
      email: 'someReporter@email.foo',
    }

    it('saves report', async () => {
      await resolver.createReport(reportSubmission, reporter)

      expect(repo.create).toHaveBeenCalledWith({
        contentId: reportSubmission.contentId,
        contentType: ContentType.POST,
        details: 'bad content',
        reporterId: reporter.id,
      })
      expect(repo.save).toHaveBeenCalled()
    })

    it('logs report creation', async () => {
      await resolver.createReport(reportSubmission, reporter)

      expect(reportLogger.logReportCreated).toHaveBeenCalled()
    })
  })

  describe('change report status', () => {
    it('errors for a wrong report ID', async () => {
      repo.findOneBy.mockResolvedValue(null)

      await expect(
        async () => await resolver.changeReportStatus(randomUUID(), ReportStatus.IN_PROGRESS, null),
      ).rejects.toThrow(NotFoundException)
    })

    it('logs status change', async () => {
      const report = fakeReport({
        status: ReportStatus.OPEN,
      })
      const user = { id: randomUUID() } as unknown as User

      repo.findOneBy.mockResolvedValue(report)

      await resolver.changeReportStatus(report.id, ReportStatus.IN_PROGRESS, user)

      expect(reportLogger.logStatusChanged).toHaveBeenCalledWith(
        report.id,
        ReportStatus.OPEN,
        ReportStatus.IN_PROGRESS,
        user,
      )
    })

    it('saves report with the new status', async () => {
      const report = fakeReport({
        status: ReportStatus.OPEN,
      })
      const user = { id: randomUUID() } as unknown as User

      repo.findOneBy.mockResolvedValue(report)

      const updatedReport = await resolver.changeReportStatus(report.id, ReportStatus.IN_PROGRESS, user)

      expect(repo.save).toHaveBeenCalled()
      expect(updatedReport.status).toEqual(ReportStatus.IN_PROGRESS)

      const savedReport = repo.save.mock.calls[0][0]
      expect(savedReport).toEqual(updatedReport)
    })
  })
})
