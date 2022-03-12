import { BaseEntity } from "../../../../base/data/entities/base.entity";
import { AreaEntity } from "../../../area/domain/entities/area.entity";

export enum RecordType {
  MUTU = 'mutu',
  TEKNIS = 'teknis'
}

export interface RecordEntity extends BaseEntity {
  id?: string
  type: RecordType
  pic?: string
  title: string
  year: Date
  resensi: number
  file_path?: string

  /** relation */
  area?: AreaEntity
  area_id?: string
}