import { UserEntity } from "../../../user/domain/entities/user.entity";
import { AuditorEducationEntity } from "./auditor-education";
import { AuditorWorkExperienceEntity } from "./auditor-work-experience.entity";

export enum AuditorGender {
  MALE = 'male',
  FEMALE = 'female'
}

export interface AuditorEntity {
  id?: string
  name: string
  gender: AuditorGender
  front_title: string
  back_title: string
  born_date: Date
  born_address: string
  institution: string
  address: string
  city: string
  province: string
  postal_code: number
  phone: string
  fax: string
  email: string
  educations: AuditorEducationEntity[]
  work_experiences: AuditorWorkExperienceEntity[]
  user?: UserEntity
  created_at?: Date
  updated_at?: Date
  deleted_at?: Date
}