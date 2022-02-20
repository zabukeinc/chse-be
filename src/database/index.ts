import { Connection, createConnection, SimpleConsoleLogger } from "typeorm";
import dotenv from 'dotenv';
import { UserModel } from "src/app/user/data/models/user.model";
import { ISOModel } from "src/app/iso/data/models/iso.model";
import { ISODetailModel } from "src/app/iso/data/models/iso-detail.model";
import { CompanyModel } from "src/app/company/data/models/company.model";
import { AuditorModel } from "src/app/auditor/data/models/auditor.model";
import { AuditorWorkExperienceModel } from "src/app/auditor/data/models/auditor-work-experience.model";
import { AuditorEducationModel } from "src/app/auditor/data/models/auditor-education.model";
import { ApplicantModel } from "src/app/applicant/data/models/applicant.model";
import { ApplicantDetailModel } from "src/app/applicant/data/models/applicant-detail.model";
import { RecordModel } from "src/app/supporting/record/data/models/record.model";
import { SdmModel } from "src/app/supporting/sdm/data/models/sdm.model";
import { SdmEducationModel } from "src/app/supporting/sdm/data/models/sdm-education.model";
import { SdmWorkExperienceModel } from "src/app/supporting/sdm/data/models/sdm-work-experience.model";
import { SdmFunctionalModel } from "src/app/supporting/sdm/data/models/sdm-functional.model";
import { AreaModel } from "src/app/supporting/area/data/models/area.model";

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
        password: envString(process.env.DATABASE_PASSWORD!, "eigen3m!"),
        database: envString(process.env.DATABASE_NAME!, "chse"),
        entities: [
          // UserModel,
          // ISOModel,
          // ISODetailModel,
          // CompanyModel,

          // AuditorModel,
          // AuditorWorkExperienceModel,
          // AuditorEducationModel,

          // ApplicantModel,
          // ApplicantDetailModel,

          /** Supporting Models */
          RecordModel,
          SdmModel,
          SdmEducationModel,
          SdmWorkExperienceModel,
          SdmFunctionalModel,
          AreaModel
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