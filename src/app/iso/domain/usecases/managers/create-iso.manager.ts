import { BaseCreateManager } from "src/app/base/domain/usecases/managers/base-create.manager";
import { IsoDataService } from "src/app/iso/data/services/iso-data.service";
import { ISOEntity } from "../../entities/iso.entity";

export class CreateIsoManager extends BaseCreateManager<ISOEntity> {
  constructor(
    protected service: IsoDataService,
    protected entity: ISOEntity
  ) {
    super(service, entity)
  }

  async beforeProcess(): Promise<void> {
    return
  }

  async prepareData(): Promise<ISOEntity> {
    return this.entity
  }
}