import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/pokemonsList.css";

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonImages, setPokemonImages] = useState({});

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.results);
        data.results.forEach((pokemon, index) => {
          fetch(`https://pokeapi.co/api/v2/pokemon/${index + 1}`)
            .then((response) => response.json())
            .then((data) => {
              setPokemonImages((prevImages) => ({
                ...prevImages,
                [index + 1]: data.sprites.front_default,
              }));
            });
        });
      })
      .catch((error) => console.error("Error fetching Pokémon:", error));
  }, []);

  return (
    <div className="container">
      <h2>Pokémon List</h2>
      <div className="pokemon-grid">
        {pokemons.map((pokemon, index) => (
          <div key={index} className="pokemon-card">
            <Link to={`/pokemon/${index + 1}`}>
              <img
                src={pokemonImages[index + 1]}
                alt={pokemon.name}
                className="pokemon-image"
              />
              <h3>{pokemon.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
