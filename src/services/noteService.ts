import { NoteInsertData } from "../types/noteTypes.js";
import * as noteRepository from '../repositories/noteRepository.js'
import { Note } from "@prisma/client";
import { verifyData } from "../utils/verifyDataUtil.js";

export async function newNote(note: NoteInsertData, userId: string) {
    const isNote: Note = await noteRepository.findByTitleAndUserId(note.title, userId)

    verifyData.conflictDataExists(isNote, 'note title')

    await noteRepository.insert(note, userId)
}

export async function allNotes(userId: string): Promise<Note[]> {
    const notes: Note[] = await noteRepository.findAll(userId)

    return notes
}

async function findNoteAndOwnerOrError(noteId: string, userId: string): Promise<Note> {
    const isNote: Note = await noteRepository.findById(noteId)

    verifyData.foundData(isNote, 'note')
    verifyData.belongUser(isNote.userId, userId, 'note')

    return isNote
}

export async function note(noteId: string, userId: string): Promise<Note> {
    const note: Note = await findNoteAndOwnerOrError(noteId, userId)

    return note
}

export async function removeNote(noteId: string, userId: string) {
    await findNoteAndOwnerOrError(noteId, userId)

    await noteRepository.remove(noteId)
}