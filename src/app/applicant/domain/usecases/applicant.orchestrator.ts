import { BaseOrchestrator } from "src/app/base/domain/usecases/base.orchestrator";
import { IsoDataService } from "src/app/iso/data/services/iso-data.service";
import { ApplicantDataService } from "../../data/services/applicant-data.service";
import { ApplicantEntity } from "../entities/applicant.entity";
import { CreateApplicantManager } from "./managers/create-applicant.manager";
import { UpdateApplicantManager } from "./managers/update-applicant.manager";

export class ApplicantOrchestrator extends BaseOrchestrator<ApplicantEntity> {
  constructor(
    protected service: ApplicantDataService,
    protected isoService: IsoDataService
  ) {
    super(service)
  }

  async index(page: number, limit: number, params: any): Promise<ApplicantEntity[]> {
    return await this.service.index(page, limit, null)
  }

  async show(id: string): Promise<ApplicantEntity> {
    return await this.service.findOneOrFail(id)
  }

  async create(entity: ApplicantEntity): Promise<ApplicantEntity> {
    return await new CreateApplicantManager(
      this.service,
      this.isoService,
      entity
    ).execute()
  }

  async update(id: string, updateData: ApplicantEntity): Promise<ApplicantEntity> {
    return await new UpdateApplicantManager(
      this.service,
      this.isoService,
      id,
      updateData
    ).execute()
  }

  async delete(ids: string[]): Promise<any> {
    return await this.service.delete(ids)
  }
}