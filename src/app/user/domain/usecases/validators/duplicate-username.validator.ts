import { UserDataService } from "src/app/user/data/services/user-data.service";
import { ValidateError } from "tsoa";
import { FindOneOptions, Not } from "typeorm";
import { UserEntity } from "../../entities/user.entity";

export class DuplicateUsernameValidator {
  /**
   * This class is used for checking duplicate username on database.
   * @param entity UserEntity
   * @param service 
   */
  constructor(
    protected service: UserDataService,
    protected entity: UserEntity,
    protected entityId: string = null
  ) { }

  async rules(): Promise<void | ValidateError> {
    const param: FindOneOptions<UserEntity> = {
      where: {
        username: this.entity.username
      }
    }

    if (this.entityId) {
      Object.assign(param.where, {
        id: Not(this.entityId)
      })
    }

    const entity = await this.service.findOne(param)

    if (entity) throw new ValidateError(null, 'Username already exist.')
  }
}