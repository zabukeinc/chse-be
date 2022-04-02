import { BaseUpdateManager } from "src/app/base/domain/usecases/managers/base-update.manager";
import { SupplierDataService } from "../../../data/services/supplier-data.service";
import { SupplierEntity } from "../../entities/supplier.entity";

export class UpdateSupplierManager extends BaseUpdateManager<SupplierEntity> {
  constructor(
    protected service: SupplierDataService,
    protected id: string,
    protected updateData: SupplierEntity
  ) {
    super(service, id, updateData)
  }

  async beforeProcess(): Promise<void> {
    return
  }

  async prepareData(): Promise<SupplierEntity> {
    return this.entity
  }
}