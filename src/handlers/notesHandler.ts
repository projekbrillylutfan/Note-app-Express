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
              notes: notesList,
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
            notes: noteList,
          },
        };
        res.status(200).send(response);
      }
    }

    async createNote(req: Request, res: Response) {
      const payload: NoteRequest = req.body;
      
      if (!(payload.title && payload.content)) {
        const response: DefaultResponse = {
          status: "BAD_REQUEST",
          message: "Field Tidak Boleh Kosong",
          data: {
            created_note: null,
          },
        };
  
        return res.status(400).send(response); 
      } else {
        const createedNote: Note = await NoteService.createNote(payload);

        const response: DefaultResponse = {
          status: "CREATED",
          message: "Data Note Berhasil Ditambahkan",
          data: {
            created_note: createedNote,
          },
        };
    
        res.status(201).send(response); 
      }
    }

    async updateNoteById(req: Request, res: Response) {
      const queryId: number = parseInt(req.params.id);
      const payload: NoteRequest = req.body;

      if (!(payload.title && payload.title)) {
        const response: DefaultResponse = {
          status: "BAD_REQUEST",
          message: "Field Tidak Boleh Kosong",
          data: {
            updated_note: null,
          },
        };
        res.status(400).send(response);
      } else {
        const updateNote: Note | null = await NoteService.updateNoteById(queryId, payload);
        if (!updateNote) {
          const Response: DefaultResponse = {
            status: "ERROR",
            message: "Data Note Tidak Ditemukan",
            data: null,
          };
          return res.status(404).send(Response);
        } else {
          const response: DefaultResponse = {
            status: "UPDATED",
            message: "Data Note Berhasil Diupdate",
            data: {
              old_car: updateNote,
              updated_car: payload,
            },
          };
          res.status(200).send(response);
        }
      }
    }

    async deleteNoteById(req: Request, res: Response) {
      const queryId: number = parseInt(req.params.id);
      const deleteNote: Note | null = await NoteService.deleteNoteById(queryId);

      if (!deleteNote) {
        const Response: DefaultResponse = {
          status: "ERROR",
          message: "Data Note Tidak Ditemukan",
          data: null,
        };
        return res.status(404).send(Response);
      } else {
        const response: DefaultResponse = {
          status: "DELETED",
          message: "Data Note Berhasil Dihapus",
          data: {
            deleted_note: deleteNote,
          },
        };
    
        res.status(200).send(response);
      }
    }
}

export default NotesHandler;