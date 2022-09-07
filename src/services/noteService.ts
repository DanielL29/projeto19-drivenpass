import { Note } from "../interfaces/noteInterface.js";
import { NoteInsertData } from "../types/noteTypes.js";
import * as noteRepository from '../repositories/noteRepository.js'
import * as errors from '../errors/errorsThrow.js'

export async function newNote(note: NoteInsertData, userId: number) {
    const isNote: Note = await noteRepository.findByTitleAndUserId(note.title, userId)

    if(isNote) {
        throw errors.conflict('note is', 'registered')
    }

    note.userId = userId

    await noteRepository.insert(note)
}

export async function allNotes(userId: number): Promise<Note[]> {
    const notes: Note[] = await noteRepository.findAll(userId)

    return notes
}

async function findNoteAndOwnerOrError(noteId: number, userId: number): Promise<Note> {
    const isNote: Note = await noteRepository.findById(noteId)

    if(!isNote) {
        throw errors.notFound('note', 'notes')
    }

    if(isNote.userId !== userId) {
        throw errors.badRequest("This note doesn't belong to you")
    }

    return isNote
}

export async function note(noteId: number, userId: number): Promise<Note> {
    const note: Note = await findNoteAndOwnerOrError(noteId, userId)

    return note
}

export async function removeNote(noteId: number, userId: number) {
    await findNoteAndOwnerOrError(noteId, userId)

    await noteRepository.remove(noteId)
}