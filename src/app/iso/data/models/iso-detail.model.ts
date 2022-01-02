import { ApplicantDetailModel } from "src/app/applicant/data/models/applicant-detail.model";
import { BaseModel } from "src/app/base/data/models/base.model";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ISODetailEntity } from "../../domain/entities/iso-detail.entity";
import { ISOModel } from "./iso.model";

@Entity({ name: 'iso_details' })
export class ISODetailModel extends BaseModel implements ISODetailEntity {
  @Column('varchar', { name: 'name' })
  name: string;

  @Column('text', { name: 'template_path', nullable: true })
  template_path: string;

  @ManyToOne(() => ISOModel, model => model.details, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'iso_id' })
  iso: ISOModel

  @OneToMany(() => ApplicantDetailModel, model => model.iso_detail)
  applicant_details: ApplicantDetailModel[]
}