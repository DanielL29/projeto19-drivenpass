import { Router } from 'express'
import validateSchemas from '../middlewares/validateSchemas.js'
import validateToken from '../middlewares/validateToken.js'
import * as credentialController from '../controllers/credentialController.js'

const credentialRouter = Router()

credentialRouter.post('/credentials', validateToken, validateSchemas('credential'), credentialController.create)
credentialRouter.get('/credentials', validateToken, credentialController.getAll)
credentialRouter.get('/credentials/:credentialId', validateToken, credentialController.getById)
credentialRouter.delete('/credentials/:credentialId', validateToken, credentialController.remove)

export default credentialRouter