import { BaseDateEntity, BaseEntity } from "./../../../../base/data/entities/base.entity";
import { SdmDueDiligenceAnswerValue, SdmDueDiligenceAnswerVerif, SdmDueDiligenceType } from "./../../../sdm/domain/entities/sdm.entity";

export type SupplierDueDiligenceType = SdmDueDiligenceType
export type SupplierDueDiligenceAnswerVerif = SdmDueDiligenceAnswerVerif
export type SupplierDueDiligenceAnswerValue = SdmDueDiligenceAnswerValue
export enum SupplierDueDiligenceRiskType {
  RENDAH = 'Rendah',
  SEDANG = 'Sedang',
  TINGGI = 'Tinggi'
}
export enum SupplierDueDiligenceDecision {
  DIPERTAHAKAN = 'Dipertahakan',
  BLACKLIST = 'Blacklist'
}

export enum SupplierDueDiligenceEvaluationAnswer {
  SB = 'Sangat Baik',
  BAIK = 'Baik',
  KURANG = 'Kurang'
}

export interface SupplierEntity extends BaseEntity {
  name: string
  code: string
  address: string
  email: string
  telp: string
  connector_name: string
  connector_telp: string
  company_deed: string
  npwp: string
  services?: SupplierServiceEntity[]
  experiences?: SupplierExperienceEntity[]
  due_diligence?: SupplierDueDiligenceEntity
}

export interface SupplierServiceEntity extends BaseDateEntity {
  id?: string
  name: string
  specification: string
  file_url: string
}

export interface SupplierExperienceEntity extends BaseDateEntity {
  id?: string
  project_name: string
  activity: string
  year: number
}

export interface SupplierDueDiligenceEntity extends BaseDateEntity {
  id?: string
  type: SupplierDueDiligenceType
  selection_answers?: SupplierDueDiligenceSelectionAnswerEntity[]
  selection_conclusion?: string
  selection_verification_date?: string
  selection_evaluator?: string
  selection_risk?: SupplierDueDiligenceRiskType
  selection_action?: string

  evaluation_answers?: SupplierDueDiligenceEvaluationEntity[]
  evaluation_conclusion?: string
  evaluation_evaluated_date?: string
  evaluation_evaluator?: string
  evaluation_decision?: SupplierDueDiligenceDecision
  evaluation_action?: string
}

export interface SupplierDueDiligenceSelectionAnswerEntity extends BaseDateEntity {
  id?: string
  index?: number
  answer?: SupplierDueDiligenceAnswerValue
  description?: string
  verification: SupplierDueDiligenceAnswerVerif
}

export interface SupplierDueDiligenceEvaluationEntity extends BaseDateEntity {
  id?: string
  index?: number
  answer?: SupplierDueDiligenceEvaluationAnswer
}