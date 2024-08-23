import { Field, InputType, PickType, registerEnumType, ObjectType } from '@nestjs/graphql'

import { UUID } from '../graphql/uuidScalar'

import { ContentType } from './entities/contentType'
import { ReportStatus } from './entities/reportStatus'
import { Report } from './entities/report'

registerEnumType(ContentType, { name: 'ContentType' })
registerEnumType(ReportStatus, { name: 'ReportStatus' })

@InputType()
export class ReportSubmission extends PickType(Report, ['contentType', 'contentId', 'details'] as const, InputType) {}

@ObjectType()
export class ReportConfirmation {
  @Field()
  success: boolean
}

@InputType()
export class ReportsFilter {
  @Field(() => UUID, { nullable: true })
  reporter?: string

  @Field(() => ReportStatus, { nullable: true })
  status?: ReportStatus

  @Field({ nullable: true })
  search?: string
}
