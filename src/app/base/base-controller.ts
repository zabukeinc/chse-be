import { Controller } from "tsoa";
import { IResponses, Responses } from "./data/entities/response.entity";
import { BaseOrchestrator } from "./domain/usecases/base.orchestrator";

export abstract class BaseController<Entity> extends Controller {
  protected responses = new Responses()
  protected orchestrator: BaseOrchestrator<Entity>

  abstract index(page: number, limit: number, params: any): Promise<IResponses>
  abstract show(id: string): Promise<IResponses>
  abstract create(entity: Entity): Promise<IResponses>
  abstract update(id: string, updateData: Entity): Promise<IResponses>
  abstract delete(id: string): Promise<IResponses>
}