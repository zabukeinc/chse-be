import { BaseUpdateManager } from "src/app/base/domain/usecases/managers/base-update.manager";
import { IsoDataService } from "src/app/iso/data/services/iso-data.service";
import { ISOEntity } from "../../entities/iso.entity";

export class UpdateIsoManager extends BaseUpdateManager<ISOEntity> {
  constructor(
    protected service: IsoDataService,
    protected entityId: string,
    protected updateData: ISOEntity
  ) {
    super(service, entityId, updateData)
  }

  async beforeProcess(): Promise<void> {
    return
  }

  async prepareData(): Promise<ISOEntity> {
    return this.updateData
  }
}