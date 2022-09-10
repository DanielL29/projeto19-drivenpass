import Cryptr from 'cryptr'
import bcrypt from 'bcrypt'
import * as errors from '../errors/errorsThrow.js'

const cryptrSecretKey: string | undefined = process.env.CRYPTR_SECRET_KEY
const cryptr = new Cryptr(cryptrSecretKey!)

interface HashLiterals {
    decrypt: (password: string) => string
    encrypt: (password: string) => string
    hashSync: (password: string) => string
    compareSync: (password: string, encryptedPassword: string) => void
}

export const hash: HashLiterals = {
    decrypt: (password) => {
        return cryptr.decrypt(password)
    },
    encrypt: (password) => {
        return cryptr.encrypt(password)
    },
    hashSync: (password) => {
        return bcrypt.hashSync(password, 10)
    },
    compareSync: (password, encryptedPassword) => {
        if (!bcrypt.compareSync(password, encryptedPassword)) {
            throw errors.badRequest('Wrong password')
        }
    }
}