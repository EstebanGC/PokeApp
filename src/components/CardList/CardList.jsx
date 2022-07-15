import React, { useState, useEffect } from 'react'
import { getAllPokemons, getPokemon } from '../../services/pokemon'
import Card from '../Card/Card'

function CardList() {


  const [pokemonData, setPokemonData] = useState([])
  const [nextUrl, setNextUrl] = useState('')
  const [prevUrl, setPrevUrl] = useState('')
  const [loading, setLoading] = useState(true)
  const initialUrl = "https://pokeapi.co/api/v2/pokemon?offset=40&limit=50"
  

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemons(initialUrl);
      console.log(response)
      setNextUrl(response.next)
      setPrevUrl(response.previous)
      await loadPokemon(response.results)
      setLoading(false)
    }
    fetchData();
  }, [])

  const next = async () => {
    setLoading(true)
    let data = await getAllPokemons(nextUrl)
    await loadPokemon(data.results)
    setNextUrl(data.next)
    setPrevUrl(data.previous)
    setLoading(false)
  }

  const prev = async () => {
    if(!prevUrl) 
    return
    setLoading(true)
    let data = await getAllPokemons(prevUrl)
    await loadPokemon(data.results)
    setNextUrl(data.next)
    setPrevUrl(data.previous)
    setLoading(false)
  }
 
  const loadPokemon = async (data) => {
    let iPokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url)
      return pokemonRecord
    }))
    setPokemonData(iPokemonData)
  }

  console.log(pokemonData)
    return (
        <div>
      { loading ? <h1>Loading ... </h1> : (
        <>
        <div className='btn'>
          <button onClick={prev}>Prev</button>
          <button onClick={next}>Next</button>
        </div>
        <div className='grid-container'>
          {pokemonData.map((pokemon,index) => {
            return <Card key={index} pokemon={pokemon}/>
          })}
        </div>
        <button onClick={prev}>Prev</button>
        <button onClick={next}>Next</button>
        </>
      )}
    </div>
    )
}

export default CardList