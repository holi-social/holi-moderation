import { Field, ObjectType } from '@nestjs/graphql';
import { UUID } from '../../graphql/uuidScalar';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ContentType } from './contentType';
import { ReportStatus } from './reportStatus';
import { ReportEvent } from '../../reportLogs/entities/reportEvent';

@ObjectType()
@Entity()
export class Report {
  @Field(() => UUID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => UUID)
  @Column('uuid')
  reporterId: string;

  @Field(() => ContentType)
  @Column({ type: 'enum', enum: ContentType })
  contentType: ContentType;

  @Field(() => UUID)
  @Column('uuid')
  contentId: string;

  @Field()
  @Column('text')
  details: string;

  @Field(() => ReportStatus)
  @Column({ type: 'enum', enum: ReportStatus, default: ReportStatus.OPEN })
  status: ReportStatus = ReportStatus.OPEN;

  @Field(() => [ReportEvent])
  @OneToMany(() => ReportEvent, (event) => event.report)
  events: ReportEvent[];

  @Field()
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @UpdateDateColumn()
  updatedAt: Date;
}
