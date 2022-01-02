import { BaseDataService } from "src/app/base/services/base-data.service";
import { Repository } from "typeorm";
import { ISOEntity } from "../../domain/entities/iso.entity";
import { ISOModel } from "../models/iso.model";

export class IsoDataService extends BaseDataService<ISOEntity> {
  constructor(repo: Repository<ISOModel>) {
    super(repo)
  }

  relations = [
    'details'
  ]
}