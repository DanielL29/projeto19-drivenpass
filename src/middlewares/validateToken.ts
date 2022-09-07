import { Request, Response, NextFunction } from "express";
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

export default async function validateToken(req: Request, res: Response, next: NextFunction) {
    const token: string = req.headers.authorization.replace('Bearer ', '')
    const secretKey = process.env.SECRET_KEY

    const decryptedToken = await jwt.decode(token)

    console.log(decryptedToken)
}