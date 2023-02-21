import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import * as pokemonService from '../services/pokemon-service';

interface Post {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}

const getPokemons = async (req: Request, res: Response, next: NextFunction) => {
    let result: any = await pokemonService.getPokemons();
    let posts: any = result;
    return res.status(200).json(result);
};

const getPokemon = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    let result: any = await pokemonService.getPokemonById(id);
    let post: Post = result.data;
    return res.status(200).json({
        message: post
    });
};

const updatePokemon = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    let title: string = req.body.title ?? null;
    let body: string = req.body.body ?? null;
    let result: any = await pokemonService.updatePokemon();
    return res.status(200).json({
        result
    });
};

const deletePokemon = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    let result: any = await pokemonService.deletePokemon(id);
    return res.status(200).json({
        message: 'post deleted successfully'
    });
};

const addPokemon = async (req: Request, res: Response, next: NextFunction) => {
    let body: string = req.body;
    console.log(body);
    let result: any = await pokemonService.addPokemon(body);

    return res.status(200).json({
        result
    });
};

export default { getPokemons, getPokemon, updatePokemon, deletePokemon, addPokemon };