import { Router } from 'express'
import cardRouter from './cardRouter.js'
import credentialRouter from './credentialRouter.js'
import noteRouter from './noteRouter.js'
import userRouter from './userRouter.js'

const router = Router()

router.use(userRouter)
router.use(credentialRouter)
router.use(noteRouter)
router.use(cardRouter)

export default router