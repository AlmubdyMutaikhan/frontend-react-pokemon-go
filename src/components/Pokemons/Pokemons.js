import { Suspense, useEffect, useState } from 'react';
import React from 'react'
import './Pokemons.css'
import Load from '../animations/loading/Load';

const Pokemon = React.lazy(()=> (import('../Pokemon/Pokemon')))

const Pokemons = () => {
    const [allPokemons, setAllPokemons] = useState([]);
    const [loadMoreURI, setLoadMoreURI] = useState('https://pokeapi.co/api/v2/pokemon?limit=25');
    const [page, setPage] = useState(1);

    const loadPokemons = async () => {
        console.log(loadMoreURI);
        if(loadMoreURI) {
            const res = await fetch(loadMoreURI);
            const data = await res.json();
            setLoadMoreURI(data.next);
            function makePokemonObjects(result) {
                result.forEach(async(pokemon) => {
                    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
                    const data = await res.json()
                    setAllPokemons(prevValue => [...prevValue, data])
                })
            }

            makePokemonObjects(data.results)
        } else {
            console.log("invalid URI to fetch data");
        }
        
    }

    useEffect(() => {
        loadPokemons()
        console.log("loading ")
    },[page])

    const handleScroll = (e) => {
        const {scrollTop, scrollHeight, clientHeight} = e.currentTarget;
        if(Math.ceil(scrollHeight - scrollTop) === clientHeight) {
            setPage(prev => prev + 1);
        }

    }

  
    return(<div className="pokemon-container">
            <h1>Pokemon section</h1>
            <div className="pokemons-container"  onScroll={handleScroll}>

            <Suspense fallback={<div className="load"><Load /></div>}>
                {allPokemons.map((val, id) => (
              <Pokemon
                                name={val.name}
                                img={val.sprites.other.dream_world.front_default}
                                key={id}
                            /> 
                ) ) }
                  </Suspense>
            </div>
            
    </div>)
}

export default Pokemons;