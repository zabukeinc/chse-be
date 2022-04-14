import { BaseModel } from "src/app/base/data/models/base.model";
import { Column, Entity, OneToMany } from "typeorm";
import { ApplicantEntity, ApplicantLocationEntity, ApplicantType, CertificationType, LocationType } from "../../domain/entities/applicant.entity";
import { ApplicantLocationModel } from "./applicant-location.model";

@Entity({ name: 'external_applicants' })
export class ApplicantModel extends BaseModel implements ApplicantEntity {
  client_id?: string;

  @Column('enum', { name: 'certification_type', enum: CertificationType, nullable: true })
  certification_type: CertificationType;

  @Column('enum', { name: 'applicant_type', enum: ApplicantType, nullable: true })
  applicant_type: ApplicantType;

  @Column('varchar', { name: 'scope', nullable: true })
  scope: string;

  @Column('enum', { name: 'location_type', enum: LocationType, nullable: true })
  location_type: LocationType;

  @Column('varchar', { name: 'application_path', nullable: true })
  application_path?: string;

  @Column('varchar', { name: 'code', nullable: true })
  code?: string;

  @OneToMany(() => ApplicantLocationModel, model => model.applicant, {
    cascade: ['insert', 'update', 'remove']
  })
  locations: ApplicantLocationModel[]
}