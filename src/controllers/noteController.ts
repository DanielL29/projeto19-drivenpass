import { Request, Response } from "express";
import { Note } from "../interfaces/noteInterface.js";
import * as noteService from '../services/noteService.js'
import { NoteInsertData } from "../types/noteTypes.js";

export async function create(req: Request, res: Response) {
    const note: NoteInsertData = req.body
    const userId: number = res.locals.userId

    await noteService.newNote(note, userId)
    
    res.sendStatus(201)
}

export async function getAll(_: Request, res: Response) {
    const userId: number = res.locals.userId

    const notes: Note[] = await noteService.allNotes(userId)

    res.status(200).send(notes)
}

export async function getById(req: Request, res: Response) {
    const userId: number = res.locals.userId
    const noteId: number = Number(req.params.noteId)

    const note: Note = await noteService.note(noteId, userId)

    res.status(200).send(note)
}