import { BaseDateEntity } from "src/app/base/data/entities/base.entity";
import { ISOEntity } from "src/app/iso/domain/entities/iso.entity";

export interface UserCompanyEntity extends BaseDateEntity {
  id: string
  type_of_acreditation: string
  iso?: ISOEntity
  iso_id: string
  lpk_name: string
  address: string
  province: string
  city: string
  postal_code: string
}