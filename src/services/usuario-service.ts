import {db} from '../connection'

export const getUsuarios = async () => {
    return await db.query('SELECT * FROM USUARIO_SENHA');
}

export async function getUsuario(usuario: string, senha: string) {
    return await db.any('SELECT * FROM USUARIO_SENHA WHERE USUARIO = $1 AND SENHA = $2', [usuario, senha])
}