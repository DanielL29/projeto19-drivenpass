import { prisma } from "../database/db.js";
import { Wifi } from "../interfaces/wifiInterface.js";
import { WifiInsertData } from "../types/wifiTypes.js";

export async function insert(wifi: WifiInsertData) {
    await prisma.wifis.create({ data: wifi })
}

export async function findAll(userId: number): Promise<Wifi[]> {
    const wifis: Wifi[] = await prisma.wifis.findMany({ where: { userId } })

    return wifis
}

export async function findById(id: number): Promise<Wifi> {
    const wifi: Wifi = await prisma.wifis.findUnique({ where: { id } })

    return wifi
}