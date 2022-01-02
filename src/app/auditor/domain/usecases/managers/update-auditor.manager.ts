import { AuditorDataService } from "src/app/auditor/data/services/auditor-data.service";
import { BaseUpdateManager } from "src/app/base/domain/usecases/managers/base-update.manager";
import { AuditorEntity } from "../../entities/auditor.entity";

export class UpdateAuditorManager extends BaseUpdateManager<AuditorEntity> {
  constructor(
    protected service: AuditorDataService,
    protected id: string,
    protected updateData: AuditorEntity
  ) {
    super(service, id, updateData)
  }

  async beforeProcess(): Promise<void> {
    return;
  }

  async prepareData(): Promise<AuditorEntity> {
    return this.updateData;
  }
}