import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateReport, ActionResult, Report, UUID } from './schema';
import { ModerationDb } from '../db';
import { eq } from 'drizzle-orm';
import { report } from '../db/schema';
import { Publisher } from 'src/pubsub';
import { UserBannedEvent } from 'src/pubsub/events';

@Resolver(() => Report)
export class ReportsResolver {
  constructor(private readonly moderationDb: ModerationDb) {}

  @Query(() => [Report])
  async reports() {
    return this.moderationDb.db.query.report.findMany();
  }

  @Query(() => Report)
  async report(@Args('id', { type: () => UUID }) id: string) {
    return this.moderationDb.db.query.report.findFirst({
      where: eq(report.id, id),
    });
  }

  @Mutation(() => Report)
  async createReport(
    @Args('report', { type: () => CreateReport })
    input: CreateReport,
  ) {
    const data = await this.moderationDb.db
      .insert(report)
      .values({ ...input })
      .returning();

    return data[0];
  }
}

@Resolver()
export class ModerationActionResolver {
  constructor(private readonly publisher: Publisher) {}

  @Mutation(() => ActionResult)
  async banUser(
    @Args('userId', { type: () => UUID }) userId: string,
    @Args('reason') reason?: string,
  ) {
    return this.publisher
      .publish<UserBannedEvent>({
        data: { userId, reason },
        eventType: 'UserBanned',
        version: '1.0.0',
      })
      .then((messageId) => ActionResult.success(messageId))
      .catch((reason) => ActionResult.error(reason));
  }
}
