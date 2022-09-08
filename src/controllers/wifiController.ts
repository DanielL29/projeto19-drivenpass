import { Request, Response } from "express";
import { Wifi } from "../interfaces/wifiInterface.js";
import * as wifiService from '../services/wifiService.js'
import { WifiInsertData } from "../types/wifiTypes.js";

export async function create(req: Request, res: Response) {
    const wifi: WifiInsertData = req.body
    const userId: number = res.locals.userId

    await wifiService.newWifi(wifi, userId)

    res.sendStatus(201)
}

export async function getAll(_: Request, res: Response) {
    const userId: number = res.locals.userId

    const wifis: Wifi[] = await wifiService.allWifis(userId)

    res.status(200).send(wifis)
}

export async function getById(req: Request, res: Response) {
    const wifiId: number = Number(req.params.wifiId)
    const userId: number = res.locals.userId

    const wifi: Wifi = await wifiService.wifi(wifiId, userId)

    res.status(200).send(wifi)
}

export async function remove(req: Request, res: Response) {
    const wifiId: number = Number(req.params.wifiId)
    const userId: number = res.locals.userId

    await wifiService.removeWifi(wifiId, userId)

    res.sendStatus(200)
}