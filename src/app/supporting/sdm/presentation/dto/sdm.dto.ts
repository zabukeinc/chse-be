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
  educations?: SdmEducationDTO[];
  work_experiences?: SdmWorkExperienceDTO[];
  functionals?: SdmFunctionalDTO[];
}

export class SdmEducationDTO {
  id?: string;
  instance_name: string;
  major_name: string;
  level: string;
}

export class SdmWorkExperienceDTO {
  id?: string
  company_name: string;
  position: string;
  year: number;
}

export class SdmFunctionalDTO {
  id?: string
  schema: string;
  scope: string;
  position: string;
}