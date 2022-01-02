import { BaseOrchestrator } from "src/app/base/domain/usecases/base.orchestrator";
import { IsoDataService } from "../../data/services/iso-data.service";
import { ISOEntity } from "../entities/iso.entity";
import { CreateIsoManager } from "./managers/create-iso.manager";
import { UpdateIsoManager } from "./managers/update-iso.manager";

export class IsoOrchestrator extends BaseOrchestrator<ISOEntity> {
  constructor(protected service: IsoDataService) {
    super(service)
  }

  async index(page: number, limit: number, params: any): Promise<ISOEntity[]> {
    return await this.service.index(page, limit, params)
  }

  async show(id: string): Promise<ISOEntity> {
    return await this.service.findOneOrFail(id)
  }

  async create(entity: ISOEntity): Promise<ISOEntity> {
    return await new CreateIsoManager(
      this.service,
      entity
    ).execute()
  }

  async update(id: string, updateData: ISOEntity): Promise<ISOEntity> {
    return new UpdateIsoManager(
      this.service,
      id,
      updateData
    ).execute()
  }

  async delete(ids: string[]): Promise<any> {
    await this.service.delete(ids)
  }
}