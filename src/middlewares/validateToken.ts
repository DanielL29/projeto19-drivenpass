import { Request, Response, NextFunction } from "express";
import * as errors from '../errors/errorsThrow.js'
import jwt from 'jsonwebtoken'

export default async function validateToken(req: Request, res: Response, next: NextFunction) {
    if (!req.headers.authorization) {
        throw errors.unhautorized('Missing headers authorization')
    }

    const token: string = req.headers.authorization!.replace('Bearer ', '')
    const secretKey: string | undefined = process.env.SECRET_KEY

    const decryptedToken: any = jwt.verify(token, secretKey!)

    res.locals.userId = decryptedToken.id

    next()
}