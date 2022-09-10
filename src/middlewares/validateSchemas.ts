import schemas from '../schemas/schemas.js'
import { Request, NextFunction } from 'express'
import * as errors from '../errors/errorsThrow.js'

export default function validateSchemas(schema: string) {
    if (!schemas.hasOwnProperty(schema)) {
        throw errors.unprocessableEntity('Missing schema/invalid schema')
    }

    return (req: Request, _: any, next: NextFunction) => {
        const { error } = schemas[schema].validate(req.body, { abortEarly: false })

        if (error) {
            const messages: string = error.details.map((detail: any) => detail.message).join('\n')

            throw errors.unprocessableEntity(messages)
        }

        next()
    }
}