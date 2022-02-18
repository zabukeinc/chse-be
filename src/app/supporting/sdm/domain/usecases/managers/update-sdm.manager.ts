import { BaseUpdateManager } from "src/app/base/domain/usecases/managers/base-update.manager";
import { SdmDataService } from "../../../data/services/sdm-data.service";
import { SdmEntity } from "../../entities/sdm.entity";

export class UpdateSdmManager extends BaseUpdateManager<SdmEntity> {
  constructor(
    protected service: SdmDataService,
    protected id: string,
    protected updateData: SdmEntity
  ) {
    super(service, id, updateData)
  }

  async beforeProcess(): Promise<void> {
    return
  }

  async prepareData(): Promise<SdmEntity> {
    return this.updateData
  }
}