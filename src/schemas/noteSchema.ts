import Joi from 'joi'

const noteSchema = Joi.object({
    title: Joi.string().max(50).required(),
    note: Joi.string().max(1000).required()
})

export default noteSchema