import { BaseUpdateManager } from "src/app/base/domain/usecases/managers/base-update.manager";
import { ClientDataService } from "src/app/client/data/services/client-data.service";
import { ClientEntity } from "../../entities/client.entity";

export class UpdateClientManager extends BaseUpdateManager<ClientEntity> {
  constructor(
    protected service: ClientDataService,
    protected entityId: string,
    protected updateData: ClientEntity
  ) {
    super(service, entityId, updateData)
  }

  async beforeProcess(): Promise<void> {
    return;
  }

  async prepareData(): Promise<ClientEntity> {
    Object.assign(this.entity, this.updateData)
    
    return this.entity
  }
}