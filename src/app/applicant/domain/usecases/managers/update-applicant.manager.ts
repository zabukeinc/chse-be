import { ApplicantDataService } from "src/app/applicant/data/services/applicant-data.service";
import { BaseUpdateManager } from "src/app/base/domain/usecases/managers/base-update.manager";
import { IsoDataService } from "src/app/iso/data/services/iso-data.service";
import { ApplicantEntity } from "../../entities/applicant.entity";
import { GenerateIsoDetailHelper } from "../helpers/generate-iso-detail.helper";

export class UpdateApplicantManager extends BaseUpdateManager<ApplicantEntity> {
  constructor(
    protected service: ApplicantDataService,
    protected isoService: IsoDataService,
    protected id: string,
    protected updateData: ApplicantEntity
  ) {
    super(service, id, updateData)
  }

  async beforeProcess(): Promise<void> {
    return
  }

  async prepareData(): Promise<ApplicantEntity> {
    this.entity.details = await new GenerateIsoDetailHelper(
      this.isoService,
      this.updateData
    ).exeucte()

    return this.entity
  }
}