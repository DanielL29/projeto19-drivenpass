import { CardInsertData } from "../types/cardTypes.js";
import * as cardRepository from '../repositories/cardRepository.js'
import { Card } from "@prisma/client";
import { verifyData } from "../utils/verifyDataUtil.js";
import { modifyData } from "../utils/modifyDataUtil.js";

export async function newCard(card: CardInsertData, userId: string) {
    const isCard: Card = await cardRepository.findByTitleAndUserId(card.title, userId)

    verifyData.conflictDataExists(isCard, 'card title')
    const { password, securityCode } = modifyData.encryptPasswordAndCvv(card.password, card.securityCode)

    await cardRepository.insert({ ...card, password, securityCode }, userId)
}

export async function allCards(userId: string): Promise<Card[]> {
    const cards: Card[] = await cardRepository.findAll(userId)

    return cards.map(card => {
        const { password, securityCode } = modifyData.decryptPasswordAndCvv(card.password, card.securityCode)

        return { ...card, password, securityCode }
    })
}

async function findCardAndOwnerOrError(cardId: string, userId: string): Promise<Card> {
    const isCard = await cardRepository.findById(cardId)

    verifyData.foundData(isCard, 'card')
    verifyData.belongUser(isCard.userId, userId, 'card')

    return isCard
}

export async function card(cardId: string, userId: string): Promise<Card> {
    const card: Card = await findCardAndOwnerOrError(cardId, userId)

    const { password, securityCode } = modifyData.decryptPasswordAndCvv(card.password, card.securityCode)

    return { ...card, password, securityCode }
}

export async function removeCard(cardId: string, userId: string) {
    await findCardAndOwnerOrError(cardId, userId)

    await cardRepository.remove(cardId)
}