import express from 'express';
import controller from '../controllers/pokemon-controller';
const router = express.Router();

router.get('/pokemons', controller.getPokemons);
router.get('/pokemons/:id', controller.getPokemon);
router.put('/pokemons/:id', controller.updatePokemon);
router.delete('/pokemons/:id', controller.deletePokemon);
router.post('/pokemons', controller.addPokemon);

export = router;