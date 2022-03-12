import { AreaEntity } from "../../../area/domain/entities/area.entity"
import { RecordEntity, RecordType } from "../../domain/entities/record.entity"

export class RecordDTO implements RecordEntity {
  id?: string
  type: RecordType
  pic?: string
  area?: AreaEntity
  title: string
  year: Date
  resensi: number
  file_path?: string
}