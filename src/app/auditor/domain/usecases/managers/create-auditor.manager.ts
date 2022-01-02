import { AuditorDataService } from "src/app/auditor/data/services/auditor-data.service";
import { BaseCreateManager } from "src/app/base/domain/usecases/managers/base-create.manager";
import { AuditorEntity } from "../../entities/auditor.entity";

export class CreateAuditorManager extends BaseCreateManager<AuditorEntity> {
  constructor(
    protected service: AuditorDataService,
    protected entity: AuditorEntity
  ) {
    super(service, entity)
  }

  async beforeProcess(): Promise<void> {
    return
  }

  async prepareData(): Promise<AuditorEntity> {
    return this.entity;
  }
}