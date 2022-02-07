import { BaseDataService } from "../../../services/base-data.service";

export abstract class BaseDeleteManager<Entity> {
  constructor(
    protected service: BaseDataService<Entity>,
    protected entityId: string
  ) { }

  protected entity: Entity

  async getEntityById(): Promise<void> {
    const entity = await this.service.findOne({
      where: {
        id: this.entityId
      }
    })
    Object.assign(this, { entity })
  }

  async execute(): Promise<any> {
    await this.getEntityById()
    await this.prepareData()
    await this.beforeProcess()

    await this.service.delete([this.entityId])
  }

  abstract beforeProcess(): Promise<void>;

  abstract prepareData(): Promise<Entity>;
}