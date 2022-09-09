import * as errors from '../errors/errorsThrow.js'
import { allModels } from '../types/userTypes.js'

export interface VerifyDataLiterals {
    foundData: (data: allModels, model: string) => void
    belongUser: (dataUserId: string, userId: string, model: string) => void
    conflictDataExists: (data: allModels, conflict: string) => void
}

export const verifyData: VerifyDataLiterals = {
    foundData: (data, model) => {
        if (!data) {
            throw errors.notFound(model)
        }
    },
    belongUser: (dataUserId, userId, model) => {
        if (dataUserId !== userId) {
            throw errors.badRequest(`This ${model} doesn't belong to you`)
        }
    },
    conflictDataExists: (data, conflict) => {
        if (data) {
            throw errors.conflict(conflict, 'registered')
        }
    }
}