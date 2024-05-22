import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UUID } from '../graphql/uuidScalar';
import { Publisher } from '../pubsub/publisher';
import { UserBannedEvent } from '../pubsub/events';
import { ActionResult } from './schema';

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
