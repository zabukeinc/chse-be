export enum UserRole {
  ADMIN = 'admin',
  MANAGER = 'manager',
  AUDITOR = 'auditor',
  SALES = 'sales',
  COMPANY = 'company'
}

export type UserEntity = {
  id?: string
  username: string
  password: string
  role: UserRole
  created_at?: Date
  updated_at?: Date
  deleted_at?: Date
}