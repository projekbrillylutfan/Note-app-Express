import { Model, ModelObject } from "objection";
import knexInstance from "../../../config/postgres";

export class NoteEntity extends Model {
  id?: bigint;
  title!: string;
  content!: string;

  static get tableName() {
    return "notes";
  }
}

Model.knex(knexInstance);

export type note = ModelObject<NoteEntity>;
