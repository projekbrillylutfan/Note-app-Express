import knex from "knex";

const knexInstance = knex({
    client: "postgresql",
    connection: {
        database: "note_app",
        user: "postgres",
        password: "admin",
    }
});

export default knexInstance;