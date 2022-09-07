import { User } from "../interfaces/userInterface";
import * as userRepository from '../repositories/userRepository.js'
import * as errors from '../errors/errorsThrow.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export async function signUp(email: string, password: string) {
    const isUser: User = await userRepository.findByEmail(email)

    if(isUser) {
        throw errors.conflict('email is', 'registered!')
    }

    const encryptedPassword = bcrypt.hashSync(password, 10)

    await userRepository.insert({ email, password: encryptedPassword })
}

