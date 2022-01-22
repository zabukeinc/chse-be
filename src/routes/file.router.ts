import { Route, Request, Post, UploadedFile, FormField } from 'tsoa';
import { extname } from 'path'
import * as express from 'express';
import { StoreFileConfig } from 'src/helpers/store-file-config.helper';
import multer from 'multer'
import * as fs from 'fs'
import { Responses } from 'src/app/base/data/entities/response.entity';
import { v4 as uuid } from 'uuid';


@Route('files')
export class FilesController {

  protected year = new Date().getFullYear()
  protected month = new Date().getMonth() + 1

  @Post('uploadFile')
  public async uploadFile(
    @Request() request: express.Request,
    @UploadedFile('file') file: Express.Multer.File,
    @FormField('fileType') fileType: string
  ): Promise<any> {
    file.filename = this.serializeName(file.originalname)
    file.destination = this.getFilePath(fileType, file.filename)

    const uploaded = await this.handleFile(request, file, fileType);

    if (uploaded) {
      return new Responses().json(201, {
        path: file.destination,
        filename: file.filename
      })
    }
  }

  private getFilePath(fileType: string, fileName: string): string {
    return `./uploads/${fileType}/${this.year}/${this.month}/${fileName}`
  }

  private serializeName(filename: string): string {
    const fileExtName = extname(filename)

    return `${uuid()}${fileExtName}`
  }

  private handleFile(request: express.Request, file: Express.Multer.File, fileType: string): Promise<any> {
    const multerSingle = multer(StoreFileConfig).single('file');
    return new Promise((resolve, reject) => {
      multerSingle(request, undefined, async (error: any) => {
        if (error) {
          reject(error);
        }

        const dest = `./uploads/${fileType}/${this.year}/${this.month}`

        if (!fs.existsSync(dest)) {
          fs.mkdirSync(dest, { recursive: true });
        }

        fs.writeFile(file.destination, file.buffer, function (err) {
          if (err) reject(err)
          console.log("uploaded")
          return 'Uploaded'
        })

        resolve(true)
      });
    });
  }
}