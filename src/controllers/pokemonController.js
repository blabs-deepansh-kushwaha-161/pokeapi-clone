import Pokemon from "../models/pokemon.js";


export const getAllPokemon = async (req ,res)=>{
     console.log("✅ GET /api/v1/pokemon endpoint was hit"); 
    try{
        const pokemons = await Pokemon.find().skip(0).limit(30);
        res.json(pokemons);
        console.log(pokemons)
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

export const getPokemonByName = async (req, res) => {
    try{
        const name = req.params.name.toLowerCase();
        let pokemon = await Pokemon.findOne({name})
        if (!pokemon) {
            return res.status(404).json({
                message: "Pokemon not found in the database"
            });
        }
        res.json(pokemon);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};
