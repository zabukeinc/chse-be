import { BaseOrchestrator } from "src/app/base/domain/usecases/base.orchestrator";
import { FindOneOptions, Like } from "typeorm";
import { AreaDataService } from "../../data/services/area-data.service";
import { AreaEntity } from "../entities/area.entity";
import { CreateAreaManager } from "./managers/create-area.manager";
import { DeleteAreaManager } from "./managers/delete-area.manager";
import { UpdateAreaManager } from "./managers/update-area.manager";

export class AreaOrchestrator extends BaseOrchestrator<AreaEntity> {
  constructor(protected service: AreaDataService) {
    super(service)
  }

  async index(page: number, limit: number, search?: string): Promise<AreaEntity[]> {
    const where: FindOneOptions<AreaEntity> = {}

    if (search) {
      Object.assign(where, {
        where: [
          { name: Like(`%${search}%`) },
          { code: Like(`%${search}%`) }
        ]
      })
    }

    return await this.service.index(page, limit, where)
  }

  async show(id: string): Promise<AreaEntity> {
    return await this.service.findOne({
      where: { id }
    })
  }

  async create(entity: AreaEntity): Promise<AreaEntity> {
    return await new CreateAreaManager(
      this.service,
      entity
    ).execute()
  }

  async update(id: string, updateData: AreaEntity): Promise<AreaEntity> {
    return await new UpdateAreaManager(
      this.service,
      id,
      updateData
    ).execute()
  }

  async delete(id: string): Promise<any> {
    return await new DeleteAreaManager(
      this.service,
      id
    ).execute()
  }
}