import { Credential } from "@prisma/client";
import { prisma } from "../database/db.js";
import { CredentialInsertData } from "../types/credentialTypes.js";

export async function findByTitleAndUserId(title: string, userId: string): Promise<Credential | null> {
    const credential: Credential = await prisma.credential.findUnique({
        where: {
            title_userId: {
                title,
                userId
            }
        }
    })

    return credential
}

export async function insert(credential: CredentialInsertData, userId: string) {
    await prisma.credential.create({ data: { ...credential, userId } })
}

export async function findAll(userId: string) {
    const credentials: Credential[] = await prisma.credential.findMany({
        where: { userId },
        orderBy: { id: 'asc' }
    })

    return credentials
}

export async function findById(id: string) {
    const credential: Credential = await prisma.credential.findUnique({ where: { id } })

    return credential
}

export async function remove(id: string) {
    await prisma.credential.delete({ where: { id } })
}