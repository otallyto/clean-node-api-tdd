import request from 'supertest'
import app from '../app/app'

describe('Body Parser Middleware', () => {
  app.post('/test_body_parser', (req, res) => {
    res.send(req.body)
  })
  test('Should parse body as json', async () => {
    await request(app).post('/test_body_parser').send({ name: 'Tallyto' }).expect({ name: 'Tallyto' })
  })
})
