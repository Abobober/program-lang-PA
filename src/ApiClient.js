import axios from "axios"


const apiClient = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
  timeout: 10000
})

export const getPokemonList = async (limit = 100) => {
    const response = await apiClient.get(`pokemon?limit=${limit}`)
    return response.data.results
}

export const getPokemonDetails = async (id) => {
    const response = await apiClient.get(`pokemon/${id}`)
    return response.data
}

export default apiClient