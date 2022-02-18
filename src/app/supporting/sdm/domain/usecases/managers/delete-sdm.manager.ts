import { BaseDeleteManager } from "src/app/base/domain/usecases/managers/base-delete.manager";
import { SdmDataService } from "../../../data/services/sdm-data.service";
import { SdmEntity } from "../../entities/sdm.entity";

export class DeleteSdmManager extends BaseDeleteManager<SdmEntity> {
  constructor(
    protected service: SdmDataService,
    protected entityId: string
  ) {
    super(service, entityId)
  }

  async beforeProcess(): Promise<void> {
    return
  }

  async prepareData(): Promise<SdmEntity> {
    return this.entity
  }
}