import { RequiredFieldsValidation } from '../../presentation/helpers/validators/requerid-field-validation'
import { Validation } from '../../presentation/helpers/validators/validation'
import { ValidationComposite } from '../../presentation/helpers/validators/validation-composite'
import { makeSignUpValidation } from './singup-validation'

jest.mock('../../presentation/helpers/validators/validation-composite')
describe('SignUpValidation Factory', () => {
  test('Should call ValidationComposite with all validations ', () => {
    makeSignUpValidation()
    const validations: Validation[] = []
    for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
      validations.push(new RequiredFieldsValidation(field))
    }
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
