import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import pokemonRoutes from './routes/pokemonRoutes.js';


const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the PokeAPI Clone');
});
app.use('/api/v2/pokemon', pokemonRoutes);

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