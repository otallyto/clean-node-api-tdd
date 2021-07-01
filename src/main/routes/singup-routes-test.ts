import request from 'supertest'
import app from '../config/app'

describe('SingUp Routes', () => {
  test('Should return an accoutn on succes', async () => {
    await request(app)
      .post('/api/singup').send({
        name: 'Tallyto',
        email: 'rodrigues.tallyto@hotmail.com',
        password: '123',
        passwordConfirmation: '123'
      }).expect(200)
  })
})
