import { BaseUpdateManager } from "src/app/base/domain/usecases/managers/base-update.manager";
import { CodeGeneratorHelper } from "src/helpers/code-generator.helper";
import { RiskDataService } from "../../../data/services/risk-data.service";
import { RiskEntity } from "../../entities/risk.entity";
import { CalculateRiskHelper } from "../helpers/calculate-risk.helper";

export class UpdateRiskManager extends BaseUpdateManager<RiskEntity> {
  constructor(
    protected id: string,
    protected updateData: RiskEntity,
    protected service: RiskDataService
  ) {
    super(service, id, updateData)
  }

  async beforeProcess(): Promise<void> {
    return
  }

  async prepareData(): Promise<RiskEntity> {
    this.updateData.code = await new CodeGeneratorHelper(
      this.service,
      this.updateData
    ).setPrefix('RISK-').generate()

    this.updateData = new CalculateRiskHelper(this.updateData).execute()
    return this.updateData;
  }
}