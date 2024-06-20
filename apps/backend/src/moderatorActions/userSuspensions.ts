import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserSuspension } from './entities/userSuspension';
import { Duration, add } from 'date-fns';
import { Publisher } from 'src/pubsub/publisher';
import {
  UserSuspendedEvent,
  UserSuspensionExpiredEvent,
} from 'src/pubsub/events';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class UserSuspensions {
  constructor(
    @InjectRepository(UserSuspension)
    private readonly repository: Repository<UserSuspension>,
    private readonly publisher: Publisher,
  ) {}

  public async suspendUser(
    email: string,
    reason?: string,
    duration?: Duration,
  ): Promise<void> {
    await this.publisher.publish<UserSuspendedEvent>({
      eventType: 'UserSuspended',
      version: '1',
      data: {
        email,
        reason,
      },
    });

    if (!duration) {
      return;
    }

    const expiresAt = add(new Date(), duration);

    const suspension = this.repository.create({ email, expiresAt });
    await this.repository.save(suspension);
  }

  @Cron(CronExpression.EVERY_10_MINUTES)
  public async liftExpiredSuspensions(): Promise<UserSuspension[]> {
    const expiredSuspensions = await this.repository
      .createQueryBuilder('us')
      .where('us.expiresAt <= CURRENT_TIMESTAMP')
      .andWhere('us.deletedAt IS NULL')
      .getMany();

    await Promise.all(
      expiredSuspensions.map((suspension) =>
        this.publisher.publish<UserSuspensionExpiredEvent>({
          eventType: 'UserSuspensionExpired',
          version: '1',
          data: {
            email: suspension.email,
          },
        }),
      ),
    );

    await this.repository.softRemove(expiredSuspensions);
    return this.repository.save(expiredSuspensions);
  }
}
