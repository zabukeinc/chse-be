import { AuditorEducationEntity } from "../../domain/entities/auditor-education";

export class AuditorEducationDTO implements AuditorEducationEntity {
  strata: string;
  scholarship: string;
  instance_name: string;
  country: string;
  graduate_year: number;  
}