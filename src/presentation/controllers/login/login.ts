import { badRequest, ok, serverError, unauthorized } from '../../helpers/http-helper'
import { Validation } from '../signup/signup-protocols'
import { Controller, HttpRequest, HttpResponse, Authentication } from './login-protocols'

export class LoginController implements Controller {
  private readonly authentication: Authentication
  private readonly validator: Validation

  constructor (authentication: Authentication, validator: Validation) {
    this.authentication = authentication
    this.validator = validator
  }

  async handler (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, password } = httpRequest.body
      const error = this.validator.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const accessToken = await this.authentication.auth(email, password)
      if (!accessToken) {
        return unauthorized()
      }
      return ok({ accessToken })
    } catch (error) {
      return serverError(error)
    }
  }
}
