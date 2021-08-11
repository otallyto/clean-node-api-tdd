import { HttpResponse, HttpRequest, Controller, AddAccount, Validation } from './signup-protocols'
import { badRequest, serverError, ok } from '../../helpers/http-helper'
export class SignUpController implements Controller {
  private readonly addAccount: AddAccount
  private readonly validation: Validation
  constructor (addAccount: AddAccount, validation: Validation) {
    this.addAccount = addAccount
    this.validation = validation
  }

  async handler (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const { email, password, name } = httpRequest.body

      const account = await this.addAccount.add({
        email,
        name,
        password
      })

      return ok(account)
    } catch (error) {
      return serverError(error)
    }
  }
}
