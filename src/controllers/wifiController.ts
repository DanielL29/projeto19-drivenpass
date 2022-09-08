import { Request, Response } from "express";
import * as wifiService from '../services/wifiService.js'
import { WifiInsertData } from "../types/wifiTypes.js";

export async function create(req: Request, res: Response) {
    const wifi: WifiInsertData = req.body
    const userId: number = res.locals.userId

    await wifiService.newWifi(wifi, userId)

    res.sendStatus(201)
}