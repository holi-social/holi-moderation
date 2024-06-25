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
import { User } from '../../auth/entities/user';

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

  @Field(() => User, { nullable: true })
  @ManyToOne(() => User, { nullable: true })
  actor: User;

  @Field()
  @CreateDateColumn()
  occurredAt: Date;
}
