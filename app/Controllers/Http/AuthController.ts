import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";


export default class AuthController {

  public async login({ request, response, auth }: HttpContextContract) {
    const email = request.input("email");
    const password = request.input("password");

    if(!email || !password){
      return response.badRequest('Invalid credentials')
    }

      const token = await auth.use("api").attempt(email, password,{
      expiresIn: '480mins',
      });
      return token;
    
 }

}
