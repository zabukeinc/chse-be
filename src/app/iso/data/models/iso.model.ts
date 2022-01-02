import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ISOEntity } from "../../domain/entities/iso.entity";
import { ISODetailModel } from "./iso-detail.model";

@Entity({ name: 'iso' })
export class ISOModel extends BaseEntity implements ISOEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('varchar', { name: 'name' })
  name: string;

  @Column('varchar', { name: 'code' })
  code: string;

  @OneToMany(() => ISODetailModel, model => model.iso, {
    cascade: ['insert', 'update', 'remove']
  })
  details: ISODetailModel[];

  @CreateDateColumn({ type: 'timestamp' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at?: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at?: Date;
}