import { BaseDeleteManager } from "src/app/base/domain/usecases/managers/base-delete.manager";
import { RiskDataService } from "../../../data/services/risk-data.service";
import { RiskEntity } from "../../entities/risk.entity";

export class DeleteRiskManager extends BaseDeleteManager<RiskEntity> {
  constructor(
    protected entityId: string,
    protected service: RiskDataService
  ) {
    super(service, entityId)
  }

  async beforeProcess(): Promise<void> {
    return
  }

  async prepareData(): Promise<RiskEntity> {
    return this.entity
  }
}