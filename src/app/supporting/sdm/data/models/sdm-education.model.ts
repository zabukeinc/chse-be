import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SdmEducationEntity } from "../../domain/entities/sdm.entity";
import { SdmModel } from "./sdm.model";

@Entity({ name: 'supporting_sdm_educations' })
export class SdmEducationModel extends BaseEntity implements SdmEducationEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('varchar', { name: 'instance_name', nullable: true })
  instance_name: string;

  @Column('varchar', { name: 'major_name', nullable: true })
  major_name: string;

  @Column('varchar', { name: 'level', nullable: true })
  level: string;

  @CreateDateColumn({ type: 'datetime' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at?: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at?: Date;

  /** Join with Sdm */
  @Column('uuid', { name: 'sdm_id', nullable: true })
  sdm_id: string

  @ManyToOne(() => SdmModel, model => model.educations, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'sdm_id' })
  sdm: SdmModel
}