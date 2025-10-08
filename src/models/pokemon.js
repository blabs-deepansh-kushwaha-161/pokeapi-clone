import mongoose from "mongoose";


const pokemonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    base_experience: {
        type: Number,
        required: true
    },
    abilities: {
        type: [String],
        required: true
    },
    types: {
        type: [String],
        required: true
    },
    stats: {
        hp: { type: Number, required: true },
        attack: { type: Number, required: true },
        defense: { type: Number, required: true },
        special_attack: { type: Number, required: true },
        special_defense: { type: Number, required: true },
        speed: { type: Number, required: true }
    },
    sprites: {
        front_default: { type: String, required: true },
        back_default: { type: String, required: true },
        front_shiny: { type: String, required: true },
        back_shiny: { type: String, required: true }
    }
}, { timestamps: true });

export default mongoose.model("Pokemon", pokemonSchema);