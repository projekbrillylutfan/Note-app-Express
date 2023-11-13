import { NoteRequest } from "../models/dto/notes";
import { Note } from "../models/entity/note";
import NotesRepository from "../repositories/notesRepo";

class NoteService {
    static async getNotes(): Promise<Note[]> {
        let listNotes: Note[] = await NotesRepository.getNotes();
        return listNotes;
    }

    static async getNotesById(queryId: number): Promise<Note[]> {
        const listNote = await NotesRepository.getNotesById(queryId);
        return listNote;
    }

    static async createNote(note: NoteRequest): Promise<Note> {
        const noteToCreate: Note = {
            title: note.title,
            content: note.content,
        };

        const createdNote = await NotesRepository.createNote(noteToCreate);

        return createdNote;
    }
}

export default NoteService;