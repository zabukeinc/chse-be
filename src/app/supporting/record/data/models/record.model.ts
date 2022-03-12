import { BaseModel } from "src/app/base/data/models/base.model";
import { AreaModel } from "src/app/supporting/area/data/models/area.model";
import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { RecordEntity, RecordType } from "../../domain/entities/record.entity";

@Entity({ name: 'records' })
export class RecordModel extends BaseModel implements RecordEntity {
  @Column('enum', { name: 'type', enum: RecordType })
  type: RecordType;

  @Column('varchar', { name: 'pic' })
  pic?: string;

  @Column('varchar', { name: 'title' })
  title: string;

  @Column('datetime', { name: 'year' })
  year: Date;

  @Column('int', { name: 'resensi' })
  resensi: number;

  @Column('text', { name: 'file_path', nullable: true })
  file_path?: string;

  @Column('uuid', { name: 'area_id', nullable: true })
  area_id: string
  
  @ManyToOne(() => AreaModel, model => model.records, {
    cascade: ['update'],
    onUpdate: 'CASCADE',
  })
  @JoinColumn({ name: 'area_id' })
  area: AreaModel
}