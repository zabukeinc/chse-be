import { BaseOrchestrator } from "src/app/base/domain/usecases/base.orchestrator";
import { FindManyOptions, Like } from "typeorm";
import { RiskDataService } from "../../data/services/risk-data.service";
import { RiskEntity } from "../entities/risk.entity";
import { CreateRiskManager } from "./managers/create-risk.manager";
import { DeleteRiskManager } from "./managers/delete-risk.manager";
import { UpdateRiskManager } from "./managers/update-risk.manager";

export class RiskOrchestrator extends BaseOrchestrator<RiskEntity> {
  constructor(service: RiskDataService) {
    super(service)
  }

  async index(page: number, limit: number, search?: string): Promise<RiskEntity[]> {
    let params: FindManyOptions<RiskEntity> = {}

    if (search) {
      Object.assign(params, {
        where: {
          title: Like(`%${search}%`),
        }
      });
    }

    return await this.service.index(page, limit, params)
  }

  async show(id: string): Promise<RiskEntity> {
    return await this.service.findOneOrFail(id)
  }

  async create(entity: RiskEntity): Promise<RiskEntity> {
    return await new CreateRiskManager(
      entity,
      this.service
    ).execute()
  }

  async update(id: string, updateData: RiskEntity): Promise<RiskEntity> {
    return await new UpdateRiskManager(
      id,
      updateData,
      this.service
    ).execute()
  }

  async delete(id: string): Promise<any> {
    return await new DeleteRiskManager(
      id,
      this.service
    ).execute()
  }
}