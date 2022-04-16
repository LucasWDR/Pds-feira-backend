import { DateTime } from 'luxon'
import { BaseModel, beforeSave, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import UserType from './UserType'
import Hash from '@ioc:Adonis/Core/Hash'

export type TypeUser = 'CLIENTE' | 'VENDEDOR' 

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public email: string

  @column()
  public password: string

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
  public user_type: TypeUser

  @belongsTo(() => UserType, { foreignKey: 'user_type_id' })
  public user_types: BelongsTo<typeof UserType>

  @column()
  public telephone_number: number
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
