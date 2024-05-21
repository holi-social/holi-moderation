import { Injectable } from '@nestjs/common';
import { ModerationDb } from '../../db';
import { InferSelectModel, eq } from 'drizzle-orm';
import { users } from '../dbSchema';

export type User = InferSelectModel<typeof users>;

@Injectable()
export class UserService {
  constructor(private readonly db: ModerationDb) {}

  async findByEmail(email: string): Promise<User> {
    return this.db.db.query.users.findFirst({
      where: eq(users.email, email),
    });
  }

  async create(email: string, passwordHash: string): Promise<User> {
    return (
      await this.db.db
        .insert(users)
        .values({
          email,
          passwordHash,
        })
        .returning()
    )[0];
  }
}
