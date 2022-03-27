import { SdmStatus } from "../../domain/entities/sdm.entity";

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