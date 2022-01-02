import { AuditorModel } from "src/app/auditor/data/models/auditor.model";
import { CompanyModel } from "src/app/company/data/models/company.model";
import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { UserEntity, UserRole } from "../../domain/entities/user.entity";

@Entity({ name: 'users' })
export class UserModel extends BaseEntity implements UserEntity {
  @Column('varchar', { name: 'username', nullable: false, length: 30, unique: true })
  username: string;

  @Column('varchar', { name: 'password', nullable: false })
  password: string;

  @Column('enum', { name: 'role', enum: UserRole, nullable: false })
  role: UserRole;

  /** Join with Company */
  @OneToOne(() => CompanyModel, model => model.user, {
    cascade: ['update'],
    onUpdate: 'CASCADE'
  })
  company: CompanyModel

  /** Join with Auditor */
  @OneToOne(() => AuditorModel, model => model.user, {
    cascade: ['update'],
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
  auditor: AuditorModel

  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at?: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at?: Date;
}