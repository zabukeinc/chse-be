import { AreaEntity } from "../../../area/domain/entities/area.entity"
import { ConsequenceValue, LikelyhoodValue, RiskConlusion, RiskDetailEntity, RiskEntity, RiskEvaluationResult, RiskSource, RiskSourceType, RiskType } from "../../domain/entities/risk.entity";

export class RiskDetailDTO implements RiskDetailEntity {
  consequence: ConsequenceValue;
  likelyhood: LikelyhoodValue;
}

export class RiskDTO implements RiskEntity {
  source_type: RiskSourceType;
  report_date: Date;
  identification: string;
  consequence: string;
  source: RiskSource;
  type: RiskType;
  code?: string;
  mitigasi_action?: string;
  controlling?: string;
  pic?: AreaEntity;
  conclusion?: RiskConlusion;
  evaluation_date?: Date;
  evaluated_by?: string;
  evaluation_result?: RiskEvaluationResult;
  residual_risk_result?: string;
  inherit_risk_result?: string;
  inherit_risk: RiskDetailDTO;
  residual_risk: RiskDetailDTO;
  id?: string;
}