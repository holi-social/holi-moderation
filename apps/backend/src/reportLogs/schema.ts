import { UUID } from '../graphql/uuidScalar';

import { ObjectType, Field, registerEnumType } from '@nestjs/graphql';
import { GraphQLJSONObject } from 'graphql-type-json';
import { ReportLogEvent, ReportEventPayload } from './types';

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

registerEnumType(ReportLogEvent, { name: 'ReportLogEvent' });
