import { BaseOrchestrator } from "src/app/base/domain/usecases/base.orchestrator";
import { FindManyOptions, Like } from "typeorm";
import { RecordDataService } from "../../data/services/record-data.service";
import { RecordEntity } from "../entities/record.entity";
import { CreateRecordManager } from "./managers/create-record.manager";
import { DeleteRecordManager } from "./managers/delete-record.manager";
import { UpdateRecordManager } from "./managers/update-record.manager";

export class RecordOrchestrator extends BaseOrchestrator<RecordEntity> {
  constructor(service: RecordDataService) {
    super(service)
  }

  async index(page: number, limit: number, search?: string): Promise<RecordEntity[]> {
    let params: FindManyOptions<RecordEntity> = {}

    if (search) {
      Object.assign(params, {
        where: {
          title: Like(`%${search}%`),
        }
      });
    }

    return await this.service.index(page, limit, params)
  }

  async show(id: string): Promise<RecordEntity> {
    return await this.service.findOneOrFail(id)
  }

  async create(entity: RecordEntity): Promise<RecordEntity> {
    return await new CreateRecordManager(
      entity,
      this.service
    ).execute()
  }

  async update(id: string, updateData: RecordEntity): Promise<RecordEntity> {
    return await new UpdateRecordManager(
      id,
      updateData,
      this.service
    ).execute()
  }

  async delete(id: string): Promise<any> {
    return await new DeleteRecordManager(
      id,
      this.service
    ).execute()
  }
}