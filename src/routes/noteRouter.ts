import { Router } from 'express'
import validateSchemas from '../middlewares/validateSchemas.js'
import validateToken from '../middlewares/validateToken.js'
import * as noteController from '../controllers/noteController.js'

const noteRouter = Router()

noteRouter.post('/notes', validateToken, validateSchemas('note'), noteController.create)

export default noteRouter