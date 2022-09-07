import { Router } from 'express'
import credentialRouter from './credentialRouter.js'
import noteRouter from './noteRouter.js'
import userRouter from './userRouter.js'

const router = Router()

router.use(userRouter)
router.use(credentialRouter)
router.use(noteRouter)

export default router