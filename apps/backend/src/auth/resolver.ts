import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { AuthResult, TokenValidity } from './schema';
import { AuthService } from './service/auth';
import { TokenService } from './service/token';
import { Public } from './decorators';

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
