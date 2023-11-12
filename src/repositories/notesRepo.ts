import { Note, NoteEntity } from "../models/entity/note";

class NotesRepository {
    static async getNotes(): Promise<Note[]> {
        const listNote = await NoteEntity.query();
        return listNote;
    }
}

export default NotesRepository;