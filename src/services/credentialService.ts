import { Credential } from "../interfaces/credentialInterface";
import * as credentialRepository from '../repositories/credentialRepository.js'
import * as errors from '../errors/errorsThrow.js'
import { CredentialInsertData } from "../types/credentialTypes";
import dotenv from 'dotenv'
import Cryptr from "cryptr";

dotenv.config()

const cryptr = new Cryptr(process.env.CRYPTR_SECREY_KEY)

export async function newCredentials(credential: CredentialInsertData, userId: number) {
    const isCredential: Credential = await credentialRepository.findByTitleAndUserId(credential.title, userId)

    if(isCredential) {
        throw errors.conflict('title is', 'registered')
    }

    credential.password = cryptr.encrypt(credential.password)

    await credentialRepository.insert(credential, userId)
}