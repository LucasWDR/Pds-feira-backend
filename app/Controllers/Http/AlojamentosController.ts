import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Alojamento from 'App/Models/Alojamento';
import User from 'App/Models/User';

export default class AlojamentosController {

    public async index({ request }: HttpContextContract) {
        const { search } = request.qs()
        const data = await Alojamento.query()
        .where((query) => {
            search && query.where('name', 'LIKE', `%${search}%`)
          })
    
        return data;
      }
    
      // criando alojamento com user aunteticado como vendedor
      public async store({ request, auth: { user }, response }: HttpContextContract) {
        const data = request.all();

        const user_id = user!.id
        try{
        await User.query().where('id', user_id).where('user_type', 'VENDEDOR')

        const new_data = { ...data, id_vendedor: user_id}
        const createdAlojamento = await Alojamento.create(new_data)
        
        return response.status(200).send(createdAlojamento)

      }catch(e){
            return response.status(500).send({ message: e.message })
      }
    }
    
      public async show({}: HttpContextContract) {}
    
      public async edit({}: HttpContextContract) {}
    
      public async update({}: HttpContextContract) {}
    
      public async destroy({}: HttpContextContract) {}
}
