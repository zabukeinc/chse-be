import { BaseCreateManager } from "src/app/base/domain/usecases/managers/base-create.manager";
import { CodeGeneratorHelper } from "src/helpers/code-generator.helper";
import { RiskDataService } from "../../../data/services/risk-data.service";
import { RiskEntity } from "../../entities/risk.entity";
import { CalculateRiskHelper } from "../helpers/calculate-risk.helper";

export class CreateRiskManager extends BaseCreateManager<RiskEntity> {
  constructor(
    protected entity: RiskEntity,
    protected service: RiskDataService
  ) {
    super(service, entity)
  }

  async beforeProcess(): Promise<void> {
    return;
  }

  async prepareData(): Promise<RiskEntity> {
    this.entity = new CalculateRiskHelper(this.entity).execute()
    this.entity.code = await new CodeGeneratorHelper(
      this.service,
      this.entity
    ).setPrefix('RISK')
      .generate()

    return this.entity;
  }
}