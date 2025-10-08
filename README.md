# PokeAPI Clone

A simple RESTful API for Pokémon data, built with Node.js, Express, and MongoDB.

## Features

- Get a list of Pokémon
- Get details of a Pokémon by name
- MongoDB database integration


## Project Structure

```
src/
  controllers/
    pokemonController.js
  models/
    pokemon.js
  routes/
    pokemonRoutes.js
  utils/
    seedData.js
  server.js
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 
- [MongoDB](https://www.mongodb.com/) 

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/blabs-deepansh-kushwaha-161/pokeapi-clone.git
   cd pokeapi-clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add:
   ```
   MONGO_URI=your_mongodb_connection_string
   PORT=8000 (port of your choice)
   ```

4. **Seed the database (optional):**
   If you have a seed script in `src/utils/seedData.js`, run it to populate your database.

5. **Start the server:**
   ```bash
   npm start
   ```
   or
   ```bash
   node src/server.js
   ```

## API Endpoints

### Base URL

```
http://localhost:8000/
```

### Endpoints

- **GET `/pokemon`**  
  Returns a list of Pokémon (default limit: 30).

- **GET `/pokemon/:name`**  
  Returns details for a specific Pokémon by name.

#### Example

```bash
curl 
curl http://localhost:8000/pokemon
curl http://localhost:8000/pokemon/pikachu
```

