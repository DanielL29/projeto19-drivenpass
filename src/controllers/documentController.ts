import { Request, Response } from "express";
import { DocumentInsertData } from "../types/documentTypes.js";
import * as documentService from '../services/documentService.js'

export async function create(req: Request, res: Response) {
    const document: DocumentInsertData = req.body
    const userId: number = res.locals.userId

    await documentService.newDocument(document, userId)

    res.sendStatus(201)
}