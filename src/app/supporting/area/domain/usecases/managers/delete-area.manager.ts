import { BaseDeleteManager } from "src/app/base/domain/usecases/managers/base-delete.manager";
import { AreaDataService } from "../../../data/services/area-data.service";
import { AreaEntity } from "../../entities/area.entity";

export class DeleteAreaManager extends BaseDeleteManager<AreaEntity> {
  constructor(
    protected service: AreaDataService,
    protected id: string
  ) {
    super(service, id)
  }

  async beforeProcess(): Promise<void> {
    return
  }

  async prepareData(): Promise<AreaEntity> {
    return this.entity
  }
}