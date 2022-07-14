import React, { useState, useEffect } from 'react'
import { getAllPokemons } from './services/pokemon'
import './App.css'

function App() {
  const [pokemonData, setPokemonData] = useState([])
  const [nextUrl, setNextUrl] = useState('')
  const [prevUrl, setPrevUrl] = useState('')
  const [loading, setLoading] = useState(true)
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon'
  
  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemons(initialUrl);
      console.log(response)
      setNextUrl(response.next)
      setPrevUrl(reponse.previous)
      await loadingPokemon(response.results)
      setLoading(false)
    }
    fetchData();
  }, [])

  const loadingPokemon = async function (data) => {
    let ipokemon = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getAllPokemons(pokemon);
    }))
  }

  return (
    <div>
      { loading ? <h1>Loading ... </h1> : 
        <h1>Data is fetched</h1>
      }
    </div>
  )
}

export default App
