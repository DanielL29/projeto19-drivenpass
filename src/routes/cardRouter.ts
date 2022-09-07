import { Router } from 'express'
import validateSchemas from '../middlewares/validateSchemas.js'
import validateToken from '../middlewares/validateToken.js'
import * as cardController from '../controllers/cardController.js'

const cardRouter = Router()

cardRouter.post('/cards', validateToken, validateSchemas('card'), cardController.create)

export default cardRouter