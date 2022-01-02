import { BaseOrchestrator } from "src/app/base/domain/usecases/base.orchestrator";
import { CompanyDataService } from "../../data/services/company-data.service";
import { CompanyEntity } from "../entities/company.entity";
import { CreateCompanyManager } from "./managers/create-company.manager";
import { DeleteCompanyManager } from "./managers/delete-company.manager";
import { UpdateCompanyManager } from "./managers/update-company.manager";

export class CompanyOrchestrator extends BaseOrchestrator<CompanyEntity> {
  constructor(protected service: CompanyDataService) {
    super(service)
  }

  async index(page: number, limit: number, params: any): Promise<CompanyEntity[]> {
    return await this.service.index(page, limit, null)
  }

  async show(id: string): Promise<CompanyEntity> {
    return await this.service.findOneOrFail(id)
  }

  async create(entity: CompanyEntity): Promise<CompanyEntity> {
    return await new CreateCompanyManager(
      this.service,
      entity
    ).execute()
  }

  async update(id: string, updateData: CompanyEntity): Promise<CompanyEntity> {
    return await new UpdateCompanyManager(
      this.service,
      id,
      updateData
    ).execute()
  }

  async delete(ids: string[]): Promise<any> {
    return await new DeleteCompanyManager(
      this.service,
      ids
    ).execute()
  }

}