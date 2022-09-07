import { Credential } from "../interfaces/credentialInterface";
import * as credentialRepository from '../repositories/credentialRepository.js'
import * as errors from '../errors/errorsThrow.js'
import { CredentialInsertData } from "../types/credentialTypes";
import dotenv from 'dotenv'
import Cryptr from "cryptr";

dotenv.config()

const cryptr = new Cryptr(process.env.CRYPTR_SECREY_KEY)

export async function newCredential(credential: CredentialInsertData, userId: number) {
    const isCredential: Credential = await credentialRepository.findByTitleAndUserId(credential.title, userId)

    if(isCredential) {
        throw errors.conflict('title is', 'registered')
    }

    credential.password = cryptr.encrypt(credential.password)

    await credentialRepository.insert(credential, userId)
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

export async function credential(id: number, userId: number): Promise<Credential> {
    const isCredential: Credential = await credentialRepository.findById(id)

    if(!isCredential) {
        throw errors.notFound('credential', 'credentials')
    }

    if(isCredential.userId !== userId) {
        throw errors.unhautorized("This credential doesn't belong to you")
    }

    isCredential.password = cryptr.decrypt(isCredential.password)

    return isCredential
}