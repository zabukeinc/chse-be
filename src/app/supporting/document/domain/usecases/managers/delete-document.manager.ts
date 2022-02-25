import { BaseDeleteManager } from "src/app/base/domain/usecases/managers/base-delete.manager";
import { DocumentDataService } from "../../../data/services/document-data.service";
import { DocumentEntity } from "../../entities/document.entity";

export class DeleteDocumentManager extends BaseDeleteManager<DocumentEntity> {
  constructor(
    protected service: DocumentDataService,
    protected id: string
  ) {
    super(service, id)
  }

  async beforeProcess(): Promise<void> {
    return;
  }

  async prepareData(): Promise<DocumentEntity> {
    return this.entity;
  }
}