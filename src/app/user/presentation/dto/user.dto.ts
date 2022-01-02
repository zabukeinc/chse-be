import { UserEntity, UserRole } from "../../domain/entities/user.entity";

export class UserDTO implements UserEntity {
  username: string;
  password: string;
  role: UserRole;
}