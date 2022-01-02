import { IResponses } from "src/app/base/data/entities/response.entity";
import { ISOModel } from "src/app/iso/data/models/iso.model";
import { IsoDataService } from "src/app/iso/data/services/iso-data.service";
import { Body, Delete, Get, Post, Put, Query, Route, Tags } from "tsoa";
import { BaseController } from "../../../base/base-controller";
import { ApplicantModel } from "../../data/models/applicant.model";
import { ApplicantDataService } from "../../data/services/applicant-data.service";
import { ApplicantEntity } from "../../domain/entities/applicant.entity";
import { ApplicantOrchestrator } from "../../domain/usecases/applicant.orchestrator";
import { ApplicantDTO } from "../dto/applicant.dto";

@Tags('Applicant Service')
@Route('/api/applicants/')
export class ApplicantController extends BaseController<ApplicantEntity> {
  orchestrator = new ApplicantOrchestrator(
    new ApplicantDataService(
      ApplicantModel.getRepository()
    ),
    new IsoDataService(
      ISOModel.getRepository()
    )
  )

  @Post()
  async create(@Body() body: any): Promise<any> {
    try {
      const entity = await this.orchestrator.create(body as any)

      return this.responses.json(200, entity) as IResponses
    } catch (err) {
      throw new Error(err as any)
    }
  }

  @Put('{id}')
  async update(@Query('id') id: string, @Body() updateData: any): Promise<any> {
    try {
      const entity = await this.orchestrator.update(id, updateData as any)

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