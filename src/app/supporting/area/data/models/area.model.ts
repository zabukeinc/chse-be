import { BaseModel } from "src/app/base/data/models/base.model";
import { DocumentModel } from "src/app/supporting/document/data/models/document.model";
import { RecordModel } from "src/app/supporting/record/data/models/record.model";
import { RiskModel } from "src/app/supporting/risk/data/models/risk.model";
import { Column, Entity, ManyToMany, OneToMany } from "typeorm";
import { AreaEntity } from "../../domain/entities/area.entity";

@Entity({ name: 'areas' })
export class AreaModel extends BaseModel implements AreaEntity {
  @Column('varchar', { name: 'name' })
  name: string

  @Column('varchar', { name: 'code' })
  code: string

  @OneToMany(() => RecordModel, model => model.area, {
    cascade: ['update'],
    onUpdate: 'CASCADE'
  })
  records: RecordModel[]

  @OneToMany(() => DocumentModel, model => model.owner, {
    cascade: ['update']
  })
  document_owner: DocumentModel

  @ManyToMany(() => DocumentModel, model => model.access, {
    cascade: ['update']
  })
  document_access: DocumentModel[]

  @OneToMany(() => RiskModel, model => model.pic, {
    cascade: ['update']
  })
  risk_pic: RiskModel
}