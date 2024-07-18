import { Args, Mutation, Resolver, Query } from '@nestjs/graphql'
import { ForbiddenError } from '@nestjs/apollo'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { BadRequestException, NotFoundException } from '@nestjs/common'

import { UUID } from '../graphql/uuidScalar'
import { Pagination, Success } from '../graphql/commonSchema'

import { AuthResult, CreateUser, TokenValidity } from './schema'
import { AuthService } from './service/auth'
import { TokenService } from './service/token'
import { AdminOnly, AuthenticatedUser, Public } from './decorators'
import { User } from './entities/user'
import { UserRole } from './entities/userRole'

@Resolver()
export class AuthResolver {
  constructor(
    private readonly auth: AuthService,
    private readonly token: TokenService,
  ) {}

  @Mutation(() => AuthResult)
  @Public()
  public async login(@Args('email') email: string, @Args('password') password: string): Promise<AuthResult> {
    const user = await this.auth.login(email, password)
    const token = await this.token.signForUser(user)

    return {
      userId: user.id,
      email: user.email,
      token,
    }
  }

  @Query(() => TokenValidity)
  public async verifyToken(): Promise<TokenValidity> {
    return {
      valid: true,
    }
  }
}

@Resolver(() => User)
export class UserResolver {
  constructor(
    private readonly auth: AuthService,
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {}

  @Query(() => [User])
  public async users(@Args('pagination', { nullable: true }) pagination?: Pagination): Promise<User[]> {
    const qb = this.repository.createQueryBuilder('user').select()

    if (pagination?.limit) {
      qb.limit(pagination.limit)
    }

    if (pagination?.offset) {
      qb.offset(pagination.offset)
    }

    return qb.getMany()
  }

  @Mutation(() => User)
  @AdminOnly()
  public async registerUser(@Args('user', { type: () => CreateUser }) user: CreateUser): Promise<User> {
    return this.auth.register(user.email, user.password, user.role)
  }

  @Mutation(() => User)
  @AdminOnly()
  public async changeRole(
    @Args('userId', { type: () => UUID }) userId: string,
    @Args('newRole', { type: () => UserRole }) newRole: UserRole,
    @AuthenticatedUser() authenticatedUser?: User,
  ): Promise<User> {
    if (authenticatedUser && authenticatedUser.id === userId) {
      throw new ForbiddenError('Not allowed to change your own role.')
    }

    const user = await this.repository.findOneBy({ id: userId })
    if (user === null) {
      throw new NotFoundException()
    }

    user.role = newRole
    return this.repository.save(user)
  }

  public async changeOwnPassword(
    @Args('newPassword') newPassword: string,
    @AuthenticatedUser() authenticatedUser?: User,
  ): Promise<Success> {
    if (!authenticatedUser) {
      throw new BadRequestException()
    }

    await this.auth.changePassword(authenticatedUser, newPassword)

    return { success: true }
  }

  @Mutation(() => Success)
  @AdminOnly()
  public async deleteUser(
    @Args('userId', { type: () => UUID }) userId: string,
    @AuthenticatedUser() authenticatedUser?: User,
  ): Promise<Success> {
    if (authenticatedUser && authenticatedUser.id === userId) {
      throw new ForbiddenError("Can't delete your own account.")
    }

    const user = await this.repository.findOneBy({ id: userId })
    if (user === null) {
      throw new NotFoundException()
    }

    await this.repository.remove(user)

    return { success: true }
  }
}
