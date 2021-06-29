import request from 'supertest'
import app from '../app/app'

describe('CORS Middleware', () => {
  app.get('/cors', (req, res) => {
    res.send()
  })
  test('Should enable CORS', async () => {
    await request(app)
      .get('/cors')
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-methods', '*')
      .expect('access-control-allow-headers', '*')
  })
})
