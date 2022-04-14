import { BaseController } from "../app/base/base-controller";
import { IResponses } from "../app/base/data/entities/response.entity";
import { Body, Delete, Get, Post, Put, Query, Route, Tags } from "tsoa";
import { ApplicantOrchestrator } from "../app/external/applicant/domain/usecases/applicant.orchestrator";
import { ApplicantEntity } from "../app/external/applicant/domain/entities/applicant.entity";
import { ApplicantDataService } from "../app/external/applicant/data/services/applicant-data.service";
import { ApplicantModel } from "../app/external/applicant/data/models/applicant.model";
import { ApplicantDTO } from "../app/external/applicant/presentation/dto/applicant.dto";

@Tags('Applicant Services')
@Route('/api/applicants')
export class ApplicantController extends BaseController<ApplicantEntity> {
  orchestrator = new ApplicantOrchestrator(
    new ApplicantDataService(
      ApplicantModel.getRepository()
    )
  )

  @Post()
  async create(@Body() body: ApplicantDTO): Promise<any> {
    try {
      const entity = await this.orchestrator.create(body)

      return this.responses.json(200, entity) as IResponses
    } catch (err: any) {
      throw new Error(err.message as any)
    }
  }

  @Put('{id}')
  async update(id: string, @Body() updateData: ApplicantDTO): Promise<any> {
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