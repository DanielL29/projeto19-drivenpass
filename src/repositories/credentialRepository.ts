import { prisma } from "../database/db.js";
import { Credential } from "../interfaces/credentialInterface.js";
import { CredentialInsertData } from "../types/credentialTypes.js";

export async function findByTitleAndUserId(title: string, userId: number): Promise<Credential | null> {
    const credential = await prisma.credentials.findUnique({ 
        where: { 
            title_userId: { 
                title, 
                userId 
            } 
        } 
    })

    return credential
}

export async function insert(credential: CredentialInsertData, userId: number) {
    await prisma.credentials.create({ data: { ...credential, userId } })
}

export async function findAll(userId: number) {
    const credentials = await prisma.credentials.findMany({ 
        where: { userId }, 
        orderBy: { id: 'asc' } 
    })

    return credentials
}

export async function findById(id: number) {
    const credential = await prisma.credentials.findUnique({ where: { id } })

    return credential
}