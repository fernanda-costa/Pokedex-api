import pgPromise from 'pg-promise';
const pg = pgPromise({});
export const db = pg("postgres://postgres:postgres@localhost:5432/pokedex");