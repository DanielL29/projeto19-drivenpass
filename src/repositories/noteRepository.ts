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