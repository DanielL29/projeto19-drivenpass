import { Request, Response } from "express";
import { CredentialInsertData } from "../types/credentialTypes";
import * as credentialService from '../services/credentialService.js'
import { Credential } from "@prisma/client";

export async function create(req: Request, res: Response) {
    const credential: CredentialInsertData = req.body
    const userId: string = res.locals.userId

    await credentialService.newCredential(credential, userId)

    res.sendStatus(201)
}

export async function getAll(_: Request, res: Response) {
    const userId: string = res.locals.userId

    const credentials: Credential[] = await credentialService.allCredentials(userId)

    res.status(200).send(credentials)
}

export async function getById(req: Request, res: Response) {
    const credentialId: string = req.params.credentialId
    const userId: string = res.locals.userId

    const credential: Credential = await credentialService.credential(credentialId, userId)

    res.status(200).send(credential)
}

export async function remove(req: Request, res: Response) {
    const credentialId: string = req.params.credentialId
    const userId: string = res.locals.userId

    await credentialService.removeCredential(credentialId, userId)

    res.sendStatus(200)
}