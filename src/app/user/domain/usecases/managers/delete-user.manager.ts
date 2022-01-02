import { BaseDeleteManager } from "src/app/base/domain/usecases/managers/base-delete.manager";
import { UserDataService } from "src/app/user/data/services/user-data.service";
import { UserEntity } from "../../entities/user.entity";

export class DeleteUserManager extends BaseDeleteManager<UserEntity>{
  constructor(
    protected service: UserDataService,
    protected ids: string[]
  ) {
    super(service, ids)
  }
  
  async processEachEntity(): Promise<void> {
    await Promise.all(
      this.entities.map(
        (async (entity) => {
          await this.service.delete([entity.id as string])
        })
      )
    )
  }
  
  async beforeProcess(): Promise<void> {
    return
  }

  async prepareData(): Promise<UserEntity> {
    return this.entities[0]
  }
}