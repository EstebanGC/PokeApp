import React, { useEffect, useState } from "react";
import {useParams, Link} from 'react-router-dom'
import {getPokemon} from '../../services/pokemon'
import typeColors from '../helpers/typeColors'

function Pokemon() {

    const {pokemonId} = useParams()
    const [pokemonData, setPokemonData] = useState([])
    const [loading, setLoading] = useState(true)
    const initialUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`

    useEffect(() => {
        async function fetchData() {
            let response = await getPokemon(initialUrl);
            console.log(response)
            setPokemonData(response)
            setLoading(false)
          }
          fetchData();
        }, [pokemonId])

        console.log(pokemonId)
        console.log(pokemonData)
    
    return(
        <div>
        {loading ?<h1>Loading ...</h1>:
    
        <div className="Card">
            <div className="Card_img">
                <img src={pokemonData.sprites.front_default} alt="" />
            </div>
            <div className="Card_name">
                {pokemonData.name}
            </div>
            <div className="Card_types">
                {
                    pokemonData.types.map(type => {
                        return (
                            <div className="Card_type" style={{ backgroundColor: typeColors[type.type.name] }}>
                                {type.type.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className="Card_info">
                <div className="Card_data Card_data--weight">
                    <p className="title">Weight</p>
                    <p className="title2">{pokemonData.weight}</p>
                </div>
                <div className="Card_data Card_data--weight">
                    <p className="title">Height</p>
                    <p className="title2">{pokemonData.height}</p>
                </div>
                <div className="Card_data Card_data--ability">
                    <p className="title">Ability</p>
                    <p className="title2">{pokemonData.abilities[0].ability.name}</p>
                </div>
            </div>
        <Link className='btn' to={`/`}><button>Back</button></Link>
        </div>}</div>

    )
}

export default Pokemon