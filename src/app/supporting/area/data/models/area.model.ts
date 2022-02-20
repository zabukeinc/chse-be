import { BaseModel } from "src/app/base/data/models/base.model";
import { RecordModel } from "src/app/supporting/record/data/models/record.model";
import { Column, Entity, OneToMany } from "typeorm";
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
}