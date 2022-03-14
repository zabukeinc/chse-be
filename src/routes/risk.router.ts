import { BaseController } from "../app/base/base-controller";
import { IResponses } from "../app/base/data/entities/response.entity";
import { Body, Delete, Get, Post, Put, Query, Route, Tags } from "tsoa";
import { RiskOrchestrator } from '../app/supporting/risk/domain/usecases/risk.orchestrator'
import { RiskDataService } from "../app/supporting/risk/data/services/risk-data.service";
import { RiskModel } from "../app/supporting/risk/data/models/risk.model";
import { RiskEntity } from "../app/supporting/risk/domain/entities/risk.entity";
import { RiskDTO } from "../app/supporting/risk/presentation/dto/risk.dto";

@Tags('Risk Service')
@Route('/api/risks')
export class RiskController extends BaseController<RiskEntity> {
  orchestrator = new RiskOrchestrator(
    new RiskDataService(
      RiskModel.getRepository()
    )
  )

  @Post()
  async create(@Body() body: RiskDTO): Promise<any> {
    try {
      const entity = await this.orchestrator.create(body)

      return this.responses.json(200, entity) as IResponses
    } catch (err) {
      throw new Error(err as any)
    }
  }

  @Put('{id}')
  async update(id: string, @Body() updateData: RiskDTO): Promise<any> {
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