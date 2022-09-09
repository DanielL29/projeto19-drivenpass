import { Note } from "@prisma/client";


export type NoteInsertData = Omit<Note, 'id' | 'createdAt' | 'userId'>