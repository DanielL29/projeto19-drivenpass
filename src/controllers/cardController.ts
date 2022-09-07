import { Request, Response } from "express";
import { Card } from "../interfaces/cardInterface.js";
import * as cardService from '../services/cardService.js'
import { CardInsertData } from "../types/cardTypes.js";

export async function create(req: Request, res: Response) {
    const card: CardInsertData = req.body
    const userId = res.locals.userId

    await cardService.newCard(card, userId)

    res.sendStatus(201)
}

export async function getAll(_: Request, res: Response) {
    const userId: number = res.locals.userId

    const cards: Card[] = await cardService.allCards(userId)

    res.status(200).send(cards)
}

export async function getById(req: Request, res: Response) {
    const cardId: number = Number(req.params.cardId)
    const userId: number = res.locals.userId

    const card: Card = await cardService.card(cardId, userId)

    res.status(200).send(card)
}