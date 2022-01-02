import { ISODetailEntity } from "../../../iso/domain/entities/iso-detail.entity";

export enum ApplicantDetailStatus {
  APPROVE = 'approve',
  REJECT = 'reject'
}

export interface ApplicantDetailEntity {
  id?: string
  iso_detail: ISODetailEntity
  status: ApplicantDetailStatus
  reject_description: string
  document_path: string
  created_at?: Date
  updated_at?: Date
  deleted_at?: Date
}