import { Note } from "@prisma/client";
import { Request, Response } from "express";
import * as noteService from '../services/noteService.js'
import { NoteInsertData } from "../types/noteTypes.js";

export async function create(req: Request, res: Response) {
    const note: NoteInsertData = req.body
    const userId: string = res.locals.userId

    await noteService.newNote(note, userId)

    res.sendStatus(201)
}

export async function getAll(_: Request, res: Response) {
    const userId: string = res.locals.userId

    const notes: Note[] = await noteService.allNotes(userId)

    res.status(200).send(notes)
}

export async function getById(req: Request, res: Response) {
    const userId: string = res.locals.userId
    const noteId: string = req.params.noteId

    const note: Note | null = await noteService.note(noteId, userId)

    res.status(200).send(note)
}

export async function remove(req: Request, res: Response) {
    const userId: string = res.locals.userId
    const noteId: string = req.params.noteId

    await noteService.removeNote(noteId, userId)

    res.sendStatus(200)
}