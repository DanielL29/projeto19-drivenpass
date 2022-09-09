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

export async function allDocuments(userId: number): Promise<Document[]> {
    const documents: Document[] = await documentRepository.findAll(userId)

    return documents
}

async function findDocumentAndOwnerOrError(documentId: number, userId: number): Promise<Document> {
    const isDocument: Document = await documentRepository.findById(documentId)

    if (!isDocument) {
        throw errors.notFound('document', 'documents')
    }

    if (isDocument.userId !== userId) {
        throw errors.badRequest("This document doesn't belong to you")
    }

    return isDocument
}

export async function document(documentId: number, userId: number): Promise<Document> {
    const document: Document = await findDocumentAndOwnerOrError(documentId, userId)

    return document
}

export async function removeDocument(documentId: number, userId: number) {
    await findDocumentAndOwnerOrError(documentId, userId)

    await documentRepository.remove(documentId)
}