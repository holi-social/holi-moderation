import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Success } from 'src/graphql/commonSchema';
import { UserSuspensions } from '../userSuspensions';

@Resolver()
export class UserSuspensionResolver {
  constructor(private readonly userSuspensions: UserSuspensions) {}

  @Query(() => Boolean)
  async isUserSuspended(@Args('email') email: string): Promise<boolean> {
    return this.userSuspensions.isUserSuspended(email);
  }

  @Mutation(() => Success)
  async suspendUser(
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
    return { success: true };
  }
}
