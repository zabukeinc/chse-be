import { ApplicantModel } from "src/app/applicant/data/models/applicant.model";
import { BaseModel } from "src/app/base/data/models/base.model";
import { UserModel } from "src/app/user/data/models/user.model";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { AuditorEducationEntity } from "../../domain/entities/auditor-education";
import { AuditorWorkExperienceEntity } from "../../domain/entities/auditor-work-experience.entity";
import { AuditorEntity, AuditorGender } from "../../domain/entities/auditor.entity";
import { AuditorEducationModel } from "./auditor-education.model";
import { AuditorWorkExperienceModel } from "./auditor-work-experience.model";

@Entity({ name: 'auditors' })
export class AuditorModel extends BaseModel implements AuditorEntity {
  @Column('varchar', { name: 'name' })
  name: string;

  @Column('enum', { name: 'gender', enum: AuditorGender })
  gender: AuditorGender;

  @Column('varchar', { name: 'front_title', nullable: true })
  front_title: string;

  @Column('varchar', { name: 'back_title', nullable: true })
  back_title: string;

  @Column('date', { name: 'born_date' })
  born_date: Date;

  @Column('text', { name: 'born_address' })
  born_address: string;

  @Column('varchar', { name: 'institution', nullable: true })
  institution: string;

  @Column('text', { name: 'address' })
  address: string;

  @Column('varchar', { name: 'city' })
  city: string;

  @Column('varchar', { name: 'province' })
  province: string;

  @Column('int', { name: 'postal_code' })
  postal_code: number;

  @Column('varchar', { name: 'phone', nullable: true })
  phone: string;

  @Column('varchar', { name: 'fax', nullable: true })
  fax: string;

  @Column('varchar', { name: 'email' })
  email: string;

  /** Join with Auditor Educations */
  @OneToMany(() => AuditorEducationModel, model => model.auditor, {
    cascade: ['insert', 'update', 'remove'],
  })
  educations: AuditorEducationEntity[];

  /** Join with Auditor Work Experiences */
  @OneToMany(() => AuditorWorkExperienceModel, model => model.auditor, {
    cascade: ['insert', 'update', 'remove'],
  })
  work_experiences: AuditorWorkExperienceEntity[];

  /** Join with User */
  @Column('varchar', { name: 'user_id', nullable: true })
  user_id: string

  @OneToOne(() => UserModel, model => model.auditor, {
    cascade: ['insert', 'update', 'remove'],
    onUpdate: 'CASCADE'
  })
  @JoinColumn({ name: 'user_id' })
  user?: UserModel;

  @OneToMany(() => ApplicantModel, model => model.auditor)
  applicants: ApplicantModel[]
}