import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AuditorEducationEntity } from "../../domain/entities/auditor-education";
import { AuditorModel } from "./auditor.model";

@Entity({ name: 'auditor_educations' })
export class AuditorEducationModel implements AuditorEducationEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('varchar', { name: 'strata' })
  strata: string;

  @Column('varchar', { name: 'scholarship' })
  scholarship: string;

  @Column('varchar', { name: 'instance_name' })
  instance_name: string;

  @Column('varchar', { name: 'country' })
  country: string;

  @Column('int', { name: 'graduate_year' })
  graduate_year: number;

  /** Join with Auditor */
  @Column('varchar', { name: 'auditor_id', nullable: true })
  auditor_id: string

  @ManyToOne(() => AuditorModel, model => model.educations, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  })
  @JoinColumn({ name: 'auditor_id' })
  auditor: AuditorModel

  @CreateDateColumn({ type: 'timestamp' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at?: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at?: Date;
}