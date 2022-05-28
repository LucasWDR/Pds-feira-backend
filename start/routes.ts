import Route from '@ioc:Adonis/Core/Route'


Route.post('login', 'AuthController.login')


Route.resource('/user', 'UsersController').apiOnly()
