import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class UserSuspension {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column('varchar', { length: 255 })
  email: string

  @Column('text', { nullable: true })
  reason: string

  @Column('timestamp', { nullable: true })
  @Index()
  expiresAt: Date

  @CreateDateColumn()
  createdAt: Date

  @DeleteDateColumn()
  deletedAt: Date
}
