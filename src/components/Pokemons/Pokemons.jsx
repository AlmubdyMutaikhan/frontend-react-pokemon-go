// displays pokemons name
import { useCallback, useEffect, useRef, useState } from 'react';
import useGetPokemons from './hooks/useLoadPokemon';
import Load from '../animations/loading/Load';
import './Pokemons.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Tilt from 'react-vanilla-tilt';
import { NavLink } from 'react-router-dom';

const Pokemons = (props) => {
  const [loadedPokemons, setLoadedPokemons] = useState(8);
  const { pokemons, loading, hasMore, totalCount } =
    useGetPokemons(loadedPokemons);
  const [isOpen, setIsOpen] = useState(false);
  const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
  };

  const color = colors[0];

  useEffect(() => {
    console.log('loading pokemons');
  }, [loadedPokemons]);

  const observer = useRef();

  const refLoad = useCallback((node) => {
    if (loading) {
      return;
    }

    if (observer.current) {
      observer.current.disconnect();
    }

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        setLoadedPokemons(totalCount + 1);
        props.setCount(totalCount);
      }
    });

    if (node) {
      observer.current.observe(node);
    }
  });

  return (
    <div className="pokemons-container">
      <div className="load"> {loading && <Load />} </div>
      <div className="sub-container">
        {pokemons.map((val, id) => {
          if (id === pokemons.length - 1) {
            return (
              <div key={id} ref={refLoad} className="card">
                <div className="face">
                  <p>{val.name}</p>
                  <LazyLoadImage
                    alt={val.name}
                    src={
                      val.sprites.other.dream_world.front_default
                        ? val.sprites.other.dream_world.front_default
                        : 'https://vistapointe.net/images/unknown-2.jpg'
                    }
                    effect="opacity"
                  />
                </div>
                <div className="content">
                  <h2>01</h2>
                  <h3>Card one</h3>
                  <p></p>
                  <a href="#">read more</a>
                </div>
              </div>
            );
          } else {
            return (
              <Tilt
                key={id}
                style={{
                  background: colors[`${val.types[0].type.name}`],
                  borderRadius: '2rem',
                }}
                options={{ speed: 1000, max: 35, scale: 3 }}
              >
                <div className="card">
                  <div className="face">
                    <p>{val.name}</p>
                    <LazyLoadImage
                      alt={val.name}
                      src={
                        val.sprites.other.dream_world.front_default
                          ? val.sprites.other.dream_world.front_default
                          : 'https://vistapointe.net/images/unknown-2.jpg'
                      }
                      effect="opacity"
                    />
                  </div>

                  <div className="content">
                    <h3>Name: {val.name}</h3>
                    <br />
                    <h4>#{val.id}</h4>
                    <p>Type:{val.types[0].type.name}</p>
                    <NavLink to={`pokemons/${val.name}`} className="btn">
                      Discover
                    </NavLink>
                  </div>
                </div>
              </Tilt>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Pokemons;
