import { Note } from "../models/entity/note";
import NotesRepository from "../repositories/notesRepo";

class NoteService {
    static async getNotes(): Promise<Note[]> {
        let listNotes: Note[] = await NotesRepository.getNotes();
        return listNotes;
    }
}

export default NoteService;