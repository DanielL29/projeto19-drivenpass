import Joi from 'joi'

const credentialSchema = Joi.object({
    title: Joi.string().required(),
    url: Joi.string().uri().required(),
    name: Joi.string().required(),
    password: Joi.string().required()
})

export default credentialSchema