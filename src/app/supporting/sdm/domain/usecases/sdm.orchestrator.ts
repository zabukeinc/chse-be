import { BaseOrchestrator } from "src/app/base/domain/usecases/base.orchestrator";
import { FindManyOptions, Like } from "typeorm";
import { SdmDataService } from "../../data/services/sdm-data.service";
import { SdmEntity } from "../entities/sdm.entity";
import { CreateSdmManager } from "./managers/create-sdm.manager";
import { DeleteSdmManager } from "./managers/delete-sdm.manager";
import { UpdateSdmManager } from "./managers/update-sdm.manager";

export class SdmOrchestrator extends BaseOrchestrator<SdmEntity> {
  constructor(protected service: SdmDataService) {
    super(service)
  }

  async index(page: number, limit: number, search: string): Promise<SdmEntity[]> {
    let params: FindManyOptions<SdmEntity> = {}

    if (search) {
      Object.assign(params, {
        where: {
          name: Like(`%${search}%`),
        }
      })
    }

    return await this.service.index(page, limit, params)
  }

  async show(id: string): Promise<SdmEntity> {
    return await this.service.findOne({
      where: { id }
    })
  }

  async create(entity: SdmEntity): Promise<SdmEntity> {
    return await new CreateSdmManager(
      this.service,
      entity
    ).execute()
  }

  async update(id: string, updateData: SdmEntity): Promise<SdmEntity> {
    return await new UpdateSdmManager(
      this.service,
      id,
      updateData
    ).execute()
  }

  async delete(id: string): Promise<any> {
    return await new DeleteSdmManager(
      this.service,
      id
    ).execute()
  }
}