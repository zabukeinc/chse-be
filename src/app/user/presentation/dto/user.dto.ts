import { UserEntity, UserRole } from "../../data/entities/user.entity";

export class UserDTO implements UserEntity {
  username: string;
  password: string;
  role: UserRole;
}