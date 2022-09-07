import { prisma } from "../database/db.js";
import { Card } from "../interfaces/cardInterface.js";
import { CardInsertData } from "../types/cardTypes";

export async function findByTitleAndUserId(title: string, userId: number): Promise<Card> {
    const card: Card = await prisma.cards.findUnique({
        where: {
            title_userId: {
                title,
                userId
            }
        }
    })

    return card
}

export async function insert(card: CardInsertData) {
    await prisma.cards.create({ data: card })
}

export async function findAll(userId: number): Promise<Card[]> {
    const cards: Card[] = await prisma.cards.findMany({ where: { userId } })

    return cards
}

export async function findById(id: number): Promise<Card> {
    const card: Card = await prisma.cards.findUnique({ where: { id } })

    return card
}

export async function remove(id: number) {
    await prisma.cards.delete({ where: { id } })
}