import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('categories', function(table) {
        table.bigIncrements('_id').primary();
        table.string('name').notNullable();
        table.bigInteger('id_note');
      });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('categories');
}

