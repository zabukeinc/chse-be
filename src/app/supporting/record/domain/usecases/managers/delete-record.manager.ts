import { BaseDeleteManager } from "src/app/base/domain/usecases/managers/base-delete.manager";
import { RecordDataService } from "../../../data/services/record-data.service";
import { RecordEntity } from "../../entities/record.entity";

export class DeleteRecordManager extends BaseDeleteManager<RecordEntity> {
  constructor(
    protected entityIds: string[],
    protected service: RecordDataService
  ) {
    super(service, entityIds)
  }

  async processEachEntity(): Promise<void> {
    await Promise.all(
      this.entities.map(
        async (entity) => {
          await this.service.delete([entity.id])
        }
      )
    )
  }

  async beforeProcess(): Promise<void> {
    return
  }

  async prepareData(): Promise<RecordEntity> {
    return this.entities[0]
  }
}