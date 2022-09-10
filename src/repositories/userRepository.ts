import { User } from "@prisma/client";
import { prisma } from "../database/db.js";
import { UserInsertData } from "../types/userTypes.js";

export async function findByEmail(email: string): Promise<User | null> {
    const user: User | null = await prisma.user.findUnique({ where: { email } })

    return user
}

export async function insert(user: UserInsertData) {
    await prisma.user.create({ data: user })
}