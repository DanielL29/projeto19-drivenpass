import { Document } from "../interfaces/documentInterface.js"

export type DocumentTypes =
    | 'RG'
    | 'CNH'

export type DocumentInsertData = Omit<Document, 'id'>