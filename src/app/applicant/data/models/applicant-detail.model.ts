import { ISODetailModel } from "src/app/iso/data/models/iso-detail.model";
import { ISODetailEntity } from "src/app/iso/domain/entities/iso-detail.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ApplicantDetailEntity, ApplicantDetailStatus } from "../../domain/entities/applicant-detail.entity";
import { ApplicantModel } from "./applicant.model";

@Entity({ name: 'applicant_details' })
export class ApplicantDetailModel implements ApplicantDetailEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('varchar', { name: 'applicant_id', nullable: true })
  applicant_id: string

  @ManyToOne(() => ApplicantModel, model => model.details, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'applicant_id' })
  applicant: ApplicantModel

  @Column('varchar', { name: 'iso_detail_id', nullable: true })
  iso_detail_id: string
  @ManyToOne(() => ISODetailModel, model => model.applicant_details)
  @JoinColumn({ name: 'iso_detail_id' })
  iso_detail: ISODetailModel;

  @Column('enum', { name: 'status', enum: ApplicantDetailStatus, nullable: true })
  status: ApplicantDetailStatus;

  @Column('text', { name: 'reject_description', nullable: true })
  reject_description: string;

  @Column('varchar', { name: 'document_path', nullable: true })
  document_path: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at?: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at?: Date;
}