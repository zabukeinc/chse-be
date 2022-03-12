import { BaseModel } from "src/app/base/data/models/base.model";
import { Column, Entity, OneToMany } from "typeorm";
import { SdmEntity, SdmStatus } from "../../domain/entities/sdm.entity";
import { SdmEducationModel } from "./sdm-education.model";
import { SdmFunctionalModel } from "./sdm-functional.model";
import { SdmWorkExperienceModel } from "./sdm-work-experience.model";

@Entity({ name: 'supporting_sdm' })
export class SdmModel extends BaseModel implements SdmEntity {
  @Column('varchar', { name: 'code', nullable: true })
  code: string

  @Column('varchar', { name: 'name' })
  name: string

  @Column('varchar', { name: 'email' })
  email: string;

  @Column('varchar', { name: 'phone' })
  phone: string;

  @Column('text', { name: 'address' })
  address: string;

  @Column('varchar', { name: 'born_address' })
  born_address: string;

  @Column('date', { name: 'born_date' })
  born_date: Date;

  @Column('enum', { name: 'status', enum: SdmStatus })
  status: SdmStatus

  @Column('varchar', { name: 'title', nullable: true })
  title?: string;

  @Column('varchar', { name: 'no_ktp' })
  no_ktp: string;

  @Column('varchar', { name: 'nik' })
  nik: string;

  @Column('varchar', { name: 'npwp', nullable: true })
  npwp?: string;

  @OneToMany(() => SdmEducationModel, model => model.sdm, {
    cascade: ['insert', 'update', 'remove']
  })
  educations: SdmEducationModel[];

  @OneToMany(() => SdmWorkExperienceModel, model => model.sdm, {
    cascade: ['insert', 'update', 'remove']
  })
  work_experiences: SdmWorkExperienceModel[];

  @OneToMany(() => SdmFunctionalModel, model => model.sdm, {
    cascade: ['insert', 'update', 'remove']
  })
  functionals: SdmFunctionalModel[];
}