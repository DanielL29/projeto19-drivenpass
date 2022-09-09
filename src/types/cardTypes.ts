import { Card } from "@prisma/client"


export type CardTypes =
    | 'CREDIT'
    | 'DEBIT'
    | 'BOTH'

export type CardInsertData = Omit<Card, 'id' | 'createdAt' | 'userId'>
