import { Connection, createConnection } from "typeorm";
import dotenv from 'dotenv';
import { RecordModel } from "src/app/supporting/record/data/models/record.model";
import { SdmModel } from "src/app/supporting/sdm/data/models/sdm.model";
import { SdmEducationModel } from "src/app/supporting/sdm/data/models/sdm-education.model";
import { SdmWorkExperienceModel } from "src/app/supporting/sdm/data/models/sdm-work-experience.model";
import { SdmFunctionalModel } from "src/app/supporting/sdm/data/models/sdm-functional.model";
import { AreaModel } from "src/app/supporting/area/data/models/area.model";
import { DocumentModel } from "src/app/supporting/document/data/models/document.model";
import { RiskModel } from "src/app/supporting/risk/data/models/risk.model";
import { RiskDetailModel } from "src/app/supporting/risk/data/models/risk-detail.model";
import { SdmTrainingModel } from "src/app/supporting/sdm/data/models/sdm-training.model";
import { SdmDueDiligenceModel } from "src/app/supporting/sdm/data/models/sdm-due-diligence.model";
import { SdmDueDiligenceAnswerModel } from "src/app/supporting/sdm/data/models/sdm-due-diligence-answer.model";
import { SupplierModel } from "src/app/supporting/supplier/data/models/supplier.model";
import { SupplierServiceModel } from "src/app/supporting/supplier/data/models/supplier-service.model";
import { SupplierExperienceModel } from "src/app/supporting/supplier/data/models/supplier-experience.model";
import { SupplierDueDiligenceEvaluationAnswerModel, SupplierDueDiligenceModel, SupplierDueDiligenceSelectionAnswerModel } from "src/app/supporting/supplier/data/models/supplier-due-diligence.model";
import { ClientModel } from "src/app/external/client/data/models/client.model";

dotenv.config({});
class Database {

  public connection: Connection;

  constructor() {
    if (!this.connection) {
      this.connectToDB();
    }
  }

  private connectToDB(): void {
    if (!this.connection) {
      createConnection({
        type: "mysql",
        host: envString(process.env.DATABASE_HOST!, ""),
        port: envString(Number(process.env.DATABASE_PORT!), 3306),
        username: envString(process.env.DATABASE_USERNAME!, "root"),
        password: envString(process.env.DATABASE_PASSWORD!, ""),
        database: envString(process.env.DATABASE_NAME!, "chse"),
        entities: [
          /** Supporting Models */
          RecordModel,

          SdmModel,
          SdmEducationModel,
          SdmWorkExperienceModel,
          SdmFunctionalModel,
          SdmTrainingModel,
          SdmDueDiligenceModel,
          SdmDueDiligenceAnswerModel,

          AreaModel,

          DocumentModel,

          RiskModel,
          RiskDetailModel,

          SupplierModel,
          SupplierServiceModel,
          SupplierExperienceModel,
          SupplierDueDiligenceModel,
          SupplierDueDiligenceSelectionAnswerModel,
          SupplierDueDiligenceEvaluationAnswerModel,

          ClientModel

        ],
        synchronize: true,
        logging: false
      }).then(_con => {
        if (!this.connection) {
          this.connection = _con;
        }

        console.log("Connected to db!!");
      }).catch(console.error)
    }
  }

}


function envString<T>(prodString: T, devString: T): T {
  return process.env.NODE_ENV === 'production' ? prodString : devString
}

export const db = new Database();