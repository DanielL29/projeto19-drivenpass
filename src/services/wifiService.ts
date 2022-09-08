import { cryptr } from "../index.js";
import { WifiInsertData } from "../types/wifiTypes.js";
import * as wifiRepository from '../repositories/wifiRepository.js'
import { Wifi } from "../interfaces/wifiInterface.js";
import * as errors from '../errors/errorsThrow.js'

export async function newWifi(wifi: WifiInsertData, userId: number) {
    wifi.password = cryptr.encrypt(wifi.password)
    wifi.userId = userId

    await wifiRepository.insert(wifi)
}

export async function allWifis(userId: number): Promise<Wifi[]> {
    const wifis: Wifi[] = await wifiRepository.findAll(userId)

    return wifis.map(wifi => {
        return {
            ...wifi, 
            password: cryptr.decrypt(wifi.password)
        }
    })
}

async function findWifiAndOwnerOrError(id: number, userId: number): Promise<Wifi> {
    const isWifi: Wifi = await wifiRepository.findById(id)

    if(!isWifi) {
        throw errors.notFound('wifi', 'wifis')
    }

    if(isWifi.userId !== userId) {
        throw errors.badRequest("This wifi doesn't belong to you")
    }

    return isWifi
}

export async function wifi(id: number, userId: number): Promise<Wifi> {
    const wifi: Wifi = await findWifiAndOwnerOrError(id, userId)

    wifi.password = cryptr.decrypt(wifi.password)

    return wifi
}