import { BaseCreateManager } from "src/app/base/domain/usecases/managers/base-create.manager";
import { RecordDataService } from "../../../data/services/record-data.service";
import { RecordEntity } from "../../entities/record.entity";

export class CreateRecordManager extends BaseCreateManager<RecordEntity> {
  constructor(
    protected entity: RecordEntity,
    protected service: RecordDataService
  ) {
    super(service, entity)
  }

  async beforeProcess(): Promise<void> {
    return;
  }
  async prepareData(): Promise<RecordEntity> {
    return this.entity;
  }
}