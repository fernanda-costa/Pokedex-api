import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import* as pokemonService from '../services/usuario-service';

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

const getUsuario = async (req: Request, res: Response, next: NextFunction) => {
    let result: any = await pokemonService.getUsuario(req.body.usuario, req.body.senha);
    let posts: any = result?.[0];
    return res.status(200).json(result);
};



export default { getUsuarios, getUsuario };