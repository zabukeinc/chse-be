export type IResponses = {
  status: number
  data: any
  failed: any
}

export class Responses {
  constructor() { }

  json(status: number, data: any, failed: any = null): IResponses {
    return {
      status: status,
      data: data,
      failed: failed
    }
  }
}