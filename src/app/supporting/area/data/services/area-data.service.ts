import { BaseDataService } from "src/app/base/services/base-data.service";
import { Repository } from "typeorm";
import { AreaEntity } from "../../domain/entities/area.entity";
import { AreaModel } from "../models/area.model";

export class AreaDataService extends BaseDataService<AreaEntity> {
  constructor(repo: Repository<AreaModel>) {
    super(repo)
  }
}