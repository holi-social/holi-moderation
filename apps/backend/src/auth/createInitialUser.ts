import crypto from 'node:crypto'
import * as fs from 'node:fs'

import { Injectable, OnApplicationBootstrap } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { AuthService } from './service/auth'
import { User } from './entities/user'
import { UserRole } from './entities/userRole'

@Injectable()
export class CreateInitialUser implements OnApplicationBootstrap {
  readonly USER_EMAIL = 'moderation@holi.social'
  readonly initialPassword = process.env.INITIAL_USER_PASSWORD ?? crypto.randomBytes(32).toString('hex')
  readonly shouldOutputCredentials = process.env.NODE_ENV === 'development'

  constructor(
    private readonly authService: AuthService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async onApplicationBootstrap() {
    try {
      if ((await this.userRepository.count()) > 0) {
        return
      }

      await this.authService.register(this.USER_EMAIL, this.initialPassword, UserRole.ADMIN)

      if (this.shouldOutputCredentials) {
        console.log(`+++ INITIAL USER: ${this.USER_EMAIL} - "${this.initialPassword}".`)
        fs.writeFileSync('.credentials', JSON.stringify({ email: this.USER_EMAIL, password: this.initialPassword }))
      }
    } catch (e) {
      console.log(e)
    }
  }
}
