import { BaseController } from "../app/base/base-controller";
import { IResponses } from "../app/base/data/entities/response.entity";
import { Body, Delete, Get, Post, Put, Query, Route, Tags } from "tsoa";
import { SdmEntity } from "src/app/supporting/sdm/domain/entities/sdm.entity";
import { SdmModel } from "src/app/supporting/sdm/data/models/sdm.model";
import { SdmDataService } from "src/app/supporting/sdm/data/services/sdm-data.service";
import { SdmOrchestrator } from "src/app/supporting/sdm/domain/usecases/sdm.orchestrator";
import { SdmDTO } from "../app/supporting/sdm/presentation/dto/sdm.dto";

@Tags('Sdm Services')
@Route('/api/sdm')
export class SdmController extends BaseController<SdmEntity> {
  orchestrator = new SdmOrchestrator(
    new SdmDataService(
      SdmModel.getRepository()
    )
  )

  @Post()
  async create(@Body() body: SdmDTO): Promise<any> {
    try {
      const entity = await this.orchestrator.create(body)

      return this.responses.json(200, entity) as IResponses
    } catch (err) {
      throw new Error(err as any)
    }
  }

  @Put('{id}')
  async update(id: string, @Body() updateData: SdmDTO): Promise<any> {
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
    @Query('search') search?: string,
  ): Promise<any> {
    try {
      const entities = await this.orchestrator.index(page, limit, search)

      return this.responses.json(200, entities) as IResponses
    } catch (err) {
      throw new Error(err as any)
    }
  }
}