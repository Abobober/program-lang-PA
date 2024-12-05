import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import "../styles/pokemonPage.css"
import { getPokemonDetails } from "../ApiClient.js"

const PokemonPage = () => {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getPokemonDetails(id)
      .then(setPokemon)
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return <p>Loading Pokémon...</p>
  if (!pokemon) return <p>Error loading Pokémon.</p>

  return (
    <div className="pokemon-detail">
      <h2>{pokemon.name.toUpperCase()}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-image" />
      <div className="details">
        <p><strong>ID:</strong> {pokemon.id}</p>
        <p><strong>Height:</strong> {pokemon.height / 10} meters</p>
        <p><strong>Weight:</strong> {pokemon.weight / 10} kilograms</p>
        <p><strong>Types:</strong> {pokemon.types.map((type) => type.type.name).join(", ")}</p>
        <p><strong>Abilities:</strong> {pokemon.abilities.map((ability) => ability.ability.name).join(", ")}</p>
      </div>
    </div>
  )
}

export default PokemonPage;
