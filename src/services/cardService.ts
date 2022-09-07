import { CardInsertData } from "../types/cardTypes.js";
import * as cardRepository from '../repositories/cardRepository.js'
import { Card } from './../interfaces/cardInterface';
import * as errors from '../errors/errorsThrow.js'
import { cryptr } from "../index.js";

export async function newCard(card: CardInsertData, userId: number) {
    const isCard: Card = await cardRepository.findByTitleAndUserId(card.title, userId)

    if(isCard) {
        throw errors.conflict('card title is', 'registered')
    }

    card.password = cryptr.encrypt(card.password)
    card.securityCode = cryptr.encrypt(card.securityCode)
    card.userId = userId

    await cardRepository.insert(card)
}

export async function allCards(userId: number): Promise<Card[]> {
    const cards: Card[] = await cardRepository.findAll(userId)

    return cards.map(card => {
        return {
            ...card,
            password: cryptr.decrypt(card.password),
            securityCode: cryptr.decrypt(card.securityCode)
        }
    })
}

async function findCardAndOwnerOrError(cardId: number, userId: number): Promise<Card> {
    const isCard = await cardRepository.findById(cardId)

    if(!isCard) {
        throw errors.notFound('card', 'cards')
    }

    if(isCard.userId !== userId) {
        throw errors.badRequest("This card doesn't belong to you")
    }

    return isCard
} 

export async function card(cardId: number, userId: number): Promise<Card> {
    const card: Card = await findCardAndOwnerOrError(cardId, userId)

    card.password = cryptr.decrypt(card.password)
    card.securityCode = cryptr.decrypt(card.securityCode)

    return card
}