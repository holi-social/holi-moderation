import {
  Field,
  InputType,
  ObjectType,
  OmitType,
  registerEnumType,
} from '@nestjs/graphql';
import { GraphQLScalarType, StringValueNode } from 'graphql';
import { ReportEventPayload, ReportLogEvent } from '../reportLog';
import { validate as validateUUID } from 'uuid';
import { GraphQLJSONObject } from 'graphql-type-json';

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

export enum ReportStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  ACTION_TAKEN = 'ACTION_TAKEN',
  REJECTED = 'REJECTED',
}

registerEnumType(ContentType, { name: 'ContentType' });
registerEnumType(ReportStatus, { name: 'ReportStatus' });
registerEnumType(ReportLogEvent, { name: 'ReportLogEvent' });

@ObjectType()
export class ReportEvent {
  @Field(() => UUID)
  id: string;

  @Field(() => ReportLogEvent)
  eventName: ReportLogEvent;

  @Field(() => GraphQLJSONObject)
  eventPayload: ReportEventPayload;

  @Field()
  occurredAt: Date;
}

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

  @Field(() => ReportStatus)
  status: ReportStatus;

  @Field(() => [ReportEvent])
  events: ReportEvent[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@InputType()
export class CreateReport extends OmitType(
  Report,
  ['id', 'status', 'events', 'createdAt', 'updatedAt'] as const,
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
