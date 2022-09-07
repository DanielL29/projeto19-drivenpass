import { Router } from 'express'
import validateSchemas from '../middlewares/validateSchemas.js'
import validateToken from '../middlewares/validateToken.js'
import * as noteController from '../controllers/noteController.js'

const noteRouter = Router()

noteRouter.post('/notes', validateToken, validateSchemas('note'), noteController.create)
noteRouter.get('/notes', validateToken, noteController.getAll)
noteRouter.get('/notes/:noteId', validateToken, noteController.getById)
noteRouter.delete('/notes/:noteId', validateToken, noteController.remove)

export default noteRouter