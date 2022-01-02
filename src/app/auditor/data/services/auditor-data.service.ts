import { BaseDataService } from "src/app/base/services/base-data.service";
import { Repository } from "typeorm";
import { AuditorEntity } from "../../domain/entities/auditor.entity";
import { AuditorModel } from "../models/auditor.model";

export class AuditorDataService extends BaseDataService<AuditorEntity> {
  constructor(protected repo: Repository<AuditorModel>) {
    super(repo)
  }

  relations: string[] = [
    'work_experiences',
    'educations',
    'user'
  ]
}