import {
  SdmDueDiligenceAnswerValue,
  SdmDueDiligenceAnswerVerif,
  SdmDueDiligenceType
} from "../../../sdm/domain/entities/sdm.entity";
import { SupplierDueDiligenceDecision, SupplierDueDiligenceEvaluationAnswer, SupplierDueDiligenceRiskType } from "../../domain/entities/supplier.entity";

export class SupplierDTO {
  name: string;
  code?: string;
  leader: string;
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
  supplier_id?: string;
}

export class SupplierDueDiligenceDTO {
  id?: string;
  type: SdmDueDiligenceType | null;
  selection_answers?: SelectionAnswerDTO[];
  selection_conclusion?: string | null;
  selection_verification_date?: string | null;
  selection_evaluator?: string | null;
  selection_risk?: SupplierDueDiligenceRiskType | null;
  selection_action?: string | null;
  selection_leader?: string | null;
  selection_approval?: string | null;
  selection_statement_letter_path?: string | null;

  evaluation_answers?: EvaluationAnswerDTO[];
  evaluation_conclusion?: string | null;
  evaluation_evaluated_date?: string | null;
  evaluation_evaluator?: string | null;
  evaluation_decision?: SupplierDueDiligenceDecision | null;
  evaluation_action?: string | null;
  evaluation_approval?: string | null;
  evaluation_leader?: string | null;
  created_at?: Date | null;
  updated_at?: Date | null;
  deleted_at?: Date | null;

  supplier_id?: string;
}

export class SelectionAnswerDTO {
  id?: string;
  index?: number;
  answer?: SdmDueDiligenceAnswerValue;
  description?: string;
  verification: SdmDueDiligenceAnswerVerif;
  created_at?: Date | null;
  updated_at?: Date | null;
  deleted_at?: Date | null;
  supplier_due_diligence_id?: string | null;
}

export class EvaluationAnswerDTO {
  id?: string
  index?: number
  answer?: SupplierDueDiligenceEvaluationAnswer
  supplier_due_diligence_id?: string | null;
  created_at: Date | null;
  updated_at: Date | null;
  deleted_at: Date | null;
}