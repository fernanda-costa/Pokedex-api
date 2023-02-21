import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';
import * as pokemonService from '../services/pokemon-service';
import Pokemon from '../models/pokemon';


const getPokemons = async (req: Request, res: Response, next: NextFunction) => {
    let result: Pokemon[] = await pokemonService.getPokemons();
    return res.status(200).json(result);
};

const getPokemonsDashboard = async (req: Request, res: Response, next: NextFunction) => {
    let result: Pokemon[] = await pokemonService.getPokemonsDashboard();
    return res.status(200).json(result);
};


const getPokemon = async (req: Request, res: Response, next: NextFunction) => {
    let id: string = req.params.id;
    let result: any = await pokemonService.getPokemonById(id);
    let post: Pokemon = result?.[0];
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