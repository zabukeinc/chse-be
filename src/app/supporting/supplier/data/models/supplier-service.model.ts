import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { SupplierServiceEntity } from "../../domain/entities/supplier.entity";
import { SupplierModel } from "./supplier.model";

@Entity({ name: 'supplier_services' })
export class SupplierServiceModel implements SupplierServiceEntity {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column('varchar', { name: 'name' })
  name: string;

  @Column('varchar', { name: 'specification' })
  specification: string;

  @Column('varchar', { name: 'file_url', nullable: true })
  file_url: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at?: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at?: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deleted_at?: Date;

  @Column('uuid', { name: 'supplier_id', nullable: true })
  supplier_id: string

  @ManyToOne(() => SupplierModel, model => model.services, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'supplier_id' })
  supplier: SupplierModel
}