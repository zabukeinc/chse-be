import { BaseDataService } from "src/app/base/services/base-data.service";
import { Repository } from "typeorm";
import { SdmEntity } from "../../domain/entities/sdm.entity";

export class SdmDataService extends BaseDataService<SdmEntity> {
  relations: string[] = [
    'educations',
    'work_experiences',
    'functionals',
    'trainings'
  ]
  constructor(repo: Repository<SdmEntity>) {
    super(repo)
  }
}