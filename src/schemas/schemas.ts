import cardSchema from "./cardSchema.js"
import credentialSchema from "./credentialSchema.js"
import documentSchema from "./documentSchema.js"
import noteSchema from "./noteSchema.js"
import signSchema from "./signSchema.js"
import wifiSchema from "./wifiSchema.js"

const schemas: object = {
    sign: signSchema,
    credential: credentialSchema,
    note: noteSchema,
    card: cardSchema,
    wifi: wifiSchema,
    document: documentSchema
}

export default schemas