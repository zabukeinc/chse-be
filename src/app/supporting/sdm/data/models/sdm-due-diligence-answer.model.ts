import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SdmDueDiligenceAnswerValue, SdmDueDiligenceAnswerEntity, SdmDueDiligenceAnswerVerif } from "../../domain/entities/sdm.entity";
import { SdmDueDiligenceModel } from "./sdm-due-diligence.model";

@Entity({ name: 'supporting_sdm_due_diligence_answers' })
export class SdmDueDiligenceAnswerModel implements SdmDueDiligenceAnswerEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('enum', { name: 'answer', enum: SdmDueDiligenceAnswerValue, nullable: true })
  answer?: SdmDueDiligenceAnswerValue;

  @Column('text', { name: 'description', nullable: true })
  description?: string;

  @Column('enum', { name: 'verification', enum: SdmDueDiligenceAnswerVerif, nullable: true })
  verification: SdmDueDiligenceAnswerVerif;

  @Column('uuid', { name: 'sdm_due_diligence_id', nullable: true })
  sdm_due_diligence_id: string

  @ManyToOne(() => SdmDueDiligenceModel, model => model.answers, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'sdm_due_diligence_id' })
  sdm_due_diligence: SdmDueDiligenceModel

  @CreateDateColumn({ type: 'timestamp' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at?: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at?: Date;
}