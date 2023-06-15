import { useEffect, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import './Pokemon.css';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Pokemon = () => {
  const params = useParams();
  const [pokemonData, setPokemonData] = useState([]);
  const [jsonData, setJsonData] = useState('');
  const myJsonToString = (obj) => {
    if (!obj) {
      return '';
    }

    let res = '';
    const params = Object.keys(obj);

    params.forEach((param) => {
      const data = obj[`${param}`];
      const type = typeof data;

      if (type === 'object') {
        if (
          !(
            param === 'moves' ||
            param === 'game_indices' ||
            param === 'sprites'
          )
        ) {
          if (!Array.isArray(data)) {
            res += myJsonToString(data);
          } else {
            res += param + ':\n \t';
            data.forEach((attr) => {
              if (typeof attr !== 'object') {
                res += `${attr}: ${data[attr]}`;
              } else {
                if (!Array.isArray(attr)) {
                  res += myJsonToString(attr);
                }
              }
            });
          }
        }
      } else {
        res += `${param}: ${data}\n`;
      }
    });

    return res;
  };

  const splitPokemonData = (pokemon) => {
    const resData = myJsonToString(pokemon);
    setJsonData(resData);
  };

  const loadData = async (name) => {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + name);
    const data = await res.json();
    setPokemonData(data);
    splitPokemonData(data);
  };

  useEffect(() => {
    loadData(params.name);
  }, []);

  return (
    <>
      <Navbar />
      <div className="pokemon-container">
        <div className="basic-info">
          <img
            alt={pokemonData.name}
            src={
              pokemonData.sprites &&
              pokemonData.sprites.other.dream_world.front_default
                ? pokemonData.sprites.other.dream_world.front_default
                : 'https://vistapointe.net/images/unknown-2.jpg'
            }
          />
          <h1>{pokemonData.name}</h1>
        </div>
        <div className="additional-info">
          <h3 style={{ color: 'white' }}>Additional data</h3>
          <pre>{jsonData}</pre>
        </div>
      </div>
    </>
  );
};

export default Pokemon;
