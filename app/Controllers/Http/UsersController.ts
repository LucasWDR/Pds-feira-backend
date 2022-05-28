import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class UsersController {
  public async index({}: HttpContextContract) {
    const listAll = await User.all();

    return listAll;
  }

  public async store({ request }: HttpContextContract) {
    const data = request.all();
    const createdUser = await User.create(data)
    
    return createdUser
}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
