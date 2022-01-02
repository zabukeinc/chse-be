import { ISODetailEntity } from "./iso-detail.entity";

export type ISOEntity = {
  id?: string
  name: string
  code: string
  details: ISODetailEntity[]
  created_at?: Date
  updated_at?: Date
  deleted_at?: Date
}