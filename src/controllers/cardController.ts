import { Card } from "@prisma/client";
import { Request, Response } from "express";
import * as cardService from '../services/cardService.js'
import { CardInsertData } from "../types/cardTypes.js";

export async function create(req: Request, res: Response) {
    const card: CardInsertData = req.body
    const userId: string = res.locals.userId

    await cardService.newCard(card, userId)

    res.sendStatus(201)
}

export async function getAll(_: Request, res: Response) {
    const userId: string = res.locals.userId

    const cards: Card[] = await cardService.allCards(userId)

    res.status(200).send(cards)
}

export async function getById(req: Request, res: Response) {
    const cardId: string = req.params.cardId
    const userId: string = res.locals.userId

    const card: Card | null = await cardService.card(cardId, userId)

    res.status(200).send(card)
}

export async function remove(req: Request, res: Response) {
    const cardId: string = req.params.cardId
    const userId: string = res.locals.userId

    await cardService.removeCard(cardId, userId)

    res.sendStatus(200)
}