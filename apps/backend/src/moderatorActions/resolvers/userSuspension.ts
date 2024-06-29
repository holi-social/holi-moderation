import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Success } from '../../graphql/commonSchema';
import { UserSuspensions } from '../userSuspensions';
import { ReportLogger } from '../../reportLogs/service';
import { AuthenticatedUser } from '../../auth/decorators';
import { User } from '../../auth/entities/user';
import { UUID } from '../../graphql/uuidScalar';

@Resolver()
export class UserSuspensionResolver {
  constructor(
    private readonly userSuspensions: UserSuspensions,
    private readonly reportLogger: ReportLogger,
  ) {}

  @Query(() => Boolean)
  async isUserSuspended(@Args('email') email: string): Promise<boolean> {
    return this.userSuspensions.isUserSuspended(email);
  }

  @Mutation(() => Success)
  async suspendUser(
    @AuthenticatedUser() currentUser: User,

    @Args('reportId', { type: () => UUID }) reportId: string,
    @Args('email') email: string,
    @Args('reason', { nullable: true }) reason?: string,

    @Args('duration', { nullable: true, type: () => Int })
    durationMinutes?: number,
  ): Promise<Success> {
    await this.userSuspensions.suspendUser(
      email,
      reason,
      durationMinutes
        ? {
            minutes: durationMinutes,
          }
        : undefined,
    );

    await this.reportLogger.logUserSuspended(
      reportId,
      email,
      currentUser,
      durationMinutes,
    );

    return { success: true };
  }
}
