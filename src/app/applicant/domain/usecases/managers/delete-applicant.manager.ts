import { ApplicantDataService } from "src/app/applicant/data/services/applicant-data.service";
import { BaseDeleteManager } from "src/app/base/domain/usecases/managers/base-delete.manager";
import { ApplicantDetailStatus } from "../../entities/applicant-detail.entity";
import { ApplicantEntity } from "../../entities/applicant.entity";

export class DeleteApplicantManager extends BaseDeleteManager<ApplicantEntity> {
  constructor(
    protected service: ApplicantDataService,
    protected entityIds: string[]
  ) {
    super(service, entityIds)
  }

  async processEachEntity(): Promise<void> {
    await Promise.all(
      this.entities.map(
        async (entity) => {
          const foundInProgress = entity.details.find((detail) => detail.status === ApplicantDetailStatus.APPROVE)

          if (foundInProgress) throw new Error('Unable to delete Applicant because applicant is still in progress.')

          await this.service.delete([entity.id])
        }
      )
    )
  }

  async beforeProcess(): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async prepareData(): Promise<ApplicantEntity> {
    throw new Error("Method not implemented.");
  }
}