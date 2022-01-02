import { UserEntity } from "../../../user/domain/entities/user.entity";

export interface CompanyEntity {
  id?: string
  name: string
  address: string
  province: string
  city: string
  postal_code: number
  phone: string
  fax: string
  email: string
  npwp: string
  website_url: string

  user?: UserEntity
  created_at?: Date
  updated_at?: Date
  deleted_at?: Date
}