import * as credentialRepository from '../repositories/credentialRepository.js'
import { CredentialInsertData } from "../types/credentialTypes.js";
import { Credential } from '@prisma/client';
import { modifyData } from '../utils/modifyDataUtil.js';
import { verifyData } from '../utils/verifyDataUtil.js';


export async function newCredential(credential: CredentialInsertData, userId: string) {
    const isCredential: Credential | null = await credentialRepository.findByTitleAndUserId(credential.title, userId)

    verifyData.conflictDataExists(isCredential, 'credential title')
    const password = modifyData.encryptPassword(credential.password)

    await credentialRepository.insert({ ...credential, password }, userId)
}

export async function allCredentials(userId: string): Promise<Credential[]> {
    const credentials: Credential[] = await credentialRepository.findAll(userId)

    return credentials.map(credential => {
        const password = modifyData.decryptPassword(credential.password)

        return { ...credential, password }
    })
}

async function findCredentialAndOwnerOrError(id: string, userId: string): Promise<Credential | null> {
    const isCredential: Credential | null = await credentialRepository.findById(id)

    verifyData.foundData(isCredential, 'credential')
    verifyData.belongUser(isCredential!.userId, userId, 'credential')

    return isCredential
}

export async function credential(id: string, userId: string): Promise<Credential | null> {
    const credential: Credential | null = await findCredentialAndOwnerOrError(id, userId)

    const password = modifyData.decryptPassword(credential!.password)

    return { ...credential!, password }
}

export async function removeCredential(id: string, userId: string) {
    await findCredentialAndOwnerOrError(id, userId)

    await credentialRepository.remove(id)
}