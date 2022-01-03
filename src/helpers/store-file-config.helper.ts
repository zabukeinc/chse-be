import { extname } from 'path'
import { diskStorage } from 'multer'
import { Request } from 'express'
import { File } from 'tsoa'

const year = new Date().getFullYear()
const month = new Date().getMonth()

const fileFilter = (req: Request, file: File, callback: any) => {
  if (file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
    callback(null, true)
  } else {
    callback(
      new Error(`Unsupported file type ${extname(file.originalname)}`)
      ,
      false
    )
  }
}

const editFileName = (req: Request, file: File, callback: any) => {
  const fileExtName = extname(file.originalname)
  const randomName = Math.random()

  callback(null, `${randomName}${fileExtName}`)
}

export const StoreFileConfig = {
  storage: diskStorage({
    destination: `./uploads/images/company/${year}/${month}`,
    filename: editFileName
  }),
  fileFilter: fileFilter
}
