import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { UUID } from '../graphql/uuidScalar';
import { ReportEvent } from '../reportLogs/schema';
import { CreateReport, Pagination, ReportsFilter } from './schema';
import { Report } from './schema';
import { ReportStatus } from './schema';
import { ModerationDb } from '../db';
import { DBQueryConfig, and, desc, eq, like } from 'drizzle-orm';
import { reports } from './dbSchema';
import { ReportLogger } from '../reportLogs/service';

@Resolver(() => Report)
export class ReportsResolver {
  constructor(
    private readonly moderationDb: ModerationDb,
    private readonly reportLogger: ReportLogger,
  ) {}

  @Query(() => [Report])
  async reports(
    @Args('filter', { nullable: true }) filter: ReportsFilter,
    @Args('pagination', { nullable: true }) pagination: Pagination,
  ) {
    const defaultQueryOptions: DBQueryConfig<'many', true> = {
      orderBy: desc(reports.createdAt),
    };

    return this.moderationDb.db.query.reports.findMany({
      ...defaultQueryOptions,
      ...this.buildReportsFilterWhere(filter),
      ...this.buildDbPagination(pagination),
    });
  }

  @Query(() => Report)
  async report(@Args('id', { type: () => UUID }) id: string) {
    return this.findReportById(id);
  }

  @Mutation(() => Report)
  async createReport(
    @Args('report', { type: () => CreateReport })
    input: CreateReport,
  ) {
    const data = await this.moderationDb.db
      .insert(reports)
      .values({ ...input })
      .returning({ id: reports.id });

    const newId = data[0].id;
    await this.reportLogger.logReportCreated(newId);

    return this.findReportById(newId);
  }

  @Mutation(() => Report)
  async changeReportStatus(
    @Args('reportId', { type: () => UUID }) reportId: string,
    @Args('newStatus', { type: () => ReportStatus }) newStatus: ReportStatus,
  ) {
    /** @todo there's gotta be a better way of doing it than this */
    const oldState = await this.findReportById(reportId);

    await this.moderationDb.db
      .update(reports)
      .set({ status: newStatus })
      .where(eq(reports.id, reportId));

    await this.reportLogger.logStatusChanged(
      reportId,
      ReportStatus[oldState.status],
      newStatus,
    );

    return this.findReportById(reportId);
  }

  @ResolveField(() => [ReportEvent])
  async events(@Parent() report: Report) {
    return await this.reportLogger.getReportLog(report.id);
  }

  private async findReportById(id: string) {
    return this.moderationDb.db.query.reports.findFirst({
      where: eq(reports.id, id),
    });
  }

  private buildReportsFilterWhere(
    filter?: ReportsFilter,
  ): DBQueryConfig<'many'> {
    const whereClauses = [];

    if (filter?.reporter) {
      whereClauses.push(eq(reports.reporterId, filter.reporter));
    }

    if (filter?.search) {
      whereClauses.push(like(reports.details, `%${filter.search}%`));
    }

    if (filter?.status) {
      whereClauses.push(eq(reports.status, filter.status));
    }

    // `and` already handles the special cases of having 0 or 1 conditions internally, so it's safe to use here
    return { where: and(...whereClauses) };
  }

  private buildDbPagination(
    pagination?: Pagination,
  ): DBQueryConfig<'many', true> {
    const options: DBQueryConfig<'many', true> = {};

    if (pagination?.limit) {
      options.limit = pagination.limit;
    }

    if (pagination?.offset) {
      options.offset = pagination.offset;
    }

    return options;
  }
}
