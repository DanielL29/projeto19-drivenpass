import Joi from 'joi'

const cardSchema = Joi.object({
    title: Joi.string().required(),
    number: Joi.string().min(16).max(16).pattern(/[0-9]/).required(),
    name: Joi.string().required(),
    securityCode: Joi.string().min(3).max(3).pattern(/[0-9]/).required(),
    expirationDate: Joi.string().pattern(/[00-99]\/[00-99]/).required(),
    password: Joi.string().min(4).max(4).pattern(/[0-9]/).required(),
    isVirtual: Joi.boolean().required(),
    type: Joi.string().valid('CREDIT', 'DEBIT', 'BOTH').required()
})

export default cardSchema