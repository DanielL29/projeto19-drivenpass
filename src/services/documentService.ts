import { DocumentInsertData } from "../types/documentTypes.js";
import * as documentRepository from '../repositories/documentRepository.js'
import { Document } from "../interfaces/documentInterface.js";
import * as errors from '../errors/errorsThrow.js'

export async function newDocument(document: DocumentInsertData, userId: number) {
    const isDocument: Document = await documentRepository.findByRegistrationNumber(document.registrationNumber)

    if (isDocument) {
        throw errors.conflict('registration number is', 'registered')
    }

    document.userId = userId
    document.issuingBody = document.issuingBody.toUpperCase()

    await documentRepository.insert(document)
}