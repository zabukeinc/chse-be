import { AreaEntity } from "../../../area/domain/entities/area.entity";
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

export enum DocumentStatus {
  ACTIVE = 'active',
  EXPIRED = 'expired'
}

export interface DocumentEntity extends BaseEntity {
  type: DocumentType
  code?: string
  title: string
  name?: string
  publish_date: Date
  category: DocumentCategory
  owner?: AreaEntity
  status?: DocumentStatus | null
  access?: AreaEntity[] | null
  file_path?: string | null
  no_revision?: number | null
  revision_date?: Date | null
  effective_date?: Date | null
}