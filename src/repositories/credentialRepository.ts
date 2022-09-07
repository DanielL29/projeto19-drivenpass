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