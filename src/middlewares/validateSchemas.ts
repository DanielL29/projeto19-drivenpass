import schemas from '../schemas/schemas'
import { Request, NextFunction } from 'express'
import * as errors from '../errors/errorsThrow.js'

export default function validateSchemas(schema: string): Function {
    return (req: Request, _: any, next: NextFunction) => {
        const { error } = schemas[schema].validate(req.body)

        if(error) {
            const messages: object[] = error.details.map((detail: any) => detail.message).join('\n')

            throw errors.unprocessableEntity(messages)
        }

        next()
    }
}