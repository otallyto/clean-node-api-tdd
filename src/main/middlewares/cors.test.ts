import request from 'supertest'
import app from '../config/app'

describe('CORS Middleware', () => {
  app.get('/cors', (req, res) => {
    res.send()
  })
  xit('Should enable CORS', async () => {
    await request(app)
      .get('/cors')
      .expect('access-control-allow-origin', '*')
      .expect('access-control-allow-methods', '*')
      .expect('access-control-allow-headers', '*')
  })
})
