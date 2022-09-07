import { prisma } from "../database/db.js";
import { Note } from "../interfaces/noteInterface.js";
import { NoteInsertData } from "../types/noteTypes.js";

export async function findByTitleAndUserId(title: string, userId: number): Promise<Note> {
    const note: Note = await prisma.notes.findUnique({ 
        where: { 
            title_userId: { 
                title, 
                userId 
            } 
        } 
    })

    return note
}

export async function insert(note: NoteInsertData) {
    await prisma.notes.create({ data: note })
}

export async function findAll(userId: number): Promise<Note[]> {
    const notes: Note[] = await prisma.notes.findMany({ where: { userId } })

    return notes
}

export async function findById(id: number): Promise<Note> {
    const note: Note = await prisma.notes.findUnique({ where: { id } })

    return note
}   

export async function remove(id: number) {
    await prisma.notes.delete({ where: { id } })
}