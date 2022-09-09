import { DocumentTypes } from "../types/documentTypes.js"

export interface Document {
    id: number
    name: string
    issueDate: string
    validity: string
    registrationNumber: string
    issuingBody: string
    type: DocumentTypes
    userId: number
}