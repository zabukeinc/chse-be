import { BaseDataService } from "src/app/base/services/base-data.service";
import { Repository } from "typeorm";
import { DocumentEntity } from "../../domain/entities/document.entity";
import { DocumentModel } from "../models/document.model";

export class DocumentDataService extends BaseDataService<DocumentEntity> {
  constructor(protected repo: Repository<DocumentModel>) {
    super(repo)
  }
}