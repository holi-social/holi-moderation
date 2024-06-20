import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { AuthService } from './service/auth';
import { Repository } from 'typeorm';
import { User } from './entities/user';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRole } from './entities/userRole';
import crypto from 'node:crypto';

@Injectable()
export class CreateInitialUser implements OnApplicationBootstrap {
  readonly USER_EMAIL = 'moderation@holi.social';

  constructor(
    private readonly authService: AuthService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async onApplicationBootstrap() {
    try {
      if ((await this.userRepository.count()) > 0) {
        return;
      }

      const password = crypto.randomBytes(32).toString('hex');
      await this.authService.register(
        this.USER_EMAIL,
        password,
        UserRole.ADMIN,
      );

      console.log(
        `+++ INITIAL USER: ${this.USER_EMAIL} - "${password}". Please change this immediately.`,
      );
    } catch {}
  }
}
