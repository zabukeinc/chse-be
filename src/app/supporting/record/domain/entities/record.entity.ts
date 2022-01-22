export enum RecordType {
  MUTU = 'mutu',
  TEKNIS = 'teknis'
}

export interface RecordEntity {
  id?: string
  type: RecordType
  pic?: string
  area?: string
  title: string
  year: number
  resensi: Date
  file_path?: string
  created_at?: Date
  updated_at?: Date
  deleted_at?: Date
}