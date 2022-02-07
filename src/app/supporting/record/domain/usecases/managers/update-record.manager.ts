import { BaseUpdateManager } from "src/app/base/domain/usecases/managers/base-update.manager";
import { RecordDataService } from "../../../data/services/record-data.service";
import { RecordEntity } from "../../entities/record.entity";

export class UpdateRecordManager extends BaseUpdateManager<RecordEntity> {
  constructor(
    protected id: string,
    protected updateData: RecordEntity,
    protected service: RecordDataService
  ) {
    super(service, id, updateData)
  }

  async beforeProcess(): Promise<void> {
    return
  }
  
  async prepareData(): Promise<RecordEntity> {
    return this.updateData;
  }
}