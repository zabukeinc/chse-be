import { BaseDeleteManager } from "src/app/base/domain/usecases/managers/base-delete.manager";
import { UserEntity } from "../../data/entities/user.entity";
import { UserDataService } from "../../data/services/user-data.service";

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