import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity, UserRole } from "../entities/user.entity";

@Entity({ name: 'users' })
export class UserModel extends BaseEntity implements UserEntity {
  @Column('varchar', { name: 'username', nullable: false, length: 30 })
  username: string;

  @Column('varchar', { name: 'password', nullable: false })
  password: string;

  @Column('enum', { name: 'role', enum: UserRole, nullable: false })
  role: UserRole;

  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at?: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at?: Date;
}