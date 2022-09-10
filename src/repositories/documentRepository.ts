import { Document } from "@prisma/client";
import { prisma } from "../database/db.js";
import { DocumentInsertData } from "../types/documentTypes.js";

export async function insert(document: DocumentInsertData, userId: string) {
    await prisma.document.create({ data: { ...document, userId } })
}

export async function findByRegistrationNumber(registrationNumber: string): Promise<Document | null> {
    const document: Document | null = await prisma.document.findUnique({ where: { registrationNumber } })

    return document
}

export async function findAll(userId: string): Promise<Document[]> {
    const documents: Document[] = await prisma.document.findMany({ where: { userId } })

    return documents
}

export async function findById(id: string): Promise<Document | null> {
    const document: Document | null = await prisma.document.findUnique({ where: { id } })

    return document
}

export async function remove(id: string) {
    await prisma.document.delete({ where: { id } })
}