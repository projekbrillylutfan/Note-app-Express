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

    async getNotesById(req: Request, res: Response) {
      const queryId: number = parseInt(req.params.id);

      const noteList: Note[] = await NoteService.getNotesById(queryId);

      if (noteList.length === 0) {
        const Response: DefaultResponse = {
          status: "ERROR",
          message: "Data Note Tidak Ditemukan",
          data: null,
        };
        return res.status(404).send(Response);
      } else {
        const response: DefaultResponse = {
          status: "OK",
          message: "Sukses Menampilkan Data Note",
          data: {
            cars: noteList,
          },
        };
        res.status(200).send(response);
      }
    }
}

export default NotesHandler;