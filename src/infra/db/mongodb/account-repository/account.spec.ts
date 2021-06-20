import { MongoHelper } from '../helpers/mongo-helper'
import { AccountMongoRepository } from './account'

const url = String(process.env.MONGO_URL)

describe('Account Mongo Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(url)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })
  test('Should return an account on sucess', async () => {
    const sut = new AccountMongoRepository()
    const account = await sut.add({
      name: 'any_name',
      email: 'any_mail@mail.com',
      password: 'any password'
    })
    expect(account).toBeTruthy()
    expect(account.id).toBeTruthy()
    expect(account.name).toBe('any_name')
    expect(account.email).toBe('any_mail@mail.com')
    expect(account.password).toBe('any password')
  })
})
