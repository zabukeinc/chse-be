import { BaseOrchestrator } from "src/app/base/domain/usecases/base.orchestrator";
import { FindManyOptions, Like } from "typeorm";
import { ApplicantDataService } from "../../data/services/applicant-data.service";
import { ApplicantEntity } from "../entities/applicant.entity";
import { CreateApplicantManager } from "./managers/create-applicant.manager";
import { DeleteApplicantManager } from "./managers/delete-applicant.manager";
import { UpdateApplicantManager } from "./managers/update-applicant.manager";

export class ApplicantOrchestrator extends BaseOrchestrator<ApplicantEntity> {
  constructor(protected service: ApplicantDataService) {
    super(service)
  }

  async index(page: number, limit: number, search?: string): Promise<ApplicantEntity[]> {
    let params: FindManyOptions<ApplicantEntity> = {}

    if (search) {
      Object.assign(params, {
        where: {
          code: Like(`%${search}%`),
        }
      })
    }
    return await this.service.index(page, limit, params)
  }

  async show(id: string): Promise<ApplicantEntity> {
    return await this.service.findOneOrFail(id)
  }

  async create(entity: ApplicantEntity): Promise<ApplicantEntity> {
    return await new CreateApplicantManager(
      this.service,
      entity
    ).execute()
  }

  async update(id: string, updateData: ApplicantEntity): Promise<ApplicantEntity> {
    return await new UpdateApplicantManager(
      this.service,
      id,
      updateData
    ).execute()
  }

  async delete(id: string): Promise<any> {
    return await new DeleteApplicantManager(
      this.service,
      id
    ).execute()
  }
}