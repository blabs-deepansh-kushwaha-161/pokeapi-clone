import express from 'express';
import {getAllPokemon,getPokemonByName} from '../controllers/pokemonController.js';
  

const router = express.Router();

router.get('/pokemon', getAllPokemon)
router.get('/pokemon/:name', getPokemonByName); 

export default router;