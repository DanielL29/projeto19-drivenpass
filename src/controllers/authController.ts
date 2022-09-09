import { Request, Response } from "express";
import { User } from "../interfaces/userInterface";
import * as authService from '../services/authService.js'

export async function create(req: Request, res: Response) {
    const { email, password }: User = req.body

    await authService.signUp(email, password)

    res.sendStatus(201)
}

export async function login(req: Request, res: Response) {
    const { email, password }: User = req.body

    const token = await authService.signIn(email, password)

    res.status(200).send({ token })
}