import { BaseOrchestrator } from "src/app/base/domain/usecases/base.orchestrator";
import { FindManyOptions, Like } from "typeorm";
import { SupplierDataService } from "../../data/services/supplier-data.service";
import { SupplierEntity } from "../entities/supplier.entity";
import { CreateSupplierManager } from "./managers/create-supplier.manager";
import { DeleteSupplierManager } from "./managers/delete-supplier.manager";
import { UpdateSupplierManager } from "./managers/update-supplier.manager";

export class SupplierOrchestrator extends BaseOrchestrator<SupplierEntity> {
  constructor(protected service: SupplierDataService) {
    super(service)
  }

  async index(page: number, limit: number, search?: string): Promise<SupplierEntity[]> {
    const params: FindManyOptions<SupplierEntity> = {}

    if (search) {
      Object.assign(params, {
        where: {
          code: Like(`%${search}%`),
          name: Like(`%${search}%`)
        }
      })
    }

    return await this.service.index(page, limit, params)
  }

  async show(id: string): Promise<SupplierEntity> {
    return await this.service.findOne({ where: { id } })
  }

  async create(entity: SupplierEntity): Promise<SupplierEntity> {
    return await new CreateSupplierManager(
      this.service,
      entity
    ).execute()
  }

  async update(id: string, updateData: SupplierEntity): Promise<SupplierEntity> {
    return await new UpdateSupplierManager(
      this.service,
      id,
      updateData
    ).execute()
  }

  async delete(id: string): Promise<any> {
    return await new DeleteSupplierManager(this.service, id).execute()
  }
}