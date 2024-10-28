import { Field, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

import { UUID } from '../../graphql/uuidScalar'
import { ReportEvent } from '../../reportLogs/entities/reportEvent'

import { ContentType } from './contentType'
import { ReportStatus } from './reportStatus'

export enum Reason {
  FALSE_IDENTITY = 'FALSE_IDENTITY',
  PRIVACY_VIOLATION = 'PRIVACY_VIOLATION',
  MISINFORMATION = 'MISINFORMATION',
  SPAM = 'SPAM',
  HARASSMENT = 'HARASSMENT',
  HATE_SPEECH = 'HATE_SPEECH',
  PORNOGRAPHY = 'PORNOGRAPHY',
  ILLEGAL_ACTIVITY = 'ILLEGAL_ACTIVITY',
  OTHER = 'OTHER',
}

@ObjectType()
@Entity()
export class Report {
  @Field(() => UUID)
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Field(() => UUID)
  @Column('uuid')
  reporterId: string

  @Field(() => ContentType)
  @Column({ type: 'enum', enum: ContentType })
  contentType: ContentType

  @Field(() => UUID)
  @Column('uuid')
  contentId: string

  @Field(() => Reason, { nullable: true })
  @Column({ type: 'enum', enum: Reason, default: Reason.OTHER, nullable: true })
  reason?: Reason

  @Field()
  @Column('text')
  details: string

  @Field(() => ReportStatus)
  @Column({ type: 'enum', enum: ReportStatus, default: ReportStatus.OPEN })
  status: ReportStatus = ReportStatus.OPEN

  @Field(() => [ReportEvent])
  @OneToMany(() => ReportEvent, (event) => event.report)
  events: ReportEvent[]

  @Field()
  @CreateDateColumn()
  createdAt: Date

  @Field()
  @UpdateDateColumn()
  updatedAt: Date
}
