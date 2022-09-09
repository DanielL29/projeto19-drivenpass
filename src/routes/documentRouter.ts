import { Router } from 'express'
import validateSchemas from '../middlewares/validateSchemas.js'
import validateToken from '../middlewares/validateToken.js'
import * as documentController from '../controllers/documentController.js'

const documentRouter = Router()

documentRouter.post('/documents', validateToken, validateSchemas('document'), documentController.create)
documentRouter.get('/documents', validateToken, documentController.getAll)
documentRouter.get('/documents/:documentId', validateToken, documentController.getById)

export default documentRouter