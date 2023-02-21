import {db} from '../connection'
import Usuario from '../models/usuario';

export const getUsuarios = async () => {
    return await db.query('SELECT * FROM USUARIO_SENHA');
}

export async function getUsuario(usuario: string, senha: string): Promise<Usuario[]> {
    return await db.any('SELECT * FROM USUARIO_SENHA WHERE USUARIO = $1 AND SENHA = $2', [usuario, senha])
}