import cardSchema from "./cardSchema.js"
import credentialSchema from "./credentialSchema.js"
import noteSchema from "./noteSchema.js"
import signSchema from "./signSchema.js"
import wifiSchema from "./wifiSchema.js"

const schemas: object = {
    sign: signSchema,
    credential: credentialSchema,
    note: noteSchema,
    card: cardSchema,
    wifi: wifiSchema
} 

export default schemas