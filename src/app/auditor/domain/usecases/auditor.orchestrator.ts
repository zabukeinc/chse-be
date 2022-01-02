import { BaseOrchestrator } from "src/app/base/domain/usecases/base.orchestrator";
import { AuditorDataService } from "../../data/services/auditor-data.service";
import { AuditorEntity } from "../entities/auditor.entity";
import { CreateAuditorManager } from "./managers/create-auditor.manager";
import { UpdateAuditorManager } from "./managers/update-auditor.manager";

export class AuditorOrchestrator extends BaseOrchestrator<AuditorEntity> {

  constructor(
    protected service: AuditorDataService
  ) {
    super(service)
  }

  async index(page: number, limit: number, params: any): Promise<AuditorEntity[]> {
    return await this.service.index(page, limit, undefined)
  }

  async show(id: string): Promise<AuditorEntity> {
    return await this.service.findOneOrFail(id)
  }
  
  async create(entity: AuditorEntity): Promise<AuditorEntity> {
    return await new CreateAuditorManager(
      this.service,
      entity
    ).execute()
  }

  async update(id: string, updateData: AuditorEntity): Promise<AuditorEntity> {
    return await new UpdateAuditorManager(
      this.service,
      id,
      updateData
    ).execute()
  }

  async delete(ids: string[]): Promise<any> {
    await this.service.delete(ids)
  }

}