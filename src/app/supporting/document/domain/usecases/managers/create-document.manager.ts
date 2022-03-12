import { BaseCreateManager } from "src/app/base/domain/usecases/managers/base-create.manager";
import { CodeGeneratorHelper } from "src/helpers/code-generator.helper";
import { DocumentDataService } from "../../../data/services/document-data.service";
import { DocumentEntity, DocumentType } from "../../entities/document.entity";

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
    this.entity.code = await new CodeGeneratorHelper(
      this.service,
      this.entity
    ).setPrefix(
      this.getPrefix()
    ).generate()

    return this.entity;
  }

  protected getPrefix(): string {
    const type = this.entity.type === DocumentType.INTERNAL ? 'IN' : 'EX'
    const category = this.entity.category.toUpperCase()
    return `${type}-${category}`
  }
}