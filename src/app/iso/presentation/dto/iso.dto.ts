
export type IsoDTO = {
  name: string
  code: string
  detail: IsoDetailDTO[]
}

export type IsoDetailDTO = {
  name: string
  template_path?: string
}