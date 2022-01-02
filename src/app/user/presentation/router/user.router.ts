import { BaseController } from "src/app/base/base-controller";
import { IResponses } from "src/app/base/data/entities/response.entity";
import { Body, Delete, Get, Post, Put, Query, Route, Tags } from "tsoa";
import { UserEntity, UserRole } from "../../data/entities/user.entity";
import { UserModel } from "../../data/models/user.model";
import { UserDataService } from "../../data/services/user-data.service";
import { UserOrchestrator } from "../../domain/user.orchestrator";
import { UserFilterDTO } from "../dto/user-filter.dto";
import { UserDTO } from "../dto/user.dto";

@Tags('User Service')
@Route('/api/users/')
export class UserController extends BaseController<UserEntity> {
  orchestrator = new UserOrchestrator(
    new UserDataService(
      UserModel.getRepository()
    )
  )

  @Post()
  async create(@Body() body: UserDTO): Promise<any> {
    try {
      const entity = await this.orchestrator.create(body)

      return this.responses.json(200, entity) as IResponses
    } catch (err) {
      throw new Error(err as any)
    }
  }

  @Put('{id}')
  async update(@Query('id') id: string, @Body() updateData: UserDTO): Promise<any> {
    try {
      const entity = await this.orchestrator.update(id, updateData)

      return this.responses.json(200, entity) as IResponses
    } catch (err) {
      throw new Error(err as any)
    }
  }

  @Delete()
  async delete(@Body() body: { ids: string[] }): Promise<any> {
    try {
      await this.orchestrator.delete(body.ids)

      return this.responses.json(200, 'Data succesfully deleted.') as IResponses
    } catch (err) {
      throw new Error(err as any)
    }
  }

  @Get('{id}')
  async show(@Query() id: string): Promise<any> {
    try {
      const entity = await this.orchestrator.show(id)

      return this.responses.json(200, entity) as IResponses
    } catch (err) {
      throw new Error(err as any)
    }
  }

  @Get()
  async index(
    @Query('page') page: number,
    @Query('limit') limit: number,
    @Query() role?: UserRole
  ): Promise<any> {
    try {
      let params: UserFilterDTO = {
        role: undefined
      }

      if (role) {
        Object.assign(params, { role: role })
      }

      const entities = await this.orchestrator.index(page, limit, params)

      return this.responses.json(200, entities) as IResponses
    } catch (err) {
      throw new Error(err as any)
    }
  }
}