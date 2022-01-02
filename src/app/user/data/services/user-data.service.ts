import { BaseDataService } from "src/app/base/services/base-data.service";
import { Repository } from "typeorm";
import { UserEntity } from "../entities/user.entity";

export class UserDataService extends BaseDataService<UserEntity> {
  constructor(protected repo: Repository<UserEntity>) {
    super(repo)
  }
}