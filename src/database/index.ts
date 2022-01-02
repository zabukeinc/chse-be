import { Connection, createConnection, SimpleConsoleLogger } from "typeorm";
import dotenv from 'dotenv';
import { UserModel } from "src/app/user/data/models/user.model";
import { ISOModel } from "src/app/iso/data/models/iso.model";
import { ISODetailModel } from "src/app/iso/data/models/iso-detail.model";

dotenv.config({});
class Database {

  public connection: Connection;

  constructor() {
    this.connectToDB();
  }

  private connectToDB(): void {
    createConnection({
      type: "mysql",
      host: envString(process.env.DATABASE_HOST!, ""),
      port: envString(Number(process.env.DATABASE_PORT!), 3306),
      username: envString(process.env.DATABASE_USERNAME!, "root"),
      password: envString(process.env.DATABASE_PASSWORD!, "eigen3m!"),
      database: envString(process.env.DATABASE_NAME!, "chse"),
      entities: [
        UserModel,
        ISOModel,
        ISODetailModel
      ],
      synchronize: true,
      logging: false
    }).then(_con => {
      this.connection = _con;
      console.log("Connected to db!!");
    }).catch(console.error)
  }

}


function envString<T>(prodString: T, devString: T): T {
  return process.env.NODE_ENV === 'production' ? prodString : devString
}

export const db = new Database();