import { ApplicantType, CertificationType, LocationType } from "../../domain/entities/applicant.entity";

export class ApplicantDTO {
  client_id?: string;
  certification_type: CertificationType;
  applicant_type: ApplicantType;
  applicant_path?: string | null;
  scope: string;
  location_type: LocationType;
  locations?: ApplicantLocationDTO[];
  application_path?: string;
  code?: string;
  id?: string;
  creator_name?: string | null;
  editor_name?: string | null;
  creator_id?: string | null;
  editor_id?: string | null;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date | null;
}

export class ApplicantLocationDTO {
  id?: string;
  address: string;
  activity: string;
  applicant_id?: string;
  applicant?: ApplicantDTO;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date | null;
}