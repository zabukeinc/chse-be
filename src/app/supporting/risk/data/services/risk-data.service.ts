import { BaseDataService } from "src/app/base/services/base-data.service";
import { Repository } from "typeorm";
import { RiskEntity } from "../../domain/entities/risk.entity";

export class RiskDataService extends BaseDataService<RiskEntity> {
  relations: string[] = ['inherit_risk', 'residual_risk']
  constructor(repository: Repository<RiskEntity>) {
    super(repository)
  }
}