import { BaseCreateManager } from "src/app/base/domain/usecases/managers/base-create.manager";
import { CodeGeneratorHelper } from "src/helpers/code-generator.helper";
import { ApplicantDataService } from "../../../data/services/applicant-data.service";
import { ApplicantEntity } from "../../entities/applicant.entity";

export class CreateApplicantManager extends BaseCreateManager<ApplicantEntity> {
  constructor(
    protected service: ApplicantDataService,
    protected entity: ApplicantEntity
  ) {
    super(service, entity)
  }

  async beforeProcess(): Promise<void> {
    return
  }

  async prepareData(): Promise<ApplicantEntity> {
    this.entity.code = await new CodeGeneratorHelper(
      this.service, this.entity
    ).setPrefix('APP')
      .generate()
    return this.entity
  }
}