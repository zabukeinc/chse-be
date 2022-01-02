import { CompanyDataService } from "src/app/company/data/services/company-data.service";
import { ValidateError } from "tsoa";
import { FindOneOptions, Not } from "typeorm";
import { CompanyEntity } from "../../entities/company.entity";

export class DuplicateNameValidator {
  constructor(
    protected service: CompanyDataService,
    protected entity: CompanyEntity,
    protected entityId: string = null
  ) { }

  async rules(): Promise<void | ValidateError> {

    const param: FindOneOptions<CompanyEntity> = {
      where: {
        name: this.entity.name
      }
    }

    if (this.entityId) {
      Object.assign(param.where, {
        id: Not(this.entityId)
      })
    }

    const entity = await this.service.findOne(param)

    if (entity) throw new ValidateError(null, 'Company name already exist.')
  }
}