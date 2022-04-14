import { BaseCreateManager } from "src/app/base/domain/usecases/managers/base-create.manager";
import { ClientDataService } from "src/app/client/data/services/client-data.service";
import { ClientEntity } from "../../entities/client.entity";

export class CreateClientManager extends BaseCreateManager<ClientEntity> {
  constructor(
    protected service: ClientDataService,
    protected entity: ClientEntity
  ) {
    super(service, entity)
  }

  async beforeProcess(): Promise<void> {
    return
  }

  async prepareData(): Promise<ClientEntity> {
    return this.entity
  }
}