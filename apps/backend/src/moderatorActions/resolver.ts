import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { UserSuspensions } from './userSuspensions';
import { Success } from 'src/graphql/commonSchema';

@Resolver()
export class ModerationActionResolver {
  constructor(private readonly userSuspensions: UserSuspensions) {}

  @Mutation(() => Success)
  async suspendUser(
    @Args('email') email: string,
    @Args('reason', { nullable: true }) reason?: string,
    @Args('duration', { nullable: true }) durationMinutes?: number,
  ): Promise<Success> {
    await this.userSuspensions.suspendUser(email, reason, {
      minutes: durationMinutes,
    });
    return { success: true };
  }
}
