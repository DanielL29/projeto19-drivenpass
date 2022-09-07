import { Request, Response } from "express";
import * as cardService from '../services/cardService.js'
import { CardInsertData } from "../types/cardTypes.js";

export async function create(req: Request, res: Response) {
    const card: CardInsertData = req.body
    const userId = res.locals.userId

    await cardService.newCard(card, userId)

    res.sendStatus(201)
}