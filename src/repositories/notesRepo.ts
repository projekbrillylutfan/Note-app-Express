import { Note, NoteEntity } from "../models/entity/note";

class NotesRepository {
    static async getNotes(): Promise<Note[]> {
        const listNote = await NoteEntity.query();
        return listNote;
    }

    static async getNotesById(queryId: number): Promise<Note[]> {
        const listNoteById = await NoteEntity.query().where("id", queryId);
        return listNoteById;
    }

    static async createNote(note: Note): Promise<Note> {
        const createdNote = await NoteEntity.query().insert({
            title: note.title,
            content: note.content,
        });

        return createdNote;
    }
}

export default NotesRepository;