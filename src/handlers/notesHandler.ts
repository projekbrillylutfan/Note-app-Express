import {Request, Response} from "express";
import { DefaultResponse } from "../models/dto/default";
import { Note } from "../models/entity/note";
import { NoteRequest } from "../models/dto/notes";
import NoteService from "../service/notesService";


class NotesHandler {
    async getNotes(Req: Request, res: Response) {
        const notesList: Note[] = await NoteService.getNotes();

        const response: DefaultResponse = {
            status: "OK",
            message: "Sukses Menampilkan Data Mobil",
            data: {
              cars: notesList,
            },
          };
      
          res.status(200).send(response);
    }
}

export default NotesHandler;