import { BaseController } from "../app/base/base-controller";
import { IResponses } from "../app/base/data/entities/response.entity";
import { RecordModel } from "../app/supporting/record/data/models/record.model";
import { RecordDataService } from "../app/supporting/record/data/services/record-data.service";
import { RecordEntity } from "../app/supporting/record/domain/entities/record.entity";
import { RecordOrchestrator } from "../app/supporting/record/domain/usecases/record.orchestrator";
import { RecordDTO } from "../app/supporting/record/presentation/dto/record.dto";
import { Body, Delete, FormField, Get, Post, Put, Query, Route, Tags } from "tsoa";

@Tags('Record Services')
@Route('/api/records')
export class RecordController extends BaseController<RecordEntity> {
  orchestrator = new RecordOrchestrator(
    new RecordDataService(
      RecordModel.getRepository()
    )
  )

  @Post()
  async create(@Body() body: RecordDTO): Promise<any> {
    try {
      const entity = await this.orchestrator.create(body)

      return this.responses.json(200, entity) as IResponses
    } catch (err) {
      throw new Error(err as any)
    }
  }

  @Put('{id}')
  async update(id: string, @Body() updateData: RecordDTO): Promise<any> {
    try {
      const entity = await this.orchestrator.update(id, updateData)

      return this.responses.json(200, entity) as IResponses
    } catch (err) {
      throw new Error(err as any)
    }
  }

  @Delete('{id}')
  async delete(id: string): Promise<any> {
    try {
      await this.orchestrator.delete(id)

      return this.responses.json(200, 'Data succesfully deleted.') as IResponses
    } catch (err) {
      throw new Error(err as any)
    }
  }

  @Get(':id')
  async show(id: string): Promise<any> {
    try {
      const entity = await this.orchestrator.show(id)

      return this.responses.json(200, entity) as IResponses
    } catch (err) {
      throw new Error(err as any)
    }
  }

  @Get()
  async index(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ): Promise<any> {
    try {
      let params = null

      const entities = await this.orchestrator.index(page, limit, params)

      return this.responses.json(200, entities) as IResponses
    } catch (err) {
      throw new Error(err as any)
    }
  }
}