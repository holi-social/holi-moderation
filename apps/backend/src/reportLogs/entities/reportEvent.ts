import { Field, ObjectType } from '@nestjs/graphql';
import { UUID } from '../../graphql/uuidScalar';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ReportEventPayload, ReportLogEvent } from '../types';
import { GraphQLJSONObject } from 'graphql-type-json';
import { Report } from '../../reports/entities/report';

@ObjectType()
@Entity()
export class ReportEvent {
  @Field(() => UUID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => Report)
  @ManyToOne(() => Report, (report) => report.events)
  report: Report;

  @Field(() => ReportLogEvent)
  @Column({ type: 'enum', enum: ReportLogEvent })
  eventName: ReportLogEvent;

  @Field(() => GraphQLJSONObject)
  @Column('json')
  eventPayload: ReportEventPayload;

  @Field()
  @CreateDateColumn()
  occurredAt: Date;
}
