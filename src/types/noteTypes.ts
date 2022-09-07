import { Note } from "../interfaces/noteInterface.js";

export type NoteInsertData = Omit<Note, 'id'>