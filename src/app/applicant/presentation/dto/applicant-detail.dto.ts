import { ISODetailEntity } from "../../../iso/domain/entities/iso-detail.entity";
import { ApplicantDetailEntity, ApplicantDetailStatus } from "../../domain/entities/applicant-detail.entity";

export class ApplicantDetailDTO implements ApplicantDetailEntity {
  iso_detail: ISODetailEntity;
  status: ApplicantDetailStatus;
  reject_description: string;
  document_path: string;
}