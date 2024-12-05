import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../styles/pokemonsList.css"
import { getPokemonList, getPokemonDetails } from "../ApiClient.js"

const PokemonList = () => {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    getPokemonList()
      .then((results) =>
        Promise.all(
          results.map((_, index) => getPokemonDetails(index + 1))
        )
      )
      .then(setPokemons)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [])

  if (loading) return <p>Loading Pokémon list...</p>

  return (
    <div className="container">
      <h2>Pokémon List</h2>
      <div className="pokemon-grid">
        {pokemons.map((pokemon) => (
          <div key={pokemon.id} className="pokemon-card">
            <Link to={`/pokemon/${pokemon.id}`}>
              <img
                src={pokemon.sprites.front_default}
                alt={pokemon.name}
                className="pokemon-image"
              />
              <h3>{pokemon.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PokemonList
