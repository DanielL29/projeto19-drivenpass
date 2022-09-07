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