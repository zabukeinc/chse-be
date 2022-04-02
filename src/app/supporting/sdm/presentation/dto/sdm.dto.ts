import { 
  SdmDueDiligenceAnswerValue, 
  SdmDueDiligenceAnswerVerif, 
  SdmDueDiligenceRiskType, 
  SdmDueDiligenceType, 
  SdmStatus
 } from "../../domain/entities/sdm.entity";

export class SdmDTO {
  id?: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  born_address: string;
  born_date: Date;
  status: SdmStatus;
  title?: string;
  nik: string;
  npwp?: string;
  no_ktp: string;
  educations?: SdmEducationDTO[];
  work_experiences?: SdmWorkExperienceDTO[];
  functionals?: SdmFunctionalDTO[];
  trainings?: SdmTrainingDTO[];
  due_diligence?: SdmDueDiligenceDTO;
}

export class SdmEducationDTO {
  id?: string;
  sdm_id?: string
  instance_name: string;
  major_name: string;
  level: string;
  graduate_year: number;
}

export class SdmWorkExperienceDTO {
  id?: string
  sdm_id?: string
  company_name: string;
  position: string;
  year_in: number;
  year_out: string;
}

export class SdmFunctionalDTO {
  id?: string
  sdm_id?: string
  schema: string;
  scope: string;
  position: string;
  justification_path?: string;
}

export class SdmTrainingDTO {
  id?: string;
  sdm_id?: string;
  name: string;
  date: Date;
  instance?: string;
  instructur?: string;
  status: string;
  certification_path?: string;
}

export class SdmDueDiligenceDTO {
  id?: string;
  type: SdmDueDiligenceType;
  answers?: SdmDueDiligenceAnswerDTO[];
  conclusion?: string;
  verification_date: Date;
  evaluator: string;
  risk: SdmDueDiligenceRiskType;
  action: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  sdm_id?: string;
}

export class SdmDueDiligenceAnswerDTO {
  id?: string | null;
  answer?: SdmDueDiligenceAnswerValue;
  index?: number;
  description?: string;
  verification: SdmDueDiligenceAnswerVerif;
  created_at?: Date | null;
  updated_at?: Date | null;
  deleted_at?: Date | null;
  sdm_due_diligence_id?: string | null;
}