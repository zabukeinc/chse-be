import { BaseCreateManager } from "src/app/base/domain/usecases/managers/base-create.manager";
import { UserEntity } from "../../data/entities/user.entity";
import { UserDataService } from "../../data/services/user-data.service";
import { HashPassword } from "../helpers/hash-password.helper";
import { DuplicateUsernameValidator } from "../validators/duplicate-username.validator";
const bcrypt = require('bcrypt');

export class CreateUserManager extends BaseCreateManager<UserEntity> {
  constructor(
    protected service: UserDataService,
    protected data: UserEntity
  ) {
    super(service, data)
  }

  async beforeProcess(): Promise<void> {
    await new DuplicateUsernameValidator(
      this.service,
      this.data
    ).rules()
    return
  }

  async prepareData(): Promise<UserEntity> {
    this.data.password = new HashPassword(this.data.password).hash()
    return this.data
  }
}