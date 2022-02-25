import { BaseUpdateManager } from "src/app/base/domain/usecases/managers/base-update.manager";
import { DocumentDataService } from "../../../data/services/document-data.service";
import { DocumentEntity } from "../../entities/document.entity";

export class UpdateDocumentManager extends BaseUpdateManager<DocumentEntity> {
  constructor(
    protected service: DocumentDataService,
    protected id: string,
    protected updatedData: DocumentEntity
  ) {
    super(service, id, updatedData)
  }

  async beforeProcess(): Promise<void> {
    return;
  }

  async prepareData(): Promise<DocumentEntity> {
    return this.updatedData;
  }
}