import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class BaseModel extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('varchar', { name: 'creator_id', nullable: true })
  creator_id: string;

  @Column('varchar', { name: 'creator_name', nullable: true })
  creator_name: string;

  @Column('varchar', { name: 'editor_id', nullable: true })
  editor_id: string;

  @Column('varchar', { name: 'editor_name', nullable: true })
  editor_name: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at?: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at?: Date;
}