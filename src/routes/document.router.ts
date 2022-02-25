import { BaseController } from "../app/base/base-controller";
import { IResponses } from "../app/base/data/entities/response.entity";
import { Body, Delete, Get, Post, Put, Query, Route, Tags } from "tsoa";
import { DocumentEntity } from "../app/supporting/document/domain/entities/document.entity";
import { DocumentOrchestrator } from "../app/supporting/document/domain/usecases/document.orchestrator";
import { DocumentDataService } from "../app/supporting/document/data/services/document-data.service";
import { DocumentModel } from "../app/supporting//document/data/models/document.model";
import { DocumentDTO } from "../app/supporting/document/presentation/dto/document.dto";

@Tags('Document Services')
@Route('/api/documents')
export class DocumentController extends BaseController<DocumentEntity> {
  orchestrator = new DocumentOrchestrator(
    new DocumentDataService(
      DocumentModel.getRepository()
    )
  )

  @Post()
  async create(@Body() body: DocumentDTO): Promise<any> {
    try {
      const entity = await this.orchestrator.create(body)

      return this.responses.json(200, entity) as IResponses
    } catch (err: any) {
      throw new Error(err.message as any)
    }
  }

  @Put('{id}')
  async update(id: string, @Body() updateData: DocumentDTO): Promise<any> {
    try {
      const entity = await this.orchestrator.update(id, updateData)

      return this.responses.json(200, entity) as IResponses
    } catch (err: any) {
      throw new Error(err.message)
    }
  }

  @Delete('{id}')
  async delete(id: string): Promise<any> {
    try {
      await this.orchestrator.delete(id)

      return this.responses.json(200, 'Data succesfully deleted.') as IResponses
    } catch (err: any) {
      throw new Error(err.message)
    }
  }

  @Get(':id')
  async show(id: string): Promise<any> {
    try {
      const entity = await this.orchestrator.show(id)

      return this.responses.json(200, entity) as IResponses
    } catch (err: any) {
      throw new Error(err.message)
    }
  }

  @Get()
  async index(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query('search') search?: string
  ): Promise<any> {
    try {
      const entities = await this.orchestrator.index(page, limit, search)

      return this.responses.json(200, entities) as IResponses
    } catch (err: any) {
      throw new Error(err.message)
    }
  }
}