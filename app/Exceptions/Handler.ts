/*
|--------------------------------------------------------------------------
| Http Exception Handler
|--------------------------------------------------------------------------
|
| AdonisJs will forward all exceptions occurred during an HTTP request to
| the following class. You can learn more about exception handling by
| reading docs.
|
| The exception handler extends a base `HttpExceptionHandler` which is not
| mandatory, however it can do lot of heavy lifting to handle the errors
| properly.
|
*/

import Logger from '@ioc:Adonis/Core/Logger'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'

export default class ExceptionHandler extends HttpExceptionHandler {
  constructor() {
    super(Logger)
  }

  public async handle(error: any, ctx: HttpContextContract) {
    const environment = Env.get('NODE_ENV')

    if (error.code === 'ER_ROW_IS_REFERENCED_2') {
      const message = error.field ? error.field + 'AlreadyInUse' : 'entityAlreadyInUse'
      return ctx.response.status(400).send({
        message,
        keyError: error.code,
      })
    }

    if (error.code === 'E_UNAUTHORIZED_ACCESS') {
      return ctx.response.status(401).send({
        message: error.message,
        keyError: error.code,
      })
    }

    if (error.code === 'E_AUTHORIZATION_FAILURE') {
      return ctx.response.status(403).send({
        message: error.message,
        keyError: error.code,
      })
    }

    if (error.code === 'E_VALIDATION_FAILURE') {
      return ctx.response.status(422).send(error.messages)
    }

    if ((error.status === 500 || !error.status) && environment === 'production') {
      return ctx.response.status(500)
    }

    return super.handle(error, ctx)
  }
}
