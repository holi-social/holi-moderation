import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { NotFoundException } from '@nestjs/common'

import { UUID } from '../graphql/uuidScalar'
import { ReportEvent } from '../reportLogs/entities/reportEvent'
import { Pagination } from '../graphql/commonSchema'
import { ReportLogger } from '../reportLogs/service'
import { AuthenticatedUser, AuthenticatedReporter, ReporterOnly } from '../auth/decorators'
import { User } from '../auth/entities/user'
import { Reporter } from '../auth/entities/reporter'

import { ReportStatus } from './entities/reportStatus'
import { Report } from './entities/report'
import { ReportsFilter, ReportSubmission, ReportConfirmation } from './schema'

@Resolver(() => Report)
export class ReportsResolver {
  constructor(
    private readonly reportLogger: ReportLogger,
    @InjectRepository(Report) private readonly repository: Repository<Report>,
  ) {}

  @Query(() => [Report])
  async reports(
    @Args('filter', { nullable: true }) filter: ReportsFilter,
    @Args('pagination', { nullable: true }) pagination: Pagination,
  ) {
    const qb = this.repository.createQueryBuilder('report').select().orderBy('report.createdAt', 'DESC')

    if (filter?.reporter) {
      qb.andWhere('report.reporterId = :reporterId', {
        reporterId: filter.reporter,
      })
    }

    if (filter?.search) {
      qb.andWhere('report.details ILIKE :search', {
        search: `%${filter.search}%`,
      })
    }

    if (filter?.status) {
      qb.andWhere({ status: filter.status })
    }

    if (pagination?.limit) {
      qb.limit(pagination.limit)
    }

    if (pagination?.offset) {
      qb.offset(pagination.offset)
    }

    return qb.getMany()
  }

  @Query(() => Report)
  async report(@Args('id', { type: () => UUID }) id: string) {
    const report = await this.repository.findOneBy({ id })
    if (report === null) {
      throw new NotFoundException()
    }

    return report
  }

  @Mutation(() => ReportConfirmation)
  @ReporterOnly()
  async createReport(
    @Args('input', { type: () => ReportSubmission }) reportSubmission: ReportSubmission,
    @AuthenticatedReporter() reporter: Reporter,
  ) {
    const reportToStore = {
      ...reportSubmission,
      reporterId: reporter.id,
    }

    const report = await this.repository.save(this.repository.create(reportToStore))

    await this.reportLogger.logReportCreated(report.id)

    return { success: true }
  }

  @Mutation(() => Report)
  async changeReportStatus(
    @Args('reportId', { type: () => UUID }) reportId: string,
    @Args('newStatus', { type: () => ReportStatus }) newStatus: ReportStatus,
    @AuthenticatedUser() currentUser: User,
  ) {
    const report = await this.repository.findOneBy({ id: reportId })
    if (report === null) {
      throw new NotFoundException()
    }

    await this.reportLogger.logStatusChanged(reportId, report.status, newStatus, currentUser)

    report.status = newStatus
    await this.repository.save(report)

    return report
  }

  @ResolveField(() => [ReportEvent])
  async events(@Parent() report: Report) {
    return await this.reportLogger.getReportLog(report.id)
  }
}
