import { BaseCreateManager } from "src/app/base/domain/usecases/managers/base-create.manager";
import { SdmDataService } from "../../../data/services/sdm-data.service";
import { SdmEntity } from "../../entities/sdm.entity";

export class CreateSdmManager extends BaseCreateManager<SdmEntity> {
  constructor(
    protected service: SdmDataService,
    protected entity: SdmEntity

  ) {
    super(service, entity)
  }

  async beforeProcess(): Promise<void> {
    return
  }

  async prepareData(): Promise<SdmEntity> {
    return this.entity
  }
}