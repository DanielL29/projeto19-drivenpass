import { Note } from "@prisma/client";
import { prisma } from "../database/db.js";
import { NoteInsertData } from "../types/noteTypes.js";

export async function findByTitleAndUserId(title: string, userId: string): Promise<Note> {
    const note: Note = await prisma.note.findUnique({
        where: {
            title_userId: {
                title,
                userId
            }
        }
    })

    return note
}

export async function insert(note: NoteInsertData, userId: string) {
    await prisma.note.create({ data: { ...note, userId } })
}

export async function findAll(userId: string): Promise<Note[]> {
    const notes: Note[] = await prisma.note.findMany({ where: { userId } })

    return notes
}

export async function findById(id: string): Promise<Note> {
    const note: Note = await prisma.note.findUnique({ where: { id } })

    return note
}

export async function remove(id: string) {
    await prisma.note.delete({ where: { id } })
}