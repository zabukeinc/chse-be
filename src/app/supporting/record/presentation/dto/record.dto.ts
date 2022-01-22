import { FormField } from "tsoa"
import { RecordType } from "../../domain/entities/record.entity"

export class RecordDTO{
  id?: string

  @FormField('type')
  type: RecordType

  @FormField('pic')
  pic?: string

  @FormField('area')
  area?: string

  @FormField('title')
  title: string

  @FormField('year')
  year: number

  @FormField('resensi')
  resensi: Date

  @FormField('file_path')
  file_path?: string
}