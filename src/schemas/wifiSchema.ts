import Joi from 'joi'
import { WifiInsertData } from '../types/wifiTypes.js'

const wifiSchema = Joi.object<WifiInsertData>({
    title: Joi.string().required(),
    name: Joi.string().required(),
    password: Joi.string().required(),
})

export default wifiSchema