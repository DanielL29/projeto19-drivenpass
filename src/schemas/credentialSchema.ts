import Joi from 'joi'
import { CredentialInsertData } from '../types/credentialTypes.js'

const credentialSchema = Joi.object<CredentialInsertData>({
    title: Joi.string().required(),
    url: Joi.string().uri().required(),
    name: Joi.string().required(),
    password: Joi.string().required()
})

export default credentialSchema