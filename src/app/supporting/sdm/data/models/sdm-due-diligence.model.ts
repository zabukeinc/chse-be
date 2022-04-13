import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SdmDueDiligenceEntity, SdmDueDiligenceRiskType, SdmDueDiligenceType } from "../../domain/entities/sdm.entity";
import { SdmDueDiligenceAnswerModel } from "./sdm-due-diligence-answer.model";
import { SdmModel } from "./sdm.model";

@Entity({ name: 'supporting_sdm_due_diligences' })
export class SdmDueDiligenceModel implements SdmDueDiligenceEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('enum', { name: 'type', enum: SdmDueDiligenceType })
  type: SdmDueDiligenceType;

  @Column('text', { name: 'conclusion', nullable: true })
  conclusion?: string;

  @Column('datetime', { name: 'verification_date', nullable: true })
  verification_date: Date;

  @Column('varchar', { name: 'evaluator', nullable: true })
  evaluator: string;

  @Column('enum', { name: 'risk', enum: SdmDueDiligenceRiskType, nullable: true })
  risk: SdmDueDiligenceRiskType;

  @Column('text', { name: 'action', nullable: true })
  action: string;

  @OneToMany(() => SdmDueDiligenceAnswerModel, model => model.sdm_due_diligence, {
    cascade: ['insert', 'update', 'remove']
  })
  answers: SdmDueDiligenceAnswerModel[];

  @Column('varchar', { name: 'evaluation_performance_path', nullable: true })
  evaluation_performance_path: string;

  @Column('varchar', { name: 'evaluation_maintenance_path', nullable: true })
  evaluation_maintenance_path: string;

  @Column('uuid', { name: 'sdm_id', nullable: true })
  sdm_id: string

  @OneToOne(() => SdmModel, model => model.due_diligence, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'sdm_id' })
  sdm: SdmModel

  @CreateDateColumn({ type: 'timestamp' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at?: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at?: Date;
}