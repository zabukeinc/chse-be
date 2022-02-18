import { BaseDateEntity } from "src/app/base/data/entities/base.entity";

export enum SdmStatus {
  MARRIED = 'menikah',
  UN_MARRIED = 'lajang',
  STUDENT = 'pelajar/mahasiswa',
  WORK = 'pekerja'
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
  educations?: SdmEducationEntity[]
  work_experiences?: SdmWorkExperienceEntity[]
  functionals?: SdmFunctionalEntity[]
}

export interface SdmEducationEntity extends BaseDateEntity {
  id?: string
  instance_name: string
  major_name: string
  level: string
}

export interface SdmWorkExperienceEntity extends BaseDateEntity {
  id?: string
  company_name: string
  position: string
  year: number
}

export interface SdmFunctionalEntity extends BaseDateEntity {
  id?: string
  schema: string
  scope: string
  position: string
}