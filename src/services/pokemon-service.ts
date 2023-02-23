import {db} from '../connection'

export const getPokemons = async (tipoFiltro?: any, valorFiltro?: any) => {
    if(tipoFiltro && tipoFiltro == "habilidade") {
        const query = `SELECT POKE_NOME FROM POKEMON WHERE habilidades LIKE $1`;
        return await db.query(query, [valorFiltro]);
    } 
    else if(tipoFiltro && tipoFiltro == "tipo") {
        console.log(tipoFiltro, valorFiltro)
        const query = `SELECT POKE_NOME FROM POKEMON WHERE tipo = $1`;
        return await db.query(query, [parseInt(valorFiltro)]);
    } 
    else {
        return await db.query('SELECT * FROM POKEMON');
    }
}

export const getPokemonById = async (nome: string) => {
    return await db.any('SELECT * FROM POKEMON WHERE poke_nome = $1', [nome])
}

export const addPokemon = async (pokemon: any) => {
    return await db.query("INSERT INTO POKEMON (poke_nome, usuario, tipo, habilidades) VALUES ($1, $2, $3, $4);", [pokemon.nome, pokemon.usuario, pokemon.tipo, pokemon.habilidades]);
}

export const deletePokemon = async (nome: string) => {
    return await db.query('DELETE FROM POKEMON WHERE poke_nome = $1', [nome]);
}

export const updatePokemon = async () => {
    return await db.query('UPDATE POKEMON (poke_nome, usuario, tipo, habilidades) VALUES ($1, $2, $3, $4);');
}

export const getPokemonsTotal = async () => {
    return await db.query('SELECT COUNT(*) AS TOTAL FROM POKEMON');
}

export const getPokemonsTopTipo = async () => {
    return await db.query('SELECT tipo, COUNT(*) AS total FROM POKEMON GROUP BY TIPO ORDER BY TOTAL LIMIT 5');
}

export const getPokemonsTopHabilidade = async () => {
    return await db.query('SELECT TIPO, COUNT(*) AS TOTAL FROM POKEMON GROUP BY TIPO ORDER BY TOTAL LIMIT 5');
}

export const getPokemonsTotalHabilidade = async () => {
    return await db.query('SELECT COUNT(*) AS total FROM POKEMON');
}
