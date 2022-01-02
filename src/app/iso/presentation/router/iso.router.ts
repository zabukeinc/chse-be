import { BaseController } from "src/app/base/base-controller";
import { Body, Delete, Get, Post, Put, Query, Route, Tags } from "tsoa";
import { ISOModel } from "../../data/models/iso.model";
import { IsoDataService } from "../../data/services/iso-data.service";
import { ISOEntity } from "../../domain/entities/iso.entity";
import { IsoOrchestrator } from "../../domain/usecases/iso.orchestrator";

@Tags('ISO Service')
@Route('/api/iso/')
export class IsoController extends BaseController<ISOEntity> {

  orchestrator = new IsoOrchestrator(
    new IsoDataService(
      ISOModel.getRepository()
    )
  )

  @Post()
  async create(@Body() body: ISOEntity): Promise<any> {
    try {
      const entity = await this.orchestrator.create(body)

      return this.responses.json(200, entity)
    } catch (err) {
      throw new Error(err as any)
    }
  }

  @Put('{id}')
  async update(@Query('id') id: string, @Body() updateData: ISOEntity): Promise<any> {
    try {
      const entity = await this.orchestrator.update(id, updateData)

      return this.responses.json(200, entity)
    } catch (err) {
      throw new Error(err as any)
    }
  }

  @Delete()
  async delete(@Body() body: { ids: string[] }): Promise<any> {
    try {
      await this.orchestrator.delete(body.ids)

      return this.responses.json(200, 'Data succesfully deleted.')
    } catch (err) {
      throw new Error(err as any)
    }
  }

  @Get('{id}')
  async show(@Query() id: string): Promise<any> {
    try {
      const entity = await this.orchestrator.show(id)

      return this.responses.json(200, entity)
    } catch (err) {
      throw new Error(err as any)
    }
  }

  @Get()
  async index(
    @Query() page: number,
    @Query() limit: number,
    @Query() params?: any
  ): Promise<any> {
    try {
      const entities = await this.orchestrator.index(page, limit, params)

      return this.responses.json(200, entities)
    } catch (err) {
      throw new Error(err as any)
    }
  }
}