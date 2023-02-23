import { Request, Response, NextFunction } from 'express';
import * as pokemonService from '../services/pokemon-service';
import Pokemon from '../models/pokemon';


const getPokemons = async (req: Request, res: Response, next: NextFunction) => {
    const tipoFiltro = req.query.filtro;
    const valorFiltro = req.query.valor;
    let result: Pokemon[] = await pokemonService.getPokemons(tipoFiltro, valorFiltro);
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

const getPokemonsTotal = async (req: Request, res: Response, next: NextFunction) => {
    let result: any[] = await pokemonService.getPokemonsTotal();
    const total =  result?.[0]?.total || 0; 
    return res.status(200).json({"total": total });
};

const getPokemonsTopTipos = async (req: Request, res: Response, next: NextFunction) => {
    let result: Pokemon[] = await pokemonService.getPokemonsTopTipo();
    return res.status(200).json(result);
};

const getPokemonsTopHabilidades = async (req: Request, res: Response, next: NextFunction) => {
    let result: Pokemon[] = await pokemonService.getPokemonsTopHabilidade();
    return res.status(200).json(result);
};

export default { getPokemons, getPokemon, updatePokemon, deletePokemon, addPokemon, getPokemonsTotal, getPokemonsTopTipos, getPokemonsTopHabilidades };