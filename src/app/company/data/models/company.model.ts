import { BaseModel } from "src/app/base/data/models/base.model";
import { Column, Entity } from "typeorm";
import { CompanyEntity } from "../../domain/entities/company.entity";

@Entity({ name: 'companies' })
export class CompanyModel extends BaseModel implements CompanyEntity {
  @Column('varchar', { name: 'name' })
  name: string;

  @Column('varchar', { name: 'address' })
  address: string;

  @Column('varchar', { name: 'province' })
  province: string;

  @Column('varchar', { name: 'city' })
  city: string;

  @Column('int', { name: 'postal_code' })
  postal_code: number;

  @Column('varchar', { name: 'phone', nullable: true })
  phone: string;

  @Column('varchar', { name: 'fax', nullable: true })
  fax: string;

  @Column('varchar', { name: 'email' })
  email: string;

  @Column('varchar', { name: 'npwp' })
  npwp: string;

  @Column('varchar', { name: 'website_url', nullable: true })
  website_url: string;
}