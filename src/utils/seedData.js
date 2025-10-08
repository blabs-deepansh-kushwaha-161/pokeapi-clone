dotenv.config();
import axios from "axios";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Pokemon from "../models/pokemon.js";


const seedPokemons = async () => {
try{
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
    const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
    for (const item of data.results) {
        const res= await axios.get(item.url);
        const p = res.data;
        const pokemonData ={
            name: p.name,
            height: p.height,
            weight: p.weight,
            base_experience: p.base_experience,
            abilities: p.abilities.map(ab => ab.ability.name),
            types: p.types.map(t => t.type.name),
            stats: {
                hp: p.stats.find(s => s.stat.name === 'hp').base_stat,
                attack: p.stats.find(s => s.stat.name === 'attack').base_stat,
                defense: p.stats.find(s => s.stat.name === 'defense').base_stat,
                special_attack: p.stats.find(s => s.stat.name === 'special-attack').base_stat,
                special_defense: p.stats.find(s => s.stat.name === 'special-defense').base_stat,
                speed: p.stats.find(s => s.stat.name === 'speed').base_stat,
            },
            sprites: {
                front_default: p.sprites.front_default,
                back_default: p.sprites.back_default,
                front_shiny: p.sprites.front_shiny,
                back_shiny: p.sprites.back_shiny,
            }
        };
        const existingPokemon = await Pokemon.findOne({name: pokemonData.name});
        if (!existingPokemon) {
            const newPokemon = new Pokemon(pokemonData);
            await newPokemon.save();
            console.log(`Saved ${pokemonData.name}`);
        } else {
            console.log(`${pokemonData.name} already exists`);
        }
    }


    console.log("All Pokémon imported!");
    process.exit(0);
}catch(error){
    console.error("Error connecting to MongoDB:", error);
    return;

}

};

seedPokemons();