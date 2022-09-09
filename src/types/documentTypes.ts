import { Document } from "@prisma/client"

export type DocumentTypes =
    | 'RG'
    | 'CNH'

export type DocumentInsertData = Omit<Document, 'id' | 'createdAt' | 'userId'>