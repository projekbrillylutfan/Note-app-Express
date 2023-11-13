import express, { Application } from "express";
import NotesHandler from "./handlers/notesHandler";


const app: Application = express();
const PORT: number = 8080;

app.use(express.json());

const notesHandler = new NotesHandler();

app.get("/api/notes", notesHandler.getNotes);
app.get("/api/notes/:id", notesHandler.getNotesById);
app.post("/api/notes", );
app.put("/api/notes", );
app.delete("/api/notes", );

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});