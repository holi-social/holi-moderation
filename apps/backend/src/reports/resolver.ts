import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UUID } from '../graphql/uuidScalar';
import { ReportEvent } from '../reportLogs/entities/reportEvent';
import { CreateReport, Pagination, ReportsFilter } from './schema';
import { Report } from './entities/report';
import { ReportStatus } from './entities/reportStatus';
import { ReportLogger } from '../reportLogs/service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundException } from '@nestjs/common';

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
    const qb = this.repository
      .createQueryBuilder('report')
      .select()
      .orderBy('report.createdAt', 'DESC');

    if (filter?.reporter) {
      qb.andWhere('report.reporterId = :reporterId', {
        reporterId: filter.reporter,
      });
    }

    if (filter?.search) {
      qb.andWhere('report.details ILIKE :search', {
        search: `%${filter.search}%`,
      });
    }

    if (filter?.status) {
      qb.andWhere({ status: filter.status });
    }

    if (pagination?.limit) {
      qb.limit(pagination.limit);
    }

    if (pagination?.offset) {
      qb.offset(pagination.offset);
    }

    return qb.getMany();
  }

  @Query(() => Report)
  async report(@Args('id', { type: () => UUID }) id: string) {
    return this.repository.findOneBy({ id });
  }

  @Mutation(() => Report)
  async createReport(
    @Args('report', { type: () => CreateReport })
    input: CreateReport,
  ) {
    const report = await this.repository.save(
      this.repository.create({
        ...input,
      }),
    );

    await this.reportLogger.logReportCreated(report.id);

    return report;
  }

  @Mutation(() => Report)
  async changeReportStatus(
    @Args('reportId', { type: () => UUID }) reportId: string,
    @Args('newStatus', { type: () => ReportStatus }) newStatus: ReportStatus,
  ) {
    const report = await this.repository.findOneBy({ id: reportId });
    if (report === null) {
      throw new NotFoundException();
    }

    await this.reportLogger.logStatusChanged(
      reportId,
      report.status,
      newStatus,
    );

    report.status = newStatus;
    await this.repository.save(report);

    return report;
  }

  @ResolveField(() => [ReportEvent])
  async events(@Parent() report: Report) {
    return await this.reportLogger.getReportLog(report.id);
  }
}
