import { BaseCreateManager } from "src/app/base/domain/usecases/managers/base-create.manager";
import { CompanyDataService } from "src/app/company/data/services/company-data.service";
import { CompanyEntity } from "../../entities/company.entity";
import { DuplicateNameValidator } from "../validators/duplicate-name.validator";

export class CreateCompanyManager extends BaseCreateManager<CompanyEntity> {
  constructor(
    protected service: CompanyDataService,
    protected entity: CompanyEntity
  ) {
    super(service, entity)
  }

  async beforeProcess(): Promise<void> {
    await new DuplicateNameValidator(this.service, this.entity).rules()
  }

  async prepareData(): Promise<CompanyEntity> {
    return this.entity
  }
}