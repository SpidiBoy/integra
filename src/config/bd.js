import pg from 'pg';

export const pool = new pg.Pool({
    user    : "postgres",
    host    : "localhost",
    database: "prue",
    password: "1234",
    port    : 5432
});