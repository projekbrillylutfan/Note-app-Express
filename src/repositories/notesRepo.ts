import { Note, NoteEntity } from "../models/entity/note";
import { NoteRequest } from "../models/dto/notes";

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
            createAt: note.createAt,
            updateAt: undefined,
        });

        return createdNote;
    }

    static async updateNoteById(queryId: number, note: NoteRequest): Promise<Note | null> {
        const updateNote = await NoteEntity.query().findById(queryId);

        if (updateNote) {
            await NoteEntity.query().findById(queryId).patch({
                title: note.title,
                content: note.content,
            });

            return updateNote;
        } else {
            return null;
        }
    }

    static async deleteNoteById(queryId: number): Promise<Note | null> {
        const deleteNote = await NoteEntity.query().findById(queryId);

        if (deleteNote) {
            await NoteEntity.query().findById(queryId).delete();
            return deleteNote;
        } else {
            return null;
        }
    }
}

export default NotesRepository;