import { BaseUpdateManager } from "src/app/base/domain/usecases/managers/base-update.manager";
import { UserDataService } from "src/app/user/data/services/user-data.service";
import { UserEntity } from "../../entities/user.entity";
import { HashPassword } from "../helpers/hash-password.helper";
import { DuplicateUsernameValidator } from "../validators/duplicate-username.validator";

export class UpdateUserManager extends BaseUpdateManager<UserEntity> {
  constructor(
    protected service: UserDataService,
    protected updateData: UserEntity,
    protected entityId: string
  ) {
    super(service, entityId, updateData)
  }

  async beforeProcess(): Promise<void> {
    await new DuplicateUsernameValidator(
      this.service,
      this.updateData,
      this.entityId
    ).rules()
  }

  async prepareData(): Promise<UserEntity> {
    if (this.updateData.password) {
      this.updateData.password = new HashPassword(this.updateData.password).hash()
    }
    return this.entity
  }
}