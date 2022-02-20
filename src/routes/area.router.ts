import { BaseController } from "../app/base/base-controller";
import { IResponses } from "../app/base/data/entities/response.entity";
import { Body, Delete, Get, Post, Put, Query, Route, Tags } from "tsoa";
import { AreaOrchestrator } from "../app/supporting/area/domain/usecases/area.orchestrator";
import { AreaEntity } from "../app/supporting/area/domain/entities/area.entity";
import { AreaDataService } from "../app/supporting/area/data/services/area-data.service";
import { AreaModel } from "../app/supporting/area/data/models/area.model";
import { AreaDTO } from "../app/supporting/area/presentation/dto/area.dto";

@Tags('Area Services')
@Route('/api/areas')
export class AreaController extends BaseController<AreaEntity> {
  orchestrator = new AreaOrchestrator(
    new AreaDataService(
      AreaModel.getRepository()
    )
  )

  @Post()
  async create(@Body() body: AreaDTO): Promise<any> {
    try {
      const entity = await this.orchestrator.create(body)

      return this.responses.json(200, entity) as IResponses
    } catch (err: any) {
      throw new Error(err.message as any)
    }
  }

  @Put('{id}')
  async update(id: string, @Body() updateData: AreaDTO): Promise<any> {
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