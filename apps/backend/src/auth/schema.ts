import {
  Field,
  InputType,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';
import { UUID } from '../graphql/uuidScalar';
import { UserRole } from './entities/userRole';

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

registerEnumType(UserRole, { name: 'UserRole' });

@InputType()
export class CreateUser {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @MinLength(12)
  password: string;

  @Field(() => UserRole)
  role: UserRole = UserRole.MODERATOR;
}
