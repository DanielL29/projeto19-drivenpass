import { Router } from 'express'
import validateSchemas from '../middlewares/validateSchemas.js'
import validateToken from '../middlewares/validateToken.js'
import * as cardController from '../controllers/cardController.js'

const cardRouter = Router()

cardRouter.post('/cards', validateToken, validateSchemas('card'), cardController.create)
cardRouter.get('/cards', validateToken, cardController.getAll)
cardRouter.get('/cards/:cardId', validateToken, cardController.getById)
cardRouter.delete('/cards/:cardId', validateToken, cardController.remove)

export default cardRouter