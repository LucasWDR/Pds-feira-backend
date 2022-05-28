import { DateTime } from 'luxon'
import { BaseModel, belongsTo, BelongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Alojamento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public descricao: string

  @column()
  public cep: string

  @column()
  public uf: string

  @column()
  public street_name: string

  @column()
  public neighbourhood_name: string

  @column()
  public city_name: string

  @column()
  public complement: string

  @column()
  public id_vendedor: number

  @belongsTo(() => User, { foreignKey: 'id_vendedor', localKey: 'id' })
  public vendedor: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
