import { FormField } from "tsoa"
import { ISODetailEntity } from "../../domain/entities/iso-detail.entity"
import { ISOEntity } from "../../domain/entities/iso.entity"

export class IsoDTO implements ISOEntity{
  @FormField('name')
  name: string

  @FormField('code')
  code: string

  @FormField('details')
  details: IsoDetailDTO[]
}

export class IsoDetailDTO implements ISODetailEntity {
  @FormField('name')
  name: string

  @FormField('template_path')
  template_path: string
}