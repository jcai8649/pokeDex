import React from 'react';
import Card from './Card';
import './Cardlist.css'

const Cardlist = ({pokemons}) => {
    return (
        <div className="grid">
            {
            pokemons.map((pokemon, i) =>{
            return (<Card 
                 key={i}
                 name={pokemons[i].name}
                 url={pokemons[i].url}
                 />
                );
            })
            }
        </div>
    )
}

export default Cardlist;
