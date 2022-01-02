import { BaseDataService } from "src/app/base/services/base-data.service";
import { Repository } from "typeorm";
import { CompanyEntity } from "../../domain/entities/company.entity";
import { CompanyModel } from "../models/company.model";

export class CompanyDataService extends BaseDataService<CompanyEntity> {
  constructor(protected repo: Repository<CompanyModel>) {
    super(repo)
  }

  relations: string[] = ['user'];
}