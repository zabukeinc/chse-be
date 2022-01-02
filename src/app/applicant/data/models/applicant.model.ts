import { AuditorModel } from "src/app/auditor/data/models/auditor.model";
import { BaseModel } from "src/app/base/data/models/base.model";
import { CompanyModel } from "src/app/company/data/models/company.model";
import { ISOModel } from "src/app/iso/data/models/iso.model";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { ApplicantEntity } from "../../domain/entities/applicant.entity";
import { ApplicantDetailModel } from "./applicant-detail.model";

@Entity({ name: 'applicants' })
export class ApplicantModel extends BaseModel implements ApplicantEntity {
  @Column('varchar', { name: 'company_id', nullable: true })
  company_id: string

  @ManyToOne(() => CompanyModel, model => model.applicants)
  @JoinColumn({ name: 'company_id' })
  company: CompanyModel;

  @Column('varchar', { name: 'auditor_id', nullable: true })
  auditor_id: string

  @ManyToOne(() => AuditorModel, model => model.applicants)
  @JoinColumn({ name: 'auditor_id' })
  auditor: AuditorModel;

  @Column('date', { name: 'start_date' })
  start_date: Date;

  @Column('date', { name: 'end_date', nullable: true })
  end_date: Date;

  @Column('varchar', { name: 'iso_id', nullable: true })
  iso_id: string

  @ManyToOne(() => ISOModel, model => model.applicants, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'iso_id' })
  iso: ISOModel

  @OneToMany(() => ApplicantDetailModel, model => model.applicant, {
    cascade: ['insert', 'update', 'remove']
  })
  details: ApplicantDetailModel[];
}