import Joi from 'joi'
import { UserInsertData } from '../types/userTypes.js'

const signSchema = Joi.object<UserInsertData>({
    email: Joi.string().email().required(),
    password: Joi.string().min(10).required()
})

export default signSchema