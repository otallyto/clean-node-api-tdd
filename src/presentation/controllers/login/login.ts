import { InvalidParamError, MissingParamError } from '../../errors'
import { badRequest, serverError, unauthorized } from '../../helpers/http-helper'
import { Controller, HttpRequest, HttpResponse, Authentication, EmailValidator } from './login-protocols'

export class LoginController implements Controller {
  private readonly emailValidator: EmailValidator
  private readonly authentication: Authentication
  constructor (emailValidator: EmailValidator, authentication: Authentication) {
    this.emailValidator = emailValidator
    this.authentication = authentication
  }

  // @ts-expect-error
  async handler (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const { email, password } = httpRequest.body
      const requiredFields = ['email', 'password']
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const isValidMail = this.emailValidator.isValid(email)
      if (!isValidMail) {
        return badRequest(new InvalidParamError('email'))
      }
      const auth = await this.authentication.auth(email, password)
      if (!auth) {
        return unauthorized()
      }
    } catch (error) {
      return serverError(error)
    }
  }
}
