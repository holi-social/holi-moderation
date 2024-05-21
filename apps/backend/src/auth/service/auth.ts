import { ForbiddenException, Injectable } from '@nestjs/common';
import { User, UserService } from './user';
import { verify, Options as Argon2Options, hash } from '@node-rs/argon2';

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

  constructor(private readonly users: UserService) {}

  async login(email: string, password: string): Promise<User> {
    const user = await this.users.findByEmail(email);
    if (user === undefined) {
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

  async register(email: string, password: string): Promise<User> {
    const passwordHash = await hash(password, this.HASH_SETTINGS);
    return this.users.create(email, passwordHash);
  }
}
