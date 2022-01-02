import { ApplicantDetailDTO } from "./applicant-detail.dto";

export class ApplicantDTO {
  company: { id: string };
  auditor: { id: string };
  iso: { id: string };
  start_date: Date;
  end_date: Date;
  creator_id: string;
  creator_name: string;
  editor_id: string;
  editor_name: string;
}