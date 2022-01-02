import { BaseDataService } from "../../../services/base-data.service";

export abstract class BaseDeleteManager<Entity> {
  constructor(
    protected service: BaseDataService<Entity>,
    protected entityIds: string[]
  ) { }

  protected entities: Entity[]

  async getEntityByIds(): Promise<void> {
    const entities = await this.service.findByIds(this.entityIds)
    Object.assign(this, { entities })
  }

  async execute(): Promise<any> {
    await this.getEntityByIds()
    await this.prepareData()
    await this.beforeProcess()

    await this.processEachEntity()
  }

  abstract processEachEntity(): Promise<void>;

  abstract beforeProcess(): Promise<void>;

  abstract prepareData(): Promise<Entity>;
}