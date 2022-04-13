import { SdmDueDiligenceAnswerValue, SdmDueDiligenceAnswerVerif, SdmDueDiligenceType } from "src/app/supporting/sdm/domain/entities/sdm.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SupplierDueDiligenceAnswerValue, SupplierDueDiligenceAnswerVerif, SupplierDueDiligenceDecision, SupplierDueDiligenceEntity, SupplierDueDiligenceEvaluationAnswer, SupplierDueDiligenceEvaluationEntity, SupplierDueDiligenceRiskType, SupplierDueDiligenceSelectionAnswerEntity } from "../../domain/entities/supplier.entity";
import { SupplierModel } from "./supplier.model";

@Entity({ name: 'supplier_due_diligences' })
export class SupplierDueDiligenceModel implements SupplierDueDiligenceEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('enum', { name: 'type', enum: SdmDueDiligenceType, nullable: true })
  type: SdmDueDiligenceType;

  @OneToMany(() => SupplierDueDiligenceSelectionAnswerModel, model => model.due_diligence, {
    cascade: ['insert', 'update', 'remove']
  })
  selection_answers?: SupplierDueDiligenceSelectionAnswerModel[];

  @Column('varchar', { name: 'selection_conslusion', nullable: true })
  selection_conclusion?: string;

  @Column('date', { name: 'selection_verification_date', nullable: true })
  selection_verification_date?: string;

  @Column('varchar', { name: 'selection_evaluator', nullable: true })
  selection_evaluator?: string;

  @Column('enum', { name: 'selection_risk', enum: SupplierDueDiligenceRiskType, nullable: true })
  selection_risk?: SupplierDueDiligenceRiskType;

  @Column('varchar', { name: 'selection_action', nullable: true })
  selection_action?: string;
  
  @Column('varchar', { name: 'selection_approval', nullable: true })
  selection_approval?: string;

  @Column('varchar', { name: 'selection_leader', nullable: true })
  selection_leader?: string;

  @Column('varchar', { name: 'selection_statement_letter_path', nullable: true })
  selection_statement_letter_path: string;

  @OneToMany(() => SupplierDueDiligenceEvaluationAnswerModel, model => model.due_diligence, {
    cascade: ['insert', 'update', 'remove']
  })
  evaluation_answers?: SupplierDueDiligenceEvaluationAnswerModel[];

  @Column('varchar', { name: 'evaluation_conclusion', nullable: true })
  evaluation_conclusion?: string;

  @Column('varchar', { name: 'evaluation_evaluated_date', nullable: true })
  evaluation_evaluated_date?: string;

  @Column('varchar', { name: 'evaluation_evaluator', nullable: true })
  evaluation_evaluator?: string;

  @Column('enum', { name: 'evaluation_decision', enum: SupplierDueDiligenceDecision, nullable: true })
  evaluation_decision?: SupplierDueDiligenceDecision;

  @Column('varchar', { name: 'evaluation_approval', nullable: true })
  evaluation_approval?: string

  @Column('varchar', { name: 'evaluation_leader', nullable: true })
  evaluation_leader?: string;

  @Column('varchar', { name: 'evaluation_action', nullable: true })
  evaluation_action?: string;

  @Column('uuid', { name: 'supplier_id', nullable: true })
  supplier_id: string

  @OneToOne(() => SupplierModel, model => model.due_diligence, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'supplier_id' })
  supplier: SupplierModel

  @CreateDateColumn({ type: 'timestamp' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at?: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at?: Date;
}

@Entity({ name: 'supplier_due_diligence_selection_answers' })
export class SupplierDueDiligenceSelectionAnswerModel implements SupplierDueDiligenceSelectionAnswerEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('int', { name: 'index', nullable: true })
  index?: number;

  @Column('enum', { name: 'answer', enum: SdmDueDiligenceAnswerValue, nullable: true })
  answer?: SupplierDueDiligenceAnswerValue;

  @Column('enum', { name: 'verification', enum: SdmDueDiligenceAnswerVerif, nullable: true })
  verification: SupplierDueDiligenceAnswerVerif;

  @Column('varchar', { name: 'description', nullable: true })
  description?: string;

  @Column('uuid', { name: 'supplier_due_diligence_id', nullable: true })
  supplier_due_diligence_id: string

  @ManyToOne(() => SupplierDueDiligenceModel, model => model.selection_answers, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'supplier_due_diligence_id' })
  due_diligence: SupplierDueDiligenceModel

  @CreateDateColumn({ type: 'timestamp' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at?: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at?: Date;
}

@Entity({ name: 'supplier_due_diliigence_evaluation_answers' })
export class SupplierDueDiligenceEvaluationAnswerModel implements SupplierDueDiligenceEvaluationEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string

  @Column('int', { name: 'index', nullable: true })
  index?: number

  @Column('enum', { name: 'answer', enum: SupplierDueDiligenceEvaluationAnswer, nullable: true })
  answer?: SupplierDueDiligenceEvaluationAnswer

  @Column('uuid', { name: 'supplier_due_diligence_id', nullable: true })
  supplier_due_diligence_id: string

  @ManyToOne(() => SupplierDueDiligenceModel, model => model.evaluation_answers, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'supplier_due_diligence_id' })
  due_diligence: SupplierDueDiligenceModel

  @CreateDateColumn({ type: 'timestamp' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at?: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at?: Date;
}