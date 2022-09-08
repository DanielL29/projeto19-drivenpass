import { cryptr } from "../index.js";
import { WifiInsertData } from "../types/wifiTypes.js";
import * as wifiRepository from '../repositories/wifiRepository.js'

export async function newWifi(wifi: WifiInsertData, userId: number) {
    wifi.password = cryptr.encrypt(wifi.password)
    wifi.userId = userId

    await wifiRepository.insert(wifi)
}