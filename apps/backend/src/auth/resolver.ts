import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { AuthResult, CreateUser, TokenValidity } from './schema';
import { AuthService } from './service/auth';
import { TokenPayload, TokenService } from './service/token';
import { AdminOnly, AuthToken, Public } from './decorators';
import { UUID } from '../graphql/uuidScalar';
import { ForbiddenError } from '@nestjs/apollo';
import { Pagination } from '../reports/schema';
import { User } from './entities/user';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRole } from './entities/userRole';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Success } from 'src/graphql/commonSchema';

@Resolver()
export class AuthResolver {
  constructor(
    private readonly auth: AuthService,
    private readonly token: TokenService,
  ) {}

  @Mutation(() => AuthResult)
  @Public()
  public async login(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<AuthResult> {
    const user = await this.auth.login(email, password);
    const token = await this.token.signForUser(user);

    return {
      userId: user.id,
      email: user.email,
      token,
    };
  }

  @Query(() => TokenValidity)
  public async verifyToken(): Promise<TokenValidity> {
    return {
      valid: true,
    };
  }
}

/** @todo think about how to improve the typing consistency between DB and GraphQL schema */
@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly auth: AuthService,
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {}

  @Query(() => [User])
  public async users(
    @Args('pagination', { nullable: true }) pagination?: Pagination,
  ): Promise<User[]> {
    const qb = this.repository.createQueryBuilder('user').select();

    if (pagination?.limit) {
      qb.limit(pagination.limit);
    }

    if (pagination?.offset) {
      qb.offset(pagination.offset);
    }

    return qb.getMany();
  }

  @Mutation(() => User)
  @AdminOnly()
  public async registerUser(
    @Args('user', { type: () => CreateUser }) user: CreateUser,
  ): Promise<User> {
    return this.auth.register(user.email, user.password, user.role);
  }

  @Mutation(() => User)
  @AdminOnly()
  public async changeRole(
    @Args('userId', { type: () => UUID }) userId: string,
    @Args('newRole', { type: () => UserRole }) newRole: UserRole,
    @AuthToken() token?: TokenPayload,
  ): Promise<User> {
    if (token?.sub === userId) {
      throw new ForbiddenError('Not allowed to change your own role.');
    }

    const user = await this.repository.findOneBy({ id: userId });
    if (user === null) {
      throw new NotFoundException();
    }

    user.role = newRole;
    return this.repository.save(user);
  }

  public async changeOwnPassword(
    @Args('newPassword') newPassword: string,
    @AuthToken() token?: TokenPayload,
  ): Promise<Success> {
    if (!token) {
      throw new BadRequestException();
    }

    const user = await this.repository.findOneBy({ id: token.sub });
    if (user === null) {
      // this could happen in edge cases where the user was deleted, but still had a valid token
      throw new BadRequestException();
    }

    await this.auth.changePassword(user, newPassword);

    return { success: true };
  }

  @Mutation(() => Success)
  @AdminOnly()
  public async deleteUser(
    @Args('userId', { type: () => UUID }) userId: string,
    @AuthToken() token?: TokenPayload,
  ): Promise<Success> {
    if (token?.sub === userId) {
      throw new ForbiddenError("Can't delete your own account.");
    }

    const user = await this.repository.findOneBy({ id: userId });
    if (user === null) {
      throw new NotFoundException();
    }

    await this.repository.remove(user);

    return { success: true };
  }
}
