import * as userRepository from '../repositories/userRepository.js'
import jwt from 'jsonwebtoken'
import { User } from '@prisma/client'
import { verifyData } from '../utils/verifyDataUtil.js'
import { hash } from '../utils/hashUtils.js'
import { UserInsertData } from '../types/userTypes.js'

export async function signUp(user: UserInsertData) {
    const isUser: User | null = await userRepository.findByEmail(user.email)

    verifyData.conflictDataExists(isUser, 'email')
    const password: string = hash.hashSync(user.password)

    await userRepository.insert({ ...user, password })
}

export async function signIn(user: UserInsertData): Promise<string> {
    const isUser: User | null = await userRepository.findByEmail(user.email)
    const secretKey: string | undefined = process.env.SECRET_KEY

    verifyData.foundData(isUser, 'user')
    hash.compareSync(user.password, isUser!.password)

    const token = jwt.sign({ id: isUser!.id, email: isUser!.email }, secretKey!, { expiresIn: '1h' })

    return token
}