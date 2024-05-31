import {
  Field,
  InputType,
  ObjectType,
  OmitType,
  registerEnumType,
} from '@nestjs/graphql';
import { IsInt, Min, Max } from 'class-validator';
import { UUID } from '../graphql/uuidScalar';
import { ReportEvent } from '../reportLogs/schema';

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

@InputType()
export class ReportsFilter {
  @Field(() => UUID, { nullable: true })
  reporter?: string;

  @Field(() => ReportStatus, { nullable: true })
  status?: ReportStatus;

  @Field({ nullable: true })
  search?: string;
}

@InputType()
export class Pagination {
  @Field()
  @IsInt()
  @Min(1)
  @Max(100)
  limit?: number = 10;

  @Field()
  @IsInt()
  @Min(0)
  offset?: number = 0;
}
