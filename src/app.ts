import express, { Application } from "express";
import NotesHandler from "./handlers/notesHandler";


const app: Application = express();
const PORT: number = 8080;

app.use(express.json());

const notesHandler = new NotesHandler();

// note routes

app.get("/api/notes", notesHandler.getNotes);
app.get("/api/notes/:id", notesHandler.getNotesById);
app.post("/api/notes", notesHandler.createNote);
app.put("/api/notes/:id", notesHandler.updateNoteById);
app.delete("/api/notes/:id", notesHandler.deleteNoteById);

// categories routes


// user routes

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});