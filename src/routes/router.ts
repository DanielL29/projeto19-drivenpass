import { Router } from 'express'
import cardRouter from './cardRouter.js'
import credentialRouter from './credentialRouter.js'
import documentRouter from './documentRouter.js'
import noteRouter from './noteRouter.js'
import userRouter from './authRouter.js'
import wifiRouter from './wifiRouter.js'

const router = Router()

router.use(userRouter)
router.use(credentialRouter)
router.use(noteRouter)
router.use(cardRouter)
router.use(wifiRouter)
router.use(documentRouter)

export default router