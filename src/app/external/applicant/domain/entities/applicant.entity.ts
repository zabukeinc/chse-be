import { BaseDateEntity, BaseEntity } from "src/app/base/data/entities/base.entity";

export enum CertificationType {
  ISO_9001 = "ISO 9001",
  ISO_37001 = "ISO 37001",
}

export enum ApplicantType {
  BARU = "Baru",
  PERPANJANGAN = "Perpanjangan",
  PENAMBAHAN_LINGKUP = "Penambahan Lingkup",
  TRANSFER = "Transfer",
}

export enum LocationType {
  LOKASI_PUSAT = "Lokasi Pusat",
  MULTI_LOKASO = "Multi Lokasi"
}

export interface ApplicantEntity extends BaseEntity {
  client_id?: string;
  certification_type: CertificationType;
  applicant_type: ApplicantType
  scope: string;
  location_type: LocationType
  locations?: ApplicantLocationEntity[]
  application_path?: string;
  code?: string;
}

export interface ApplicantLocationEntity extends BaseDateEntity {
  id?: string;
  address: string;
  activity: string;
  applicant_id?: string
  applicant?: ApplicantEntity;
}