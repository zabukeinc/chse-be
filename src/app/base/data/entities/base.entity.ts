export interface BaseEntity  {
  id?: string
  creator_name?: string | null
  editor_name?: string | null
  creator_id?: string | null
  editor_id?: string | null
  created_at?: Date
  updated_at?: Date
  deleted_at?: Date | null
}

export type BaseDateEntity = {
  created_at?: Date
  updated_at?: Date
  deleted_at?: Date
}