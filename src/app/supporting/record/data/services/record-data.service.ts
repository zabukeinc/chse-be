import { BaseDataService } from "src/app/base/services/base-data.service";
import { Repository } from "typeorm";
import { RecordEntity } from "../../domain/entities/record.entity";

export class RecordDataService extends BaseDataService<RecordEntity> {
  relations: string[] = ['area']
  constructor(repository: Repository<RecordEntity>) {
    super(repository)
  }
}