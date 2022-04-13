import { BaseController } from "../app/base/base-controller";
import { IResponses } from "../app/base/data/entities/response.entity";
import { Body, Delete, Get, Post, Put, Query, Route, Tags } from "tsoa";
import { SupplierEntity } from "../app/supporting/supplier/domain/entities/supplier.entity";
import { SupplierOrchestrator } from "../app/supporting/supplier/domain/usecases/supplier.orchestrator";
import { SupplierDataService } from "../app/supporting/supplier/data/services/supplier-data.service";
import { SupplierModel } from "../app/supporting/supplier/data/models/supplier.model";
import { SupplierDTO } from "../app/supporting/supplier/presentation/dto/supplier.dto";

@Tags('Supplier Services')
@Route('/api/suppliers')
export class SupplierController extends BaseController<SupplierEntity> {
  orchestrator = new SupplierOrchestrator(
    new SupplierDataService(
      SupplierModel.getRepository()
    )
  )

  @Post()
  async create(@Body() body: SupplierDTO): Promise<any> {
    try {
      const entity = await this.orchestrator.create(body)

      return this.responses.json(200, entity) as IResponses
    } catch (err) {
      throw new Error(err as any)
    }
  }

  @Put('{id}')
  async update(id: string, @Body() updateData: SupplierDTO): Promise<any> {
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