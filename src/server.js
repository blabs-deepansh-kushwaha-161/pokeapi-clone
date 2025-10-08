import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import pokemonRoutes from './routes/pokemonRoutes.js';

dotenv.config();

const app = express();
// app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the PokeAPI Clone');
});
app.use(pokemonRoutes);


const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI).then(()=>{
    console.log('Connected to MongoDB');
    app.listen(PORT, ()=>{
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((error)=>{
    console.log('Error connecting to MongoDB:', error.message);
});