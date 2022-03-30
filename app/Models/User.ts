import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public password: string

/* ver futuramente se haverá login com google
  @column()
  public google_id_user: string
 */
  @column()
  public avatar: string

  @column()
  public razao_social: string

  @column()
  public street_name: string

  @column()
  public neighbourhood_name: string

  @column()
  public city_name: string

  @column()
  public complement: string

  @column()
  public uf: string

  @column()
  public cpf: number

  @column()
  public rg: number

  @column()
  public cnpj: number

  @column()
  public cep: number

  @column()
  public house_number: number

  @column()
  public telephone_number: number
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
