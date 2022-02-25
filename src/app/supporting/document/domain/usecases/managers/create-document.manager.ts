import { BaseCreateManager } from "src/app/base/domain/usecases/managers/base-create.manager";
import { DocumentDataService } from "../../../data/services/document-data.service";
import { DocumentEntity } from "../../entities/document.entity";

export class CreateDocumentManager extends BaseCreateManager<DocumentEntity>{
  constructor(
    protected service: DocumentDataService,
    protected entity: DocumentEntity
  ) {
    super(service, entity)
  }

  async beforeProcess(): Promise<void> {
    return;
  }

  async prepareData(): Promise<DocumentEntity> {
    return this.entity;
  }
}