import { Router } from 'express'
import validateSchemas from '../middlewares/validateSchemas.js'
import * as userController from '../controllers/userController.js'

const userRouter = Router()

userRouter.post('/sign-up', validateSchemas('sign'), userController.create)

export default userRouter