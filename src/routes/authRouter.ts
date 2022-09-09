import { Router } from 'express'
import validateSchemas from '../middlewares/validateSchemas.js'
import * as authController from '../controllers/authController.js'

const authRouter = Router()

authRouter.post('/sign-up', validateSchemas('sign'), authController.create)
authRouter.post('/sign-in', validateSchemas('sign'), authController.login)

export default authRouter