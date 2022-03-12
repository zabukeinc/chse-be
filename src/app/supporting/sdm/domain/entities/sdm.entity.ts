import { BaseDateEntity } from "src/app/base/data/entities/base.entity";

export enum SdmStatus {
  KAWIN = 'KAWIN',
  BELUM_KAWIN = 'BELUM_KAWIN',
  CERAI_HIDUP = 'CERAI_HIDUP',
  CERAI_MATI = 'CERAI_MATI'
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
  year_out: number
}

export interface SdmFunctionalEntity extends BaseDateEntity {
  id?: string
  schema: string
  scope: string
  position: string
  justification_path?: string
}