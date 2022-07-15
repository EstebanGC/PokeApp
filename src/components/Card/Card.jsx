import React from 'react'
import typeColors from '../helpers/typeColors'
import './style.css'
import {useParams, NavLink} from 'react-router-dom'

function Card({ pokemon }) {

    return (
        
        <div className="Card">
            <div className="Card_img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Card_name">
            <NavLink to={`/pokemonstats/${pokemon.name}`}>
                {pokemon.name}
            </NavLink>
            </div>
            <div className="Card_types">
                {
                    pokemon.types.map(type => {
                        return (
                            <div className="Card_type" style={{ backgroundColor: typeColors[type.type.name] }}>
                                {type.type.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className="Card_info">
            <div className="Card_data Card_data--ability">
                    <p className="title">Ability</p>
                    <p className="title2">{pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>
        
    )
}

export default Card