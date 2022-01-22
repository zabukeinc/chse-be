import { BaseOrchestrator } from "src/app/base/domain/usecases/base.orchestrator";
import { RecordDataService } from "../../data/services/record-data.service";
import { RecordEntity } from "../entities/record.entity";
import { CreateRecordManager } from "./managers/create-record.manager";
import { DeleteRecordManager } from "./managers/delete-record.manager";
import { UpdateRecordManager } from "./managers/update-record.manager";

export class RecordOrchestrator extends BaseOrchestrator<RecordEntity> {
  constructor(service: RecordDataService) {
    super(service)
  }

  async index(page: number, limit: number, params: any): Promise<RecordEntity[]> {
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

  async delete(ids: string[]): Promise<any> {
    return await new DeleteRecordManager(
      ids,
      this.service
    ).execute()
  }
}