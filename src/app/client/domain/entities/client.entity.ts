import { BaseEntity } from "src/app/base/data/entities/base.entity";

export interface ClientEntity extends BaseEntity {
  code: string;
  name: string;
  address: string;
  city: string;
  province: string;
  phone: string;
  email: string;
  service_position: string;
  service_phone: string;
  service_email: string;
  finance_phone: string;
  finance_email: string;
}