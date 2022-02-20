import { BaseCreateManager } from "src/app/base/domain/usecases/managers/base-create.manager";
import { AreaDataService } from "../../../data/services/area-data.service";
import { AreaEntity } from "../../entities/area.entity";
import { AreaValidator } from "../validators/area.validator";

export class CreateAreaManager extends BaseCreateManager<AreaEntity> {
  constructor(
    protected service: AreaDataService,
    protected area: AreaEntity
  ) {
    super(service, area)
  }

  async beforeProcess(): Promise<void> {
    await new AreaValidator(
      this.service,
      this.area
    ).rules()
    
    return
  }

  async prepareData(): Promise<AreaEntity> {
    return this.area
  }
}