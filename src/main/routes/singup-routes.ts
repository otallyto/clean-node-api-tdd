/* eslint-disable @typescript-eslint/no-misused-promises */
import { Router } from 'express'
import { adaptRoute } from '../adapters/express-route-adapter'
import { makeSignUpController } from '../factories/singup/singup'

export default (router: Router): void => {
  router.post('/singup', adaptRoute(makeSignUpController()))
}
