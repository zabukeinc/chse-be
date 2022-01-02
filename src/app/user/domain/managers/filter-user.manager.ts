import { SelectQueryBuilder } from "typeorm";
import { UserEntity } from "../../data/entities/user.entity";
import { UserFilterDTO } from "../../presentation/dto/user-filter.dto";

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