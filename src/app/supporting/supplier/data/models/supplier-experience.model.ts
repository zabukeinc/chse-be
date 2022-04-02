import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SupplierExperienceEntity } from "../../domain/entities/supplier.entity";
import { SupplierModel } from "./supplier.model";

@Entity({ name: 'supplier_experiences' })
export class SupplierExperienceModel implements SupplierExperienceEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('varchar', { name: 'project_name' })
  project_name: string;

  @Column('varchar', { name: 'activity' })
  activity: string;

  @Column('int', { name: 'year' })
  year: number;

  @Column('uuid', { name: 'supplier_id', nullable: true })
  supplier_id: string

  @ManyToOne(() => SupplierModel, model => model.experiences, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'supplier_id' })
  supplier: SupplierModel

  @CreateDateColumn({ type: 'timestamp' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at?: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at?: Date;
}