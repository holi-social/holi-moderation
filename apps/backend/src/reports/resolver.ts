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
import { CreateReport } from './schema';
import { Report } from './schema';
import { ReportStatus } from './schema';
import { ModerationDb } from '../db';
import { desc, eq } from 'drizzle-orm';
import { reports } from './dbSchema';
import { ReportLogger } from '../reportLogs/service';

@Resolver(() => Report)
export class ReportsResolver {
  constructor(
    private readonly moderationDb: ModerationDb,
    private readonly reportLogger: ReportLogger,
  ) {}

  @Query(() => [Report])
  async reports() {
    return this.moderationDb.db.query.reports.findMany({
      orderBy: desc(reports.createdAt),
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
}
