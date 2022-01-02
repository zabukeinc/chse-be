import { BaseUpdateManager } from "src/app/base/domain/usecases/managers/base-update.manager";
import { CompanyDataService } from "src/app/company/data/services/company-data.service";
import { CompanyEntity } from "../../entities/company.entity";
import { DuplicateNameValidator } from "../validators/duplicate-name.validator";

export class UpdateCompanyManager extends BaseUpdateManager<CompanyEntity> {
  constructor(
    protected service: CompanyDataService,
    protected entityId: string,
    protected updateData: CompanyEntity
  ) {
    super(service, entityId, updateData)
  }

  async beforeProcess(): Promise<void> {
    await new DuplicateNameValidator(this.service, this.updateData, this.entityId).rules()
  }

  async prepareData(): Promise<CompanyEntity> {
    Object.assign(this.entity, this.updateData)
    
    return this.entity
  }
}