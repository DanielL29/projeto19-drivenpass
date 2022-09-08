import { Router } from 'express'
import validateSchemas from '../middlewares/validateSchemas.js'
import validateToken from '../middlewares/validateToken.js'
import * as wifiController from '../controllers/wifiController.js'

const wifiRouter = Router()

wifiRouter.post('/wifis', validateToken, validateSchemas('wifi'), wifiController.create)

export default wifiRouter