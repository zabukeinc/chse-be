export enum Gender {
  MALE = 'male',
  FEMALE = 'female'
}

export type UserDetailEntity = {
  id?: string
  created_at?: Date
  updated_at?: Date
  deleted_at?: Date
}

export type EducationEntity = {
  id?: string
  strata: string
  scope: string
  name: string
  country: string
  graduate_year: number
  created_at?: Date
  updated_at?: Date
  deleted_at?: Date
}

export type WorkExperienceEntity = {
  id?: string
  description: string
  institution: string
  position: string
  start_date: Date
  end_date: Date
  created_at?: Date
  updated_at?: Date
  deleted_at?: Date
}