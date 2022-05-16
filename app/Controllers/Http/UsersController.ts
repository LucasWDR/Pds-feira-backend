import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import User from "App/Models/User";

export default class UsersController {
  public async index({}: HttpContextContract) {
    const listAll = await User.all();

    return listAll;
  }

  public async store({ request }: HttpContextContract) {
    const data = request.all();

    if ((data.user_type = "VENDEDOR")) {
      await User.create({
        name: data.name,
        email: data.email,
        cnpj: data.cnpj,
        password: data.password,
        cep: data.cep,
        uf: data.uf,
        telephone_number: data.telephone_number,
        birth_date: data.birth_date,
        street_name: data.street_name,
        neighbourhood_name: data.neighbourhood_name,
        city_name: data.city_name,
        complement: data.complement,
        house_number: data.house_number

      });
      return data;
    }

    if ((data.user_type = "CLIENTE")) {
        await User.create({
          name: data.name,
          email: data.email,
          cnpj: data.null,
          password: data.password,
          cep: data.cep,
          uf: data.uf,
          telephone_number: data.telephone_number,
          birth_date: data.birth_date,
          street_name: data.street_name,
          neighbourhood_name: data.neighbourhood_name,
          city_name: data.city_name,
          complement: data.complement,
          house_number: data.house_number
  
        });
        return data;
      }
}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
