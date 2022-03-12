import { BaseDataService } from "src/app/base/services/base-data.service";

export class CodeGeneratorHelper<Entity> {
  constructor(
    protected service: BaseDataService<Entity>,
    protected entity: Entity
  ) { }

  protected prefix: string

  setPrefix(prefix: string): this {
    this.prefix = prefix;

    return this;
  }

  protected getYear(): number {
    return new Date().getFullYear()
  }

  async generate(): Promise<string> {
    let counter = await this.service.count()
    return `${this.prefix}-${this.getYear()}-${++counter}`;
  }

}