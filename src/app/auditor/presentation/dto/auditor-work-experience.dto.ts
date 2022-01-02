import { AuditorWorkExperienceEntity } from "../../domain/entities/auditor-work-experience.entity";

export class AuditorWorkExperienceDTO implements AuditorWorkExperienceEntity {
  description: string;
  institution: string;
  job_position: string;
  start_date: Date;
  end_date: Date;  
}