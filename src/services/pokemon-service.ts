import {db} from '../connection'

export const getPokemons = async () => {
    return await db.query('SELECT * FROM POKEMON');
}

export const getPokemonById = async (nome: string) => {
    return await db.any('SELECT * FROM POKEMON WHERE poke_nome = $1', [nome])
}

export const addPokemon = async (pokemon: any) => {
    return await db.query("INSERT INTO POKEMON (tipo, usuario, tipo, habilidades) VALUES ($1, $2, $3, $4);", [pokemon.nome, pokemon.usuario, pokemon.tipo, pokemon.habilidades]);
}

export const deletePokemon = async (nome: string) => {
    return await db.query('DELETE FROM POKEMON WHERE poke_nome = $1', [nome]);
}

export const updatePokemon = async () => {
    return await db.query('UPDATE POKEMON (poke_nome, usuario, tipo, habilidades) VALUES ($1, $2, $3, $4);');
}

export const  getPokemonsDashboard = async () => {
    return await db.query('SELECT * FROM POKEMON');
}
