import express, { Application } from "express";
//import NoteHandler from "../src/handlers/notesHandler";

const app: Application = express();
const PORT: number = 8080;

app.use(express.json());

app.get("/api/notes", );
app.get("/api/notes/:id", );
app.post("/api/notes", );
app.put("/api/notes", );
app.delete("/api/notes", );

app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});