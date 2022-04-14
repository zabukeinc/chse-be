import { BaseEntity } from "src/app/base/data/entities/base.entity";

export interface ClientEntity extends BaseEntity {
  code?: string | null;
  name: string | null;
  address: string | null;
  city: string | null;
  province: string | null;
  phone: string | null;
  email: string | null;
  service_position?: string | null;
  service_phone?: string | null;
  service_email?: string | null;
  finance_phone?: string | null;
  finance_email?: string | null;
}