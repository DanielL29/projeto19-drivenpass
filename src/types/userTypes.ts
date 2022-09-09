import { Card, Credential, Document, Note, User, Wifi } from "@prisma/client";


export type UserInsertData = Omit<User, 'id' | 'createdAt'>
export type allModels = | Credential | Card | Wifi | Document | Note | User