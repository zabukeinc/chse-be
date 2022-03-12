import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SdmWorkExperienceEntity } from "../../domain/entities/sdm.entity";
import { SdmModel } from "./sdm.model";

@Entity({ name: 'supporting_sdm_work_experiences' })
export class SdmWorkExperienceModel extends BaseEntity implements SdmWorkExperienceEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('varchar', { name: 'company_name', nullable: true })
  company_name: string;

  @Column('varchar', { name: 'position', nullable: true })
  position: string;

  @Column('int', { name: 'year_in', nullable: true })
  year_in: number;

  @Column('int', { name: 'year_out', nullable: true })
  year_out: number;

  @CreateDateColumn({ type: 'datetime' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'datetime' })
  updated_at?: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at?: Date;

  /** Join with Sdm */
  @Column('uuid', { name: 'sdm_id', nullable: true })
  sdm_id: string
  
  @ManyToOne(() => SdmModel, model => model.work_experiences, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'sdm_id' })
  sdm: SdmModel
}