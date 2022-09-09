import { Credential } from "@prisma/client";


export type CredentialInsertData = Omit<Credential, 'id' | 'createdAt' | 'userId'>