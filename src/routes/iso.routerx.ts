import { BaseController } from "src/app/base/base-controller";
import { ISOModel } from "src/app/iso/data/models/iso.model";
import { IsoDataService } from "src/app/iso/data/services/iso-data.service";
import { ISOEntity } from "src/app/iso/domain/entities/iso.entity";
import { IsoOrchestrator } from "src/app/iso/domain/usecases/iso.orchestrator";
import { StoreFileConfig } from "src/helpers/store-file-config.helper";
import { Body, Delete, Get, Post, Put, Query, Request, Route, Tags, UploadedFile } from "tsoa";

const multer = require('multer')

@Tags('ISO Service')
@Route('/api/iso/')
export class IsoController extends BaseController<ISOEntity> {

  orchestrator = new IsoOrchestrator(
    new IsoDataService(
      ISOModel.getRepository()
    )
  )

  @Post('uploads')
  public async file(@UploadedFile('file') file: Express.Multer.File): Promise<void> {
    try {

      Object.assign(
        file,
        StoreFileConfig
      )

      console.log({
        mbappe: file,
        destination: file?.destination,
        path: file?.path
      },
        'miftah')
    }
    catch {
      throw new Error("Error uploading file.");
    }
  }

  @Post()
  async create(@Body() body: ISOEntity): Promise<any> {
    try {
      const entity = await this.orchestrator.create(body)

      return this.responses.json(200, entity)
    } catch (err) {
      throw new Error(err as any)
    }
  }

  @Put('{id}')
  async update(@Query('id') id: string, @Body() updateData: ISOEntity): Promise<any> {
    try {
      const entity = await this.orchestrator.update(id, updateData)

      return this.responses.json(200, entity)
    } catch (err) {
      throw new Error(err as any)
    }
  }

  @Delete()
  async delete(@Body() body: { ids: string[] }): Promise<any> {
    try {
      await this.orchestrator.delete(body.ids)

      return this.responses.json(200, 'Data succesfully deleted.')
    } catch (err) {
      throw new Error(err as any)
    }
  }

  @Get('{id}')
  async show(@Query() id: string): Promise<any> {
    try {
      const entity = await this.orchestrator.show(id)

      return this.responses.json(200, entity)
    } catch (err) {
      throw new Error(err as any)
    }
  }

  @Get()
  async index(
    @Query() page: number,
    @Query() limit: number,
    @Query() params?: any
  ): Promise<any> {
    try {
      const entities = await this.orchestrator.index(page, limit, params)

      return this.responses.json(200, entities)
    } catch (err) {
      throw new Error(err as any)
    }
  }
}