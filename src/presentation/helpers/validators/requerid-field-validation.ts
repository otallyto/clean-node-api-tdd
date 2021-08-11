import { MissingParamError } from '../../errors'
import { Validation } from './validation'

export class RequiredFieldsValidation implements Validation {
  private readonly fieldName: string
  constructor (fieldName: string) {
    this.fieldName = fieldName
  }

  validate (input: any): Error | any {
    if (!input[this.fieldName]) {
      return new MissingParamError(this.fieldName)
    }
  }
}
