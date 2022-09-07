import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'
import * as errors from '../errors/errorsThrow.js'

export default function validateToken(req: Request, res: Response, next: NextFunction) {
    const token: string = req.headers.authorization.replace('Bearer ', '')

    const decryptedToken: any = jwt.decode(token)

    if(decryptedToken.iat > decryptedToken.exp) {
        throw errors.unhautorized('Token expired')
    }

    res.locals.userId = decryptedToken.id

    next()
}