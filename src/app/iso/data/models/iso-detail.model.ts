import { BaseModel } from "src/app/base/data/models/base.model";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
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
}