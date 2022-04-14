import { BaseDeleteManager } from "src/app/base/domain/usecases/managers/base-delete.manager";
import { ClientDataService } from "../../../data/services/client-data.service";
import { ClientEntity } from "../../entities/client.entity";

export class DeleteClientManager extends BaseDeleteManager<ClientEntity> {
  constructor(
    protected service: ClientDataService,
    protected entityId: string
  ) {
    super(service, entityId)
  }

  async processEachEntity(): Promise<void> {
    await this.service.delete([this.entityId])
  }

  async beforeProcess(): Promise<void> {
    return
  }

  async prepareData(): Promise<ClientEntity> {
    return this.entity
  }
}