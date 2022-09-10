import { WifiInsertData } from "../types/wifiTypes.js";
import * as wifiRepository from '../repositories/wifiRepository.js'
import { Wifi } from "@prisma/client";
import { modifyData } from "../utils/modifyDataUtil.js";
import { verifyData } from "../utils/verifyDataUtil.js";

export async function newWifi(wifi: WifiInsertData, userId: string) {
    const password = modifyData.encryptPassword(wifi.password)

    await wifiRepository.insert({ ...wifi, password }, userId)
}

export async function allWifis(userId: string): Promise<Wifi[]> {
    const wifis: Wifi[] = await wifiRepository.findAll(userId)

    return wifis.map(wifi => {
        const password = modifyData.decryptPassword(wifi.password)

        return { ...wifi, password }
    })
}

async function findWifiAndOwnerOrError(wifiId: string, userId: string): Promise<Wifi | null> {
    const isWifi: Wifi | null = await wifiRepository.findById(wifiId)

    verifyData.foundData(isWifi, 'wifi')
    verifyData.belongUser(isWifi!.userId, userId, 'wifi')

    return isWifi
}

export async function wifi(wifiId: string, userId: string): Promise<Wifi | null> {
    const wifi: Wifi | null = await findWifiAndOwnerOrError(wifiId, userId)

    const password = modifyData.decryptPassword(wifi!.password)

    return { ...wifi!, password }
}

export async function removeWifi(wifiId: string, userId: string) {
    await findWifiAndOwnerOrError(wifiId, userId)

    await wifiRepository.remove(wifiId)
}