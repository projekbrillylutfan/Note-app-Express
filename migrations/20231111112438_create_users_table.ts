import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("notes", function (table) {
    table.bigIncrements("id").primary();
    table.string("title").notNullable();
    table.string("content").notNullable();
    table.bigInteger("create_by");
    table.bigInteger("update_by");
    table.bigInteger("delete_by");
    table.timestamp("create_at").defaultTo(knex.fn.now());
    table.timestamp("update_at").defaultTo(knex.fn.now());
    table.timestamp("delete_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("notes");
}
