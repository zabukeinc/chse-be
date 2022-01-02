import { BaseDeleteManager } from "src/app/base/domain/usecases/managers/base-delete.manager";
import { CompanyDataService } from "src/app/company/data/services/company-data.service";
import { CompanyEntity } from "../../entities/company.entity";

export class DeleteCompanyManager extends BaseDeleteManager<CompanyEntity> {
  constructor(
    protected service: CompanyDataService,
    protected entityIds: string[]
  ) {
    super(service, entityIds)
  }

  async processEachEntity(): Promise<void> {
    await Promise.all(
      this.entities.map(
        async (entity) => {
          await this.service.delete([entity.id])
        }
      )
    )
  }

  async beforeProcess(): Promise<void> {
    return
  }

  async prepareData(): Promise<CompanyEntity> {
    return this.entities[0]
  }
}