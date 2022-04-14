import { BaseDataService } from "src/app/base/services/base-data.service";
import { Repository } from "typeorm";
import { ClientEntity } from "../../domain/entities/client.entity";
import { ClientModel } from "../models/client.model";

export class ClientDataService extends BaseDataService<ClientEntity> {
  constructor(protected repo: Repository<ClientModel>) {
    super(repo)
  }
}