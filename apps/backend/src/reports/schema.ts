import { Field, InputType, PickType, registerEnumType } from '@nestjs/graphql';
import { IsInt, Min, Max } from 'class-validator';
import { UUID } from '../graphql/uuidScalar';
import { ContentType } from './entities/contentType';
import { ReportStatus } from './entities/reportStatus';
import { Report } from './entities/report';

registerEnumType(ContentType, { name: 'ContentType' });
registerEnumType(ReportStatus, { name: 'ReportStatus' });

@InputType()
export class CreateReport extends PickType(
  Report,
  ['contentType', 'contentId', 'details', 'reporterId'] as const,
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
