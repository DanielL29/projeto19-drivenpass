import { Router } from 'express'
import cardRouter from './cardRouter.js'
import credentialRouter from './credentialRouter.js'
import noteRouter from './noteRouter.js'
import userRouter from './userRouter.js'
import wifiRouter from './wifiRouter.js'

const router = Router()

router.use(userRouter)
router.use(credentialRouter)
router.use(noteRouter)
router.use(cardRouter)
router.use(wifiRouter)

export default router