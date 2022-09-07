import { prisma } from "../database/db.js";
import { User } from "../interfaces/userInterface.js";
import { UserInsertData } from "../types/userTypes.js";

export async function findByEmail(email: string): Promise<User | null> {
    const user: User = await prisma.users.findUnique({ where: { email } })

    return user
}

export async function insert(user: UserInsertData) {
    await prisma.users.create({ data: user })
}