import { BaseDeleteManager } from "src/app/base/domain/usecases/managers/base-delete.manager";
import { ApplicantDataService } from "../../../data/services/applicant-data.service";
import { ApplicantEntity } from "../../entities/applicant.entity";

export class DeleteApplicantManager extends BaseDeleteManager<ApplicantEntity> {
  constructor(
    protected service: ApplicantDataService,
    protected entityId: string
  ) {
    super(service, entityId)
  }

  async processEachEntity(): Promise<void> {
    await this.service.delete([this.entityId])
  }

  async beforeProcess(): Promise<void> {
    return
  }

  async prepareData(): Promise<ApplicantEntity> {
    return this.entity
  }
}