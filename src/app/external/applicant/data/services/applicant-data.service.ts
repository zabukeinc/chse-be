import { BaseDataService } from "src/app/base/services/base-data.service";
import { Repository } from "typeorm";
import { ApplicantEntity } from "../../domain/entities/applicant.entity";
import { ApplicantModel } from "../models/applicant.model";

export class ApplicantDataService extends BaseDataService<ApplicantEntity> {
  constructor(protected repo: Repository<ApplicantModel>) {
    super(repo)
  }

  relations: string[] = ['locations']
}