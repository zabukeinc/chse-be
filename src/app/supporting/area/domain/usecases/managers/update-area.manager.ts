import { BaseUpdateManager } from "src/app/base/domain/usecases/managers/base-update.manager";
import { AreaDataService } from "../../../data/services/area-data.service";
import { AreaEntity } from "../../entities/area.entity";

export class UpdateAreaManager extends BaseUpdateManager<AreaEntity> {
  constructor(
    protected service: AreaDataService,
    protected id: string,
    protected updateData: AreaEntity
  ) {
    super(service, id, updateData)
  }

  async beforeProcess(): Promise<void> {
    return
  }

  async prepareData(): Promise<AreaEntity> {
    return this.updateData
  }
}