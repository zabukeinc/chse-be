import { BaseModel } from "src/app/base/data/models/base.model";
import { Column, Entity } from "typeorm";
import { RecordEntity, RecordType } from "../../domain/entities/record.entity";

@Entity({ name: 'records' })
export class RecordModel extends BaseModel implements RecordEntity {
  @Column('enum', { name: 'type', enum: RecordType })
  type: RecordType;

  @Column('varchar', { name: 'pic' })
  pic?: string;

  @Column('varchar', { name: 'area' })
  area?: string;

  @Column('varchar', { name: 'title' })
  title: string;

  @Column('int', { name: 'year' })
  year: number;

  @Column('date', { name: 'resensi' })
  resensi: Date;

  @Column('text', { name: 'file_path', nullable: true })
  file_path?: string;
}