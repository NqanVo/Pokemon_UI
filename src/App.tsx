import React, { useState, useEffect } from "react";
import axios from "axios";
import { Pokemon } from "./interface";
import PokeList from "./components/PokeList";

interface Pokemons {
  name: string;
  url: string;
}

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const getPokemon = async () => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`
      );
      res.data.results.map(async (pokemon: Pokemons) => {
        const poke = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        setPokemons((p) => [...p, poke.data]);
      });
    };
    getPokemon();
  }, []);

  return (
    <div className="bg-gradient-to-tr from-[#000000] via-[#150050] to-[#3F0071]">
      <div className="container mx-auto">
        <PokeList pokemons={pokemons}></PokeList>
      </div>
    </div>
  );
}

export default App;
