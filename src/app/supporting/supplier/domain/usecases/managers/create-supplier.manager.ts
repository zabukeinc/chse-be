import { BaseCreateManager } from "src/app/base/domain/usecases/managers/base-create.manager";
import { CodeGeneratorHelper } from "src/helpers/code-generator.helper";
import { SupplierDataService } from "../../../data/services/supplier-data.service";
import { SupplierEntity } from "../../entities/supplier.entity";

export class CreateSupplierManager extends BaseCreateManager<SupplierEntity> {
  constructor(
    protected service: SupplierDataService,
    protected entity: SupplierEntity
  ) {
    super(service, entity)
  }

  async beforeProcess(): Promise<void> {
    return
  }

  async prepareData(): Promise<SupplierEntity> {
    this.entity.code = await new CodeGeneratorHelper(
      this.service, this.entity
    ).setPrefix('SUP').generate()
    return this.entity
  }
}