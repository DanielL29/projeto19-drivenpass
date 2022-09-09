import { prisma } from "../database/db.js";
import { Document } from "../interfaces/documentInterface.js";
import { DocumentInsertData } from "../types/documentTypes.js";

export async function insert(document: DocumentInsertData) {
    await prisma.documents.create({ data: document })
}

export async function findByRegistrationNumber(registrationNumber: string): Promise<Document> {
    const document: Document = await prisma.documents.findUnique({ where: { registrationNumber } })

    return document
}