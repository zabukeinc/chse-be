import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SdmTrainingEntity } from "../../domain/entities/sdm.entity";
import { SdmModel } from "./sdm.model";

@Entity({ name: 'supporting_sdm_trainings' })
export class SdmTrainingModel extends BaseEntity implements SdmTrainingEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @CreateDateColumn({ type: 'datetime' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at?: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at?: Date;

  @Column('varchar', { name: 'name' })
  name: string;

  @Column('date', { name: 'date' })
  date: Date;

  @Column('varchar', { name: 'instance', nullable: true })
  instance?: string;

  @Column('varchar', { name: 'instructur', nullable: true })
  instructur?: string;

  @Column('varchar', { name: 'status' })
  status: string;

  @Column('varchar',  { name: 'certification_path', nullable: true })
  certification_path?: string;

  /** Join with Sdm */
  @Column('uuid', { name: 'sdm_id', nullable: true })
  sdm_id: string

  @ManyToOne(() => SdmModel, model => model.trainings, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'sdm_id' })
  sdm: SdmModel
}