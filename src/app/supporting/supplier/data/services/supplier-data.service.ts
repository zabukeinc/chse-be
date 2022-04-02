import { BaseDataService } from "src/app/base/services/base-data.service";
import { Repository } from "typeorm";
import { SupplierEntity } from "../../domain/entities/supplier.entity";

export class SupplierDataService extends BaseDataService<SupplierEntity> {
  relations: string[] =[
    'services',
    'experiences',
    'due_diligence',
    'due_diligence.selection_answers',
    'due_diligence.evaluation_answers',
  ]
  constructor(repo: Repository<SupplierEntity>) {
    super(repo)
  }
}