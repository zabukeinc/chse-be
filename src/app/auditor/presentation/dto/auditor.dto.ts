import { UserEntity } from "../../../user/domain/entities/user.entity";
import { AuditorEntity, AuditorGender } from "../../domain/entities/auditor.entity";
import { AuditorEducationDTO } from "./auditor-education.dto";
import { AuditorWorkExperienceDTO } from "./auditor-work-experience.dto";

export class AuditorDTO implements AuditorEntity {
  name: string;
  gender: AuditorGender;
  front_title: string;
  back_title: string;
  born_date: Date;
  born_address: string;
  institution: string;
  address: string;
  city: string;
  province: string;
  postal_code: number;
  phone: string;
  fax: string;
  email: string;
  educations: AuditorEducationDTO[];
  work_experiences: AuditorWorkExperienceDTO[];
  user?: UserEntity;
}