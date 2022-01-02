import { BaseOrchestrator } from "src/app/base/domain/usecases/base.orchestrator";
import { FindManyOptions, SelectQueryBuilder } from "typeorm";
import { UserEntity } from "../data/entities/user.entity";
import { UserDataService } from "../data/services/user-data.service";
import { UserFilterDTO } from "../presentation/dto/user-filter.dto";
import { CreateUserManager } from "./managers/create-user.manager";
import { DeleteUserManager } from "./managers/delete-user.manager";
import { FilterUserManager } from "./managers/filter-user.manager";
import { UpdateUserManager } from "./managers/update-user.manager";

export class UserOrchestrator extends BaseOrchestrator<UserEntity> {
  constructor(protected service: UserDataService) {
    super(service)
  }

  async index(page: number, limit: number, params: UserFilterDTO): Promise<UserEntity[]> {
    const options: FindManyOptions<UserEntity> = {
      join: { alias: 'user' },
      where: (qb: SelectQueryBuilder<UserEntity>) =>
        new FilterUserManager(params).apply(qb)
    }

    return await this.service.index(page, limit, options)
  }

  async show(id: string): Promise<UserEntity> {
    return await this.service.findOneOrFail(id)
  }

  async create(entity: UserEntity): Promise<UserEntity> {
    return await new CreateUserManager(
      this.service,
      entity
    ).execute()
  }

  async update(id: string, updateData: UserEntity): Promise<UserEntity> {
    return await new UpdateUserManager(
      this.service,
      updateData,
      id
    ).execute()
  }

  async delete(ids: string[]): Promise<any> {
    await new DeleteUserManager(
      this.service,
      ids
    ).execute()
  }
}