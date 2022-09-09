import JoiDate from '@joi/date'
import JoiBase from 'joi'
import '@joi/date'

const Joi = JoiBase.extend(JoiDate)

const documentSchema = Joi.object({
    name: Joi.string().required(),
    issueDate: Joi.date().format("DD/MM/YYYY").max(Date.now()).required(),
    validity: Joi.date().format('DD/MM/YYYY').min(Joi.ref('issueDate')).required(),
    registrationNumber: Joi.string().min(7).max(12).pattern(/[0-9]/).required(),
    issuingBody: Joi.string().min(2).max(2).required(),
    type: Joi.string().valid('RG', 'CNH').required()
})

export default documentSchema