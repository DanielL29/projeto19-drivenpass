import { Request, Response } from "express";
import { CredentialInsertData } from "../types/credentialTypes";
import * as credentialService from '../services/credentialService.js'

export async function create(req: Request, res: Response) {
    const credential: CredentialInsertData = req.body
    const userId: number = res.locals.userId

    await credentialService.newCredentials(credential, userId)
    
    res.sendStatus(201)
}