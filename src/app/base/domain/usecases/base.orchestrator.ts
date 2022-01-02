import { BaseDataService } from "../../services/base-data.service";

export abstract class BaseOrchestrator<Entity> {
  constructor(protected service: BaseDataService<Entity>) {}

  abstract index(page: number, limit: number, params: any): Promise<Entity[]>;
  abstract show(id: string): Promise<Entity>;
  abstract create(entity: Entity): Promise<Entity>;
  abstract update(id: string, updateData: Entity): Promise<Entity>;
  abstract delete(ids: string[]): Promise<any>;

  protected throwError(err: any) {
    throw new Error(err as any)
  }
}