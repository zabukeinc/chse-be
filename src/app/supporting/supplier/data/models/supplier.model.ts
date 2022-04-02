import { BaseModel } from "src/app/base/data/models/base.model";
import { Column, Entity, OneToMany, OneToOne } from "typeorm";
import { SupplierDueDiligenceEntity, SupplierEntity, SupplierExperienceEntity, SupplierServiceEntity } from "../../domain/entities/supplier.entity";
import { SupplierDueDiligenceModel } from "./supplier-due-diligence.model";
import { SupplierExperienceModel } from "./supplier-experience.model";
import { SupplierServiceModel } from "./supplier-service.model";

@Entity({ name: 'suppliers' })
export class SupplierModel extends BaseModel implements SupplierEntity {
  @Column('varchar', { name: 'name' })
  name: string;

  @Column('varchar', { name: 'code' })
  code: string;

  @Column('text', { name: 'address', nullable: true })
  address: string;

  @Column('varchar', { name: 'email', nullable: true })
  email: string;

  @Column('varchar', { name: 'telp', nullable: true })
  telp: string;

  @Column('varchar', { name: 'connector_name', nullable: true })
  connector_name: string;

  @Column('varchar', { name: 'connector_telp', nullable: true })
  connector_telp: string;

  @Column('varchar', { name: 'company_deed', nullable: true })
  company_deed: string;

  @Column('varchar', { name: 'npwp', nullable: true })
  npwp: string;
  
  @OneToMany(() => SupplierServiceModel, model => model.supplier, {
    cascade: ['insert', 'update', 'remove']
  })
  services?: SupplierServiceModel[];

  @OneToMany(() => SupplierExperienceModel, model => model.supplier, {
    cascade: ['insert', 'update', 'remove']
  })
  experiences?: SupplierExperienceModel[];

  @OneToOne(() => SupplierDueDiligenceModel, model => model.supplier, {
    cascade: ['insert', 'update', 'remove']
  })
  due_diligence?: SupplierDueDiligenceEntity;
}