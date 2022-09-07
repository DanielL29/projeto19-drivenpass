import { NextFunction, Response } from 'express'
import errorsHash from './errorsHash.js'

export default function errorsHandler(err: any, _: any, res: Response, next: NextFunction): Response {
    console.log(err)

    for(let i = 0; i < Object.keys(errorsHash).length; i++) {
        if(errorsHash[err.type]) {
            return res.status(errorsHash[err.type]).send(err.message)
        }
    }

    return res.status(500).send(err)
}