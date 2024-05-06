import {
  Field,
  InputType,
  ObjectType,
  OmitType,
  registerEnumType,
} from '@nestjs/graphql';
import { GraphQLScalarType, StringValueNode } from 'graphql';
import { validate as validateUUID } from 'uuid';

const assertUUID = (input: string) => {
  if (!validateUUID(input)) {
    throw new Error('Invalid UUID value');
  }

  return input;
};

export const UUID = new GraphQLScalarType({
  name: 'UUID',
  description: 'UUID',
  parseValue: assertUUID,
  parseLiteral: (ast: StringValueNode) => assertUUID(ast.value),
  serialize: assertUUID,
});

export enum ContentType {
  POST = 'POST',
  COMMENT = 'COMMENT',
  CHAT_MESSAGE = 'CHAT_MESSAGE',
  SPACE = 'SPACE',
  SPACE_TASK = 'SPACE_TASK',
  SPACE_APPOINTMENT = 'SPACE_APPOINTMENT',
  SPACE_LINKHUB_TOOL = 'SPACE_LINKHUB_TOOL',
  USER = 'USER',
}

registerEnumType(ContentType, { name: 'ContentType' });

@ObjectType()
export class Report {
  @Field(() => UUID)
  id: string;

  @Field(() => ContentType)
  contentType: ContentType;

  @Field(() => UUID)
  contentId: string;

  @Field()
  details: string;

  @Field(() => UUID)
  reporterId: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@InputType()
export class CreateReport extends OmitType(
  Report,
  ['id', 'createdAt', 'updatedAt'] as const,
  InputType,
) {}

@ObjectType()
export class ActionResult {
  static success(messageId: string) {
    return new ActionResult(true, messageId);
  }

  static error(errorMessage?: string) {
    return new ActionResult(false, errorMessage);
  }

  private constructor(
    success: boolean,
    messageId?: string,
    errorMessage?: string,
  ) {
    this.success = success;
    this.messageId = messageId;
    this.errorMessage = errorMessage;
  }

  @Field()
  success: boolean;

  messageId?: string;
  errorMessage?: string;
}
