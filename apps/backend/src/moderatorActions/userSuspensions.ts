import { Injectable, Logger } from '@nestjs/common';
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
  private readonly logger = new Logger(UserSuspensions.name);

  constructor(
    @InjectRepository(UserSuspension)
    private readonly repository: Repository<UserSuspension>,
    private readonly publisher: Publisher,
  ) {}

  public async isUserSuspended(email: string): Promise<boolean> {
    return this.repository.existsBy({ email });
  }

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

    const suspension = this.repository.create({ email, reason });
    if (duration) {
      suspension.expiresAt = add(new Date(), duration);
    }

    await this.repository.save(suspension);
  }

  @Cron(CronExpression.EVERY_10_MINUTES)
  public async liftExpiredSuspensions(): Promise<UserSuspension[]> {
    this.logger.debug('Checking for expired suspensions');

    const expiredSuspensions = await this.repository
      .createQueryBuilder('us')
      .where('us.expiresAt <= CURRENT_TIMESTAMP')
      .andWhere('us.deletedAt IS NULL')
      .getMany();

    await Promise.all(
      expiredSuspensions.map((suspension) => {
        this.logger.debug(`Lifting expired suspension ${suspension.id}`);
        return this.publisher.publish<UserSuspensionExpiredEvent>({
          eventType: 'UserSuspensionExpired',
          version: '1',
          data: {
            email: suspension.email,
          },
        });
      }),
    );

    await this.repository.softRemove(expiredSuspensions);
    return this.repository.save(expiredSuspensions);
  }
}
