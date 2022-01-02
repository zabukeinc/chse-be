import { BaseDataService } from "../../../services/base-data.service";

export abstract class BaseCreateManager<Entity> {
  constructor(
    protected service: BaseDataService<Entity>,
    protected entity: Entity
  ) { }

  protected formattedEntity: Entity

  async execute(): Promise<Entity> {
    await this.prepareData()

    await this.beforeProcess()

    if (this.formattedEntity) return await this.service.save(this.formattedEntity)

    return await this.service.save(this.entity)
  }

  abstract beforeProcess(): Promise<void>;

  abstract prepareData(): Promise<Entity>;
}