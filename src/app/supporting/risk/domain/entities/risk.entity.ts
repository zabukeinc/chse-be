import { BaseDateEntity, BaseEntity } from "../../../../base/data/entities/base.entity";
import { AreaEntity } from "../../../area/domain/entities/area.entity";

export enum RiskSourceType {
  INTERNAL = 'INTERNAL',
  EXTERNAL = 'EXTERNAL'
}

export enum RiskSource {
  BUDAYA = 'Budaya',
  KARYAWAN = 'Karyawan',
  BISNIS_PROSES = 'Bisnis Proses',
  VENDOR = 'Vendor',
  PASAR = 'Pasar',
  PERATURAN = 'Peraturan',
  TEKNOLOGI = 'Teknologi',
  EKONOMI = 'Ekonomi',
  SOSIAL = 'Sosial',
  PEMERINTAH = 'Pemerintah',
  KONSUMEN = 'Konsumen'
}

export enum RiskType {
  STRATEGI = 'Strategi',
  OPERASIONAL = 'Operasional',
  KEUANGAN = 'Keuangan',
  KEPATUHAN = 'Kepatuhan',
  KETIDAKBERPIHAKAN = 'Ketidakberpihakan',
  KESELAMATAN = 'Keselamatan'
}

export enum RiskConlusion {
  DITERIMA = 'Diterima',
  MITIGASI_ULANG = 'Mitigasi Ulang'
}

export enum RiskEvaluationResult {
  EFEKTIF = 'Efektif',
  NON_EFFECTIVE = 'Tidak Efektif'
}

export enum LikelyhoodValue {
  RARE = 1,
  UNLIKELY = 2,
  POSIBBLE = 3,
  LIKELY = 4,
  CERTAIN = 5
}

export enum ConsequenceValue {
  SIGH_EFFECT = 1,
  MINOR = 2,
  MODERAT = 3,
  MAJOR = 4,
  CATASTROPHIC = 5
}

export interface RiskDetailEntity extends BaseDateEntity {
  consequence: ConsequenceValue
  likelyhood: LikelyhoodValue
}

export interface RiskEntity extends BaseEntity {
  source_type: RiskSourceType
  report_date: Date
  identification: string
  consequence?: string | null
  source: RiskSource
  type: RiskType
  code?: string
  mitigasi_action?: string
  controlling?: string
  pic?: AreaEntity
  conclusion?: RiskConlusion
  evaluation_date?: Date
  evaluated_by?: string
  evaluation_result?: RiskEvaluationResult
  inherit_risk: RiskDetailEntity
  inherit_risk_result?: string
  residual_risk: RiskDetailEntity
  residual_risk_result?: string
}

