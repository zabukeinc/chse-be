import { BaseUpdateManager } from "src/app/base/domain/usecases/managers/base-update.manager";
import { ApplicantDataService } from "../../../data/services/applicant-data.service";
import { ApplicantEntity } from "../../entities/applicant.entity";

export class UpdateApplicantManager extends BaseUpdateManager<ApplicantEntity> {
  constructor(
    protected service: ApplicantDataService,
    protected entityId: string,
    protected updateData: ApplicantEntity
  ) {
    super(service, entityId, updateData)
  }

  async beforeProcess(): Promise<void> {
    return;
  }

  async prepareData(): Promise<ApplicantEntity> {
    return this.updateData
  }
}