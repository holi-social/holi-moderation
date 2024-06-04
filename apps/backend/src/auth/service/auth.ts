import { ForbiddenException, Injectable } from '@nestjs/common';
import { verify, Options as Argon2Options, hash } from '@node-rs/argon2';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user';
import { Repository } from 'typeorm';
import { UserRole } from '../entities/userRole';

@Injectable()
export class AuthService {
  /**
   * options used for the password hashing
   * @see https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#argon2id
   */
  private HASH_SETTINGS: Argon2Options = {
    memoryCost: 19 * 1024, // 19 MiB
    timeCost: 2,
    parallelism: 1,
  };

  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {}

  async login(email: string, password: string): Promise<User> {
    const user = await this.repository.findOneBy({ email });
    if (user === null) {
      throw new ForbiddenException();
    }

    const passwordMatchesHash = await verify(
      user.passwordHash,
      password,
      this.HASH_SETTINGS,
    );

    if (!passwordMatchesHash) {
      throw new ForbiddenException();
    }

    return user;
  }

  async register(
    email: string,
    password: string,
    role: UserRole = UserRole.MODERATOR,
  ): Promise<User> {
    const passwordHash = await hash(password, this.HASH_SETTINGS);
    const newUser = this.repository.create({
      email,
      passwordHash,
      role,
    });

    return this.repository.save(newUser);
  }
}
