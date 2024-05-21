import { Field, ObjectType } from '@nestjs/graphql';
import { UUID } from 'src/graphql/schema';

@ObjectType()
export class AuthResult {
  @Field(() => UUID)
  userId: string;

  @Field()
  email: string;

  @Field()
  token: string;
}

@ObjectType()
export class TokenValidity {
  @Field()
  valid: boolean;
}
