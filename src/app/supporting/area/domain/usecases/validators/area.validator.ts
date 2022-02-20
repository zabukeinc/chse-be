import { FindOneOptions, Not } from "typeorm";
import { AreaDataService } from "../../../data/services/area-data.service";
import { AreaEntity } from "../../entities/area.entity";

export class AreaValidator {
  /**
   * Validate duplicate attributes of Code and Name.
   * @param service 
   * @param area 
   * @param areaId 
   */
  constructor(
    protected service: AreaDataService,
    protected area: AreaEntity,
    protected areaId: string = null
  ) {}

  async rules(): Promise<void | Error> {
    await this.validateCode()
    await this.validateName()
  }

  protected async validateCode(): Promise<void | Error> {
    const param: FindOneOptions<AreaEntity> = {
      where: { code: this.area.code }
    }

    if (this.areaId) {
      Object.assign(param.where, {
        id: Not(this.areaId)
      })
    }

    const existingCode = await this.service.findOne(param)

    if (existingCode) throw new Error('Code already exist.')
  }

  protected async validateName(): Promise<void | Error> {
    const param: FindOneOptions<AreaEntity> = {
      where: { name: this.area.name }
    }

    if (this.areaId) {
      Object.assign(param.where, {
        id: Not(this.areaId)
      })
    }

    const existingName = await this.service.findOne(param)

    if (existingName) throw new Error('Name already exist.')
  }
}