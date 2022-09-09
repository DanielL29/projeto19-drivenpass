import { Request, Response } from "express";
import { DocumentInsertData } from "../types/documentTypes.js";
import * as documentService from '../services/documentService.js'
import { Document } from "../interfaces/documentInterface.js";

export async function create(req: Request, res: Response) {
    const document: DocumentInsertData = req.body
    const userId: number = res.locals.userId

    await documentService.newDocument(document, userId)

    res.sendStatus(201)
}

export async function getAll(_: Request, res: Response) {
    const userId: number = res.locals.userId

    const documents: Document[] = await documentService.allDocuments(userId)

    res.status(200).send(documents)
}

export async function getById(req: Request, res: Response) {
    const documentId: number = Number(req.params.documentId)
    const userId: number = res.locals.userId

    const document: Document = await documentService.document(documentId, userId)

    res.status(200).send(document)
}

export async function remove(req: Request, res: Response) {
    const documentId: number = Number(req.params.documentId)
    const userId: number = res.locals.userId

    await documentService.removeDocument(documentId, userId)

    res.sendStatus(200)
}