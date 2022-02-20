import { AreaEntity } from "../../domain/entities/area.entity";

export class AreaDTO implements AreaEntity {
  name: string;
  code: string;
}