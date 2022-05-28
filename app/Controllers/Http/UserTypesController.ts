import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UserType from 'App/Models/UserType'

export default class UserTypesController {
  public async index({}: HttpContextContract) {

   const listAll = await UserType.all()

   return listAll
  }

  public async create({}: HttpContextContract) {}

  public async store({ request }: HttpContextContract) {
    const data = request.all()
    const type = await UserType.create(data)
   
    return type
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
