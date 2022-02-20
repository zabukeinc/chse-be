import { RecordEntity } from "../../../record/domain/entities/record.entity";
import { BaseEntity } from "../../../../../app/base/data/entities/base.entity";

export interface AreaEntity extends BaseEntity {
  name: string
  code: string

  /** Relations */
  records?: RecordEntity[]
}