import JoiDate from '@joi/date'
import JoiBase from 'joi'
import '@joi/date'
import { DocumentInsertData } from '../types/documentTypes.js'

let Joi = JoiBase
Joi = JoiBase.extend(JoiDate)

const documentSchema = Joi.object<DocumentInsertData>({
    name: Joi.string().required(),
    issueDate: Joi.date().format("DD/MM/YYYY").max(Date.now()).required(),
    validity: Joi.date().format('DD/MM/YYYY').min(Joi.ref('issueDate')).required(),
    registrationNumber: Joi.string().min(7).max(12).pattern(/[0-9]/).required(),
    issuingBody: Joi.string().min(2).max(2).required(),
    type: Joi.string().valid('RG', 'CNH').required()
})

export default documentSchema