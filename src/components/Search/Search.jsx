import { useState } from 'react';
import './Search.css';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Load from '../animations/loading/Load';
import data from './data/pokemonNames.json';

const Search = () => {
  const [pokemon, setPokemon] = useState('');
  const [redirect, setRedirect] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);
  const [suggestionArray, setSuggestionArray] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((res) => {
        setRedirect(true);
        setLoading(false);
      })
      .catch((err) => {
        setRedirect(false);
        setLoading(false);
        setNotFound(true);

        setTimeout(() => {
          setNotFound(false);
        }, 3000);
      });
  };

  const handleChange = (e) => {};

  const handleKeyPress = (e) => {
    const pokemonsNames = data.pokemons; // array
    let pokemon = e.target.value.trim();
    let tempSuggestionArray = []; // result show to the display
    if (pokemon) {
      setPokemon(pokemon);
      tempSuggestionArray = pokemonsNames.filter((pokemonName) => {
        return pokemonName
          .toLocaleLowerCase()
          .startsWith(pokemon.toLocaleLowerCase());
      });
    }

    tempSuggestionArray = tempSuggestionArray.map((value) => {
      return (
        <NavLink to={`/pokemons/${value}`} className="item">
          {value}
        </NavLink>
      );
    });
    setSuggestionArray(tempSuggestionArray);
  };

  return (
    <div className="search-container">
      {loading && (
        <div className="center">
          <Load />
        </div>
      )}
      {notFound && <h1 className="center">Not found</h1>}

      <div className="form">
        <h1>Search your pokemon</h1>
        <input
          type="text"
          onChange={handleKeyPress}
          placeholder={`Type pokemon name`}
        />
        <button onClick={handleSubmit}>Find</button>
      </div>

      <div className="suggestion">
        {suggestionArray.length > 0 && <h1>Search results</h1>}
        {suggestionArray}
      </div>
    </div>
  );
};

export default Search;
