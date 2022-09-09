import Joi from 'joi'
import { NoteInsertData } from '../types/noteTypes.js'

const noteSchema = Joi.object<NoteInsertData>({
    title: Joi.string().max(50).required(),
    note: Joi.string().max(1000).required()
})

export default noteSchema