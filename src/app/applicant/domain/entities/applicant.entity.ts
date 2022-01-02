import { ISOEntity } from "../../../iso/domain/entities/iso.entity";
import { AuditorEntity } from "../../../auditor/domain/entities/auditor.entity";
import { CompanyEntity } from "../../../company/domain/entities/company.entity";
import { ApplicantDetailEntity } from "./applicant-detail.entity";

export interface ApplicantEntity {
  id?: string
  company: CompanyEntity
  auditor: AuditorEntity
  start_date: Date
  end_date: Date

  creator_id: string
  creator_name: string
  editor_id: string
  editor_name: string

  iso: ISOEntity

  details: ApplicantDetailEntity[]
  
  created_at?: Date
  updated_at?: Date
  deleted_at?: Date
}