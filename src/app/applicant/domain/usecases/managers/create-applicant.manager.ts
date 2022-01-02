import { ApplicantDataService } from "src/app/applicant/data/services/applicant-data.service";
import { BaseCreateManager } from "src/app/base/domain/usecases/managers/base-create.manager";
import { IsoDataService } from "src/app/iso/data/services/iso-data.service";
import { ApplicantEntity } from "../../entities/applicant.entity";
import { GenerateIsoDetailHelper } from "../helpers/generate-iso-detail.helper";

export class CreateApplicantManager extends BaseCreateManager<ApplicantEntity> {
  constructor(
    protected service: ApplicantDataService,
    protected isoService: IsoDataService,
    protected entity: ApplicantEntity
  ) {
    super(service, entity)
  }

  async beforeProcess(): Promise<void> {
    return
  }

  async prepareData(): Promise<ApplicantEntity> {
    this.entity.details = await new GenerateIsoDetailHelper(
      this.isoService,
      this.entity
    ).exeucte()

    return this.entity
  }
}