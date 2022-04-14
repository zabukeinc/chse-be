import { BaseController } from "../app/base/base-controller";
import { IResponses } from "../app/base/data/entities/response.entity";
import { Body, Delete, Get, Post, Put, Query, Route, Tags } from "tsoa";
import { ClientEntity } from "../app/client/domain/entities/client.entity";
import { ClientOrchestrator } from "../app/client/domain/usecases/client.orchestrator";
import { ClientDataService } from "../app/client/data/services/client-data.service";
import { ClientModel } from "../app/client/data/models/client.model";
import { ClientDTO } from "../app/client/presentation/dto/client.dto";

@Tags('Client Services')
@Route('/api/clients')
export class ClientController extends BaseController<ClientEntity> {
  orchestrator = new ClientOrchestrator(
    new ClientDataService(
      ClientModel.getRepository()
    )
  )

  @Post()
  async create(@Body() body: ClientDTO): Promise<any> {
    try {
      const entity = await this.orchestrator.create(body)

      return this.responses.json(200, entity) as IResponses
    } catch (err) {
      throw new Error(err as any)
    }
  }

  @Put('{id}')
  async update(id: string, @Body() updateData: ClientDTO): Promise<any> {
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