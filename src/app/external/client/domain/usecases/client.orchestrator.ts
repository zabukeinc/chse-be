import { BaseOrchestrator } from "src/app/base/domain/usecases/base.orchestrator";
import { FindManyOptions, Like } from "typeorm";
import { ClientDataService } from "../../data/services/client-data.service";
import { ClientEntity } from "../entities/client.entity";
import { CreateClientManager } from "./managers/create-client.manager";
import { DeleteClientManager } from "./managers/delete-client.manager";
import { UpdateClientManager } from "./managers/update-client.manager";

export class ClientOrchestrator extends BaseOrchestrator<ClientEntity> {
  constructor(protected service: ClientDataService) {
    super(service)
  }

  async index(page: number, limit: number, search?: string): Promise<ClientEntity[]> {
    let params: FindManyOptions<ClientEntity> = {}

    if (search) {
      Object.assign(params, {
        where: {
          name: Like(`%${search}%`),
        }
      })
    }
    return await this.service.index(page, limit, params)
  }

  async show(id: string): Promise<ClientEntity> {
    return await this.service.findOneOrFail(id)
  }

  async create(entity: ClientEntity): Promise<ClientEntity> {
    return await new CreateClientManager(
      this.service,
      entity
    ).execute()
  }

  async update(id: string, updateData: ClientEntity): Promise<ClientEntity> {
    return await new UpdateClientManager(
      this.service,
      id,
      updateData
    ).execute()
  }

  async delete(id: string): Promise<any> {
    return await new DeleteClientManager(
      this.service,
      id
    ).execute()
  }

}