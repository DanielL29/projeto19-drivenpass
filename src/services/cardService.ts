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