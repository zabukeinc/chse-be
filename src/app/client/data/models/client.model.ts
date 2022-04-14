import { BaseModel } from "src/app/base/data/models/base.model";
import { Column, Entity } from "typeorm";
import { ClientEntity } from "../../domain/entities/client.entity";

@Entity({ name: 'clients' })
export class ClientModel extends BaseModel implements ClientEntity {
  @Column('varchar', { name: 'code', nullable: true })
  code: string;

  @Column('varchar', { name: 'name', nullable: true })
  name: string;

  @Column('varchar', { name: 'address', nullable: true })
  address: string;

  @Column('varchar', { name: 'city', nullable: true })
  city: string;

  @Column('varchar', { name: 'province', nullable: true })
  province: string;

  @Column('varchar', { name: 'phone', nullable: true })
  phone: string;

  @Column('varchar', { name: 'email', nullable: true })
  email: string;

  @Column('varchar', { name: 'service_position', nullable: true })
  service_position: string;

  @Column('varchar', { name: 'service_phone', nullable: true })
  service_phone: string;

  @Column('varchar', { name: 'service_email', nullable: true })
  service_email: string;

  @Column('varchar', { name: 'finance_phone', nullable: true })
  finance_phone: string;

  @Column('varchar', { name: 'finance_email', nullable: true })
  finance_email: string;
}