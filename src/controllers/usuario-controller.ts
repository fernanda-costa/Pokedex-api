import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import* as pokemonService from '../services/usuario-service';
import Usuario from '../models/usuario';

interface Post {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}

const getUsuarios = async (req: Request, res: Response, next: NextFunction) => {
    let result: any = await pokemonService.getUsuarios();
    let posts: any = result;
    return res.status(200).json(result);
};

const login = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.body);
    let result: Usuario[] = await pokemonService.getUsuario(req.body.usuario, req.body.senha);
    let loginSuccesseful: boolean = result?.length > 0;
    return res.status(200).json({ loginSuccesseful });
};


export default { getUsuarios, login };