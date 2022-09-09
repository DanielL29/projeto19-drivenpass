import { hash } from "./hashUtils.js"

interface modifyDataLiterals {
    encryptPasswordAndCvv: (password: string, cvv: string) => { password: string, securityCode: string }
    decryptPasswordAndCvv: (password: string, cvv: string) => { password: string, securityCode: string }
    encryptPassword: (password: string) => string
    decryptPassword: (password: string) => string
    textUpper: (text: string) => string
}

export const modifyData: modifyDataLiterals = {
    encryptPasswordAndCvv: (dataPassword, cvv) => {
        return {
            password: hash.encrypt(dataPassword),
            securityCode: hash.encrypt(cvv)
        }
    },
    decryptPasswordAndCvv: (dataPassword, cvv) => {
        return {
            password: hash.decrypt(dataPassword),
            securityCode: hash.decrypt(cvv)
        }
    },
    encryptPassword: (password) => {
        return hash.encrypt(password)
    },
    decryptPassword: (password) => {
        return hash.decrypt(password)
    },
    textUpper: (text) => {
        return text.toUpperCase()
    }
}