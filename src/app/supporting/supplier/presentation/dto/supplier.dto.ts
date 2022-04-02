import {
  SdmDueDiligenceAnswerValue,
  SdmDueDiligenceAnswerVerif,
  SdmDueDiligenceType
} from "../../../sdm/domain/entities/sdm.entity";
import { SupplierDueDiligenceDecision, SupplierDueDiligenceEvaluationAnswer, SupplierDueDiligenceRiskType } from "../../domain/entities/supplier.entity";

export class SupplierDTO {
  name: string;
  code: string;
  address: string;
  email: string;
  telp: string;
  connector_name: string;
  connector_telp: string;
  company_deed: string;
  npwp: string;
  services?: SupplierServiceDTO[];
  experiences?: SupplierExperienceDTO[];
  due_diligence?: SupplierDueDiligenceDTO;
  id?: string;
  creator_name?: string;
  editor_name?: string;
  creator_id?: string;
  editor_id?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export class SupplierServiceDTO {
  id?: string;
  name: string;
  specification: string;
  file_url: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export class SupplierExperienceDTO {
  id?: string;
  project_name: string;
  activity: string;
  year: number;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export class SupplierDueDiligenceDTO {
  id?: string;
  type: SdmDueDiligenceType;
  selection_answers?: SelectionAnswerDTO[];
  selection_conclusion?: string;
  selection_verification_date?: string;
  selection_evaluator?: string;
  selection_risk?: SupplierDueDiligenceRiskType;
  selection_action?: string;
  evaluation_answers?: EvaluationAnswerDTO[];
  evaluation_conclusion?: string;
  evaluation_evaluated_date?: string;
  evaluation_evaluator?: string;
  evaluation_decision?: SupplierDueDiligenceDecision;
  evaluation_action?: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export class SelectionAnswerDTO {
  id?: string;
  index?: number;
  answer?: SdmDueDiligenceAnswerValue;
  description?: string;
  verification: SdmDueDiligenceAnswerVerif;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
}

export class EvaluationAnswerDTO {
  id?: string
  index?: number
  answer?: SupplierDueDiligenceEvaluationAnswer
}