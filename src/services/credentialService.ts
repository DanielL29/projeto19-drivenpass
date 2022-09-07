import { Credential } from "../interfaces/credentialInterface.js";
import * as credentialRepository from '../repositories/credentialRepository.js'
import * as errors from '../errors/errorsThrow.js'
import { CredentialInsertData } from "../types/credentialTypes";
import { cryptr } from './../index.js';


export async function newCredential(credential: CredentialInsertData, userId: number) {
    const isCredential: Credential = await credentialRepository.findByTitleAndUserId(credential.title, userId)

    if(isCredential) {
        throw errors.conflict('title is', 'registered')
    }

    credential.password = cryptr.encrypt(credential.password)
    credential.userId = userId

    await credentialRepository.insert(credential)
}

export async function allCredentials(userId: number): Promise<Credential[]> {
    const credentials: Credential[] = await credentialRepository.findAll(userId)

    return credentials.map(credential => {
        return {
            ...credential,
            password: cryptr.decrypt(credential.password)
        }
    })
}

async function findCredentialAndOwnerOrError(id: number, userId: number): Promise<Credential> {
    const isCredential: Credential = await credentialRepository.findById(id)

    if(!isCredential) {
        throw errors.notFound('credential', 'credentials')
    }

    if(isCredential.userId !== userId) {
        throw errors.unhautorized("This credential doesn't belong to you")
    }

    return isCredential
}

export async function credential(id: number, userId: number): Promise<Credential> {
    const credential: Credential = await findCredentialAndOwnerOrError(id, userId)

    credential.password = cryptr.decrypt(credential.password)

    return credential
}

export async function removeCredential(id: number, userId: number) {
    await findCredentialAndOwnerOrError(id, userId)

    await credentialRepository.remove(id)
}