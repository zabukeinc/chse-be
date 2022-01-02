import { UserFilterDTO } from "src/app/user/presentation/dto/user-filter.dto";
import { SelectQueryBuilder } from "typeorm";
import { UserEntity } from "../../entities/user.entity";

export class FilterUserManager extends UserFilterDTO {
  constructor(protected params: UserFilterDTO) {
    super()

    this.role = params?.role
  }

  apply(qb: SelectQueryBuilder<UserEntity>): SelectQueryBuilder<UserEntity> {
    if (this.role) qb.andWhere('user.role = :role', { role: this.role })


    return qb
  }
}