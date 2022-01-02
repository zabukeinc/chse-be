import { BaseController } from "src/app/base/base-controller";
import { IResponses } from "src/app/base/data/entities/response.entity";
import { Body, Delete, Get, Post, Put, Query, Route, Tags } from "tsoa";
import { AuditorModel } from "../../data/models/auditor.model";
import { AuditorDataService } from "../../data/services/auditor-data.service";
import { AuditorEntity } from "../../domain/entities/auditor.entity";
import { AuditorOrchestrator } from "../../domain/usecases/auditor.orchestrator";
import { AuditorDTO } from "../dto/auditor.dto";

@Tags('Auditor Service')
@Route('/api/auditors/')
export class AuditorController extends BaseController<AuditorEntity> {
  orchestrator = new AuditorOrchestrator(
    new AuditorDataService(
      AuditorModel.getRepository()
    )
  )

  @Post()
  async create(@Body() body: AuditorDTO): Promise<any> {
    try {
      const entity = await this.orchestrator.create(body)

      return this.responses.json(200, entity) as IResponses
    } catch (err) {
      throw new Error(err as any)
    }
  }

  @Put('{id}')
  async update(@Query('id') id: string, @Body() updateData: AuditorDTO): Promise<any> {
    try {
      const entity = await this.orchestrator.update(id, updateData)

      return this.responses.json(200, entity) as IResponses
    } catch (err) {
      throw new Error(err as any)
    }
  }

  @Delete()
  async delete(@Body() body: { ids: string[] }): Promise<any> {
    try {
      await this.orchestrator.delete(body.ids)

      return this.responses.json(200, 'Data succesfully deleted.') as IResponses
    } catch (err) {
      throw new Error(err as any)
    }
  }

  @Get('{id}')
  async show(@Query() id: string): Promise<any> {
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
    @Query() params?: any
  ): Promise<any> {
    try {
      const entities = await this.orchestrator.index(page, limit, params)

      return this.responses.json(200, entities) as IResponses
    } catch (err) {
      throw new Error(err as any)
    }
  }
}