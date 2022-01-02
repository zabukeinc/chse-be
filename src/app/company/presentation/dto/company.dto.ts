import { CompanyEntity } from "../../domain/entities/company.entity";

export class CompanyDTO implements CompanyEntity {
  name: string;
  address: string;
  province: string;
  city: string;
  postal_code: number;
  phone: string;
  fax: string;
  email: string;
  npwp: string;
  website_url: string;
}