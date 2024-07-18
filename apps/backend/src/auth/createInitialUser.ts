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

  constructor(
    private readonly authService: AuthService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async onApplicationBootstrap() {
    try {
      if ((await this.userRepository.count()) > 0) {
        return
      }

      const password = crypto.randomBytes(32).toString('hex')
      await this.authService.register(this.USER_EMAIL, password, UserRole.ADMIN)

      console.log(`+++ INITIAL USER: ${this.USER_EMAIL} - "${password}".`)

      if (process.env.NODE_ENV === 'development') {
        fs.writeFileSync('.credentials', JSON.stringify({ email: this.USER_EMAIL, password }))
      }
    } catch (e) {
      console.log(e)
    }
  }
}
