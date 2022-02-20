import { BaseEntity as TypeOrmBaseModel, Column, CreateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { BaseEntity } from "../entities/base.entity";

export class BaseModel extends TypeOrmBaseModel implements BaseEntity {
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

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at?: Date;
}