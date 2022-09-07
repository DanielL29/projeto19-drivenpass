import { Request, Response } from "express";
import { User } from "../interfaces/userInterface";
import * as userService from '../services/userService.js'

export async function create(req: Request, res: Response) {
    const { email, password }: User = req.body

    await userService.signUp(email, password)

    res.sendStatus(201)
}

export async function login(req: Request, res: Response) {
    const { email, password }: User = req.body

    const token = await userService.signIn(email, password)

    res.status(200).send({ token })
}