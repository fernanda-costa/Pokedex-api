export default class Pokemon {
    id: string;
    poke_nome: string;
    tipo: number;
    habilidades: string;
    usuario: string;
    foto: string;

    constructor(id: string, poke_nome: string, tipo: number, habilidades: string, usuario: string, foto: string,) {
        this.id = id;
        this.poke_nome = poke_nome;
        this.tipo = tipo;
        this.habilidades = habilidades;
        this.usuario = usuario;
        this.foto = foto;
    }
}