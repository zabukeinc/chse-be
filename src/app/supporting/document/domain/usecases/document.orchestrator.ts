import { BaseOrchestrator } from "src/app/base/domain/usecases/base.orchestrator";
import { FindManyOptions, Like } from "typeorm";
import { DocumentDataService } from "../../data/services/document-data.service";
import { DocumentEntity, DocumentType } from "../entities/document.entity";
import { CreateDocumentManager } from "./managers/create-document.manager";
import { DeleteDocumentManager } from "./managers/delete-document.manager";
import { UpdateDocumentManager } from "./managers/update-document.manager";

export class DocumentOrchestrator extends BaseOrchestrator<DocumentEntity>{
  constructor(protected service: DocumentDataService) {
    super(service)
  }

  async index(
    page: number,
    limit: number,
    search?: string,
    type?: DocumentType
  ): Promise<DocumentEntity[]> {
    const params: FindManyOptions<DocumentEntity> = {
      where: {}
    }

    if (search) {
      Object.assign(params.where, {
        ...params.where as Object,
        title: Like(`%${search}%`),
      });
    }

    if (type) {
      Object.assign(params.where, {
        ...params.where as Object,
        type
      })
    }

    return await this.service.index(page, limit, params)
  }

  async show(id: string): Promise<DocumentEntity> {
    return await this.service.findOneOrFail(id);
  }

  async create(entity: DocumentEntity): Promise<DocumentEntity> {
    return await new CreateDocumentManager(
      this.service,
      entity
    ).execute();
  }

  async update(id: string, updateData: DocumentEntity): Promise<DocumentEntity> {
    return await new UpdateDocumentManager(
      this.service,
      id,
      updateData
    ).execute();
  }

  async delete(id: string): Promise<any> {
    return await new DeleteDocumentManager(
      this.service,
      id
    ).execute()
  }
}