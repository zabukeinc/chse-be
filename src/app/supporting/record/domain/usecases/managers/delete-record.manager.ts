import { BaseDeleteManager } from "src/app/base/domain/usecases/managers/base-delete.manager";
import { RecordDataService } from "../../../data/services/record-data.service";
import { RecordEntity } from "../../entities/record.entity";

export class DeleteRecordManager extends BaseDeleteManager<RecordEntity> {
  constructor(
    protected entityId: string,
    protected service: RecordDataService
  ) {
    super(service, entityId)
  }

  async beforeProcess(): Promise<void> {
    return
  }

  async prepareData(): Promise<RecordEntity> {
    return this.entity
  }
}