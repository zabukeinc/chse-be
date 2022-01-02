import { FindManyOptions, FindOneOptions, Repository } from "typeorm";

export abstract class BaseDataService<Entity> {
  constructor(protected baseRepo: Repository<Entity>) { }

  relations: string[] = []

  async save(entity: Entity): Promise<Entity> {
    return await this.baseRepo.save(entity)
  }

  async update(id: string, updateData: Entity): Promise<Entity> {
    const entity = await this.findOneOrFail(id)
    Object.assign(entity, updateData)
    return await this.baseRepo.save(entity)
  }

  async delete(ids: string[]): Promise<void> {
    await this.baseRepo.delete(ids)
  }

  async findOneOrFail(id: string): Promise<Entity> {
    return await this.baseRepo.findOneOrFail(id, {
      relations: this.relations
    })
  }

  async findByIds(ids: string[]): Promise<Entity[]> {
    return await this.baseRepo.findByIds(ids, {
      relations: this.relations
    })
  }

  async findOne(options: FindOneOptions<Entity>): Promise<Entity | undefined> {
    return await this.baseRepo.findOne({ ...options, relations: this.relations })
  }

  async index(page: number, limit: number, options: FindManyOptions<Entity>): Promise<any> {
    const [data, count] = await this.baseRepo.findAndCount({
      ...options,
      take: isNaN(limit) ? parseInt(limit.toString()) : limit,
      skip: isNaN(page) ? parseInt(page.toString()) : page,
      relations: this.relations,
    })

    console.log({
      data,
      count,
      page,
      limit,
      options
    })

    return {
      meta: {
        page: page,
        limit: limit,
        total_items: count,
        current_total_items: data.length
      },
      items: data
    }
  }
}