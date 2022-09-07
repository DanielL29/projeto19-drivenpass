import { Router } from 'express'
import credentialRouter from './credentialRouter.js'
import userRouter from './userRouter.js'

const router = Router()

router.use(userRouter)
router.use(credentialRouter)

export default router