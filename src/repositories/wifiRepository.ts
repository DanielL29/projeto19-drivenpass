import { Wifi } from "@prisma/client";
import { prisma } from "../database/db.js";
import { WifiInsertData } from "../types/wifiTypes.js";

export async function insert(wifi: WifiInsertData, userId: string) {
    await prisma.wifi.create({ data: { ...wifi, userId } })
}

export async function findAll(userId: string): Promise<Wifi[]> {
    const wifis: Wifi[] = await prisma.wifi.findMany({ where: { userId } })

    return wifis
}

export async function findById(id: string): Promise<Wifi> {
    const wifi: Wifi = await prisma.wifi.findUnique({ where: { id } })

    return wifi
}

export async function remove(id: string) {
    await prisma.wifi.delete({ where: { id } })
}