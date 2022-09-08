import { prisma } from "../database/db.js";
import { WifiInsertData } from "../types/wifiTypes.js";

export async function insert(wifi: WifiInsertData) {
    await prisma.wifis.create({ data: wifi })
}