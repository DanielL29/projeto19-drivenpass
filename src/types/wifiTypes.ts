import { Wifi } from "@prisma/client";


export type WifiInsertData = Omit<Wifi, 'id' | 'createdAt' | 'userId'>