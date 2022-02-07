import { BaseDataService } from "../../../services/base-data.service";

export abstract class BaseUpdateManager<Entity> {
  constructor(
    protected service: BaseDataService<Entity>,
    protected id: string,
    protected updateData: Partial<Entity>
  ) { }

  public entity: Entity

  async getEntity(): Promise<void> {
    const entity = await this.service.findOneOrFail(this.id)
    Object.assign(this, { entity })
  }

  async execute(): Promise<Entity> {
    await this.getEntity()
    await this.prepareData()
    await this.beforeProcess()


    Object.assign(this.entity, this.updateData)
    return await this.service.save(this.entity)
  }

  abstract beforeProcess(): Promise<void>;
  abstract prepareData(): Promise<Entity>;
}