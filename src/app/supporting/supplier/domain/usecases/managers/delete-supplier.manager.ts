import { BaseDeleteManager } from "src/app/base/domain/usecases/managers/base-delete.manager";
import { SupplierDataService } from "../../../data/services/supplier-data.service";
import { SupplierEntity } from "../../entities/supplier.entity";

export class DeleteSupplierManager extends BaseDeleteManager<SupplierEntity> {
  constructor(
    protected service: SupplierDataService,
    protected entityId: string
  ) {
    super(service, entityId)
  }

  async beforeProcess(): Promise<void> {
    return
  }

  async prepareData(): Promise<SupplierEntity> {
    return this.entity
  }
}