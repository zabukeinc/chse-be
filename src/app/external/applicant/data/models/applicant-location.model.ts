import { BaseRelationModel } from "src/app/base/data/models/base-relation.model";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { ApplicantLocationEntity } from "../../domain/entities/applicant.entity";
import { ApplicantModel } from "./applicant.model";

@Entity({ name: 'external_applicant_locations' })
export class ApplicantLocationModel extends BaseRelationModel implements ApplicantLocationEntity {
  @Column('text', { name: 'address', nullable: true })
  address: string;

  @Column('varchar', { name: 'activity', nullable: true })
  activity: string;

  @Column('uuid', { name: 'applicant_id', nullable: true })
  applicant_id?: string;

  @ManyToOne(() => ApplicantModel, model => model.locations, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'applicant_id' })
  applicant: ApplicantModel;
}