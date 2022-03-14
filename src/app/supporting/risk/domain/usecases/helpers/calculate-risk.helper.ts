import { RiskDetailEntity, RiskEntity } from "../../entities/risk.entity";

export enum RiskClassificationResult {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
  VERY_HIGH = 'Very High'
}

enum RiskType {
  RESIDUAL = 'residual_risk',
  INHERIT = 'inherit_risk'
}

export class CalculateRiskHelper {
  constructor(
    protected entity: RiskEntity
  ) { }

  execute(): RiskEntity {
    this.entity.residual_risk_result = this.getResult(RiskType.RESIDUAL)

    this.entity.inherit_risk_result = this.getResult(RiskType.INHERIT)

    return this.entity
  }


  protected getResult(type: RiskType): string {
    const num = Math.abs(this.getNumberResult(type))

    if (num > 4) return RiskClassificationResult.VERY_HIGH

    return this.getClassification(this.entity[type])
  }


  protected getClassification(detail: RiskDetailEntity): string {
    const tables = [
      ['High', 'High', 'Very High', 'Very High', 'Very High'],
      ['Medium', 'High', 'High', 'Very High', 'Very High'],
      ['Low', 'Medium', 'Medium', 'High', 'Very High'],
      ['Low', 'Low', 'Medium', 'High', 'High'],
      ['Low', 'Low', 'Medium', 'High', 'High']
    ];

    return tables[detail.likelyhood][detail.consequence]
  }

  protected getNumberResult(type: RiskType): number {
    const key = type === RiskType.INHERIT ? 'inherit_risk' : 'residual_risk'

    return (this.entity[key].consequence * this.entity[key].likelyhood) / 2
  }
}