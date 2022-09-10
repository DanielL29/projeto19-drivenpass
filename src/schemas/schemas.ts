import { ObjectSchema } from "joi"
import { CardInsertData } from "../types/cardTypes.js"
import { CredentialInsertData } from "../types/credentialTypes.js"
import { DocumentInsertData } from "../types/documentTypes.js"
import { NoteInsertData } from "../types/noteTypes.js"
import { UserInsertData } from "../types/userTypes.js"
import { WifiInsertData } from "../types/wifiTypes.js"
import cardSchema from "./cardSchema.js"
import credentialSchema from "./credentialSchema.js"
import documentSchema from "./documentSchema.js"
import noteSchema from "./noteSchema.js"
import signSchema from "./signSchema.js"
import wifiSchema from "./wifiSchema.js"

export interface Schemas {
    [key: string]: ObjectSchema
}

const schemas: Schemas = {
    sign: signSchema,
    credential: credentialSchema,
    note: noteSchema,
    card: cardSchema,
    wifi: wifiSchema,
    document: documentSchema
}

export default schemas