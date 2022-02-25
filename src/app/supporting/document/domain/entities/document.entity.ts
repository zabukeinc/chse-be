import { BaseEntity } from "../../../../base/data/entities/base.entity";

export enum DocumentType {
  INTERNAL = 'internal',
  EXTERNAL = 'external'
}

export enum DocumentCategory {
  MANUAL = 'manual',
  SOP = 'sop',
  IK = 'ik',
  FORM = 'form',
  STANDARD = 'standard',
  RULE = 'rule',
  GUIDELINE = 'guideline',
  OTHER = 'other'
}

export interface DocumentEntity extends BaseEntity {
  code: string
  title: string
  name: string
  no_publish: number
  publish_date: Date
  no_revision: number
  revision_date: Date
  file_path: string
  type: DocumentType
  category: DocumentCategory
}