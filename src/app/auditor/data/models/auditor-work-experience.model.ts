import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AuditorWorkExperienceEntity } from "../../domain/entities/auditor-work-experience.entity";
import { AuditorModel } from "./auditor.model";

@Entity({ name: 'auditor_work_experiences' })
export class AuditorWorkExperienceModel implements AuditorWorkExperienceEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('varchar', { name: 'description' })
  description: string;

  @Column('varchar', { name: 'institution' })
  institution: string;

  @Column('varchar', { name: 'job_position' })
  job_position: string;

  @Column('date', { name: 'start_date' })
  start_date: Date;

  @Column('date', { name: 'end_date' })
  end_date: Date;

  /** Join with Auditor */
  @Column('varchar', { name: 'auditor_id', nullable: true })
  auditor_id: string
  @ManyToOne(() => AuditorModel, model => model.work_experiences, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
  auditor: AuditorModel

  @CreateDateColumn({ type: 'timestamp' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at?: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at?: Date;
}