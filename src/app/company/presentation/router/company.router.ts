import { BaseController } from "src/app/base/base-controller";
import { IResponses } from "src/app/base/data/entities/response.entity";
import { Body, Delete, Get, Post, Put, Query, Route, Tags } from "tsoa";
import { CompanyModel } from "../../data/models/company.model";
import { CompanyDataService } from "../../data/services/company-data.service";
import { CompanyEntity } from "../../domain/entities/company.entity";
import { CompanyOrchestrator } from "../../domain/usecases/company.orchestrator";
import { CompanyDTO } from "../dto/company.dto";

@Tags('Compan Service')
@Route('/api/companies/')
export class CompanyController extends BaseController<CompanyEntity> {
  orchestrator = new CompanyOrchestrator(
    new CompanyDataService(
      CompanyModel.getRepository()
    )
  )
  @Post()
  async create(@Body() body: CompanyDTO): Promise<any> {
    try {
      const entity = await this.orchestrator.create(body)

      return this.responses.json(200, entity) as IResponses
    } catch (err) {
      throw new Error(err as any)
    }
  }

  @Put('{id}')
  async update(@Query('id') id: string, @Body() updateData: CompanyDTO): Promise<any> {
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