import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("notes", function (table) {
        table.bigIncrements("id").primary();
        table.string("title").notNullable();
        table.string("content").notNullable();
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("notes");
}

