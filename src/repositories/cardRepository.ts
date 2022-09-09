import { Card } from "@prisma/client";
import { prisma } from "../database/db.js";
import { CardInsertData } from "../types/cardTypes";

export async function findByTitleAndUserId(title: string, userId: string): Promise<Card> {
    const card: Card = await prisma.card.findUnique({
        where: {
            title_userId: {
                title,
                userId
            }
        }
    })

    return card
}

export async function insert(card: CardInsertData, userId: string) {
    await prisma.card.create({ data: { ...card, userId } })
}

export async function findAll(userId: string): Promise<Card[]> {
    const cards: Card[] = await prisma.card.findMany({ where: { userId } })

    return cards
}

export async function findById(id: string): Promise<Card> {
    const card: Card = await prisma.card.findUnique({ where: { id } })

    return card
}

export async function remove(id: string) {
    await prisma.card.delete({ where: { id } })
}