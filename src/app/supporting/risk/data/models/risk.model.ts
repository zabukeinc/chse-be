import { BaseModel } from "src/app/base/data/models/base.model";
import { AreaModel } from "src/app/supporting/area/data/models/area.model";
import { AreaEntity } from "src/app/supporting/area/domain/entities/area.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { RiskConlusion, RiskEntity, RiskEvaluationResult, RiskSource, RiskSourceType, RiskType } from "../../domain/entities/risk.entity";
import { RiskDetailModel } from "./risk-detail.model";

@Entity({ name: 'risks' })
export class RiskModel extends BaseModel implements RiskEntity {
  @Column('enum', { name: 'source_type', enum: RiskSourceType })
  source_type: RiskSourceType;

  @Column('date', { name: 'report_date' })
  report_date: Date;

  @Column('text', { name: 'identification' })
  identification: string;

  @Column('text', { name: 'consequence', nullable: true })
  consequence: string;

  @Column('enum', { name: 'source', enum: RiskSource })
  source: RiskSource;

  @Column('enum', { name: 'type', enum: RiskType })
  type: RiskType;

  @Column('varchar', { name: 'code' })
  code?: string;

  @Column('text', { name: 'mitigasi_action', nullable: true })
  mitigasi_action?: string;

  @Column('text', { name: 'controlling', nullable: true })
  controlling?: string;

  @Column('uuid', { name: 'pic_id', nullable: true })
  pic_id: string

  @ManyToOne(() => AreaModel, model => model.risk_pic, {
    onUpdate: 'CASCADE'
  })
  @JoinColumn({ name: 'pic_id' })
  pic?: AreaEntity;

  @Column('enum', { name: 'conclusion', enum: RiskConlusion })
  conclusion?: RiskConlusion;

  @Column('date', { name: 'evaluation_date', nullable: true })
  evaluation_date?: Date;

  @Column('varchar', { name: 'evaluated_by', nullable: true })
  evaluated_by?: string;

  @Column('enum', { name: 'evaluation_result', enum: RiskEvaluationResult })
  evaluation_result?: RiskEvaluationResult;

  @Column('uuid', { name: 'inherit_risk_id', nullable: true })
  inherit_risk_id: string

  @OneToOne(() => RiskDetailModel, model => model.inherit, {
    cascade: ['insert', 'update', 'remove']
  })
  @JoinColumn({ name: 'inherit_risk_id' })
  inherit_risk: RiskDetailModel;

  @Column('varchar', { name: 'inherit_risk_result', nullable: true })
  inherit_risk_result?: string

  @Column('uuid', { name: 'residual_risk_id', nullable: true })
  residual_risk_id: string

  @OneToOne(() => RiskDetailModel, model => model.residual, {
    cascade: ['insert', 'update', 'remove']
  })
  @JoinColumn({ name: 'residual_risk_id' })
  residual_risk: RiskDetailModel;

  @Column('varchar', { name: 'residual_risk_result', nullable: true })
  residual_risk_result?: string
}