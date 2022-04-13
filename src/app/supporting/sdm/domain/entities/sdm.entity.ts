import { BaseDateEntity } from "src/app/base/data/entities/base.entity";

export enum SdmStatus {
  KAWIN = 'KAWIN',
  BELUM_KAWIN = 'BELUM_KAWIN',
  CERAI_HIDUP = 'CERAI_HIDUP',
  CERAI_MATI = 'CERAI_MATI'
}

export enum SdmDueDiligenceType {
  SELEKSI = 'Seleksi',
  MUTASI = 'Mutasi',
  PROMOSI = 'Promosi',
  EVALUASI = 'Evaluasi'
}

export enum SdmDueDiligenceAnswerVerif {
  VALID = 'Valid',
  NOT_VALID = 'Tidak Valid'
}

export enum SdmDueDiligenceAnswerValue {
  YES = 'Ya',
  NO = 'Tidak',
  IN_PROGRESS = 'Dalam Proses',
  DONE = 'Sudah'
}

export enum SdmDueDiligenceRiskType {
  CONFLICT = 'Konflik',
  NOT_CONFLICT = 'Tidak Ada Konflik'
}

export interface SdmEntity extends BaseDateEntity {
  id?: string
  code?: string
  name: string
  email: string
  phone: string
  address: string
  born_address: string
  born_date: Date
  status: SdmStatus
  title?: string
  no_ktp: string
  nik: string
  npwp?: string
  educations?: SdmEducationEntity[]
  work_experiences?: SdmWorkExperienceEntity[]
  functionals?: SdmFunctionalEntity[]
  trainings?: SdmTrainingEntity[]
  due_diligence?: SdmDueDiligenceEntity
}

export interface SdmEducationEntity extends BaseDateEntity {
  id?: string
  instance_name: string
  major_name: string
  level: string
  graduate_year: number
}

export interface SdmWorkExperienceEntity extends BaseDateEntity {
  id?: string
  company_name: string
  position: string
  year_in: number
  year_out: string
}

export interface SdmFunctionalEntity extends BaseDateEntity {
  id?: string
  schema: string
  scope: string
  position: string
  justification_path?: string
}

export interface SdmTrainingEntity extends BaseDateEntity {
  id?: string
  name: string
  date: Date
  instance?: string
  instructur?: string
  status: string
  certification_path?: string
}

export interface SdmDueDiligenceEntity extends BaseDateEntity {
  id?: string
  type: SdmDueDiligenceType
  answers?: SdmDueDiligenceAnswerEntity[]
  conclusion?: string
  verification_date: Date
  evaluator: string
  risk: SdmDueDiligenceRiskType
  action: string
  evaluation_performance_path?: string
  evaluation_maintenance_path?: string
}

export interface SdmDueDiligenceAnswerEntity extends BaseDateEntity {
  id?: string
  index?: number
  answer?: SdmDueDiligenceAnswerValue
  description?: string
  verification: SdmDueDiligenceAnswerVerif
}