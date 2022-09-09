import { DocumentInsertData } from "../types/documentTypes.js";
import * as documentRepository from '../repositories/documentRepository.js'
import { Document } from "@prisma/client";
import { verifyData } from "../utils/verifyDataUtil.js";
import { modifyData } from "../utils/modifyDataUtil.js";

export async function newDocument(document: DocumentInsertData, userId: string) {
    const isDocument: Document = await documentRepository.findByRegistrationNumber(document.registrationNumber)

    verifyData.conflictDataExists(isDocument, 'registration number')
    const issuingBody = modifyData.textUpper(document.issuingBody)

    await documentRepository.insert({ ...document, issuingBody }, userId)
}

export async function allDocuments(userId: string): Promise<Document[]> {
    const documents: Document[] = await documentRepository.findAll(userId)

    return documents
}

async function findDocumentAndOwnerOrError(documentId: string, userId: string): Promise<Document> {
    const isDocument: Document = await documentRepository.findById(documentId)

    verifyData.foundData(isDocument, 'document')
    verifyData.belongUser(isDocument.userId, userId, 'document')

    return isDocument
}

export async function document(documentId: string, userId: string): Promise<Document> {
    const document: Document = await findDocumentAndOwnerOrError(documentId, userId)

    return document
}

export async function removeDocument(documentId: string, userId: string) {
    await findDocumentAndOwnerOrError(documentId, userId)

    await documentRepository.remove(documentId)
}