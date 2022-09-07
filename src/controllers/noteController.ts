import { Request, Response } from "express";
import * as noteService from '../services/noteService.js'
import { NoteInsertData } from "../types/noteTypes.js";

export async function create(req: Request, res: Response) {
    const note: NoteInsertData = req.body
    const userId: number = res.locals.userId

    await noteService.newNote(note, userId)
    
    res.sendStatus(201)
}