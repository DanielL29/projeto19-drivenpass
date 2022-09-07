import credentialSchema from "./credentialSchema.js"
import noteSchema from "./noteSchema.js"
import signSchema from "./signSchema.js"

const schemas: object = {
    sign: signSchema,
    credential: credentialSchema,
    note: noteSchema
} 

export default schemas