import { Request, Response } from "express";
import { CredentialInsertData } from "../types/credentialTypes";
import * as credentialService from '../services/credentialService.js'
import { Credential } from "../interfaces/credentialInterface";

export async function create(req: Request, res: Response) {
    const credential: CredentialInsertData = req.body
    const userId: number = res.locals.userId

    await credentialService.newCredential(credential, userId)
    
    res.sendStatus(201)
}

export async function getAll(_: Request, res: Response) {
    const userId: number = res.locals.userId

    const credentials: Credential[] = await credentialService.allCredentials(userId)

    res.status(200).send(credentials)
}

export async function getById(req: Request, res: Response) {
    const credentialId: number = Number(req.params.credentialId)
    const userId: number = res.locals.userId

    const credential: Credential = await credentialService.credential(credentialId, userId)

    res.status(200).send(credential)
}

export async function remove(req: Request, res: Response) {
    const credentialId: number = Number(req.params.credentialId)
    const userId: number = res.locals.userId

    await credentialService.removeCredential(credentialId, userId)

    res.sendStatus(200)
}